# 🗄️ SQLite Database Setup

## ✅ Configuration Complete

Your project is now configured to use **SQLite** - a lightweight, file-based database.

---

## 📋 What Changed

### Packages Installed:
- ✅ `Microsoft.EntityFrameworkCore.Sqlite` (8.0.11)
- ✅ Removed SQL Server dependencies

### Configuration Updated:
- ✅ Connection string: `Data Source=DailyAppService.db`
- ✅ Database provider: SQLite
- ✅ Database file location: `d:\Daily\Modules\Daily.Server\DailyAppService.db`

---

## 🚀 Create the Database

Run these commands to create your SQLite database:

```powershell
# Navigate to DataAccess project
cd "d:\Daily\Modules\Daily.DataAccess"

# Create migration
dotnet ef migrations add InitialCreate --startup-project ..\Daily.Server\Daily.Server.csproj

# Create database file
dotnet ef database update --startup-project ..\Daily.Server\Daily.Server.csproj
```

**Result**: A file named `DailyAppService.db` will be created in `d:\Daily\Modules\Daily.Server\`

---

## 💡 SQLite Benefits

✅ **No installation required** - Runs anywhere .NET runs  
✅ **Zero configuration** - Just a file, no server setup  
✅ **Portable** - Copy the .db file to move your database  
✅ **Fast** - Perfect for development and small/medium apps  
✅ **Cross-platform** - Works on Windows, Linux, macOS  

---

## 📊 Managing SQLite Database

### Option 1: Visual Studio
- Right-click on `DailyAppService.db` → Open With → Choose appropriate viewer

### Option 2: DB Browser for SQLite (Recommended)
- Download: https://sqlitebrowser.org/
- Free, open-source GUI tool
- View/edit tables, run queries, export data

### Option 3: VS Code Extension
- Install: "SQLite" by alexcvzz
- View database directly in VS Code

### Option 4: Command Line
```powershell
# Install sqlite3 tool (if not already installed)
# Then open the database
sqlite3 DailyAppService.db

# Run SQL commands
.tables              # List all tables
.schema AppServices  # View table structure
SELECT * FROM AppServices;
.quit                # Exit
```

---

## 🔍 Verify Installation

After running migrations, check:

```powershell
# Check if database file exists
Test-Path "d:\Daily\Modules\Daily.Server\DailyAppService.db"

# View file size
Get-Item "d:\Daily\Modules\Daily.Server\DailyAppService.db" | Select-Object Name, Length
```

---

## 🎯 Database File Location

```
d:\Daily\Modules\Daily.Server\DailyAppService.db
```

This file contains your entire database!

---

## ⚠️ Important Notes

1. **Backup**: Just copy the .db file to backup your data
2. **Git**: Add `*.db` to `.gitignore` to avoid committing the database
3. **Migrations**: Always create migrations before updating schema
4. **Production**: SQLite is great for small/medium apps. For large-scale, consider PostgreSQL or SQL Server

---

## 🔧 Connection String Details

**Current Configuration:**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=DailyAppService.db"
  }
}
```

**Relative path** (current): Database created in Server project folder  
**Absolute path** (optional): `"Data Source=d:\\Daily\\Data\\DailyAppService.db"`

---

## 📝 Quick Commands Reference

```powershell
# Create migration
dotnet ef migrations add <MigrationName> --startup-project ..\Daily.Server\Daily.Server.csproj

# Apply migrations
dotnet ef database update --startup-project ..\Daily.Server\Daily.Server.csproj

# Remove last migration
dotnet ef migrations remove --startup-project ..\Daily.Server\Daily.Server.csproj

# List migrations
dotnet ef migrations list --startup-project ..\Daily.Server\Daily.Server.csproj

# Generate SQL script
dotnet ef migrations script --startup-project ..\Daily.Server\Daily.Server.csproj
```

---

## 🎉 Ready to Go!

SQLite is configured and ready. Just run the migration commands above to create your database!

**No server setup, no complex configuration - just simple file-based database! 🚀**
