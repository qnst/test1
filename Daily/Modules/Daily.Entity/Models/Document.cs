namespace Daily.Entity.Models
{
    public class Document
    {
        public int Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string FileType { get; set; } = string.Empty; // pdf, docx, xlsx, txt, md, etc.
        public string Category { get; set; } = "General"; // General, Technical, Business, Reports, etc.
        public long FileSizeBytes { get; set; }
        public string StoragePath { get; set; } = string.Empty;
        public string? BlobUrl { get; set; }
        public DateTime UploadedDate { get; set; } = DateTime.UtcNow;
        public string UploadedBy { get; set; } = string.Empty;
        public DateTime LastModifiedDate { get; set; } = DateTime.UtcNow;
        public string? ModifiedBy { get; set; }
        public string? Description { get; set; }
        public string? Tags { get; set; } // Comma-separated tags
        public int Version { get; set; } = 1;
        public bool IsDeleted { get; set; } = false;
        
        // Metadata
        public string? ContentType { get; set; }
        public string? Hash { get; set; } // File hash for integrity check
        
        // Navigation properties
        public virtual ICollection<DocumentVersion> Versions { get; set; } = new List<DocumentVersion>();
        public virtual ICollection<DocumentAccess> AccessLogs { get; set; } = new List<DocumentAccess>();
    }

    public class DocumentVersion
    {
        public int Id { get; set; }
        public int DocumentId { get; set; }
        public int VersionNumber { get; set; }
        public string StoragePath { get; set; } = string.Empty;
        public long FileSizeBytes { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public string CreatedBy { get; set; } = string.Empty;
        public string? ChangeDescription { get; set; }
        
        public virtual Document Document { get; set; } = null!;
    }

    public class DocumentAccess
    {
        public int Id { get; set; }
        public int DocumentId { get; set; }
        public DateTime AccessDate { get; set; } = DateTime.UtcNow;
        public string AccessedBy { get; set; } = string.Empty;
        public string AccessType { get; set; } = "View"; // View, Download, Edit, Delete
        public string? IpAddress { get; set; }
        
        public virtual Document Document { get; set; } = null!;
    }
}
