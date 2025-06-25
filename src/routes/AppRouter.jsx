
import DuplicatesPage from "../pages/DuplicatesPage";
import LoginPage from "../pages/LoginPage";
import CounselorsPage from '../pages/CounselorsPage';
import NotFoundPage from '../pages/NotFoundPage';
import ParticipantsListPage from '../pages/ParticipantsListPage';
import StatsPage from '../pages/StatsPage';
import Dashboard from '../pages/DashboardPage'
import ToolsPage from '../pages/ToolsPage'
import UpdatePage from '../pages/UpdatePage'
import LeaderManagementPage from "../pages/LeaderManagementPage";
import AddLeaderPage from "../pages/AddLeaderPage";

import MainLayout from "../components/layout/Layout/MainLayout";

import { Route, Routes } from "react-router-dom";
import HelpPage from "../pages/HelpPage";


export default function AppRouter() {
    return (
        <Routes>
            {/* No layout route */}
            <Route path="/" element={<LoginPage />} />

            {/* Layout route */}
            <Route path="/*" element={<MainLayout />} >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="participants" element={<ParticipantsListPage />} />
                <Route path="stats" element={<StatsPage />} />
                <Route path="leaders" element={<CounselorsPage />} />
                <Route path="duplicates" element={<DuplicatesPage />} />
                <Route path="tools" element={<ToolsPage />} />
                <Route path="help" element={<HelpPage />} />
                <Route path="tools/update-database" element={<UpdatePage />} />
                <Route path="tools/manage-leaders" element={<LeaderManagementPage />} />
                <Route path="tools/add-leader" element={<AddLeaderPage />} />
            </Route>

            {/* Not found */}
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}