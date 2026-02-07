import { useNavigate, useLocation } from 'react-router-dom';
import {
    Button,
    Text,
} from '@fluentui/react-components';
import {
    Home24Regular,
    Apps24Regular,
    Database24Regular,
    Document24Regular,
    Settings24Regular,
    ChevronRight20Regular,
} from '@fluentui/react-icons';
import '../styles/Sidebar.css';

interface SidebarProps {
    isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard', icon: <Home24Regular />, label: 'Dashboard' },
        { path: '/app-services', icon: <Apps24Regular />, label: 'App Services' },
        { path: '/databases', icon: <Database24Regular />, label: 'Databases' },
        { path: '/documents', icon: <Document24Regular />, label: 'Documents' },
        { path: '/settings', icon: <Settings24Regular />, label: 'Settings' },
    ];

    const isActive = (path: string) => {
        if (path === '/dashboard') {
            return location.pathname === '/dashboard';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <Button
                        key={item.path}
                        appearance={isActive(item.path) ? 'primary' : 'subtle'}
                        icon={item.icon}
                        iconPosition="before"
                        onClick={() => navigate(item.path)}
                        className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
                        title={item.label}
                    >
                        {!isCollapsed && (
                            <>
                                <Text className="sidebar-label">{item.label}</Text>
                                {isActive(item.path) && <ChevronRight20Regular className="active-indicator" />}
                            </>
                        )}
                    </Button>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
