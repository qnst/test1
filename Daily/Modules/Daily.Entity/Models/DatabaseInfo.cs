namespace Daily.Entity.Models
{
    public class DatabaseInfo
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string ServerName { get; set; } = string.Empty;
        public string DatabaseType { get; set; } = "SQL Server"; // SQL Server, PostgreSQL, MySQL, MongoDB, etc.
        public string ConnectionString { get; set; } = string.Empty;
        public string Status { get; set; } = "Online"; // Online, Offline, Restoring, Recovery
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime LastModifiedDate { get; set; } = DateTime.UtcNow;
        public string? Description { get; set; }
        
        // Database Info
        public long? SizeMB { get; set; }
        public string? Edition { get; set; }
        public string? ServiceTier { get; set; }
        public int? MaxConnections { get; set; }
        public int? CurrentConnections { get; set; }
        
        // Security
        public bool IsEncrypted { get; set; }
        public string? BackupPolicy { get; set; }
        public DateTime? LastBackupDate { get; set; }
        
        // Navigation properties
        public virtual ICollection<QueryHistory> QueryHistories { get; set; } = new List<QueryHistory>();
    }

    public class QueryHistory
    {
        public int Id { get; set; }
        public int DatabaseInfoId { get; set; }
        public string QueryText { get; set; } = string.Empty;
        public DateTime ExecutedDate { get; set; } = DateTime.UtcNow;
        public string ExecutedBy { get; set; } = string.Empty;
        public long? ExecutionTimeMs { get; set; }
        public int? RowsAffected { get; set; }
        public bool IsSuccess { get; set; } = true;
        public string? ErrorMessage { get; set; }
        
        public virtual DatabaseInfo DatabaseInfo { get; set; } = null!;
    }
}
