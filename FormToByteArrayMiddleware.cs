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
            // Handle HTTP POST requests for MOSSUploadFiles operation (ASMX-style)
            if (context.Request.Path.Value?.Equals("/MossINGService.asmx/MOSSUploadFiles", StringComparison.OrdinalIgnoreCase) == true &&
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
                string inputXML = "";
                byte[] fileContents = Array.Empty<byte>();

                // Handle different content types
                if (context.Request.ContentType?.Contains("application/x-www-form-urlencoded") == true)
                {
                    var form = await context.Request.ReadFormAsync();
                    inputXML = form["_InputXML"].FirstOrDefault() ?? "";
                    var fileString = form["filecontents"].FirstOrDefault() ?? "";

                    if (!string.IsNullOrEmpty(fileString))
                    {
                        fileContents = TryConvertToBytes(fileString);
                    }
                }
                else if (context.Request.ContentType?.Contains("application/json") == true)
                {
                    using var reader = new StreamReader(context.Request.Body);
                    var body = await reader.ReadToEndAsync();

                    try
                    {
                        var jsonDoc = JsonDocument.Parse(body);

                        if (jsonDoc.RootElement.TryGetProperty("_InputXML", out var inputXMLElement))
                        {
                            inputXML = inputXMLElement.GetString() ?? "";
                        }

                        if (jsonDoc.RootElement.TryGetProperty("filecontents", out var fileElement))
                        {
                            if (fileElement.ValueKind == JsonValueKind.String)
                            {
                                var fileString = fileElement.GetString();
                                if (!string.IsNullOrEmpty(fileString))
                                {
                                    fileContents = TryConvertToBytes(fileString);
                                }
                            }
                            else if (fileElement.ValueKind == JsonValueKind.Array)
                            {
                                var byteList = new List<byte>();
                                foreach (var item in fileElement.EnumerateArray())
                                {
                                    if (item.TryGetByte(out var b))
                                    {
                                        byteList.Add(b);
                                    }
                                }
                                fileContents = byteList.ToArray();
                            }
                        }
                    }
                    catch
                    {
                        // Ignore JSON parsing errors
                    }
                }

                // Get the service and call MOSSUploadFiles
                var mossINGService = context.RequestServices.GetRequiredService<IMossINGService>();
                var result = await mossINGService.MOSSUploadFiles(inputXML, fileContents);

                // Add context information to the result for debugging
                var contextInfo = $" [ContentType: {context.Request.ContentType}, Method: {context.Request.Method}, FileSize: {fileContents.Length} bytes]";
                var resultWithContext = result + contextInfo;

                // Return ASMX-compatible XML response for string result
                var xmlResponse = $@"<?xml version=""1.0"" encoding=""utf-8""?>
<string xmlns=""http://tempuri.org/"">{System.Security.SecurityElement.Escape(resultWithContext)}</string>";

                context.Response.ContentType = "application/xml; charset=utf-8";
                await context.Response.WriteAsync(xmlResponse, Encoding.UTF8);
            }
            catch (Exception ex)
            {
                // Return error in XML format compatible with string return type
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
