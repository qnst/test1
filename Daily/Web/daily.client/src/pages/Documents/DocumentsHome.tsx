import { Button, makeStyles, shorthands } from '@fluentui/react-components';
import { DocumentText24Regular, FolderOpen24Regular, CloudArrowUp24Regular } from '@fluentui/react-icons';

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
    actions: {
        display: 'flex',
        ...shorthands.gap('12px'),
        marginBottom: '32px',
    },
    section: {
        marginBottom: '32px',
    },
    sectionTitle: {
        fontSize: '16px',
        fontWeight: 600,
        marginBottom: '16px',
        color: '#323130',
    },
    fileList: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('8px'),
    },
    fileItem: {
        display: 'flex',
        alignItems: 'center',
        ...shorthands.padding('12px'),
        ...shorthands.borderRadius('4px'),
        backgroundColor: '#f5f5f5',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#e8e8e8',
        },
    },
    fileName: {
        flex: 1,
        fontSize: '14px',
    },
    fileDate: {
        fontSize: '12px',
        color: '#605e5c',
    },
    stats: {
        ...shorthands.padding('16px'),
        backgroundColor: '#f5f5f5',
        ...shorthands.borderRadius('4px'),
    },
});

const DocumentsHome = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>My Documents</h1>
            </div>

            <div className={styles.actions}>
                <Button appearance="primary" icon={<CloudArrowUp24Regular />}>
                    Upload
                </Button>
                <Button icon={<DocumentText24Regular />}>
                    Create
                </Button>
                <Button icon={<FolderOpen24Regular />}>
                    Import
                </Button>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Recent Files</h2>
                <div className={styles.fileList}>
                    <div className={styles.fileItem}>
                        <span className={styles.fileName}>Project_Spec.docx</span>
                        <span className={styles.fileDate}>2 hours ago</span>
                    </div>
                    <div className={styles.fileItem}>
                        <span className={styles.fileName}>Q1_Report.xlsx</span>
                        <span className={styles.fileDate}>Yesterday</span>
                    </div>
                    <div className={styles.fileItem}>
                        <span className={styles.fileName}>Meeting_Notes.md</span>
                        <span className={styles.fileDate}>2 days ago</span>
                    </div>
                    <div className={styles.fileItem}>
                        <span className={styles.fileName}>API_Documentation.pdf</span>
                        <span className={styles.fileDate}>3 days ago</span>
                    </div>
                </div>
            </div>

            <div className={styles.stats}>
                <div>Storage Usage</div>
                <div>2.3 GB of 10 GB used (23%)</div>
            </div>
        </div>
    );
};

export default DocumentsHome;
