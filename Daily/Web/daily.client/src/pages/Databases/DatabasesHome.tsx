import { Button, makeStyles, shorthands } from '@fluentui/react-components';
import { Database24Regular, Add24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
    container: {
        ...shorthands.padding('32px'),
    },
    header: {
        marginBottom: '24px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '8px',
    },
    section: {
        marginBottom: '32px',
    },
    sectionTitle: {
        fontSize: '16px',
        fontWeight: 600,
        marginBottom: '16px',
    },
    connectionList: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('12px'),
    },
    connectionCard: {
        ...shorthands.padding('16px'),
        ...shorthands.border('1px', 'solid', '#e1e1e1'),
        ...shorthands.borderRadius('4px'),
        backgroundColor: '#fff',
        cursor: 'pointer',
        '&:hover': {
            ...shorthands.borderColor('#0078D4'),
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
    },
    connectionName: {
        fontSize: '16px',
        fontWeight: 600,
        marginBottom: '4px',
    },
    connectionDetails: {
        fontSize: '13px',
        color: '#605e5c',
    },
    status: {
        display: 'inline-block',
        ...shorthands.padding('2px', '8px'),
        ...shorthands.borderRadius('12px'),
        fontSize: '12px',
        fontWeight: 600,
        marginTop: '8px',
    },
    statusOnline: {
        backgroundColor: '#dff6dd',
        color: '#107c10',
    },
    statusOffline: {
        backgroundColor: '#fde7e9',
        color: '#a80000',
    },
});

const DatabasesHome = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Databases</h1>
            </div>

            <div style={{ marginBottom: '24px' }}>
                <Button appearance="primary" icon={<Add24Regular />}>
                    New Connection
                </Button>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>My Connections</h2>
                <div className={styles.connectionList}>
                    <div className={styles.connectionCard}>
                        <Database24Regular />
                        <div className={styles.connectionName}>Daily Production DB</div>
                        <div className={styles.connectionDetails}>
                            SQL Server • daily-prod.database.windows.net
                        </div>
                        <span className={`${styles.status} ${styles.statusOnline}`}>Connected</span>
                    </div>

                    <div className={styles.connectionCard}>
                        <Database24Regular />
                        <div className={styles.connectionName}>Local Development</div>
                        <div className={styles.connectionDetails}>
                            PostgreSQL • localhost:5432
                        </div>
                        <span className={`${styles.status} ${styles.statusOnline}`}>Connected</span>
                    </div>

                    <div className={styles.connectionCard}>
                        <Database24Regular />
                        <div className={styles.connectionName}>Analytics DB</div>
                        <div className={styles.connectionDetails}>
                            MySQL • analytics.mysql.database.azure.com
                        </div>
                        <span className={`${styles.status} ${styles.statusOffline}`}>Offline</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatabasesHome;
