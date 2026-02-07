# Daily Platform - Design Proposal

## 📋 Information Architecture

```
Daily Platform
│
├── 🏠 Home (Landing/Dashboard)
│
├── Documents
│   ├── My Documents
│   ├── Shared with Me
│   ├── Recent
│   ├── Templates
│   └── Trash
│
├── Databases
│   ├── Overview
│   ├── Connections
│   ├── Query Editor
│   ├── Schema Browser
│   └── Query History
│
├── Development
│   ├── Work Journal
│   │   ├── Recent Entries
│   │   ├── By Module
│   │   └── Search
│   ├── Code Library
│   │   ├── Snippets
│   │   ├── Templates
│   │   └── Solutions
│   ├── Projects
│   │   ├── Active Projects
│   │   ├── Documentation
│   │   └── Resources
│   └── Infrastructure
│       ├── Servers
│       ├── APIs
│       └── Configurations
│
├── Services
│   ├── All Services
│   ├── Running
│   ├── Stopped
│   └── Monitoring
│
├── Azure App Services
│   ├── Overview
│   ├── App Services List
│   ├── Deployment Center
│   ├── Configuration
│   ├── Monitoring & Logs
│   ├── Scaling
│   └── Diagnostics
│
└── Settings
    ├── Profile
    ├── Preferences
    └── Integrations
```

---

## 🎨 Layout Designs

### Layout Option 1: Fixed Sidebar (Recommended for Most Categories)
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  [Top Navigation Bar - 48px height]                     │
├────────────┬───────────────────────────────────────────────────┤
│            │                                                   │
│ Documents  │   Documents > My Documents                        │
│            │                                                   │
│ Category   │   ┌───────────────────────────────────────────┐  │
│ Sidebar    │   │                                           │  │
│ [240px]    │   │        MAIN CONTENT AREA                  │  │
│            │   │                                           │  │
│  📊 Overview│  │   - Document List                         │  │
│            │   │   - Grid/List View                        │  │
│ ▼ Documents│   │   - Quick Actions                         │  │
│  📄 My Docs│   │                                           │  │
│  🤝 Shared │   │                                           │  │
│  🕐 Recent │   │                                           │  │
│  ⭐ Starred│   │                                           │  │
│  📋 Tmpl   │   │                                           │  │
│            │   └───────────────────────────────────────────┘  │
│ ▼ Manage   │                                                   │
│  🗑️ Trash  │                                                   │
│  ⚙️ Settings│                                                  │
│            │                                                   │
│ [<] Collapse│                                                  │
└────────────┴───────────────────────────────────────────────────┘
```

---

### Azure App Services - Service Detail View
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Azure App Services > daily-api-prod      [Restart] [●] │
├──────────────┬─────────────────────────────────────────────────┤
│              │                                                 │
│ Azure App    │  daily-api-prod                                 │
│ Services     │  Status: Running  |  Region: East US            │
│              │  ──────────────────────────────────────────────│
│  📊 Overview │                                                 │
│              │  OVERVIEW                                       │
│ ▼ App Service│                                                 │
│  🏠 Dashboard│  Resource Group: daily-production               │
│  🚀 All Apps │  App Service Plan: ASP-daily-prod (S1)          │
│              │  Runtime: .NET 8.0                              │
│ ▼ daily-api- │  URL: https://daily-api-prod.azurewebsites.net  │
│   prod       │                                                 │
│  📄 Overview │  ──────────────────────────────────────────────│
│  ⚙️ Config   │                                                 │
│  🚢 Deploy   │  METRICS (Last 24 hours)                        │
│  📊 Metrics  │                                                 │
│  📝 Logs     │  ┌─────────────────┐  ┌─────────────────┐     │
│  📈 Scaling  │  │  CPU Usage      │  │  Memory Usage   │     │
│  💾 Backups  │  │                 │  │                 │     │
│  🔧 Console  │  │     45%         │  │     512 MB      │     │
│              │  │  ▁▂▃▅▆▇█▆▅▃▂    │  │  ▃▄▅▅▆▆▇▇▆▅▄    │     │
│ ▼ daily-web- │  └─────────────────┘  └─────────────────┘     │
│   prod       │                                                 │
│  📄 Overview │  ┌─────────────────┐  ┌─────────────────┐     │
│  ⚙️ Config   │  │  HTTP Requests  │  │  Response Time  │     │
│              │  │                 │  │                 │     │
│ ▶ daily-api- │  │   1.2K req/min  │  │    125 ms avg   │     │
│   dev        │  │  ▃▄▅▆▇█▇▆▅▄▃▂    │  │  ▂▃▄▄▃▃▂▂▃▄▅    │     │
│              │  └─────────────────┘  └─────────────────┘     │
│ 🔍 Filters   │                                                 │
│  ✓ Production│  ──────────────────────────────────────────────│
│  ✓ Running   │                                                 │
│  □ Stopped   │  RECENT DEPLOYMENTS                             │
│              │                                                 │
│ 🌍 Region    │  Feb 5, 2026 14:23  |  v2.1.0  |  Success      │
│  ✓ East US   │  Feb 4, 2026 09:15  |  v2.0.8  |  Success      │
│  □ West EU   │  Feb 3, 2026 16:45  |  v2.0.7  |  Success      │
│              │                                                 │
│ [<] Collapse │                         [View All Deployments]  │
└──────────────┴─────────────────────────────────────────────────┘
```

