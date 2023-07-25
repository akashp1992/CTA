import React, { useEffect } from "react";
import Banner from "./Banner.js";
import AboutCta from "./AboutCta";

import Timings from "../About/Timings";
import FileWithUs from "./FileWithUs";
import Benefits from "./Benefits";
import Help from "./Help";
import Signup from "./Signup";
import Information from "./Information";
import Partners from "./Partners";
import FAQ from "../Calculate/FAQ";
import Blog from "../Calculate/Blog";
import Contact from "../Calculate/Contact";
import AboutSignUp from "../About/AboutSignUp.js";
import { ThemeProvider } from "@mui/styles";
import { createTheme, useMediaQuery } from "@mui/material";
import AboutCtaCard from "./AboutCtaCard.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const theme = createTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const navigate = useNavigate()
  useEffect(() => {
    const userAuth = JSON.parse(localStorage.getItem('authUser'))
    if (!userAuth) {
      return
    } else {
      isTablet ?
        navigate("/") :
        navigate("/dashboard/Home")
    }
  }, [isTablet])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Banner />
        <AboutCta />
        {/* <AboutCtaCard/>  */}
        <Timings />
        <FileWithUs />
        <Benefits />
        <AboutSignUp />
        {/* <Help /> */}
        {/* <Information /> */}
        <Partners />
        <FAQ />
        {/* <Blog /> */}
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default Home;
