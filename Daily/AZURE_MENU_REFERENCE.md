# Azure Portal - Left Side Menu Reference

Based on the Azure Portal navigation pattern, here's the proper hierarchical menu structure for each category.

---

## Network Foundation | Virtual Networks

```
Network foundation

📊 Overview
  🏠 Virtual Network overview

▼ Virtual network
  🔷 Virtual networks
  🔀 NAT gateways
  🌐 Public IP addresses
  🔌 Network interfaces
  🛡️ Network security groups
  🔐 Application security groups

▼ Private Link
  🔒 Private Link
  🔗 Private endpoints
  📡 Private Link services
  🔍 Private DNS zones

▼ Monitoring and management
  📊 Network Watcher
  🔍 Diagnostic settings
  📈 Metrics
  📋 Logs
  🚨 Alerts

▼ Security
  🛡️ Network Security perimeters
  🔐 DDoS protection plans
  🔥 Azure Firewall
  🛡️ Firewall Manager
  🌐 Web Application Firewall

▼ Automation
  📜 Automation script
  🔄 Export template
  📦 Deployment history

▼ Settings
  ⚙️ Configuration
  🏷️ Tags
  🔒 Locks
  👥 Access control (IAM)

▼ Support + troubleshooting
  💡 Resource health
  🆘 New support request
  📚 Documentation

[<] Collapse
```

---

## Azure App Services (Example)

```
Azure App Services

📊 Overview
  🏠 Dashboard

▼ App Service
  🚀 All App Services
  ➕ Create

▼ daily-api-prod
  📄 Overview
  ⚙️ Configuration
  🚢 Deployment Center
  📊 Metrics
  📝 Logs
  📈 Scaling
  💾 Backups
  🔧 Console

▼ daily-web-prod
  📄 Overview
  ⚙️ Configuration

▼ daily-api-dev
  📄 Overview

▼ Deployment
  🚢 Deployment Center
  📦 Deployment slots
  🔄 Continuous Deployment

▼ Settings
  ⚙️ Configuration
  🌐 Custom domains
  📜 TLS/SSL settings
  🔐 Authentication
  🔗 Networking
  ⚡ Scale up (App Service plan)
  📊 Scale out (App Service plan)

▼ Monitoring
  📊 Metrics
  📝 Diagnostic settings
  🔍 Log stream
  💭 Application Insights

▼ Development Tools
  🔧 Console
  📝 Advanced Tools (Kudu)
  🔍 Resource Explorer
  📦 Extensions

▼ Support + troubleshooting
  🆘 New support request
  💊 Diagnose and solve problems
  📚 Resource health

🔍 Filters
  ☑ All
  ☑ Running
  ☐ Stopped

🌍 Region
  ☑ East US
  ☐ West Europe
  ☐ All regions

[<] Collapse
```

---

## Databases

```
Databases

📊 Home

▼ Connections
  🔌 Active connections
  ➕ New connection
  🕐 Recent connections

▼ Query
  📝 Query Editor
  💾 Saved queries
  🕐 Query history
  📋 Snippets

▼ Schema
  📊 Tables
  📈 Views
  ⚙️ Stored procedures
  🔧 Functions
  🔍 Indexes

▼ Tools
  🔄 Migration wizard
  📊 ER diagram
  🔍 Object search
  📤 Import/Export

▼ Monitoring
  📊 Performance metrics
  📝 Query performance
  🚨 Alerts
  📋 Logs

▼ Security
  👥 Users & permissions
  🔐 Encryption
  🛡️ Firewall rules
  📋 Audit logs

▼ Settings
  ⚙️ Configuration
  🏷️ Connection strings
  💾 Backup settings

[<] Collapse
```

---

## Documents

```
Documents

📊 Overview

▼ Documents
  📄 My Documents
  🤝 Shared with Me
  🕐 Recent
  ⭐ Starred
  📋 Templates

▼ Manage
  🗑️ Trash
  💾 Storage settings
  🔐 Permissions

🔍 Filters
  ☑ All types
  ☐ Documents
  ☐ Spreadsheets
  ☐ Presentations
  ☐ Code
  ☐ PDFs

🔽 Sort by
  ☑ Modified date
  ☐ Name
  ☐ Size
  ☐ Type

[<] Collapse
```

