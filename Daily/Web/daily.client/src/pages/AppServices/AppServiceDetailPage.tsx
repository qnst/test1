import { useParams } from 'react-router-dom';
import {
    Card,
    Text,
    Title3,
    Tab,
    TabList,
    makeStyles,
    shorthands,
} from '@fluentui/react-components';
import { useState } from 'react';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap('24px'),
    },
    header: {
        marginBottom: '16px',
    },
    tabContent: {
        ...shorthands.padding('20px'),
    },
});

const AppServiceDetailPage = () => {
    const { id } = useParams();
    const styles = useStyles();
    const [selectedTab, setSelectedTab] = useState('overview');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Title3>Daily API Production</Title3>
                <Text>App Service Details - ID: {id}</Text>
            </div>

            <Card>
                <TabList
                    selectedValue={selectedTab}
                    onTabSelect={(_, data) => setSelectedTab(data.value as string)}
                >
                    <Tab value="overview">Overview</Tab>
                    <Tab value="configuration">Configuration</Tab>
                    <Tab value="monitoring">Monitoring</Tab>
                    <Tab value="logs">Logs</Tab>
                    <Tab value="deployment">Deployment</Tab>
                </TabList>

                <div className={styles.tabContent}>
                    {selectedTab === 'overview' && (
                        <div>
                            <Text weight="semibold">Status:</Text> Running<br />
                            <Text weight="semibold">URL:</Text> https://daily-api-prod.azurewebsites.net<br />
                            <Text weight="semibold">Runtime:</Text> ASP.NET 8.0<br />
                            <Text weight="semibold">Region:</Text> East US
                        </div>
                    )}
                    {selectedTab === 'configuration' && (
                        <Text>Configuration settings will be displayed here</Text>
                    )}
                    {selectedTab === 'monitoring' && (
                        <Text>Performance metrics and monitoring data</Text>
                    )}
                    {selectedTab === 'logs' && (
                        <Text>Application logs will be displayed here</Text>
                    )}
                    {selectedTab === 'deployment' && (
                        <Text>Deployment history and options</Text>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default AppServiceDetailPage;
