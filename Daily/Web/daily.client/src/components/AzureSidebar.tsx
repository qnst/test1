import AzureMenu from './AzureMenu';

// Icons
const OverviewIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2h5v5H2V2zm0 7h5v5H2V9zm7-7h5v5H9V2zm0 7h5v5H9V9z"/>
  </svg>
);

const AppServiceIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2h12v2H2V2zm0 4h12v2H2V6zm0 4h12v2H2v-2z"/>
  </svg>
);

const DeploymentIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2l6 4v8H2V6l6-4zm0 2L4 7v5h8V7L8 4z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 10.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 5.5 8 5.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 3h12v8H2V3zm1 1v6h10V4H3zm2 9h6v1H5v-1z"/>
  </svg>
);

const DiagnosticsIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm1 9H7V7h2v4zm0-5H7V4h2v2z"/>
  </svg>
);

const AzureSidebar = () => {
  const menuGroups = [
    {
      id: 'overview',
      label: '',
      items: [
        {
          id: 'overview-dashboard',
          label: 'Overview',
          icon: <OverviewIcon />,
          href: '/azure',
          favoritable: true
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'app-services',
      label: 'App Services',
      items: [
        {
          id: 'all-apps',
          label: 'All App Services',
          icon: <AppServiceIcon />,
          href: '/azure/apps',
          favoritable: true
        },
        {
          id: 'create-app',
          label: 'Create',
          icon: <AppServiceIcon />,
          href: '/azure/apps/create'
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'daily-api-prod',
      label: 'daily-api-prod',
      items: [
        {
          id: 'api-prod-overview',
          label: 'Overview',
          icon: <OverviewIcon />,
          href: '/azure/apps/daily-api-prod',
          favoritable: true
        },
        {
          id: 'api-prod-config',
          label: 'Configuration',
          icon: <SettingsIcon />,
          href: '/azure/apps/daily-api-prod/config',
          favoritable: true
        },
        {
          id: 'api-prod-deployment',
          label: 'Deployment Center',
          icon: <DeploymentIcon />,
          href: '/azure/apps/daily-api-prod/deployment',
          favoritable: true
        },
        {
          id: 'api-prod-metrics',
          label: 'Metrics',
          icon: <MonitorIcon />,
          href: '/azure/apps/daily-api-prod/metrics',
          favoritable: true
        },
        {
          id: 'api-prod-logs',
          label: 'Logs',
          icon: <MonitorIcon />,
          href: '/azure/apps/daily-api-prod/logs',
          favoritable: true
        }
      ],
      defaultExpanded: false
    },
    {
      id: 'deployment',
      label: 'Deployment',
      items: [
        {
          id: 'deployment-center',
          label: 'Deployment Center',
          icon: <DeploymentIcon />,
          href: '/azure/deployment',
          favoritable: true
        },
        {
          id: 'deployment-slots',
          label: 'Deployment Slots',
          icon: <DeploymentIcon />,
          href: '/azure/deployment/slots'
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'settings',
      label: 'Settings',
      items: [
        {
          id: 'configuration',
          label: 'Configuration',
          icon: <SettingsIcon />,
          href: '/azure/settings/config',
          favoritable: true
        },
        {
          id: 'scaling',
          label: 'Scale up',
          icon: <SettingsIcon />,
          href: '/azure/settings/scale'
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'monitoring',
      label: 'Monitoring',
      items: [
        {
          id: 'metrics',
          label: 'Metrics',
          icon: <MonitorIcon />,
          href: '/azure/monitoring/metrics',
          favoritable: true
        },
        {
          id: 'diagnostics',
          label: 'Diagnostic settings',
          icon: <DiagnosticsIcon />,
          href: '/azure/monitoring/diagnostics'
        },
        {
          id: 'alerts',
          label: 'Alerts',
          icon: <DiagnosticsIcon />,
          href: '/azure/monitoring/alerts'
        }
      ],
      defaultExpanded: false
    },
    {
      id: 'support',
      label: 'Support + troubleshooting',
      items: [
        {
          id: 'resource-health',
          label: 'Resource health',
          icon: <DiagnosticsIcon />,
          href: '/azure/support/health'
        },
        {
          id: 'new-support',
          label: 'New support request',
          icon: <DiagnosticsIcon />,
          href: '/azure/support/new'
        }
      ],
      defaultExpanded: false
    }
  ];

  return (
    <AzureMenu
      title="Azure App Services"
      groups={menuGroups}
      searchable={true}
      collapsible={true}
    />
  );
};

export default AzureSidebar;

