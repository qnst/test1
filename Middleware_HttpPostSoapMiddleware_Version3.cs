using System.Text;
using System.Text.Json;
using System.Reflection;
using System.ServiceModel;

namespace WebServiceIntegration.Middleware
{
    public class HttpPostSoapMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<HttpPostSoapMiddleware> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly Dictionary<string, MethodInfo> _operationMethods;

        public HttpPostSoapMiddleware(RequestDelegate next, ILogger<HttpPostSoapMiddleware> logger, IServiceProvider serviceProvider)
        {
            _next = next;
            _logger = logger;
            _serviceProvider = serviceProvider;
            _operationMethods = DiscoverOperationMethods();
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Only handle POST requests to the SOAP endpoint with form content types
            if (context.Request.Method == "POST" && 
                context.Request.Path.StartsWithSegments("/WebService.asmx") &&
                (context.Request.ContentType?.Contains("application/x-www-form-urlencoded") == true ||
                 context.Request.ContentType?.Contains("multipart/form-data") == true))
            {
                try
                {
                    await HandleHttpPostRequest(context);
                    return;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error processing HTTP POST request");
                    await WriteErrorResponse(context, "Internal server error", 500);
                    return;
                }
            }

            await _next(context);
        }

        private async Task HandleHttpPostRequest(HttpContext context)
        {
            // Extract method name from query string or form data
            var methodName = context.Request.Query["method"].FirstOrDefault() ?? 
                            context.Request.Query["action"].FirstOrDefault();

            if (string.IsNullOrEmpty(methodName))
            {
                // Try to extract from SOAPAction header if present
                var soapAction = context.Request.Headers["SOAPAction"].FirstOrDefault();
                if (!string.IsNullOrEmpty(soapAction))
                {
                    methodName = ExtractMethodFromSoapAction(soapAction);
                }
            }

            if (string.IsNullOrEmpty(methodName))
            {
                await WriteErrorResponse(context, "Method name not specified. Use ?method=MethodName or SOAPAction header", 400);
                return;
            }

            if (!_operationMethods.TryGetValue(methodName, out var methodInfo))
            {
                await WriteErrorResponse(context, $"Method '{methodName}' not found", 404);
                return;
            }

            // Extract and convert parameters
            var parameters = await ExtractParametersFromForm(context.Request, methodInfo);
            
            // Get service instance and invoke method
            var serviceType = methodInfo.DeclaringType;
            var serviceInstance = _serviceProvider.GetRequiredService(serviceType);
            
            var result = methodInfo.Invoke(serviceInstance, parameters);
            
            await WriteJsonResponse(context, result);
        }

        private async Task<object[]> ExtractParametersFromForm(HttpRequest request, MethodInfo methodInfo)
        {
            var parameters = methodInfo.GetParameters();
            var values = new object[parameters.Length];

            if (request.ContentType?.Contains("multipart/form-data") == true)
            {
                var form = await request.ReadFormAsync();
                
                for (int i = 0; i < parameters.Length; i++)
                {
                    var param = parameters[i];
                    values[i] = await ExtractParameterValue(param, form, form.Files);
                }
            }
            else if (request.ContentType?.Contains("application/x-www-form-urlencoded") == true)
            {
                var form = await request.ReadFormAsync();
                
                for (int i = 0; i < parameters.Length; i++)
                {
                    var param = parameters[i];
                    values[i] = await ExtractParameterValue(param, form, null);
                }
            }

            return values;
        }

        private async Task<object> ExtractParameterValue(ParameterInfo param, IFormCollection form, IFormFileCollection files)
        {
            var paramName = param.Name;
            
            if (param.ParameterType == typeof(byte[]))
            {
                return await ExtractByteArrayParameter(paramName, form, files);
            }
            else if (param.ParameterType == typeof(string))
            {
                return form[paramName].FirstOrDefault() ?? string.Empty;
            }
            else if (param.ParameterType == typeof(int))
            {
                var value = form[paramName].FirstOrDefault();
                return int.TryParse(value, out var intResult) ? intResult : 0;
            }
            else if (param.ParameterType == typeof(bool))
            {
                var value = form[paramName].FirstOrDefault();
                return bool.TryParse(value, out var boolResult) ? boolResult : false;
            }
            
            // Default case - try to get as string
            return form[paramName].FirstOrDefault() ?? string.Empty;
        }

        private async Task<byte[]> ExtractByteArrayParameter(string paramName, IFormCollection form, IFormFileCollection files)
        {
            // First try to get as file upload
            if (files != null)
            {
                var file = files.FirstOrDefault(f => f.Name == paramName);
                if (file != null && file.Length > 0)
                {
                    using var memoryStream = new MemoryStream();
                    await file.CopyToAsync(memoryStream);
                    return memoryStream.ToArray();
                }
            }

            // Try to get as form field (base64 or plain text)
            var formValue = form[paramName].FirstOrDefault();
            if (!string.IsNullOrEmpty(formValue))
            {
                return ConvertStringToByteArray(formValue);
            }

            return new byte[0];
        }

        private byte[] ConvertStringToByteArray(string value)
        {
            if (string.IsNullOrEmpty(value))
                return new byte[0];

            try
            {
                // Try to decode as base64 first
                if (IsBase64String(value))
                {
                    return Convert.FromBase64String(value);
                }
                
                // If not base64, convert string to bytes
                return Encoding.UTF8.GetBytes(value);
            }
            catch (Exception)
            {
                // Fallback to UTF8 bytes
                return Encoding.UTF8.GetBytes(value);
            }
        }

        private bool IsBase64String(string value)
        {
            try
            {
                // Basic check for base64 format
                if (string.IsNullOrEmpty(value) || value.Length % 4 != 0)
                    return false;

                // Try to decode
                Convert.FromBase64String(value);
                return true;
            }
            catch
            {
                return false;
            }
        }

        private Dictionary<string, MethodInfo> DiscoverOperationMethods()
        {
            var methods = new Dictionary<string, MethodInfo>();
            
            try
            {
                // Find all service contracts
                var serviceContracts = AppDomain.CurrentDomain.GetAssemblies()
                    .SelectMany(a => a.GetTypes())
                    .Where(t => t.IsInterface && t.GetCustomAttribute<ServiceContractAttribute>() != null);

                foreach (var contract in serviceContracts)
                {
                    var operationMethods = contract.GetMethods()
                        .Where(m => m.GetCustomAttribute<OperationContractAttribute>() != null);

                    foreach (var method in operationMethods)
                    {
                        methods[method.Name] = method;
                        _logger.LogInformation($"Discovered operation method: {method.Name}");
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error discovering operation methods");
            }

            return methods;
        }

        private string ExtractMethodFromSoapAction(string soapAction)
        {
            // Extract method name from SOAPAction header
            // Example: "http://tempuri.org/TestMoss" -> "TestMoss"
            if (soapAction.Contains("/"))
            {
                return soapAction.Split('/').LastOrDefault()?.Trim('"') ?? string.Empty;
            }
            return soapAction.Trim('"');
        }

        private async Task WriteJsonResponse(HttpContext context, object result)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 200;

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = true
            };

            var json = JsonSerializer.Serialize(result, options);
            await context.Response.WriteAsync(json);
        }

        private async Task WriteErrorResponse(HttpContext context, string message, int statusCode)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = statusCode;

            var error = new { error = message, statusCode };
            var json = JsonSerializer.Serialize(error);
            await context.Response.WriteAsync(json);
        }
    }
}