import { useNavigate, useLocation } from 'react-router-dom';
import {
    Toolbar,
    ToolbarButton,
    Text,
    Button,
    Menu,
    MenuTrigger,
    MenuPopover,
    MenuList,
    MenuItem,
    makeStyles,
    shorthands,
    mergeClasses,
} from '@fluentui/react-components';
import {
    Navigation24Regular,
    Settings24Regular,
    Search24Regular,
    ChevronDown16Regular,
    CalendarLtr32Filled,
} from '@fluentui/react-icons';
import '../styles/Header.css';

interface HeaderProps {
    toggleSidebar: () => void;
}

const useStyles = makeStyles({
    header: {
        height: '48px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e1e1e1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...shorthands.padding('0', '24px'),
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
        ...shorthands.gap('24px'),
    },
    logo: {
        fontSize: '13px',
        fontWeight: 600,
        color: '#1a1a1a',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        ...shorthands.gap('8px'),
    },
    categoryNav: {
        display: 'flex',
        alignItems: 'center',
        ...shorthands.gap('8px'),
        ...shorthands.margin('0', '24px'),
    },
    categoryButton: {
        color: '#1a1a1a',
        fontSize: '13px',
        fontWeight: 400,
        height: '48px',
        ...shorthands.padding('0', '16px'),
        ...shorthands.border('none'),
        backgroundColor: 'transparent',
        ...shorthands.borderBottom('2px', 'solid', 'transparent'),
        ...shorthands.borderRadius(0),
        transition: 'all 0.2s ease',
        '&:hover': {
            backgroundColor: '#f5f5f5',
            borderBottomColor: '#e1e1e1',
        },
    },
    categoryButtonActive: {
        fontWeight: 600,
        borderBottomColor: '#0078D4',
        '&:hover': {
            borderBottomColor: '#0078D4',
        },
    },
    microsoftLogo: {
        width: '108px',
        height: '23px',
        display: 'flex',
        alignItems: 'center',
    },
    nav: {
        display: 'flex',
        ...shorthands.gap('4px'),
    },
    navButton: {
        color: '#1a1a1a',
        fontSize: '13px',
        fontWeight: 400,
        height: '48px',
        ...shorthands.padding('0', '12px'),
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        ...shorthands.gap('8px'),
    },
    iconButton: {
        color: '#1a1a1a',
        minWidth: '40px',
        height: '32px',
        fontSize: '13px',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
    primaryButton: {
        backgroundColor: '#0078D4',
        color: '#fff',
        fontSize: '13px',
        height: '32px',
        ...shorthands.padding('0', '12px'),
        ...shorthands.border('none'),
        fontWeight: 600,
        '&:hover': {
            backgroundColor: '#106EBE',
        },
    },
    signInButton: {
        backgroundColor: 'transparent',
        color: '#1a1a1a',
        fontSize: '13px',
        height: '32px',
        ...shorthands.padding('0', '12px'),
        ...shorthands.border('1px', 'solid', '#8a8886'),
        fontWeight: 600,
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
});

const Header = ({ toggleSidebar }: HeaderProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const styles = useStyles();

    const currentCategory = location.pathname.split('/')[1] || '';

    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                <div className={styles.logo} onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CalendarLtr32Filled style={{ color: '#0078D4', fontSize: '20px' }} />
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Daily</span>
                </div>
                
                {!isHomePage && (
                    <div className={styles.categoryNav}>
                        <Button
                            appearance="subtle"
                            className={mergeClasses(styles.categoryButton, currentCategory === 'dashboard' && styles.categoryButtonActive)}
                            onClick={() => navigate('/dashboard')}
                        >
                            Dashboard
                        </Button>
                        <Button
                            appearance="subtle"
                            className={mergeClasses(styles.categoryButton, currentCategory === 'documents' && styles.categoryButtonActive)}
                            onClick={() => navigate('/documents')}
                        >
                            Documents
                        </Button>
                        <Button
                            appearance="subtle"
                            className={mergeClasses(styles.categoryButton, currentCategory === 'databases' && styles.categoryButtonActive)}
                            onClick={() => navigate('/databases')}
                        >
                            Databases
                        </Button>
                        <Button
                            appearance="subtle"
                            className={mergeClasses(styles.categoryButton, currentCategory === 'development' && styles.categoryButtonActive)}
                            onClick={() => navigate('/development')}
                        >
                            Development
                        </Button>
                        <Button
                            appearance="subtle"
                            className={mergeClasses(styles.categoryButton, currentCategory === 'azure' && styles.categoryButtonActive)}
                            onClick={() => navigate('/azure')}
                        >
                            Azure
                        </Button>
                        <Button
                            appearance="subtle"
                            className={mergeClasses(styles.categoryButton, currentCategory === 'settings' && styles.categoryButtonActive)}
                            onClick={() => navigate('/settings')}
                        >
                            Settings
                        </Button>
                    </div>
                )}
                
                {isHomePage && (
                    <nav className={styles.nav}>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement>
                                <Button appearance="subtle" className={styles.navButton}>
                                    Explore <ChevronDown16Regular />
                                </Button>
                            </MenuTrigger>
                            <MenuPopover>
                                <MenuList>
                                    <MenuItem onClick={() => navigate('/dashboard')}>Overview</MenuItem>
                                    <MenuItem disabled>Global infrastructure</MenuItem>
                                    <MenuItem disabled>Trust your cloud</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement>
                                <Button appearance="subtle" className={styles.navButton}>
                                    Products <ChevronDown16Regular />
                                </Button>
                            </MenuTrigger>
                            <MenuPopover>
                                <MenuList>
                                    <MenuItem onClick={() => navigate('/databases')}>Databases</MenuItem>
                                    <MenuItem onClick={() => navigate('/documents')}>Documents</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement>
                                <Button appearance="subtle" className={styles.navButton}>
                                    Solutions <ChevronDown16Regular />
                                </Button>
                            </MenuTrigger>
                            <MenuPopover>
                                <MenuList>
                                    <MenuItem disabled>Cloud migration</MenuItem>
                                    <MenuItem disabled>App development</MenuItem>
                                    <MenuItem disabled>Data transformation</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        {!isHomePage && (
                            <Button 
                                appearance="subtle" 
                                className={styles.navButton}
                                onClick={() => navigate('/dashboard')}
                            >
                                Dashboard
                            </Button>
                        )}
                    </nav>
                )}
            </div>
            <div className={styles.rightSection}>
                <Button appearance="subtle" className={styles.iconButton}>
                    Search <Search24Regular style={{ marginLeft: '4px' }} />
                </Button>
                <Button appearance="subtle" className={styles.iconButton}>Learn</Button>
                <Button appearance="subtle" className={styles.iconButton}>Support</Button>
                <Button appearance="subtle" className={styles.iconButton}>Contact Sales</Button>
                <Button 
                    appearance="primary" 
                    className={styles.primaryButton}
                    onClick={() => navigate('/dashboard')}
                >
                    Get started with Daily
                </Button>
                <Button appearance="outline" className={styles.signInButton}>
                    Sign in
                </Button>
            </div>
        </div>
    );
};

export default Header;
