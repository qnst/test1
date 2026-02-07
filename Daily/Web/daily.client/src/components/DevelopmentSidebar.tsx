import AzureMenu from './AzureMenu';

// Icons
const HomeIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2l6 6v6H10v-4H6v4H2V8l6-6z"/>
  </svg>
);

const JournalIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M4 2h8v12H4V2zm1 1v10h6V3H5zm1 2h4v1H6V5zm0 2h4v1H6V7zm0 2h4v1H6V9z"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M5 6l-3 2 3 2v-1.5L3.5 8 5 7.5V6zm6 0v1.5L12.5 8 11 8.5V10l3-2-3-2zM7 5l-1 6h1l1-6H7z"/>
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 2h10v12H3V2zm1 1v10h8V3H4zm2 2h4v1H6V5zm0 2h4v1H6V7z"/>
  </svg>
);

const InfraIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M11 6.5c0 2.5-2 4.5-4.5 4.5S2 9 2 6.5 4 2 6.5 2 11 4 11 6.5zM10 11l4 4-1 1-4-4z"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5L8 11l-3.5 2.5 1.5-4.5-3.5-2.5h4.5z"/>
  </svg>
);

const DevelopmentSidebar = () => {
  const menuGroups = [
    {
      id: 'overview',
      label: '',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <HomeIcon />,
          href: '/development',
          favoritable: true
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'journal',
      label: 'Work Journal',
      items: [
        {
          id: 'journal-recent',
          label: 'Recent Entries',
          icon: <JournalIcon />,
          href: '/development/journal',
          favoritable: true
        },
        {
          id: 'journal-modules',
          label: 'By Module',
          icon: <JournalIcon />,
          href: '/development/journal/modules'
        },
        {
          id: 'journal-search',
          label: 'Search Journals',
          icon: <SearchIcon />,
          href: '/development/journal/search'
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'code-library',
      label: 'Code Library',
      items: [
        {
          id: 'code-snippets',
          label: 'Snippets',
          icon: <CodeIcon />,
          href: '/development/code',
          favoritable: true
        },
        {
          id: 'code-templates',
          label: 'Templates',
          icon: <CodeIcon />,
          href: '/development/code/templates',
          favoritable: true
        },
        {
          id: 'code-solutions',
          label: 'Solutions',
          icon: <CodeIcon />,
          href: '/development/code/solutions'
        }
      ],
      defaultExpanded: true
    },
    {
      id: 'projects',
      label: 'Projects',
      items: [
        {
          id: 'projects-active',
          label: 'Active Projects',
          icon: <ProjectIcon />,
          href: '/development/projects',
          favoritable: true
        },
        {
          id: 'projects-archive',
          label: 'Archive',
          icon: <ProjectIcon />,
          href: '/development/projects/archive'
        }
      ],
      defaultExpanded: false
    },
    {
      id: 'infrastructure',
      label: 'Infrastructure',
      items: [
        {
          id: 'infra-overview',
          label: 'Overview',
          icon: <InfraIcon />,
          href: '/development/infrastructure'
        },
        {
          id: 'infra-servers',
          label: 'Servers',
          icon: <InfraIcon />,
          href: '/development/infrastructure/servers'
        },
        {
          id: 'infra-config',
          label: 'Configuration',
          icon: <InfraIcon />,
          href: '/development/infrastructure/config'
        }
      ],
      defaultExpanded: false
    }
  ];

  return (
    <AzureMenu
      title="Development"
      groups={menuGroups}
      searchable={true}
      collapsible={true}
    />
  );
};

export default DevelopmentSidebar;
