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

### Layout Option 1: Fixed Sidebar - Azure Portal Style

#### Styling Specifications (from Azure Portal)
```css
/* Menu Container */
.menu-container {
  width: 240px;
  display: flex;
  flex-direction: column;
  background: var(--colorContainerBackgroundPrimary);
}

/* Menu Items */
.menu-item {
  display: flex;
  align-items: center;
  padding: 7px 20px;
  min-height: 32px;
  font-size: 13px;
  color: var(--colorTextPrimary);
  overflow: hidden;
}

/* Menu Icons */
.menu-icon {
  height: 15px;
  width: 15px;
  padding-right: 10px;
  flex: 0 0 auto;
  align-self: flex-start;
  margin-top: 2px;
}

/* Collapsible Group Header */
.collapsible-groupheader {
  padding: 6px 0 7px 20px;
  font-size: 13px;
  line-height: normal;
  display: flex;
  column-gap: 8px;
  border: 0;
}

/* Nested Items (under collapsible groups) */
.menu-item-nested {
  padding-left: 44px;
}

/* Group Icons (expand/collapse) */
.group-icon {
  width: 12px;
  padding: 2px;
}

/* Menu Text */
.menu-listView-item {
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
}

/* Group Header */
.menu-groupheader {
  padding: 0;
  font-size: 13px;
  line-height: 32px;
  border-bottom: 1px solid;
}
```

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────┐
│  Daily  [Top Navigation Bar - 48px]                            │
├────────────┬───────────────────────────────────────────────────┤
│            │                                                   │
│ Documents  │   Documents > My Documents                        │
│            │                                                   │
│ Sidebar    │   ┌───────────────────────────────────────────┐  │
│ [240px]    │   │                                           │  │
│            │   │        MAIN CONTENT AREA                  │  │
│            │   │                                           │  │
│ Overview   │   │   - Document List                         │  │
│            │   │   - Grid/List View                        │  │
│ ▼ Documents│   │   - Quick Actions                         │  │
│  My Docs   │   │                                           │  │
│  Shared    │   │                                           │  │
│  Recent    │   │                                           │  │
│  Starred   │   │                                           │  │
│  Templates │   │                                           │  │
│            │   └───────────────────────────────────────────┘  │
│ ▼ Manage   │                                                   │
│  Trash     │                                                   │
│  Settings  │                                                   │
│            │                                                   │
│ [<]        │                                                   │
└────────────┴───────────────────────────────────────────────────┘

/* Styling Notes:
   - Font: Segoe UI, 13px for menu items
   - Icon size: 15px × 15px (standard), 16px × 16px (nested)
   - Padding: 7px vertical, 20px horizontal
   - Min height: 32px per item
   - Nested items: 44px left padding
   - Group headers: 6px-7px padding
   - Expand/collapse icon: 12px
*/
```

---

### Azure App Services - Service Detail View

#### Styling Specifications
```css
/* Same base styling as Layout Option 1 */
.menu-item { font-size: 13px; padding: 7px 20px; min-height: 32px; }
.menu-icon { height: 15px; width: 15px; }
.collapsible-groupheader { padding: 6px 0 7px 20px; }
.nested-item { padding-left: 44px; }
```

```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Azure App Services > daily-api-prod      [Restart] [●] │
├──────────────┬─────────────────────────────────────────────────┤
│              │                                                 │
│ Azure App    │  daily-api-prod                                 │
│ Services     │  Status: Running  |  Region: East US            │
│              │  ──────────────────────────────────────────────│
│  Overview    │                                                 │
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

#### Styling Specifications
```css
/* Menu measurements (from Azure Portal) */
font-family: 'Segoe UI', 'az_font', sans-serif;
font-size: 13px;
line-height: 1.385;
min-height: 32px;
padding: 7px 20px;
icon-size: 15px × 15px;
```

