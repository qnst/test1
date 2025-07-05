using System.Text;
using System.Text.Json;

namespace SoapTest
{
    public class FormToByteArrayMiddleware
    {
        private readonly RequestDelegate _next;

        public FormToByteArrayMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            // Handle HTTP POST requests for TestMoss operation (ASMX-style)
            if (context.Request.Path.Value?.Equals("/MyService.asmx/TestMoss", StringComparison.OrdinalIgnoreCase) == true &&
                context.Request.Method.Equals("POST", StringComparison.OrdinalIgnoreCase) &&
                !IsSoapRequest(context))
            {
                await HandleHttpPostRequest(context);
                return;
            }

            await _next(context);
        }

        private static bool IsSoapRequest(HttpContext context)
        {
            var contentType = context.Request.ContentType;
            return contentType != null && (
                contentType.Contains("text/xml") ||
                contentType.Contains("application/soap+xml") ||
                context.Request.Headers.ContainsKey("SOAPAction")
            );
        }

        private async Task HandleHttpPostRequest(HttpContext context)
        {
            try
            {
                string aValue = "";
                byte[] bBytes = Array.Empty<byte>();

                // Handle different content types
                if (context.Request.ContentType?.Contains("application/x-www-form-urlencoded") == true)
                {
                    var form = await context.Request.ReadFormAsync();
                    aValue = form["a"].FirstOrDefault() ?? "";
                    var bString = form["b"].FirstOrDefault() ?? "";

                    if (!string.IsNullOrEmpty(bString))
                    {
                        bBytes = TryConvertToBytes(bString);
                    }
                }
                else if (context.Request.ContentType?.Contains("application/json") == true)
                {
                    using var reader = new StreamReader(context.Request.Body);
                    var body = await reader.ReadToEndAsync();

                    try
                    {
                        var jsonDoc = JsonDocument.Parse(body);

                        if (jsonDoc.RootElement.TryGetProperty("a", out var aElement))
                        {
                            aValue = aElement.GetString() ?? "";
                        }

                        if (jsonDoc.RootElement.TryGetProperty("b", out var bElement))
                        {
                            if (bElement.ValueKind == JsonValueKind.String)
                            {
                                var bString = bElement.GetString();
                                if (!string.IsNullOrEmpty(bString))
                                {
                                    bBytes = TryConvertToBytes(bString);
                                }
                            }
                            else if (bElement.ValueKind == JsonValueKind.Array)
                            {
                                var byteList = new List<byte>();
                                foreach (var item in bElement.EnumerateArray())
                                {
                                    if (item.TryGetByte(out var b))
                                    {
                                        byteList.Add(b);
                                    }
                                }
                                bBytes = byteList.ToArray();
                            }
                        }
                    }
                    catch
                    {
                        // Ignore JSON parsing errors
                    }
                }

                // Get the service and call TestMoss
                var calculatorService = context.RequestServices.GetRequiredService<ICalculatorService>();
                var result = calculatorService.TestMoss(aValue, bBytes);

                // Add context information to the result for debugging
                var contextInfo = $" [ContentType: {context.Request.ContentType}, Method: {context.Request.Method}]";
                if (result.Field2 != null && !result.Field2.Contains("[ContentType"))
                {
                    result.Field2 += contextInfo;
                }

                // Return ASMX-compatible XML response
                var xmlResponse = $@"<?xml version=""1.0"" encoding=""utf-8""?>
<MossModel xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"" xmlns=""http://tempuri.org/"">
    <Field1>{System.Security.SecurityElement.Escape(result.Field1 ?? "")}</Field1>
    <Field2>{System.Security.SecurityElement.Escape(result.Field2 ?? "")}</Field2>
</MossModel>";

                context.Response.ContentType = "application/xml; charset=utf-8";
                await context.Response.WriteAsync(xmlResponse, Encoding.UTF8);
            }
            catch (Exception ex)
            {
                // Return error in XML format
                var errorXml = $@"<?xml version=""1.0"" encoding=""utf-8""?>
<soap:Fault xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/"">
    <faultcode>Server</faultcode>
    <faultstring>{System.Security.SecurityElement.Escape(ex.Message)}</faultstring>
</soap:Fault>";

                context.Response.StatusCode = 500;
                context.Response.ContentType = "application/xml; charset=utf-8";
                await context.Response.WriteAsync(errorXml, Encoding.UTF8);
            }
        }

        private static byte[] TryConvertToBytes(string input)
        {
            if (string.IsNullOrEmpty(input))
                return Array.Empty<byte>();

            try
            {
                // Try Base64 first
                return Convert.FromBase64String(input);
            }
            catch
            {
                try
                {
                    // Try hex string
                    return Convert.FromHexString(input);
                }
                catch
                {
                    // Fallback to UTF8 bytes
                    return Encoding.UTF8.GetBytes(input);
                }
            }
        }
    }
}
