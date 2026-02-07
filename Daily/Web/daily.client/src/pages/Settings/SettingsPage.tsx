import {
    Card,
    Text,
    Title3,
    makeStyles,
    shorthands,
} from '@fluentui/react-components';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('24px'),
    },
    header: {
        marginBottom: '16px',
    },
});

const SettingsPage = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Title3>Settings</Title3>
                <Text>Configure your application settings and preferences</Text>
            </div>

            <Card style={{ padding: '20px' }}>
                <Text>Settings page - Configure application preferences, user settings, and system configurations here.</Text>
            </Card>
        </div>
    );
};

export default SettingsPage;
