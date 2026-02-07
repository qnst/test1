import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import CategoryLayout from './layouts/CategoryLayout';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

// Documents
import DocumentsHome from './pages/Documents/DocumentsHome';
import DocumentsSidebar from './components/DocumentsSidebar';

// Databases
import DatabasesHome from './pages/Databases/DatabasesHome';
import DatabaseQueryEditor from './pages/Databases/DatabaseQueryEditor';
import DatabasesSidebar from './components/DatabasesSidebar';

// Development
import DevelopmentHome from './pages/Development/DevelopmentHome';
import WorkJournal from './pages/Development/WorkJournal';
import JournalEntry from './pages/Development/JournalEntry';
import DevelopmentSidebar from './components/DevelopmentSidebar';

// Azure App Services
import AzureHome from './pages/AzureAppServices/AzureHome';
import AzureSidebar from './components/AzureSidebar';

// Legacy pages
import DatabasesPage from './pages/Databases/DatabasesPage';
import DatabaseQueryPage from './pages/Databases/DatabaseQueryPage';
import DocumentsPage from './pages/Documents/DocumentsPage';
import SettingsPage from './pages/Settings/SettingsPage';

function App() {
    return (
        <FluentProvider theme={webLightTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        
                        {/* Documents Category */}
                        <Route path="documents" element={<CategoryLayout sidebarContent={<DocumentsSidebar />} />}>
                            <Route index element={<DocumentsHome />} />
                            <Route path="my-docs" element={<DocumentsHome />} />
                            <Route path="shared" element={<DocumentsHome />} />
                            <Route path="recent" element={<DocumentsHome />} />
                            <Route path="templates" element={<DocumentsHome />} />
                            <Route path="trash" element={<DocumentsHome />} />
                        </Route>

                        {/* Databases Category */}
                        <Route path="databases" element={<CategoryLayout sidebarContent={<DatabasesSidebar />} />}>
                            <Route index element={<DatabasesHome />} />
                            <Route path="connections" element={<DatabasesHome />} />
                            <Route path="query" element={<DatabaseQueryEditor />} />
                            <Route path="schema" element={<DatabasesHome />} />
                            <Route path="history" element={<DatabasesHome />} />
                        </Route>

                        {/* Development Category */}
                        <Route path="development" element={<CategoryLayout sidebarContent={<DevelopmentSidebar />} />}>
                            <Route index element={<DevelopmentHome />} />
                            <Route path="journal" element={<WorkJournal />} />
                            <Route path="journal/:id" element={<JournalEntry />} />
                            <Route path="code" element={<DevelopmentHome />} />
                            <Route path="projects" element={<DevelopmentHome />} />
                        </Route>

                        {/* Azure App Services Category */}
                        <Route path="azure" element={<CategoryLayout sidebarContent={<AzureSidebar />} />}>
                            <Route index element={<AzureHome />} />
                            <Route path="all" element={<AzureHome />} />
                            <Route path="deployment" element={<AzureHome />} />
                            <Route path="monitoring" element={<AzureHome />} />
                            <Route path=":serviceName" element={<AzureHome />} />
                        </Route>

                        {/* Legacy routes */}
                        <Route path="documents-legacy" element={<DocumentsPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </FluentProvider>
    );
}

export default App;