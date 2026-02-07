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
    DatabaseSearch24Regular,
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

interface DatabaseInfo {
    id: number;
    name: string;
    displayName: string;
    databaseType: string;
    status: string;
    sizeMB: number;
    serverName: string;
}

const DatabasesPage = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const [databases, setDatabases] = useState<DatabaseInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulated data - replace with actual API call
        setTimeout(() => {
            setDatabases([
                {
                    id: 1,
                    name: 'daily_production',
                    displayName: 'Daily Production Database',
                    databaseType: 'SQL Server',
                    status: 'Online',
                    sizeMB: 2048,
                    serverName: 'daily-sql-server.database.windows.net'
                },
                {
                    id: 2,
                    name: 'daily_analytics',
                    displayName: 'Analytics Database',
                    databaseType: 'PostgreSQL',
                    status: 'Online',
                    sizeMB: 5120,
                    serverName: 'daily-postgres.database.windows.net'
                },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const getStatusBadge = (status: string) => {
        return <Badge appearance="filled" color={status === 'Online' ? 'success' : 'danger'}>{status}</Badge>;
    };

    if (loading) {
        return <Spinner label="Loading databases..." />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <Title3>Databases</Title3>
                    <Text>Manage your database connections and execute queries</Text>
                </div>
                <Button appearance="primary" icon={<Add24Regular />}>
                    Add Database Connection
                </Button>
            </div>

            <Card>
                <Table className={styles.table}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Database Name</TableHeaderCell>
                            <TableHeaderCell>Type</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                            <TableHeaderCell>Size</TableHeaderCell>
                            <TableHeaderCell>Server</TableHeaderCell>
                            <TableHeaderCell>Actions</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {databases.map((db) => (
                            <TableRow key={db.id}>
                                <TableCell>
                                    <Text weight="semibold">{db.displayName}</Text>
                                    <br />
                                    <Text size={200}>{db.name}</Text>
                                </TableCell>
                                <TableCell>{db.databaseType}</TableCell>
                                <TableCell>{getStatusBadge(db.status)}</TableCell>
                                <TableCell>{db.sizeMB} MB</TableCell>
                                <TableCell><Text size={200}>{db.serverName}</Text></TableCell>
                                <TableCell>
                                    <div className={styles.actionButtons}>
                                        <Button
                                            size="small"
                                            icon={<DatabaseSearch24Regular />}
                                            appearance="primary"
                                            onClick={() => navigate(`/databases/${db.id}/query`)}
                                        >
                                            Query
                                        </Button>
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

export default DatabasesPage;
