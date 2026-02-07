namespace Daily.Entity.DTOs
{
    public class DatabaseInfoDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string ServerName { get; set; } = string.Empty;
        public string DatabaseType { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public string? Description { get; set; }
        public long? SizeMB { get; set; }
        public string? Edition { get; set; }
        public string? ServiceTier { get; set; }
        public int? MaxConnections { get; set; }
        public int? CurrentConnections { get; set; }
        public DateTime? LastBackupDate { get; set; }
    }

    public class CreateDatabaseInfoDto
    {
        public string Name { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string ServerName { get; set; } = string.Empty;
        public string DatabaseType { get; set; } = string.Empty;
        public string ConnectionString { get; set; } = string.Empty;
        public string? Description { get; set; }
    }

    public class ExecuteQueryDto
    {
        public int DatabaseId { get; set; }
        public string QueryText { get; set; } = string.Empty;
        public int? TimeoutSeconds { get; set; }
    }

    public class QueryResultDto
    {
        public bool IsSuccess { get; set; }
        public string? ErrorMessage { get; set; }
        public long ExecutionTimeMs { get; set; }
        public int? RowsAffected { get; set; }
        public List<Dictionary<string, object>>? ResultSet { get; set; }
        public List<string>? ColumnNames { get; set; }
    }
}
