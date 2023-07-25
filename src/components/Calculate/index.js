import React from 'react'
import SecondBanner from './SecondBanner';
import SignupBanner from './SignupBanner';
import CorporateAct from './CorporateAct';
import FAQ from './FAQ.js';
import Blog from './Blog.js';
import Contact from './Contact';
import { ThemeProvider } from '@mui/styles';
import { createTheme, useMediaQuery } from '@mui/material';
import Banner from './Banner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Calculate() {
    const theme = createTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const navigate = useNavigate()
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    useEffect(() => {
        const userAuth = JSON.parse(localStorage.getItem('authUser'))
        if (!userAuth) {
            return
        } else {
            isTablet ?
                navigate("/calculate") :
                navigate("/dashboard/Home")
        }
    }, [])

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Banner />
                <SignupBanner />
                <CorporateAct />
                <FAQ />

                <Contact />
            </ThemeProvider>
        </div>
    )
}

export default Calculate