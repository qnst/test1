import { Button, makeStyles, shorthands } from '@fluentui/react-components';
import { DocumentAdd24Regular, Code24Regular, Book24Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        ...shorthands.padding('32px'),
    },
    header: {
        marginBottom: '32px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '8px',
    },
    subtitle: {
        fontSize: '14px',
        color: '#605e5c',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        ...shorthands.gap('24px'),
    },
    card: {
        ...shorthands.padding('24px'),
        ...shorthands.border('1px', 'solid', '#e1e1e1'),
        ...shorthands.borderRadius('8px'),
        backgroundColor: '#fff',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
            ...shorthands.borderColor('#0078D4'),
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transform: 'translateY(-2px)',
        },
    },
    cardIcon: {
        fontSize: '32px',
        marginBottom: '16px',
        color: '#0078D4',
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '8px',
    },
    cardDescription: {
        fontSize: '13px',
        color: '#605e5c',
        lineHeight: '1.5',
    },
    stats: {
        display: 'flex',
        ...shorthands.gap('32px'),
        marginTop: '32px',
        ...shorthands.padding('24px'),
        backgroundColor: '#f5f5f5',
        ...shorthands.borderRadius('8px'),
    },
    stat: {
        flex: 1,
    },
    statValue: {
        fontSize: '28px',
        fontWeight: 600,
        color: '#0078D4',
    },
    statLabel: {
        fontSize: '13px',
        color: '#605e5c',
        marginTop: '4px',
    },
});

const DevelopmentHome = () => {
    const styles = useStyles();
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Development</h1>
                <p className={styles.subtitle}>
                    Document your work, manage code snippets, and track project information
                </p>
            </div>

            <div className={styles.grid}>
                <div className={styles.card} onClick={() => navigate('/development/journal')}>
                    <div className={styles.cardIcon}>
                        <DocumentAdd24Regular />
                    </div>
                    <div className={styles.cardTitle}>Work Journal</div>
                    <div className={styles.cardDescription}>
                        Document what you've built, keep implementation notes, and track your development progress
                    </div>
                </div>

                <div className={styles.card} onClick={() => navigate('/development/code')}>
                    <div className={styles.cardIcon}>
                        <Code24Regular />
                    </div>
                    <div className={styles.cardTitle}>Code Library</div>
                    <div className={styles.cardDescription}>
                        Store code snippets, templates, and solutions for quick reference and reuse
                    </div>
                </div>

                <div className={styles.card} onClick={() => navigate('/development/projects')}>
                    <div className={styles.cardIcon}>
                        <Book24Regular />
                    </div>
                    <div className={styles.cardTitle}>Projects</div>
                    <div className={styles.cardDescription}>
                        Manage project information, documentation, and resources in one place
                    </div>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <div className={styles.statValue}>24</div>
                    <div className={styles.statLabel}>Journal Entries</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statValue}>156</div>
                    <div className={styles.statLabel}>Code Snippets</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statValue}>8</div>
                    <div className={styles.statLabel}>Active Projects</div>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentHome;
