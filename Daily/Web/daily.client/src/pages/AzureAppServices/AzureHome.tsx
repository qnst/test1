import { Button, makeStyles, shorthands } from '@fluentui/react-components';
import { Add24Regular, Play24Regular, CircleHalfFill24Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        ...shorthands.padding('32px'),
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 600,
    },
    stats: {
        display: 'flex',
        ...shorthands.gap('24px'),
        marginBottom: '32px',
        fontSize: '14px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        ...shorthands.gap('24px'),
    },
    serviceCard: {
        ...shorthands.padding('20px'),
        ...shorthands.border('1px', 'solid', '#e1e1e1'),
        ...shorthands.borderRadius('8px'),
        backgroundColor: '#fff',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
            ...shorthands.borderColor('#0078D4'),
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
    },
    serviceHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px',
    },
    serviceName: {
        fontSize: '16px',
        fontWeight: 600,
        marginBottom: '4px',
    },
    serviceStatus: {
        fontSize: '12px',
        fontWeight: 600,
        ...shorthands.padding('4px', '10px'),
        ...shorthands.borderRadius('12px'),
    },
    statusRunning: {
        backgroundColor: '#dff6dd',
        color: '#107c10',
    },
    statusStopped: {
        backgroundColor: '#f5f5f5',
        color: '#605e5c',
    },
    serviceDetails: {
        fontSize: '13px',
        color: '#605e5c',
        marginBottom: '12px',
    },
    detailRow: {
        marginBottom: '6px',
    },
    metrics: {
        display: 'flex',
        ...shorthands.gap('16px'),
        marginBottom: '12px',
    },
    metric: {
        flex: 1,
    },
    metricLabel: {
        fontSize: '11px',
        color: '#605e5c',
        marginBottom: '4px',
    },
    metricValue: {
        fontSize: '14px',
        fontWeight: 600,
    },
    actions: {
        display: 'flex',
        ...shorthands.gap('8px'),
    },
});

const AzureAppServicesHome = () => {
    const styles = useStyles();
    const navigate = useNavigate();

    const services = [
        {
            name: 'daily-api-prod',
            status: 'running',
            region: 'East US',
            plan: 'Standard S1',
            runtime: '.NET 8.0',
            cpu: 45,
            memory: '512 MB',
        },
        {
            name: 'daily-web-prod',
            status: 'running',
            region: 'East US',
            plan: 'Standard S1',
            runtime: 'Node.js 20',
            cpu: 23,
            memory: '256 MB',
        },
        {
            name: 'daily-api-dev',
            status: 'stopped',
            region: 'West EU',
            plan: 'Free F1',
            runtime: '.NET 8.0',
            cpu: 0,
            memory: '0 MB',
        },
        {
            name: 'daily-worker',
            status: 'running',
            region: 'East US',
            plan: 'Basic B1',
            runtime: 'Python 3.11',
            cpu: 12,
            memory: '128 MB',
        },
    ];

    const runningCount = services.filter(s => s.status === 'running').length;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Azure App Services</h1>
                <Button appearance="primary" icon={<Add24Regular />}>
                    Create New
                </Button>
            </div>

            <div className={styles.stats}>
                <span>Total: {services.length} services</span>
                <span>Running: {runningCount}</span>
                <span>Stopped: {services.length - runningCount}</span>
            </div>

            <div className={styles.grid}>
                {services.map((service) => (
                    <div
                        key={service.name}
                        className={styles.serviceCard}
                        onClick={() => navigate(`/azure/${service.name}`)}
                    >
                        <div className={styles.serviceHeader}>
                            <div className={styles.serviceName}>{service.name}</div>
                            <span
                                className={`${styles.serviceStatus} ${
                                    service.status === 'running'
                                        ? styles.statusRunning
                                        : styles.statusStopped
                                }`}
                            >
                                {service.status === 'running' ? 'Running' : 'Stopped'}
                            </span>
                        </div>

                        <div className={styles.serviceDetails}>
                            <div className={styles.detailRow}>Region: {service.region}</div>
                            <div className={styles.detailRow}>Plan: {service.plan}</div>
                            <div className={styles.detailRow}>{service.runtime}</div>
                        </div>

                        {service.status === 'running' && (
                            <div className={styles.metrics}>
                                <div className={styles.metric}>
                                    <div className={styles.metricLabel}>CPU</div>
                                    <div className={styles.metricValue}>{service.cpu}%</div>
                                </div>
                                <div className={styles.metric}>
                                    <div className={styles.metricLabel}>Memory</div>
                                    <div className={styles.metricValue}>{service.memory}</div>
                                </div>
                            </div>
                        )}

                        <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
                            {service.status === 'running' ? (
                                <>
                                    <Button size="small">Restart</Button>
                                    <Button size="small">Stop</Button>
                                </>
                            ) : (
                                <Button size="small" appearance="primary">Start</Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AzureAppServicesHome;
