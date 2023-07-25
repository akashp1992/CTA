import React, { useEffect, useState } from 'react'
import Drawer from '../components/client/Drawer'
import Dashboard from '../components/client/Dashboard/Dashboard'
import Project from '../components/client/Projects/Project'
import Faq from '../components/client/Faq/Faq'
import Setting from '../components/client/Projects/Setting'
import ForgotPassword from '../components/client/Projects/ForgotPassword'
import CreateProject from '../components/client/Projects/CreateProject'
import StepperProcess from '../components/client/Projects/StepperProcess'
import BulkUpload from '../components/client/Bulk/BulkUpload'
import Favourite from '../components/client/Projects/Favourite'
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import { createTheme, useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Toast from '../components/client/Common/Toast'
import CustomizedSnackbar from '../components/admin/Common/Snackbar'
import { useDispatch } from 'react-redux'
import { toogleSnackbar } from '../redux/client/common/snackbarSlice'
import Swal from 'sweetalert2'

const Client = () => {
    const [user, setUser] = useState(Date.now())
    const navigate = useNavigate()
    const theme = createTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
    const [msg, setMsg] = useState("")
    const [type, setType] = useState("")
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (Date.now() === localStorage.getItem("logout")) {
            //dispatch(toogleSnackbar({ open: true, type: "error", msg: "You are not Authenticated" }))
            navigate("/")
        } if (isTablet) {
            navigate("/")
        }
        
        // if (isTablet) {
        //     Swal.fire(
        //         'Currently your CTAF dashboard is accessible just on Desktop Version!',
        //         'We will soon launch on other devices and you will be first one to know :)',
        //         'success'
        //     ).then((result) => {
        //         if (result.isConfirmed) {
        //             navigate("/")
        //         }
        //     })
        // }

    }, [user, isTablet])
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CustomizedSnackbar />
                <Drawer>
                    <Routes>
                        <Route path={`/Home`} element={<Dashboard />} />
                        <Route path={`/Project`} element={<Project />} />
                        <Route path={`/Faq`} element={<Faq />} />
                        <Route path={`/Settings/:id`} element={<Setting />} />
                        <Route path={`/Forgot`} element={<ForgotPassword />} />
                        <Route path={`/Create`} element={<CreateProject />} />
                        <Route path={`/Create/Process/:projectId/:status`} element={<StepperProcess />} />
                        <Route path={`/BulkUpload`} element={<BulkUpload />} />
                        <Route path={`/Favorite`} element={<Favourite />} />
                    </Routes>

                </Drawer>
            </ThemeProvider>
            <Toast open={open} handleClose={() => setOpen(false)} type={type} msg={msg} />
        </Provider>
    )
}

export default Client