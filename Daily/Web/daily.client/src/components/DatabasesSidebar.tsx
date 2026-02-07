import AzureMenu from './AzureMenu';

// Icons
const HomeIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2l6 6v6H10v-4H6v4H2V8l6-6z"/>
  </svg>
);

const ConnectionIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 6h4v4H2V6zm6 0h4v4H8V6zM4 8v2h2V8H4zm6 0v2h2V8h-2z"/>
  </svg>
);

const QueryIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2h12v2H2V2zm0 4h12v2H2V6zm0 4h8v2H2v-2z"/>
  </svg>
);

const SchemaIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2h12v12H2V2zm1 1v10h10V3H3zm2 2h6v2H5V5zm0 3h6v2H5V8z"/>
  </svg>
);

const HistoryIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6h2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4V6L4 3l4-3v2z"/>
  </svg>
);

const TableIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2h12v12H2V2zm1 1v2h10V3H3zm0 3v2h4V6H3zm5 0v2h5V6H8zm-5 3v2h4v-2H3zm5 0v2h5v-2H8z"/>
  </svg>
);

const ToolsIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M14 7l-3-3-2 2 3 3 2-2zm-8 4l-3 3-1-1 3-3-2-2 5-5 4 4-5 5-1-1z"/>
  </svg>
);

const DatabasesSidebar = () => {
  const menuGroups = [
    {
      id: 'overview',
      label: '',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <HomeIcon />,
          href: '/databases',
          favoritable: true
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'connections',
      label: 'Connections',
      items: [
        {
          id: 'active-connections',
          label: 'Active Connections',
          icon: <ConnectionIcon />,
          href: '/databases/connections',
          favoritable: true
        },
        {
          id: 'new-connection',
          label: 'New Connection',
          icon: <ConnectionIcon />,
          href: '/databases/connections/new'
        },
        {
          id: 'recent-connections',
          label: 'Recent Connections',
          icon: <HistoryIcon />,
          href: '/databases/connections/recent'
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'query',
      label: 'Query',
      items: [
        {
          id: 'query-editor',
          label: 'Query Editor',
          icon: <QueryIcon />,
          href: '/databases/query',
          favoritable: true
        },
        {
          id: 'saved-queries',
          label: 'Saved Queries',
          icon: <QueryIcon />,
          href: '/databases/query/saved',
          favoritable: true
        },
        {
          id: 'query-history',
          label: 'Query History',
          icon: <HistoryIcon />,
          href: '/databases/query/history'
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'schema',
      label: 'Schema',
      items: [
        {
          id: 'schema-browser',
          label: 'Schema Browser',
          icon: <SchemaIcon />,
          href: '/databases/schema',
          favoritable: true
        },
        {
          id: 'tables',
          label: 'Tables',
          icon: <TableIcon />,
          href: '/databases/schema/tables'
        },
        {
          id: 'views',
          label: 'Views',
          icon: <SchemaIcon />,
          href: '/databases/schema/views'
        }
      ],
      defaultExpanded: false
    },
    {
      id: 'tools',
      label: 'Tools',
      items: [
        {
          id: 'migration',
          label: 'Migration Wizard',
          icon: <ToolsIcon />,
          href: '/databases/tools/migration'
        },
        {
          id: 'er-diagram',
          label: 'ER Diagram',
          icon: <SchemaIcon />,
          href: '/databases/tools/er-diagram'
        }
      ],
      defaultExpanded: false
    }
  ];

  return (
    <AzureMenu
      title="Databases"
      groups={menuGroups}
      searchable={true}
      collapsible={true}
    />
  );
};

export default DatabasesSidebar;
