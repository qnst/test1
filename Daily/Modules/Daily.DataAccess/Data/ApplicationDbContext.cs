using Microsoft.EntityFrameworkCore;
using Daily.Entity.Models;

namespace Daily.DataAccess.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<AppService> AppServices { get; set; }
        public DbSet<AppServiceLog> AppServiceLogs { get; set; }
        public DbSet<Deployment> Deployments { get; set; }
        public DbSet<DatabaseInfo> DatabaseInfos { get; set; }
        public DbSet<QueryHistory> QueryHistories { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<DocumentVersion> DocumentVersions { get; set; }
        public DbSet<DocumentAccess> DocumentAccessLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // AppService configuration
            modelBuilder.Entity<AppService>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
                entity.Property(e => e.DisplayName).IsRequired().HasMaxLength(200);
                entity.Property(e => e.ResourceGroup).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Status).IsRequired().HasMaxLength(50);
                entity.Property(e => e.Url).HasMaxLength(500);
                entity.HasIndex(e => e.Name).IsUnique();
                
                entity.HasMany(e => e.Logs)
                    .WithOne(e => e.AppService)
                    .HasForeignKey(e => e.AppServiceId)
                    .OnDelete(DeleteBehavior.Cascade);
                    
                entity.HasMany(e => e.Deployments)
                    .WithOne(e => e.AppService)
                    .HasForeignKey(e => e.AppServiceId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            // AppServiceLog configuration
            modelBuilder.Entity<AppServiceLog>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.LogLevel).IsRequired().HasMaxLength(50);
                entity.Property(e => e.Message).IsRequired();
                entity.HasIndex(e => new { e.AppServiceId, e.Timestamp });
            });

            // Deployment configuration
            modelBuilder.Entity<Deployment>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Version).IsRequired().HasMaxLength(100);
                entity.Property(e => e.DeployedBy).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Status).IsRequired().HasMaxLength(50);
                entity.HasIndex(e => new { e.AppServiceId, e.DeployedDate });
            });

            // DatabaseInfo configuration
            modelBuilder.Entity<DatabaseInfo>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
                entity.Property(e => e.DisplayName).IsRequired().HasMaxLength(200);
                entity.Property(e => e.ServerName).IsRequired().HasMaxLength(200);
                entity.Property(e => e.DatabaseType).IsRequired().HasMaxLength(100);
                entity.Property(e => e.ConnectionString).IsRequired();
                entity.Property(e => e.Status).IsRequired().HasMaxLength(50);
                entity.HasIndex(e => e.Name).IsUnique();
                
                entity.HasMany(e => e.QueryHistories)
                    .WithOne(e => e.DatabaseInfo)
                    .HasForeignKey(e => e.DatabaseInfoId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            // QueryHistory configuration
            modelBuilder.Entity<QueryHistory>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.QueryText).IsRequired();
                entity.Property(e => e.ExecutedBy).IsRequired().HasMaxLength(200);
                entity.HasIndex(e => new { e.DatabaseInfoId, e.ExecutedDate });
            });

            // Document configuration
            modelBuilder.Entity<Document>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.FileName).IsRequired().HasMaxLength(500);
                entity.Property(e => e.DisplayName).IsRequired().HasMaxLength(500);
                entity.Property(e => e.FileType).IsRequired().HasMaxLength(50);
                entity.Property(e => e.Category).IsRequired().HasMaxLength(100);
                entity.Property(e => e.StoragePath).IsRequired();
                entity.Property(e => e.UploadedBy).IsRequired().HasMaxLength(200);
                entity.HasIndex(e => e.FileName);
                entity.HasIndex(e => e.Category);
                entity.HasQueryFilter(e => !e.IsDeleted); // Soft delete filter
                
                entity.HasMany(e => e.Versions)
                    .WithOne(e => e.Document)
                    .HasForeignKey(e => e.DocumentId)
                    .OnDelete(DeleteBehavior.Cascade);
                    
                entity.HasMany(e => e.AccessLogs)
                    .WithOne(e => e.Document)
                    .HasForeignKey(e => e.DocumentId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            // DocumentVersion configuration
            modelBuilder.Entity<DocumentVersion>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.StoragePath).IsRequired();
                entity.Property(e => e.CreatedBy).IsRequired().HasMaxLength(200);
                entity.HasIndex(e => new { e.DocumentId, e.VersionNumber }).IsUnique();
            });

            // DocumentAccess configuration
            modelBuilder.Entity<DocumentAccess>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.AccessedBy).IsRequired().HasMaxLength(200);
                entity.Property(e => e.AccessType).IsRequired().HasMaxLength(50);
                entity.HasIndex(e => new { e.DocumentId, e.AccessDate });
            });
        }
    }
}
