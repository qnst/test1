import { useState, useEffect } from 'react';
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
    Input,
    Dropdown,
    Option,
    makeStyles,
    shorthands,
} from '@fluentui/react-components';
import {
    ArrowUpload24Regular,
    ArrowDownload24Regular,
    Delete24Regular,
    DocumentPdf24Regular,
    DocumentTable24Regular,
    Document24Regular,
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
    filters: {
        display: 'flex',
        ...shorthands.gap('12px'),
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

interface Document {
    id: number;
    fileName: string;
    displayName: string;
    fileType: string;
    category: string;
    fileSizeBytes: number;
    uploadedBy: string;
    uploadedDate: string;
}

const DocumentsPage = () => {
    const styles = useStyles();
    const [documents, setDocuments] = useState<Document[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        // Simulated data - replace with actual API call
        setTimeout(() => {
            setDocuments([
                {
                    id: 1,
                    fileName: 'project-requirements.pdf',
                    displayName: 'Project Requirements',
                    fileType: 'pdf',
                    category: 'Documentation',
                    fileSizeBytes: 2048000,
                    uploadedBy: 'John Doe',
                    uploadedDate: '2026-01-20'
                },
                {
                    id: 2,
                    fileName: 'data-export.xlsx',
                    displayName: 'Monthly Data Export',
                    fileType: 'xlsx',
                    category: 'Reports',
                    fileSizeBytes: 512000,
                    uploadedBy: 'Jane Smith',
                    uploadedDate: '2026-01-25'
                },
                {
                    id: 3,
                    fileName: 'api-specification.docx',
                    displayName: 'API Specification Document',
                    fileType: 'docx',
                    category: 'Technical',
                    fileSizeBytes: 1024000,
                    uploadedBy: 'Mike Johnson',
                    uploadedDate: '2026-01-22'
                },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const getFileIcon = (fileType: string) => {
        if (fileType === 'pdf') return <DocumentPdf24Regular />;
        if (fileType === 'xlsx' || fileType === 'xls') return <DocumentTable24Regular />;
        return <Document24Regular />;
    };

    const getFileTypeBadge = (fileType: string) => {
        const color = fileType === 'pdf' ? 'danger' : fileType.includes('xls') ? 'success' : 'brand';
        return <Badge appearance="tint" color={color}>{fileType.toUpperCase()}</Badge>;
    };

    if (loading) {
        return <Spinner label="Loading documents..." />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <Title3>Document Management</Title3>
                    <Text>Upload, manage, and organize your documents</Text>
                </div>
                <Button appearance="primary" icon={<ArrowUpload24Regular />}>
                    Upload Document
                </Button>
            </div>

            <div className={styles.filters}>
                <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(_, data) => setSearchTerm(data.value)}
                    style={{ width: '300px' }}
                />
                <Dropdown
                    placeholder="Filter by category"
                    value={selectedCategory}
                    onOptionSelect={(_, data) => setSelectedCategory(data.optionValue as string)}
                    style={{ width: '200px' }}
                >
                    <Option value="all">All Categories</Option>
                    <Option value="documentation">Documentation</Option>
                    <Option value="reports">Reports</Option>
                    <Option value="technical">Technical</Option>
                </Dropdown>
            </div>

            <Card>
                <Table className={styles.table}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>File Name</TableHeaderCell>
                            <TableHeaderCell>Type</TableHeaderCell>
                            <TableHeaderCell>Category</TableHeaderCell>
                            <TableHeaderCell>Size</TableHeaderCell>
                            <TableHeaderCell>Uploaded By</TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Actions</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {documents.map((doc) => (
                            <TableRow key={doc.id}>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getFileIcon(doc.fileType)}
                                        <div>
                                            <Text weight="semibold">{doc.displayName}</Text>
                                            <br />
                                            <Text size={200}>{doc.fileName}</Text>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{getFileTypeBadge(doc.fileType)}</TableCell>
                                <TableCell>{doc.category}</TableCell>
                                <TableCell>{formatFileSize(doc.fileSizeBytes)}</TableCell>
                                <TableCell>{doc.uploadedBy}</TableCell>
                                <TableCell>{new Date(doc.uploadedDate).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <div className={styles.actionButtons}>
                                        <Button size="small" icon={<ArrowDownload24Regular />} appearance="subtle" title="Download" />
                                        <Button size="small" icon={<Delete24Regular />} appearance="subtle" title="Delete" />
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

export default DocumentsPage;
