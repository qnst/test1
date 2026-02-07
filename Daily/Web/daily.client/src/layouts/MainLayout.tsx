import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/MainLayout.css';

const MainLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    // Check if we're in a category that uses CategoryLayout or pages without sidebar
    const categoryPaths = ['/documents', '/databases', '/development', '/azure', '/settings', '/dashboard'];
    const isInCategory = categoryPaths.some(path => location.pathname.startsWith(path));

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="layout-wrapper">
            <div className="layout-header">
                <Header toggleSidebar={toggleSidebar} />
            </div>
            <div className="layout-content">
                {!isHomePage && !isInCategory && <Sidebar isCollapsed={isSidebarCollapsed} />}
                <div className={`layout-main ${isHomePage ? 'layout-main-home' : 'layout-main-app'}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