```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Azure > daily-api-prod > Configuration      [Save]     │
├──────────────┬─────────────────────────────────────────────────┤
│              │                                                 │
│ daily-api-   │  Configuration                                  │
│ prod         │  ──────────────────────────────────────────────│
│              │                                                 │
│  Overview    │  APPLICATION SETTINGS                           │
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

#### Styling Specifications
```css
/* Azure Portal Menu Styles */
.menu-container { width: 240px; }
.menu-item { font-size: 13px; padding: 7px 20px; min-height: 32px; }
.menu-icon { height: 15px; width: 15px; padding-right: 10px; }
.menu-nested { padding-left: 44px; }
.menu-groupheader { font-size: 13px; line-height: 32px; padding: 6px 0 7px 20px; }
.collapse-icon { width: 12px; padding: 2px; }
```

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
│  Overview    │   Built JWT authentication for Daily API      │
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

#### Styling Specifications
```css
/* Sidebar: 200px, Menu items: 13px font, 32px min-height */
.db-menu-sidebar { width: 200px; }
.db-menu-item { font-size: 13px; padding: 7px 20px; min-height: 32px; }
.db-schema-panel { width: 280px; border-right: 1px solid; }
.db-query-panel { flex: 1; }
```

```
┌────────────────────────────────────────────────────────────────┐
│  Daily  [Top Navigation Bar]                                   │
├──────────┬───────────────────┬──────────────────────────────────┤
│          │                   │                                  │
│ Databases│  SCHEMA BROWSER   │  QUERY EDITOR                    │
│          │                   │                                  │
│ Category │  localhost:5432   │  SELECT * FROM users             │
│ Nav      │  Databases        │  WHERE active = true             │
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

#### Styling Specifications
```css
/* Azure Portal exact measurements */
font-family: 'Segoe UI', 'az_font';
font-size: 13px;
line-height: 1.385;
icon-size: 15px × 15px;
item-padding: 7px 20px;
item-min-height: 32px;
nested-padding-left: 44px;
group-header-padding: 6px 0 7px 20px;
collapse-icon: 12px;
```

```
┌────────────────────────────────────────────────────────────────┐
│  Daily  Azure App Services                    [+ Create New]   │
├──────────────┬─────────────────────────────────────────────────┤
│              │                                                 │
│ Azure App    │  My App Services                                │
│ Services     │  ──────────────────────────────────────────────│
│              │                                                 │
│  Overview    │  ┌──────────────────┐  ┌──────────────────┐   │
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

## � Azure Portal - Complete Styling Reference

### Extracted from `Network foundation - Microsoft Azure.htm`

#### **Font & Typography**
```css
font-family: 'Segoe UI', 'az_font', -apple-system, BlinkMacSystemFont, sans-serif;

/* Standard font weights */
font-weight: 400; /* Normal */
font-weight: 600; /* Semibold for headers */
font-weight: 700; /* Bold */
```

#### **Menu Container**
```css
.fxc-menu {
  display: flex;
  flex-direction: column;
  width: 240px; /* Fixed sidebar width */
}

.fxc-menu-scrollarea {
  overflow: auto;
  flex: 1 1 auto;
}
```

#### **Menu Items** 
```css
.fxc-menu-grid .azc-listView-item {
  display: flex;
  font-size: 13px;
  line-height: 1.385;
  margin: 0;
}

.fxc-menu-grid .fxc-menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 20px;
  box-sizing: border-box;
  min-height: 32px;
  overflow: hidden;
  color: var(--colorTextPrimary);
}

.fxc-menu-grid .fxc-menu-item:hover,
.fxc-menu-grid .fxc-menu-item:focus,
.fxc-menu-grid .fxc-menu-item:active {
  text-decoration: none;
  color: inherit;
}
```

#### **Menu Icons**
```css
.fxc-menu-icon {
  height: 15px;
  width: 15px;
  flex: 0 0 auto;
  position: relative;
  padding-right: 10px;
  align-self: flex-start;
  margin-top: 2px;
}

/* Nested menu item icons (slightly larger) */
.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup ul a.fxc-menu-item .fxc-menu-icon {
  height: 16px;
  width: 16px;
  padding-right: 0;
  align-self: auto;
}

/* Group header icons */
.fxc-menu-icon.fxc-menu-groupheader-icon {
  align-self: center;
  margin-top: 0;
}
```

#### **Menu Text**
```css
.fxc-menu-grid .fxc-menu-listView-item {
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
}
```

#### **Collapsible Groups**
```css
.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup {
  margin: 0;
}

/* Group header */
.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup .fxc-menu-groupheader,
.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup .azc-listView-collapsible-groupheader {
  border: 0;
}

.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup .azc-listView-collapsible-groupheader {
  padding: 6px 0 7px 20px;
  column-gap: 8px;
}

.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup .fxc-menu-groupheader {
  text-align: start;
  line-height: normal;
  font-size: 13px;
}

/* Collapse/Expand icon */
.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup .fxc-menu-groupheader-icon {
  width: 12px;
  padding: 2px;
}
```

#### **Nested Menu Items**
```css
.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup ul {
  margin-left: 0;
}

/* Nested items have extra left padding */
.fxc-menu.fxc-collapsible-menu .azc-listView-collapsibleGroup:not(.azc-group-quickaccess) .fxc-menu-item {
  padding-left: 44px;
}
```

#### **Favorite Icons**
```css
.fxc-menu-favoriteicon {
  opacity: 0;
  width: 12px;
  height: 15px;
  flex: 0 0 auto;
}

