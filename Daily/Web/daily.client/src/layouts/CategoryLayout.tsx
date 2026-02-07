import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/CategoryLayout.css';

interface CategoryLayoutProps {
    sidebarContent: ReactNode;
    collapsed?: boolean;
}

const CategoryLayout = ({ sidebarContent, collapsed = false }: CategoryLayoutProps) => {
    return (
        <div className="category-layout">
            <div className={`category-sidebar ${collapsed ? 'collapsed' : ''}`}>
                {sidebarContent}
            </div>
            <div className="category-main">
                <Outlet />
            </div>
        </div>
    );
};

export default CategoryLayout;
