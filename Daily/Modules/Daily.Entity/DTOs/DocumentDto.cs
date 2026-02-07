namespace Daily.Entity.DTOs
{
    public class DocumentDto
    {
        public int Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string FileType { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public long FileSizeBytes { get; set; }
        public string? BlobUrl { get; set; }
        public DateTime UploadedDate { get; set; }
        public string UploadedBy { get; set; } = string.Empty;
        public DateTime LastModifiedDate { get; set; }
        public string? Description { get; set; }
        public string? Tags { get; set; }
        public int Version { get; set; }
    }

    public class CreateDocumentDto
    {
        public string FileName { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? Tags { get; set; }
    }

    public class UpdateDocumentDto
    {
        public string? DisplayName { get; set; }
        public string? Category { get; set; }
        public string? Description { get; set; }
        public string? Tags { get; set; }
    }

    public class DocumentSearchDto
    {
        public string? SearchTerm { get; set; }
        public string? Category { get; set; }
        public string? FileType { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string? Tags { get; set; }
    }
}