---

## Development

```
Development

📊 Overview

▼ Work Journal
  📝 Recent Entries
  📁 By Module
  🔍 Search
  ⭐ Starred

▼ Code Library
  </> Code Snippets
  📄 Templates
  ✅ Solutions
  📦 Components

▼ Projects
  🚀 Active Projects
  📦 Archived
  📚 Documentation
  🔗 Resources

▼ Infrastructure
  🖥️ Servers
  🔌 APIs
  ⚙️ Configurations
  🌍 Environments

▼ Tasks
  📋 My Tasks
  👥 Team Tasks
  📊 Sprint Board
  📈 Backlog

▼ Tools
  🔧 API Tester
  📊 Performance Monitor
  🔍 Log Viewer

[<] Collapse
```

---

## Services

```
Services

📊 Overview

▼ Services
  🚀 All Services
  ▶️ Running
  ⏸️ Stopped
  ➕ Add Service

▼ Monitoring
  📊 Status Dashboard
  📈 Performance
  💾 Resource Usage
  🚨 Alerts

▼ Logs
  📝 Application Logs
  🖥️ System Logs
  ⚠️ Error Logs
  🔍 Search Logs

▼ Configuration
  ⚙️ Service Settings
  🌐 Network
  🔐 Security
  💾 Storage

▼ Automation
  📜 Scripts
  🔄 Scheduled Tasks
  🎯 Triggers

[<] Collapse
```

---

## Key Navigation Patterns

### Grouping
- **Top Level**: Always start with Overview/Home
- **Collapsible Sections**: Use ▼ for expanded, ▶ for collapsed
- **Icons**: Every menu item should have an appropriate icon
- **Filters**: Place filters in their own collapsible section
- **Actions**: Group creation/management actions together

### Visual Hierarchy
1. Main category name (bold)
2. Overview/Home (always visible)
3. Primary sections (collapsible with ▼/▶)
4. Sub-items (indented with icons)
5. Utility sections (Filters, Settings, Support)
6. Collapse button at bottom

### Interactive Elements
- **Checkboxes**: ☑ (checked) / ☐ (unchecked) for filters
- **Expand/Collapse**: ▼ (expanded) / ▶ (collapsed)
- **Status Icons**: 🟢 (active/online), 🔴 (stopped/offline), 🟡 (warning)
- **Action Buttons**: ➕ (add/create), 🔄 (refresh), 🗑️ (delete)

### Color Coding (via icons)
- 📊 Blue: Analytics, metrics, dashboards
- 🛡️ Purple: Security, protection
- ⚙️ Gray: Settings, configuration
- 🚀 Green: Active services, deployments
- 📝 Yellow: Documentation, logs
- 🔍 Magnifying glass: Search, diagnostics

---

## Implementation Notes

1. **Responsive Behavior**: Menu should collapse to icon-only on smaller screens
2. **Keyboard Navigation**: Full support for Tab, Arrow keys, Enter
3. **Search**: Include quick search at top of long menus
4. **Favorites**: Star icon to add frequently used items to favorites
5. **Tooltips**: Show full text on hover for truncated items
6. **Context**: Show breadcrumb or current location
7. **State Persistence**: Remember expanded/collapsed state per user
8. **Loading States**: Show skeleton or spinner while loading sub-items

---

## Example CSS Classes

```css
.menu-section-header {
  font-weight: 600;
  padding: 12px 16px;
  cursor: pointer;
}

.menu-section-header.expanded::before {
  content: '▼';
  margin-right: 8px;
}

.menu-section-header.collapsed::before {
  content: '▶';
  margin-right: 8px;
}

.menu-item {
  padding: 8px 16px 8px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-item-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.menu-item-text {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.menu-collapse-btn {
  position: sticky;
  bottom: 0;
  padding: 12px 16px;
  border-top: 1px solid #e0e0e0;
}
```
