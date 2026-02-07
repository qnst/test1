import { useState } from 'react';
import { Button, Card, makeStyles, shorthands } from '@fluentui/react-components';
import { DocumentAdd24Regular } from '@fluentui/react-icons';
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
    entryList: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('16px'),
    },
    entryCard: {
        ...shorthands.padding('20px'),
        ...shorthands.border('1px', 'solid', '#e1e1e1'),
        ...shorthands.borderRadius('8px'),
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
            ...shorthands.borderColor('#0078D4'),
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
    },
    entryTitle: {
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '8px',
    },
    entryMeta: {
        fontSize: '13px',
        color: '#605e5c',
        marginBottom: '12px',
    },
    entryDescription: {
        fontSize: '14px',
        color: '#323130',
        lineHeight: '1.5',
    },
    tags: {
        display: 'flex',
        ...shorthands.gap('8px'),
        marginTop: '12px',
    },
    tag: {
        ...shorthands.padding('4px', '12px'),
        backgroundColor: '#f5f5f5',
        ...shorthands.borderRadius('12px'),
        fontSize: '12px',
        color: '#323130',
    },
});

const WorkJournal = () => {
    const styles = useStyles();
    const navigate = useNavigate();

    const entries = [
        {
            id: 1,
            title: 'Authentication Module Implementation',
            date: 'Feb 5, 2026',
            updated: '2 hours ago',
            description: 'Implemented JWT-based authentication system with refresh tokens and role-based access control. Includes login, logout, token refresh and permission validation middleware.',
            tags: ['Authentication', 'JWT', 'Security'],
        },
        {
            id: 2,
            title: 'Database Migration to PostgreSQL',
            date: 'Feb 3, 2026',
            updated: '2 days ago',
            description: 'Migrated production database from SQL Server to PostgreSQL. Updated all queries, stored procedures, and connection configurations.',
            tags: ['Database', 'PostgreSQL', 'Migration'],
        },
        {
            id: 3,
            title: 'React Component Library Setup',
            date: 'Feb 1, 2026',
            updated: '4 days ago',
            description: 'Set up a reusable component library using Fluent UI. Created base components for buttons, forms, cards, and navigation.',
            tags: ['React', 'Components', 'UI'],
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Work Journal</h1>
                <Button appearance="primary" icon={<DocumentAdd24Regular />}>
                    New Entry
                </Button>
            </div>

            <div className={styles.entryList}>
                {entries.map((entry) => (
                    <div
                        key={entry.id}
                        className={styles.entryCard}
                        onClick={() => navigate(`/development/journal/${entry.id}`)}
                    >
                        <div className={styles.entryTitle}>{entry.title}</div>
                        <div className={styles.entryMeta}>
                            Created: {entry.date} | Updated: {entry.updated}
                        </div>
                        <div className={styles.entryDescription}>{entry.description}</div>
                        <div className={styles.tags}>
                            {entry.tags.map((tag) => (
                                <span key={tag} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkJournal;