.fxc-menu-item:hover .fxc-menu-favoriteicon,
.fxc-menu-item:focus .fxc-menu-favoriteicon,
.fxc-menu-item:active .fxc-menu-favoriteicon,
.azc-listView-item:focus-visible .fxc-menu-favoriteicon {
  opacity: 1;
}
```

#### **Search Header**
```css
.fxc-menu.fxc-collapsible-menu .fxc-menu-header {
  display: flex;
  flex-flow: row;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  margin: 7px 34px 7px 16px;
}

.fxc-menu.fxc-collapsible-menu .fxc-menu-header .fxc-menu-search {
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
}

.fxc-menu-search {
  flex: 0 0 auto;
  min-height: 23px;
  margin: 7px 35px 7px 20px;
}
```

#### **Collapse/Expand All Button**
```css
.fxc-menu.fxc-collapsible-menu .fxc-menu-header .fxc-menu-collapseexpandall {
  height: 24px;
  width: 24px;
  display: flex;
  padding: 8px;
  border: 0;
}

.fxc-menu.fxc-collapsible-menu .fxc-menu-header .fxc-menu-collapseexpandall > svg {
  width: 8px;
  height: 8px;
}
```

#### **Group Headers**
```css
.fxc-menu-groupheader {
  padding: 0;
  font-size: 13px;
  line-height: 1.385;
  line-height: 32px;
  border-bottom-color: inherit;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.fxc-menu-grid .azc-listView-groupheader {
  margin: 0 20px;
}
```

#### **Disabled States**
```css
.fxc-menu-grid .azc-listView-item[aria-disabled="true"] .fxc-menu-listView-item,
.fxc-menu-grid .azc-listView-item[aria-disabled="true"] .fxc-menu-icon {
  opacity: 0.5;
}
```

#### **Footer**
```css
.fxc-menu-footer {
  font-size: 10px;
  padding: 4px 12px;
  text-align: center;
  font-style: italic;
}
```

### **Complete Menu Measurements Summary**

```
┌─────────────────────────────────────────────┐
│ Sidebar Width                    240px     │
│ ───────────────────────────────────────── │
│ Menu Item Font Size              13px      │
│ Menu Item Line Height            1.385     │
│ Menu Item Padding (vertical)     7px       │
│ Menu Item Padding (horizontal)   20px      │
│ Menu Item Min Height             32px      │
│ ───────────────────────────────────────── │
│ Icon Size (standard)             15×15px   │
│ Icon Size (nested items)         16×16px   │
│ Icon Padding Right               10px      │
│ Icon Margin Top                  2px       │
│ ───────────────────────────────────────── │
│ Nested Item Padding Left         44px      │
│ ───────────────────────────────────────── │
│ Group Header Padding             6-7px 20px│
│ Group Header Line Height         32px      │
│ Group Header Font Size           13px      │
│ ───────────────────────────────────────── │
│ Collapse Icon Width              12px      │
│ Collapse Icon Padding            2px       │
│ ───────────────────────────────────────── │
│ Favorite Icon Size               12×15px   │
│ Favorite Icon Opacity (default)  0         │
│ Favorite Icon Opacity (hover)    1         │
│ ───────────────────────────────────────── │
│ Search Min Height                23px      │
│ Search Margin                    7px 35px  │
│                                  7px 20px  │
│ ───────────────────────────────────────── │
│ Footer Font Size                 10px      │
│ Footer Padding                   4px 12px  │
└─────────────────────────────────────────────┘
```

### **Color Variables (Azure Theme)**

```css
/* Azure uses CSS custom properties */
--colorTextPrimary: #323130;        /* Main text */
--colorTextSecondary: #605e5c;      /* Secondary text */
--colorTextDisabled: #a19f9d;       /* Disabled state */

--colorContainerBackgroundPrimary: #ffffff;    /* Main background */
--colorContainerBackgroundSecondary: #faf9f8; /* Subtle background */
--colorContainerBackgroundInverted: #323130;  /* Dark mode */

--colorButtonBackgroundPrimary: #0078d4;      /* Primary action */
--colorButtonBackgroundHover: #106ebe;        /* Hover state */

--colorBorderPrimary: #edebe9;               /* Borders */
--colorBorderSecondary: #d2d0ce;             /* Strong borders */
```

---

## 🎯 Next Steps

1. **Review this design** - Tell me which layouts you prefer
2. **Prioritize categories** - Which to build first?
3. **Customize features** - Add/remove based on your needs
4. **Implementation** - I'll update the code structure

Which category should we start implementing first?

