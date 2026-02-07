import { useState } from 'react';
import { Button, Textarea, makeStyles, shorthands } from '@fluentui/react-components';
import { Play24Regular, Sparkle24Regular, Save24Regular } from '@fluentui/react-icons';
import SplitPanelLayout from '../../layouts/SplitPanelLayout';

const useStyles = makeStyles({
    schemaPanel: {
        ...shorthands.padding('16px'),
    },
    editorPanel: {
        ...shorthands.padding('16px'),
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    schemaTitle: {
        fontSize: '14px',
        fontWeight: 600,
        marginBottom: '12px',
    },
    schemaTree: {
        listStyle: 'none',
        ...shorthands.padding(0),
        ...shorthands.margin(0),
    },
    schemaItem: {
        ...shorthands.padding('6px', '8px'),
        cursor: 'pointer',
        fontSize: '13px',
        ...shorthands.borderRadius('4px'),
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
    header: {
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: '16px',
    },
    toolbar: {
        display: 'flex',
        ...shorthands.gap('8px'),
        marginBottom: '16px',
    },
    editor: {
        flex: 1,
        fontFamily: 'Consolas, Monaco, monospace',
        fontSize: '14px',
        minHeight: '300px',
    },
    results: {
        marginTop: '16px',
        ...shorthands.padding('16px'),
        backgroundColor: '#fafafa',
        ...shorthands.borderRadius('4px'),
    },
    resultsTitle: {
        fontSize: '14px',
        fontWeight: 600,
        marginBottom: '8px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '13px',
    },
    th: {
        textAlign: 'left',
        ...shorthands.padding('8px'),
        backgroundColor: '#e8e8e8',
        fontWeight: 600,
    },
    td: {
        ...shorthands.padding('8px'),
        ...shorthands.borderBottom('1px', 'solid', '#e1e1e1'),
    },
});

const DatabaseQueryEditor = () => {
    const styles = useStyles();
    const [query, setQuery] = useState('SELECT u.id, u.name, u.email,\n  COUNT(t.id) as task_count\nFROM users u\nLEFT JOIN tasks t ON u.id = t.user_id\nWHERE u.active = true\nGROUP BY u.id\nORDER BY task_count DESC;');
    const [results, setResults] = useState([
        { id: 1, name: 'John', email: 'john@ex.com', tasks: 12 },
        { id: 2, name: 'Sarah', email: 'sarah@ex.com', tasks: 8 },
        { id: 3, name: 'Mike', email: 'mike@ex.com', tasks: 15 },
    ]);

    const schemaPanel = (
        <div className={styles.schemaPanel}>
            <div className={styles.schemaTitle}>Schema</div>
            <div style={{ marginBottom: '8px', fontSize: '13px', fontWeight: 600 }}>localhost</div>
            <ul className={styles.schemaTree}>
                <li className={styles.schemaItem}>Tables</li>
                <li className={styles.schemaItem} style={{ paddingLeft: '24px' }}>users</li>
                <li className={styles.schemaItem} style={{ paddingLeft: '24px' }}>tasks</li>
                <li className={styles.schemaItem} style={{ paddingLeft: '24px' }}>logs</li>
                <li className={styles.schemaItem}>Views</li>
                <li className={styles.schemaItem} style={{ paddingLeft: '24px' }}>stats</li>
            </ul>
        </div>
    );

    const editorPanel = (
        <div className={styles.editorPanel}>
            <h1 className={styles.header}>Query Editor</h1>
            
            <div className={styles.toolbar}>
                <Button appearance="primary" icon={<Play24Regular />}>Run Query</Button>
                <Button icon={<Sparkle24Regular />}>Format</Button>
                <Button icon={<Save24Regular />}>Save</Button>
            </div>

            <Textarea
                className={styles.editor}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                resize="vertical"
            />

            <div className={styles.results}>
                <div className={styles.resultsTitle}>Results: {results.length} rows in 0.023s</div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((row) => (
                            <tr key={row.id}>
                                <td className={styles.td}>{row.id}</td>
                                <td className={styles.td}>{row.name}</td>
                                <td className={styles.td}>{row.email}</td>
                                <td className={styles.td}>{row.tasks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    <Button size="small">Export CSV</Button>
                    <Button size="small">Export JSON</Button>
                </div>
            </div>
        </div>
    );

    return <SplitPanelLayout leftPanel={schemaPanel} rightPanel={editorPanel} />;
};

export default DatabaseQueryEditor;
