import { ReactNode } from 'react';
import '../styles/CardGridLayout.css';

interface CardGridLayoutProps {
    children: ReactNode;
    columns?: number;
}

const CardGridLayout = ({ children, columns = 3 }: CardGridLayoutProps) => {
    return (
        <div 
            className="card-grid-layout" 
            style={{ 
                gridTemplateColumns: `repeat(auto-fill, minmax(${100 / columns}%, 1fr))` 
            }}
        >
            {children}
        </div>
    );
};

export default CardGridLayout;
