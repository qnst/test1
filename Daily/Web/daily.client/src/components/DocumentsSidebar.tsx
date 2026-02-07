import AzureMenu from './AzureMenu';

// Icons as simple SVG components
const HomeIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2l6 6v6H10v-4H6v4H2V8l6-6z"/>
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M4 2h5l3 3v9H4V2zm5 0v3h3"/>
  </svg>
);

const SharedIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 8c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 1c-2.7 0-8 1.3-8 4v1h16v-1c0-2.7-5.3-4-8-4z"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 11c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm.5-8H7v4l3.5 2 .5-1-3-1.5V5z"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5L8 11l-3.5 2.5 1.5-4.5-3.5-2.5h4.5z"/>
  </svg>
);

const TemplateIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 2h10v2H3V2zm0 3h10v2H3V5zm0 3h10v2H3V8zm0 3h7v2H3v-2z"/>
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M6 2h4v1h4v2H2V3h4V2zm-3 4h10v8H3V6z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 10.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 5.5 8 5.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm5.5-2l-1.1-.3c-.1-.3-.2-.6-.4-.9l.6-1 -1.4-1.4-1 .6c-.3-.2-.6-.3-.9-.4L9 3h-2l-.3 1.1c-.3.1-.6.2-.9.4l-1-.6-1.4 1.4.6 1c-.2.3-.3.6-.4.9L2.5 8v2l1.1.3c.1.3.2.6.4.9l-.6 1 1.4 1.4 1-.6c.3.2.6.3.9.4L7 14h2l.3-1.1c.3-.1.6-.2.9-.4l1 .6 1.4-1.4-.6-1c.2-.3.3-.6.4-.9l1.1-.3V8z"/>
  </svg>
);

const DocumentsSidebar = () => {
  const menuGroups = [
    {
      id: 'overview',
      label: '',
      items: [
        {
          id: 'overview-home',
          label: 'Overview',
          icon: <HomeIcon />,
          href: '/documents',
          favoritable: true
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'documents',
      label: 'Documents',
      items: [
        {
          id: 'my-documents',
          label: 'My Documents',
          icon: <DocumentIcon />,
          href: '/documents/my-docs',
          favoritable: true
        },
        {
          id: 'shared',
          label: 'Shared with Me',
          icon: <SharedIcon />,
          href: '/documents/shared',
          favoritable: true
        },
        {
          id: 'recent',
          label: 'Recent',
          icon: <ClockIcon />,
          href: '/documents/recent',
          favoritable: true
        },
        {
          id: 'starred',
          label: 'Starred',
          icon: <StarIcon />,
          href: '/documents/starred',
          favoritable: true
        },
        {
          id: 'templates',
          label: 'Templates',
          icon: <TemplateIcon />,
          href: '/documents/templates',
          favoritable: true
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'manage',
      label: 'Manage',
      items: [
        {
          id: 'trash',
          label: 'Trash',
          icon: <TrashIcon />,
          href: '/documents/trash'
        },
        {
          id: 'settings',
          label: 'Settings',
          icon: <SettingsIcon />,
          href: '/documents/settings'
        }
      ],
      defaultExpanded: true
    }
  ];

  return (
    <AzureMenu
      title="Documents"
      groups={menuGroups}
      searchable={true}
      collapsible={true}
    />
  );
};

export default DocumentsSidebar;
