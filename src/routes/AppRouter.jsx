
import DuplicatesPage from "../pages/DuplicatesPage";
import LoginPage from "../pages/LoginPage";
import LeaderManagementPage from '../pages/LeaderManagementPage';
import NotFoundPage from '../pages/NotFoundPage';
import ParticipantsListPage from '../pages/ParticipantsListPage';
import StatsPage from '../pages/StatsPage';
import Dashboard from '../pages/DashboardPage'

//import { DulicatesPage, LoginPage, LeaderManagementPage, NotfoundPage, ParticipantsListPage, StatsPage } from '../pages'

import { Route, Routes } from "react-router-dom";
import HelpPage from "../pages/HelpPage";


export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/participants" element={<ParticipantsListPage/>}/>
            <Route path="/stats" element={<StatsPage/>}/>
            <Route path="/leaders" element={<LeaderManagementPage/>}/>
            <Route path="/duplicates" element={<DuplicatesPage/>}/>
            <Route path="/help" element={<HelpPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}