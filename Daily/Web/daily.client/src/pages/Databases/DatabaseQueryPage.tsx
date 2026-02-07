import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Card,
    Text,
    Title3,
    Button,
    Textarea,
    Table,
    TableHeader,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Spinner,
    makeStyles,
    shorthands,
} from '@fluentui/react-components';
import {
    Play24Regular,
    Save24Regular,
    History24Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('24px'),
        height: 'calc(100vh - 120px)',
    },
    header: {
        marginBottom: '16px',
    },
    querySection: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('12px'),
        flex: '0 0 auto',
    },
    queryEditor: {
        height: '200px',
        fontFamily: 'Consolas, Monaco, monospace',
        fontSize: '14px',
    },
    actionBar: {
        display: 'flex',
        ...shorthands.gap('12px'),
    },
    resultsSection: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
    },
    resultsContainer: {
        flex: 1,
        ...shorthands.overflow('auto'),
        ...shorthands.padding('20px'),
    },
    statsBar: {
        display: 'flex',
        ...shorthands.gap('20px'),
        ...shorthands.padding('12px', '20px'),
        backgroundColor: '#f3f2f1',
        ...shorthands.borderBottom('1px', 'solid', '#e1dfdd'),
    },
});

const DatabaseQueryPage = () => {
    const { id } = useParams();
    const styles = useStyles();
    const [query, setQuery] = useState('SELECT * FROM AppServices');
    const [executing, setExecuting] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    const [executionTime, setExecutionTime] = useState<number | null>(null);

    const executeQuery = async () => {
        setExecuting(true);
        // Simulate query execution
        setTimeout(() => {
            setResults([
                { Id: 1, Name: 'daily-api-prod', Status: 'Running', Runtime: 'ASP.NET 8.0' },
                { Id: 2, Name: 'daily-web-prod', Status: 'Running', Runtime: 'Node.js 20' },
            ]);
            setExecutionTime(0.125);
            setExecuting(false);
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Title3>SQL Query Editor</Title3>
                <Text>Database: Daily Production Database (ID: {id})</Text>
            </div>

            <Card className={styles.querySection}>
                <Textarea
                    textarea={{ className: styles.queryEditor }}
                    value={query}
                    onChange={(_, data) => setQuery(data.value)}
                    placeholder="Enter your SQL query here..."
                />
                <div className={styles.actionBar}>
                    <Button
                        appearance="primary"
                        icon={<Play24Regular />}
                        onClick={executeQuery}
                        disabled={executing}
                    >
                        {executing ? 'Executing...' : 'Execute Query'}
                    </Button>
                    <Button icon={<Save24Regular />} appearance="subtle">
                        Save Query
                    </Button>
                    <Button icon={<History24Regular />} appearance="subtle">
                        Query History
                    </Button>
                </div>
            </Card>

            <Card className={styles.resultsSection}>
                <div className={styles.statsBar}>
                    <Text weight="semibold">Results</Text>
                    {executionTime && (
                        <>
                            <Text>Rows: {results.length}</Text>
                            <Text>Execution Time: {executionTime}s</Text>
                        </>
                    )}
                </div>
                <div className={styles.resultsContainer}>
                    {executing && <Spinner label="Executing query..." />}
                    {!executing && results.length > 0 && (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {Object.keys(results[0]).map((col) => (
                                        <TableHeaderCell key={col}>{col}</TableHeaderCell>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {results.map((row, idx) => (
                                    <TableRow key={idx}>
                                        {Object.values(row).map((val, i) => (
                                            <TableCell key={i}>{String(val)}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                    {!executing && results.length === 0 && (
                        <Text>No results. Execute a query to see results here.</Text>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default DatabaseQueryPage;
