import { ReactNode } from 'react';
import '../styles/SplitPanelLayout.css';

interface SplitPanelLayoutProps {
    leftPanel: ReactNode;
    rightPanel: ReactNode;
    leftWidth?: string;
}

const SplitPanelLayout = ({ leftPanel, rightPanel, leftWidth = '300px' }: SplitPanelLayoutProps) => {
    return (
        <div className="split-panel-layout">
            <div className="split-panel-left" style={{ width: leftWidth }}>
                {leftPanel}
            </div>
            <div className="split-panel-right">
                {rightPanel}
            </div>
        </div>
    );
};

export default SplitPanelLayout;
