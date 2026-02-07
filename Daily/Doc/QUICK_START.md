# 🚀 QUICK START GUIDE

## Prerequisites
- ✅ .NET 8.0 SDK installed
- ✅ Node.js 20+ installed
- ✅ SQLite (included with .NET, no separate installation needed)

## 🏃 Getting Started (3 Steps)

### Step 1: Create the Database
\`\`\`powershell
# Navigate to the DataAccess project
cd "d:\\Daily\\Modules\\Daily.DataAccess"

# Create the initial migration
dotnet ef migrations add InitialCreate --startup-project ..\\Daily.Server\\Daily.Server.csproj

# Apply the migration to create the database
dotnet ef database update --startup-project ..\\Daily.Server\\Daily.Server.csproj
\`\`\`

### Step 2: Start the Backend API
\`\`\`powershell
# Open a new PowerShell window
cd "d:\\Daily\\Modules\\Daily.Server"

# Run the backend
dotnet run
\`\`\`

✅ Backend will be available at: **https://localhost:7126**  
✅ Swagger UI at: **https://localhost:7126/swagger**

### Step 3: Start the Frontend
\`\`\`powershell
# Open another PowerShell window
cd "d:\\Daily\\Web\\daily.client"

# Start the Vite dev server
npm run dev
\`\`\`

✅ Frontend will be available at: **https://localhost:5601**

## 🎉 Done!

Open your browser and go to: **https://localhost:5601**

You'll see your Azure App Service Management Portal!

---

## 🧭 Navigation Guide

Once the app is running, you can navigate to:

1. **Dashboard** (`/`) - Overview and statistics
2. **App Services** (`/app-services`) - Manage application services
3. **Databases** (`/databases`) - Database connections and SQL query tool
4. **Documents** (`/documents`) - Document management system
5. **Settings** (`/settings`) - Application settings

---

## 🔍 Features to Try

### 1. SQL Query Editor
1. Go to **Databases** page
2. Click **Query** button on any database
3. Type SQL query: `SELECT * FROM AppServices`
4. Click **Execute Query**

### 2. Document Management
1. Go to **Documents** page
2. Use search and filter features
3. Browse different file types (PDF, Excel, Word)

### 3. App Services Dashboard
1. Go to **App Services** page
2. View all running services
3. Click on a service to see details
4. Explore tabs: Overview, Configuration, Monitoring, Logs, Deployment

---

## 🛠️ Troubleshooting

### Database Connection Issues
**Error**: Cannot connect to database  
**Solution**: 
\`\`\`powershell
# Check if LocalDB is running
sqllocaldb info

# If not running, start it
sqllocaldb start mssqllocaldb
\`\`\`

### CORS Errors
**Error**: CORS policy blocking requests  
**Solution**: Make sure both backend and frontend are running on correct ports:
- Backend: https://localhost:7126
- Frontend: https://localhost:5601

### Build Errors
**Error**: npm build fails  
**Solution**:
\`\`\`powershell
# Clear npm cache and reinstall
cd "d:\\Daily\\Web\\daily.client"
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
\`\`\`

---

## 📊 What's Inside

| Component | Status | Description |
|-----------|--------|-------------|
| Frontend UI | ✅ Complete | React + FluentUI with all pages |
| Backend API | ⚠️ Partial | Configured, needs controllers |
| Database | ⚠️ Pending | Schema ready, needs migration |
| Auth | ❌ Not Started | To be implemented |
| File Upload | ❌ Not Started | UI ready, backend needed |

---

## 🔜 Next Steps After Setup

1. **Add Sample Data**: Manually insert data to test the UI
2. **Implement API Controllers**: Create CRUD endpoints
3. **Connect Frontend to Backend**: Replace mock data with real API calls
4. **Add Authentication**: Secure the application
5. **File Upload**: Implement document upload functionality

---

## 💡 Tips

- **Swagger UI** is your friend for testing API endpoints
- **FluentUI Devtools** in browser help debug React components
- **Hot Module Replacement (HMR)** auto-refreshes changes
- **Database Explorer** in Visual Studio to view data

---

## 🆘 Need Help?

Common commands:

\`\`\`powershell
# Build frontend
npm run build

# Lint frontend code
npm run lint

# Build backend
dotnet build

# Run backend tests
dotnet test

# View EF Core migrations
dotnet ef migrations list --startup-project ..\\Daily.Server\\Daily.Server.csproj

# Remove last migration (if needed)
dotnet ef migrations remove --startup-project ..\\Daily.Server\\Daily.Server.csproj
\`\`\`

---

**🎊 Congratulations! Your Azure-like App Service Management Portal is ready!**

Start building your features and customize it to your needs!
