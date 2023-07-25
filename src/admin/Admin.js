import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import React from 'react'
import Dashboard from '../components/admin/Dashboard/Dashboard'
import Errors from '../components/admin/Errors/Errors'
import Project from '../components//admin/Users/Users';
import Pricing from '../components/admin/Pricing/Pricing';
import CreateTeamForm from '../components/admin/Team/CreateTeamForm';
import Team from '../components/admin/Team/Team';
import CreatePlan from '../components/admin/Pricing/CreatePlan';
import NewNotification from '../components/admin/NewNotification';
import Drawer from "../components/admin/Drawer"
import { Route, Routes } from 'react-router-dom'
import CreateMember from '../components/admin/Team/CreateMember'
import CustomizedSnackbar from '../components/admin/Common/Snackbar'
import Groups from '../components/admin/Groups/Groups'
import GroupManage from '../components/admin/Groups/GroupManage'
const Admin = () => {
    const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
            <CustomizedSnackbar />
            <Drawer>
                <Routes>
                    <Route path={`/Home`} element={<Dashboard />} />
                    <Route path={`/errors`} element={<Errors />} />
                    <Route path={`/Project`} element={<Project />} />
                    <Route path={`/Teams`} element={<Team />} />
                    <Route path={`/Users`} element={<Pricing />} />
                    <Route path={`/CreateTeamForm`} element={<CreateTeamForm />} />
                    <Route path="/CreateTeamMember" element={<CreateMember />} />
                    <Route path={`/CreatePlan`} element={<CreatePlan />} />
                    <Route path="/CreateGroup" element={<GroupManage />} />
                    <Route path="/Groups" element={<Groups />} />
                    <Route path={`/NewNotification`} element={<NewNotification />} />
                    <Route />
                </Routes>
            </Drawer>
        </ThemeProvider>
    )
}

export default Admin