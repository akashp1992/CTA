import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import store from '../../redux/store'
import inMemoryJwtService from '../../services/inMemoryJwtService'
import AboutUs from '../About/AboutUs'
import AdminLogin from '../admin/Login/AdminLogin'
import Blogs from '../Blogs'
import Calculate from '../Calculate'
import Blog from '../Calculate/Blog'
import AlertScreen from '../common/AlertScreen'
import Footer from '../Footer'
import Home from '../Home/Home'
import LandingPage from '../Landing/LandingPage'
import NavBar from '../NavBar'
import Signin from '../Signin'
import Signup from '../Signup'
import Support from '../support/Support'

const Public = () => {
    const theme = createTheme()
    return (
        <>
            {console.log("token", inMemoryJwtService.getToken())}
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <NavBar />
                </ThemeProvider>
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/about`} element={<AboutUs />} />
                    <Route path={`/calculate`} element={<Calculate />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/blogs/:id" element={<Blogs />}></Route>
                    <Route
                        path={`/thankyou`}
                        element={
                            <ThemeProvider theme={theme}>
                                <LandingPage />
                            </ThemeProvider>
                        }
                    />
                    <Route path={`/mobile`} element={<AlertScreen />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin/>} />
                    {/* <Route path="/Login" element={<AdminLogin/>}/> */}
                </Routes>
                <ThemeProvider theme={theme}>
                    <Footer />
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default Public