import React, { useState, ReactNode } from 'react';
import '../styles/AzureMenu.css';

interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  favoritable?: boolean;
}

interface MenuGroup {
  id: string;
  label: string;
  icon?: ReactNode;
  items: MenuItem[];
  defaultExpanded?: boolean;
}

interface AzureMenuProps {
  title?: string;
  groups: MenuGroup[];
  searchable?: boolean;
  collapsible?: boolean;
  onCollapseToggle?: (collapsed: boolean) => void;
  footer?: ReactNode;
}

const ChevronDownIcon = () => (
  <svg viewBox="0 0 12 12" fill="currentColor">
    <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-3.5 3.5c-.2.2-.5.2-.7 0l-3.5-3.5c-.2-.2-.2-.5 0-.7z"/>
  </svg>
);

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg viewBox="0 0 16 16" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
    <path d="M8 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5L8 11l-3.5 2.5 1.5-4.5-3.5-2.5h4.5z"/>
  </svg>
);

const CollapseIcon = () => (
  <svg viewBox="0 0 12 12" fill="currentColor">
    <path d="M2 6h8M6 2l4 4-4 4"/>
  </svg>
);

const AzureMenu: React.FC<AzureMenuProps> = ({
  title,
  groups,
  searchable = false,
  collapsible = true,
  onCollapseToggle,
  footer
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(groups.filter(g => g.defaultExpanded !== false).map(g => g.id))
  );
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const toggleGroup = (groupId: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  const toggleAllGroups = () => {
    if (expandedGroups.size === groups.length) {
      setExpandedGroups(new Set());
    } else {
      setExpandedGroups(new Set(groups.map(g => g.id)));
    }
  };

  const toggleFavorite = (itemId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  const handleCollapseToggle = () => {
    const newCollapsed = !menuCollapsed;
    setMenuCollapsed(newCollapsed);
    onCollapseToggle?.(newCollapsed);
  };

  const filteredGroups = groups.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className={`azure-menu azure-collapsible-menu ${menuCollapsed ? 'collapsed' : ''}`}>
      {title && <div className="azure-menu-title" style={{ padding: '16px 20px', fontSize: '16px', fontWeight: 600 }}>{title}</div>}
      
      {searchable && (
        <div className="azure-menu-header">
          <div className="azure-menu-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="azure-menu-collapseexpandall"
            onClick={toggleAllGroups}
            title={expandedGroups.size === groups.length ? 'Collapse All' : 'Expand All'}
          >
            <ChevronDownIcon />
          </button>
        </div>
      )}

      <div className="azure-menu-scrollarea">
        <div className="azure-menu-grid">
          {filteredGroups.map(group => (
            <div
              key={group.id}
              className={`azure-listView-collapsibleGroup ${expandedGroups.has(group.id) ? '' : 'collapsed'}`}
            >
              <button
                className="azure-listView-collapsible-groupheader azure-menu-groupheader"
                onClick={() => toggleGroup(group.id)}
                aria-expanded={expandedGroups.has(group.id)}
              >
                <div className="azure-menu-icon azure-menu-groupheader-icon">
                  <ChevronDownIcon />
                </div>
                {group.icon && <div className="azure-menu-icon">{group.icon}</div>}
                <div className="azure-menu-groupheader">{group.label}</div>
              </button>

              <ul>
                {group.items.map(item => (
                  <li key={item.id} className="azure-listView-item" aria-disabled={item.disabled}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`azure-menu-item ${window.location.pathname === item.href ? 'active' : ''}`}
                        onClick={(e) => {
                          if (item.onClick) {
                            e.preventDefault();
                            item.onClick();
                          }
                        }}
                      >
                        {item.icon && <div className="azure-menu-icon">{item.icon}</div>}
                        <div className="azure-menu-listView-item">{item.label}</div>
                        {item.favoritable && (
                          <div
                            className={`azure-menu-favoriteicon ${favorites.has(item.id) ? 'favorited' : ''}`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleFavorite(item.id);
                            }}
                            title={favorites.has(item.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                          >
                            <StarIcon filled={favorites.has(item.id)} />
                          </div>
                        )}
                      </a>
                    ) : (
                      <button
                        className="azure-menu-item"
                        onClick={item.onClick}
                        disabled={item.disabled}
                      >
                        {item.icon && <div className="azure-menu-icon">{item.icon}</div>}
                        <div className="azure-menu-listView-item">{item.label}</div>
                        {item.favoritable && (
                          <div
                            className={`azure-menu-favoriteicon ${favorites.has(item.id) ? 'favorited' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(item.id);
                            }}
                            title={favorites.has(item.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                          >
                            <StarIcon filled={favorites.has(item.id)} />
                          </div>
                        )}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {footer && <div className="azure-menu-footer">{footer}</div>}

      {collapsible && (
        <button className="azure-menu-collapse-btn" onClick={handleCollapseToggle}>
          <CollapseIcon />
          {!menuCollapsed && <span>Collapse</span>}
        </button>
      )}
    </div>
  );
};

export default AzureMenu;
