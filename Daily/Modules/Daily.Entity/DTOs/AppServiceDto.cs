namespace Daily.Entity.DTOs
{
    public class AppServiceDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string ResourceGroup { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string AppServicePlan { get; set; } = string.Empty;
        public string Runtime { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string? Description { get; set; }
        public bool IsEnabled { get; set; }
        public long? CpuUsagePercentage { get; set; }
        public long? MemoryUsageMB { get; set; }
        public long? RequestsPerMinute { get; set; }
        public DateTime? LastHealthCheck { get; set; }
    }

    public class CreateAppServiceDto
    {
        public string Name { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string ResourceGroup { get; set; } = string.Empty;
        public string AppServicePlan { get; set; } = string.Empty;
        public string Runtime { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;
        public string? Description { get; set; }
    }

    public class UpdateAppServiceDto
    {
        public string? DisplayName { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; }
        public bool? IsEnabled { get; set; }
    }

    public class AppServiceConfigDto
    {
        public Dictionary<string, string>? EnvironmentVariables { get; set; }
        public Dictionary<string, string>? ConnectionStrings { get; set; }
        public Dictionary<string, string>? AppSettings { get; set; }
    }
}