---

### Azure App Services - Configuration View
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Azure > daily-api-prod > Configuration      [Save]     │
├──────────────┬─────────────────────────────────────────────────┤
│              │                                                 │
│ daily-api-   │  Configuration                                  │
│ prod         │  ──────────────────────────────────────────────│
│              │                                                 │
│  📄 Overview │  APPLICATION SETTINGS                           │
│ ✓ ⚙️ Config  │                                                 │
│  🚢 Deploy   │  Name                          Value            │
│  📝 Logs     │  ────────────────────────────────────────────  │
│  📈 Scaling  │  ASPNETCORE_ENVIRONMENT        Production       │
│  💾 Backups  │  DATABASE_CONNECTION           Server=...;Dat...│
│              │  JWT_SECRET                    ••••••••••••••   │
│ ▼ Settings   │  REDIS_CONNECTION              redis.cache...   │
│  🔧 App Set  │  STORAGE_ACCOUNT               dailystorage...  │
│  🔗 Conn Str │  API_VERSION                   v2.1.0           │
│  🌍 Env Vars │                                                 │
│  🔐 Secrets  │  [+ Add New Setting]                            │
│              │                                                 │
│ ▼ Monitoring │  ──────────────────────────────────────────────│
│  📊 Metrics  │                                                 │
│  📝 Logs     │  CONNECTION STRINGS                             │
│  🔍 Diagnose │                                                 │
│              │  Name                  Type        Value        │
│ ▼ Support    │  ────────────────────────────────────────────  │
│  🐛 Troubl   │  DefaultConnection     SQLServer  Data Sour...  │
│  💬 Support  │  RedisCache            Custom     redis.cac...  │
│              │                                                 │
│              │  [+ Add Connection String]                      │
│              │                                                 │
│              │  ──────────────────────────────────────────────│
│              │                                                 │
│              │  GENERAL SETTINGS                               │
│              │                                                 │
│              │  Stack: .NET 8.0                                │
│              │  Platform: 64-bit                               │
│              │  Always On: Enabled                             │
│              │  HTTPS Only: Enabled                            │
│              │  Minimum TLS Version: 1.2                       │
│              │                                                 │
│ [<] Collapse │                     [Discard]  [Save Changes]   │
└──────────────┴─────────────────────────────────────────────────┘
```
**Best for:** Documents, Services, Settings

---

### Layout Option 2: Documentation View with Rich Content
```
┌──────────────────────────────────────────────────────────────┐
│  Daily  Development                           [+ New Entry]  │
├──────────────┬───────────────────────────────────────────────┤
│              │                                               │
│  Development │   Work Journal > Authentication Module        │
│              │   Last updated: 2 hours ago                   │
│  Navigation  │   ────────────────────────────────────────    │
│  [240px]     │                                               │
│              │   OVERVIEW                                    │
│  Work Journal│   Built JWT authentication for Daily API      │
│   > Recent   │   Including refresh tokens and role-based     │
│   > Modules  │   access control                              │
│   > Search   │                                               │
│              │   ────────────────────────────────────────    │
│  Code Library│   KEY COMPONENTS                              │
│   > Snippets │                                               │
│   > Template │   AuthController.cs                           │
│   > Solution │   ┌──────────────────────────────────────┐   │
│              │   │ public class AuthController          │   │
│  Projects    │   │ {                                    │   │
│   > Active   │   │   [HttpPost("login")]               │   │
│   > Archive  │   │   public async Task<IActionResult>  │   │
│              │   │   ...                                │   │
│  Infrastruc  │   └──────────────────────────────────────┘   │
│   > Servers  │   [Copy] [Edit] [View Full]                  │
│   > APIs     │                                               │
│   > Configs  │   ────────────────────────────────────────    │
│              │   RELATED LINKS                               │
│              │   • API Documentation                         │
│  [Collapse]  │   • Database Schema                           │
└──────────────┴───────────────────────────────────────────────┘
```
**Best for:** Development documentation, Work journal, Code repository

---

### Layout Option 3: Split Panel (for Database/Query Tools)
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  [Top Navigation Bar]                                   │
├──────────┬───────────────────┬──────────────────────────────────┤
│          │                   │                                  │
│ Databases│  SCHEMA BROWSER   │  QUERY EDITOR                    │
│          │                   │                                  │
│ Category │  localhost:5432   │  SELECT * FROM users             │
│ Nav      │  🗄️ Databases     │  WHERE active = true             │
│ [200px]  │  ▼ daily_db       │  ORDER BY created_at             │
│          │   📊 Tables       │  LIMIT 100;                      │
│ 📊 Home  │    ▶ users        │                                  │
│          │    ▶ tasks        │  [▶Run]  [Format]  [💾Save]      │
│ ▼ Connect│    ▶ logs         │                                  │
│  🔌 Active│   📈 Views       │  ──────────────────────────────  │
│  ➕ New  │   ⚙️ Functions    │                                  │
│  🕐 Recent│   🔍 Procedures  │  RESULTS (125 rows)              │
│          │                   │                                  │
│ ▼ Query  │  [+ Add DB]       │  id  name      status            │
│  Editor  │                   │  ──────────────────────────────  │
│  📝 New  │  [🔍 Search]      │  1   John      active            │
│  💾 Saved│                   │  2   Sarah     active            │
│  🕐 Hist │                   │  3   Mike      active            │
│          │                   │                                  │
│ ▼ Tools  │                   │  [📊 Export CSV]  [📄 Export JSON]│
│  🔄 Migr │                   │  [📋 Copy]  [📤 Share]            │
│  📊 ER   │                   │                                  │
│  🔍 Search│                  │                                  │
│          │                   │                                  │
│[<]Collap │                   │                                  │
└──────────┴───────────────────┴──────────────────────────────────┘
```
**Best for:** Databases, Data Tools

---

### Layout Option 4: Dashboard with Cards (for Azure App Services)
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Azure App Services                    [+ Create New]   │
├──────────────┬─────────────────────────────────────────────────┤
│              │                                                 │
│ Azure App    │  My App Services                                │
│ Services     │  ──────────────────────────────────────────────│
│              │                                                 │
│ 📊 Overview  │  ┌──────────────────┐  ┌──────────────────┐   │
│              │  │ daily-api-prod   │  │ daily-web-prod   │   │
│ ▼ App Service│  │ ✅ Running       │  │ ✅ Running       │   │
│  🚀 All Apps │  │ ────────────     │  │ ────────────     │   │
│  ➕ Create   │  │ 🌍 East US       │  │ 🌍 East US       │   │
│              │  │ 💰 Standard      │  │ 💰 Standard      │   │
│ ▼ Deployment │  │ 🔧 .NET 8.0      │  │ 🔧 Node.js 20    │   │
│  🚢 Deploy   │  │                  │  │                  │   │
│  📦 Packages │  │ 📊 CPU: 45%      │  │ 📊 CPU: 23%      │   │
│  🔄 CI/CD    │  │ 💾 Mem: 512 MB   │  │ 💾 Mem: 256 MB   │   │
│              │  │                  │  │                  │   │
│ ▼ Config     │  │ [🔄 Restart] [⏹] │  │ [🔄 Restart] [⏹] │   │
│  ⚙️ Settings │  └──────────────────┘  └──────────────────┘   │
│  🔐 Secrets  │                                                 │
│  🔗 Conn Str │  ┌──────────────────┐  ┌──────────────────┐   │
│              │  │ daily-api-dev    │  │ daily-worker     │   │
│ ▼ Monitoring │  │ ⏸️ Stopped       │  │ ✅ Running       │   │
│  📊 Metrics  │  │ ────────────     │  │ ────────────     │   │
│  📝 Logs     │  │ 🌍 West EU       │  │ 🌍 East US       │   │
│  🔍 Diagnose │  │ 💰 Free          │  │ 💰 Basic         │   │
│  🚨 Alerts   │  │ 🔧 .NET 8.0      │  │ 🔧 Python 3.11   │   │
│              │  │                  │  │                  │   │
│ 🔍 Filters   │  │                  │  │ 📊 CPU: 12%      │   │
│  ✓ All       │  │                  │  │ 💾 Mem: 128 MB   │   │
│  ✓ Running   │  │                  │  │                  │   │
│  □ Stopped   │  │ [▶ Start]        │  │ [🔄 Restart] [⏹] │   │
│              │  └──────────────────┘  └──────────────────┘   │
│ 🌍 Region    │                                                 │
│  ✓ East US   │  💰 Total: 4 services  |  ✅ Running: 3  |  $247│
│  □ West EU   │                                                 │
│  □ All       │                                                 │
│              │                                                 │
│[<] Collapse  │                                                 │
└──────────────┴─────────────────────────────────────────────────┘
```
**Best for:** Azure App Services, Cloud Resources Management

---

## 🗺️ Navigation Structure

### Top Navigation (Global - Always Visible)
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  [Explore ▾] [Products ▾]  [Search] [Learn] [Sign In]  │
└────────────────────────────────────────────────────────────────┘
```

### Category Switcher (When inside app)
```
┌────────────────────────────────────────────────────────────────┐
│ Daily │ Documents │ Databases │ Development │ Services │ Azure │
│       └────────────────────────────────────────────────────────┤
│                    [Active Category Content]                   │
```

---

## 📱 Responsive Behavior

### Desktop (> 1200px)
- Full sidebar (240-280px)
- Multi-column layouts available
- All features visible

### Tablet (768px - 1200px)
- Collapsible sidebar (overlay mode)
- Single column main content
- Hamburger menu

### Mobile (< 768px)
- Bottom navigation for categories
- Drawer sidebar
- Simplified views

---

## 🎯 Recommended Implementation Plan

### Phase 1: Core Structure
1. **Category-based routing**
   ```
   /                          → Home
   /documents                 → Documents Home
   /documents/myjournal       → Work Journal
   /development/journal/:id   → Journal Entry Detail
   /development/code          → Code Library
   /development/projects      → Projects Info
   /development/infrastructure → Servers & APIs
   /services                  → Services Home
   /azure                     → Azure App Services Home
   /azure/:serviceName        → App Service Detail
   /azure/:serviceName/config → Configuration
   /azure/:serviceName/logs   → Logs & Monitoring
   /settings                  → Settings
   ```

2. **Layout Components**
   - `CategoryLayout` (wrapper with category sidebar)
   - `SplitPanelLayout` (for databases)
   - `DashboardLayout` (for overview pages)
   - `CardGridLayout` (for Azure App Services)

### Phase 2: Category Implementations

#### Documents Module
```
Features:
- File browser (grid/list view)
- Upload/Download
- Share & Permissions
- Version history
- Search & Filter
```

#### Databases Module
```
Features:
- Connection management
- Visual query builder
- SQL editor with syntax highlighting
- Schema explorer
- Query history
- Export results
```
#### Development Module
```
Features:
- Work Journal (document what you've built)
- Code Library (snippets, templates, solutions)
- Module Documentation (with embedded code)
- Project Information Dashboard
- Server & Infrastructure Info
- API Endpoint Registry
- Configuration tracking
```

### Documents - Full View
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Documents                               [+ New File]   │
├────────────┬───────────────────────────────────────────────────┤
│            │                                                   │
│ Documents  │  My Documents                                     │
│            │  ───────────────────────────────────────────────  │
│  📊 Home   │                                                   │
│            │  Quick Actions                                    │
│ ▼ Documents│  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  📄 My Docs│  │  Upload  │ │  Create  │ │  Import  │         │
│  🤝 Shared │  └──────────┘ └──────────┘ └──────────┘         │
│  🕐 Recent │                                                   │
│  📋 Tmpl   │  ───────────────────────────────────────────────  │
│  🗑️ Trash  │                                                   │
│            │  Recent Files                                     │
│ 🔍 Filter  │                                                   │
│  ☑ All     │  Project_Spec.docx           2 hours ago         │
│  ☐ Docs    │  Q1_Report.xlsx              Yesterday           │
│  ☐ Sheets  │  Meeting_Notes.md            2 days ago          │
│  ☐ Code    │  API_Documentation.pdf       3 days ago          │
│            │  Database_Schema.sql         Last week           │
│ 🔽 Sort    │                                                   │
│  ☑ Date    │  ───────────────────────────────────────────────  │
│  ☐ Name    │                                                   │
│  ☐ Size    │  Storage Usage                                    │
│            │  2.3 GB of 10 GB used                             │
│            │  ████████████████████░░░░░░░░░░░░░░ 23%          │
│            │                                                   │
│[<]Collapse │                                                   │
└────────────┴───────────────────────────────────────────────────┘
```

### Development - Work Journal Entry
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Development > Work Journal              [+ New Entry]  │
├────────────┬───────────────────────────────────────────────────┤
│            │                                                   │
│ Development│  Authentication Module Implementation             │
│            │  Created: Feb 5, 2026  |  Updated: 2 hours ago   │
│            │  ─────────────────────────────────────────────   │
│  📊 Home   │                                                   │
│            │  DESCRIPTION                                      │
│ ▼ Work     │  Implemented JWT-based authentication system      │
│   Journal  │  with refresh tokens and role-based access        │
│  📝 Recent │  control. Includes login, logout, token refresh   │
│  📁 Modules│  and permission validation middleware.            │
│  🔍 Search │                                                   │
│            │  ─────────────────────────────────────────────   │
│ ▼ Code     │  FILES & CODE                                     │
│   Library  │                                                   │
│  </> Snip  │  AuthController.cs                                │
│  📄 Tmpl   │  ┌────────────────────────────────────────────┐  │
│  ✅ Soln   │  │ [HttpPost("login")]                        │  │
│            │  │ public async Task<IActionResult> Login(    │  │
│ ▼ Projects │  │   LoginRequest request)                    │  │
│  🚀 Active │  │ {                                          │  │
│  📦 Archive│  │   var user = await _userService           │  │
│            │  │     .ValidateCredentials(...);            │  │
│ ▼ Infrastr │  │   var token = _tokenService               │  │
│  🖥️ Servers│  │     .GenerateToken(user);                 │  │
│  🔌 APIs   │  │   return Ok(new { token });               │  │
│  ⚙️ Configs│  │ }                                          │  │
│            │  └────────────────────────────────────────────┘  │
│[<]Collapse │  [Copy] [Edit] [View Full]                       │
└────────────┴───────────────────────────────────────────────────┘
```

### Database - Query Editor
│          │  │ │UI   │ │ │ │DB   │ │ │ │Test │ │           │
│▼Tasks    │  │ └─────┘ │ │ └─────┘ │ │ └─────┘ │           │
│ ✓ My     │  └─────────┘ └─────────┘ └─────────┘           │
│ > Team   │                                                  │
│ > Backlog│  Velocity: 24 pts  Burndown: ████████░░ 80%    │
└──────────┴──────────────────────────────────────────────────┘
```

### Database - Query Editor
```
┌─────────────────────────────────────────────────────────────┐
│ Daily  Databases > Query                    [Save] [Share] │
├────────┬────────────┬────────────────────────────────────────┤
│        │ SCHEMA     │ QUERY EDITOR                          │
│ 🗄️ DB  │            │                                       │
│        │ 🟢 local   │ 1  SELECT u.id, u.name, u.email,     │
│ 📊 Home│ ▼ Tables   │ 2    COUNT(t.id) as task_count       │
│        │   ▶ users  │ 3  FROM users u                      │
│ ▼ Conn │   ▶ tasks  │ 4  LEFT JOIN tasks t ON u.id=t.uid   │
│  🟢 Act│   ▶ logs   │ 5  WHERE u.active = true             │
│  ➕ New│ ▼ Views    │ 6  GROUP BY u.id                     │
│  🕐 Rec│   ▶ stats  │ 7  ORDER BY task_count DESC;         │
│        │            │                                       │
│ ▼ Query│ [🔍Search] │ [▶Run] [Format] [Explain] [Ctrl+E]  │
│  📝 New│            │ ─────────────────────────────────────│
│  💾 Sav│            │ RESULTS (45 rows) - 0.023s           │
│  🕐 His│            │ ╔═══╤════════╤════════════╤═════════╗│
│        │            │ ║id │name    │email       │tasks   ║│
│ ▼ Tools│            │ ╠═══╪════════╪════════════╪═════════╣│
│  🔄 Mig│            │ ║1  │John    │john@...    │12      ║│
│  📊 ER │            │ ║2  │Sarah   │sarah@...   │8       ║│
│  🔍 Sea│            │ ║3  │Mike    │mike@...    │15      ║│
│        │            │                                       │
│[<]Coll │            │ [📊CSV] [📄JSON] [📋Copy] [📤Share]  │
└────────┴────────────┴────────────────────────────────────────┘
```

---

## 🔧 Technical Implementation

### Folder Structure
```
src/
├── layouts/
│   ├── MainLayout.tsx           (Current - Home page)
│   ├── CategoryLayout.tsx       (New - With sidebar)
│   ├── SpliWorkJournal.tsx
│   │   ├── JournalEntry.tsx
│   │   ├── CodeLibrary.tsx
│   │   ├── ProjectsInfo.tsx
│   │   ├── Infrastructure.tsx
│   │   └── components/
│   │       ├── CodeBlock.tsx
│   │       ├── RichEditor.tsx
│   │       └── ServerCard.tsx
│   └── Services/
│       ├── Service
│   │   └── HomePage.tsx
│   ├── Documents/
│   │   ├── DocumentsHome.tsx
│   │   ├── MyDocuments.tsx
│   │   ├── SharedDocuments.tsx
│   │   └── components/
│   ├── Databases/
│   │   ├── DatabasesHome.tsx
│   │   ├── QueryEditor.tsx
│   │   ├── SchemaExplorer.tsx
│   │   └── components/
│   ├── Development/
│   │   ├── DevelopmentHome.tsx
│   │   ├── TaskBoard.tsx
│   │   ├── ApiManagement.tsx
│   Documents
- Drag & drop upload
- Real-time collaboration
- Version control
- Rich text editor
- File preview
- Sharing & permissions

###elopment
- Work Journal with rich text and code blocks
- Code snippet library with syntax highlighting
- Module documentation system
- Project information dashboard
- Server and infrastructure registry
- API endpoint documentation
- Configuration version control
- Search across all development docs
- Drag & drop upload
- Real-time collaboration
- Version control
- Rich text editor
- File preview
- Sharing & permissions

### 🗄️ Databases
- Multi-database support (SQL Server, PostgreSQL, MySQL, SQLite)
- Vi builder
- Syntax highlighting
- Auto-complete
- Query history
- Export (CSV, JSON, Excel)
- Schema visualization

### 💼 Development
- Kanban board
- API endpoint testing
- Request/Response inspection
- Code snippet manager
- Project timeline
- Git integration
- Team collaboration

### 🚀 Apps & Services
- Service status monitoring
- Start/Stop/Restart controls
- Logs viewer
- Resource usage graphs
- Configuration management
- Health checks

---

## 🎯 Next Steps

1. **Review this design** - Tell me which layouts you prefer
2. **Prioritize categories** - Which to build first?
3. **Customize features** - Add/remove based on your needs
4. **Implementation** - I'll update the code structure

Which category should we start implementing first?
