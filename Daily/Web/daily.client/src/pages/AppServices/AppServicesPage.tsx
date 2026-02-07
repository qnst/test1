import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    Text,
    Title3,
    Button,
    Table,
    TableHeader,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Badge,
    Spinner,
    makeStyles,
    shorthands,
} from '@fluentui/react-components';
import {
    Add24Regular,
    Play24Regular,
    Stop24Regular,
    Delete24Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('24px'),
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
    },
    table: {
        backgroundColor: 'white',
    },
    actionButtons: {
        display: 'flex',
        ...shorthands.gap('8px'),
    },
});

interface AppService {
    id: number;
    name: string;
    displayName: string;
    status: string;
    runtime: string;
    region: string;
    url: string;
}

const AppServicesPage = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const [appServices, setAppServices] = useState<AppService[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulated data fetch - replace with actual API call
        setTimeout(() => {
            setAppServices([
                {
                    id: 1,
                    name: 'daily-api-prod',
                    displayName: 'Daily API Production',
                    status: 'Running',
                    runtime: 'ASP.NET 8.0',
                    region: 'East US',
                    url: 'https://daily-api-prod.azurewebsites.net'
                },
                {
                    id: 2,
                    name: 'daily-web-prod',
                    displayName: 'Daily Web App',
                    status: 'Running',
                    runtime: 'Node.js 20',
                    region: 'West US',
                    url: 'https://daily-web-prod.azurewebsites.net'
                },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const getStatusBadge = (status: string) => {
        const color = status === 'Running' ? 'success' : status === 'Stopped' ? 'danger' : 'warning';
        return <Badge appearance="filled" color={color}>{status}</Badge>;
    };

    if (loading) {
        return <Spinner label="Loading app services..." />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <Title3>App Services</Title3>
                    <Text>Manage your application services</Text>
                </div>
                <Button appearance="primary" icon={<Add24Regular />}>
                    Create App Service
                </Button>
            </div>

            <Card>
                <Table className={styles.table}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                            <TableHeaderCell>Runtime</TableHeaderCell>
                            <TableHeaderCell>Region</TableHeaderCell>
                            <TableHeaderCell>URL</TableHeaderCell>
                            <TableHeaderCell>Actions</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {appServices.map((service) => (
                            <TableRow
                                key={service.id}
                                onClick={() => navigate(`/app-services/${service.id}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <TableCell>
                                    <Text weight="semibold">{service.displayName}</Text>
                                    <br />
                                    <Text size={200}>{service.name}</Text>
                                </TableCell>
                                <TableCell>{getStatusBadge(service.status)}</TableCell>
                                <TableCell>{service.runtime}</TableCell>
                                <TableCell>{service.region}</TableCell>
                                <TableCell>
                                    <a href={service.url} target="_blank" rel="noopener noreferrer">
                                        {service.url}
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.actionButtons}>
                                        <Button size="small" icon={<Play24Regular />} appearance="subtle" />
                                        <Button size="small" icon={<Stop24Regular />} appearance="subtle" />
                                        <Button size="small" icon={<Delete24Regular />} appearance="subtle" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default AppServicesPage;
