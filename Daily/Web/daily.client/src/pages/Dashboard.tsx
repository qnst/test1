import {
    Card,
    Text,
    Title3,
    Body1,
    makeStyles,
    shorthands,
} from '@fluentui/react-components';
import {
    Apps24Regular,
    Database24Regular,
    Document24Regular,
    CloudCheckmark24Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('24px'),
    },
    header: {
        marginBottom: '16px',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        ...shorthands.gap('16px'),
    },
    statCard: {
        ...shorthands.padding('20px'),
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('12px'),
        cursor: 'pointer',
        ':hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
    },
    statIcon: {
        fontSize: '32px',
        color: '#0078d4',
    },
    statValue: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#201f1e',
    },
    statLabel: {
        color: '#605e5c',
    },
    recentSection: {
        marginTop: '24px',
    },
});

const Dashboard = () => {
    const styles = useStyles();

    const stats = [
        { icon: <Apps24Regular />, label: 'App Services', value: '12', status: 'Running' },
        { icon: <Database24Regular />, label: 'Databases', value: '8', status: 'Online' },
        { icon: <Document24Regular />, label: 'Documents', value: '1,234', status: 'Total Files' },
        { icon: <CloudCheckmark24Regular />, label: 'Health Status', value: '100%', status: 'All Systems Operational' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Title3>Dashboard</Title3>
                <Body1>Overview of your application services and resources</Body1>
            </div>

            <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                    <Card key={index} className={styles.statCard}>
                        <div className={styles.statIcon}>{stat.icon}</div>
                        <Text className={styles.statValue}>{stat.value}</Text>
                        <Text className={styles.statLabel} weight="semibold">{stat.label}</Text>
                        <Text size={200} style={{ color: '#0078d4' }}>{stat.status}</Text>
                    </Card>
                ))}
            </div>

            <div className={styles.recentSection}>
                <Title3>Recent Activity</Title3>
                <Card style={{ marginTop: '16px', padding: '20px' }}>
                    <Body1>No recent activity to display. Start by creating an app service or uploading documents.</Body1>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
