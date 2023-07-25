import React, { useState } from "react";
import SignupBanner from "../Calculate/SignupBanner";
import AboutSignUp from "./AboutSignUp";
import Banner from "./Banner";
import Information from "./Information";
import MustFile from "./MustFile";
import WhoCanHelp from "./WhoCanHelp";
import WhyCta from "./WhyCta";
import FAQ from "../Calculate/FAQ";
import Contact from "../Calculate/Contact";
import Timings from "./Timings";
import { ThemeProvider } from "@mui/styles";
import { createTheme, useMediaQuery } from "@mui/material";

import AboutCta from "../AboutCta";
import FreezBanner from "../FreezeBanner/FreezBanner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const theme = createTheme();
  const navigate = useNavigate()
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  useEffect(() => {
    const userAuth = JSON.parse(localStorage.getItem('authUser'))
    if (!userAuth) {
      return
    } else {
      isTablet ?
        navigate("/about") :
        navigate("/dashboard/Home")
    }
  }, [])
  return (
    <div>

      <ThemeProvider theme={theme}>
        <Banner />
        <MustFile />
        {/* <AboutSignUp /> */}
        <Information />
        {/* <Timings /> */}
        {/* <SignupBanner bg="white" /> */}
        <WhyCta />
        <WhoCanHelp />
        <FAQ />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default AboutUs;
