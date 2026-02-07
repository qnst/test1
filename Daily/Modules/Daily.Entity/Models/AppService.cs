namespace Daily.Entity.Models
{
    public class AppService
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string ResourceGroup { get; set; } = string.Empty;
        public string Status { get; set; } = "Running"; // Running, Stopped, Starting, Stopping
        public string AppServicePlan { get; set; } = string.Empty;
        public string Runtime { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime LastModifiedDate { get; set; } = DateTime.UtcNow;
        public string? Description { get; set; }
        public bool IsEnabled { get; set; } = true;
        
        // Configuration
        public string? EnvironmentVariables { get; set; } // JSON string
        public string? ConnectionStrings { get; set; } // JSON string
        public string? AppSettings { get; set; } // JSON string
        
        // Monitoring
        public long? CpuUsagePercentage { get; set; }
        public long? MemoryUsageMB { get; set; }
        public long? RequestsPerMinute { get; set; }
        public DateTime? LastHealthCheck { get; set; }
        
        // Navigation properties
        public virtual ICollection<AppServiceLog> Logs { get; set; } = new List<AppServiceLog>();
        public virtual ICollection<Deployment> Deployments { get; set; } = new List<Deployment>();
    }

    public class AppServiceLog
    {
        public int Id { get; set; }
        public int AppServiceId { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        public string LogLevel { get; set; } = string.Empty; // Info, Warning, Error, Debug
        public string Message { get; set; } = string.Empty;
        public string? Source { get; set; }
        public string? StackTrace { get; set; }
        
        public virtual AppService AppService { get; set; } = null!;
    }

    public class Deployment
    {
        public int Id { get; set; }
        public int AppServiceId { get; set; }
        public string Version { get; set; } = string.Empty;
        public DateTime DeployedDate { get; set; } = DateTime.UtcNow;
        public string DeployedBy { get; set; } = string.Empty;
        public string Status { get; set; } = "Success"; // Success, Failed, InProgress
        public string? ReleaseNotes { get; set; }
        public string? BuildNumber { get; set; }
        
        public virtual AppService AppService { get; set; } = null!;
    }
}
