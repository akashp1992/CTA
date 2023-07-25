import { ThemeProvider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import landingImage from "../../images/landing.svg";
import logo from "../../images/logo.svg";
import logo2 from "../../images/CTALogo2.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useStyle = makeStyles((theme) => ({
  mainRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    marginBottom: "50px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "60px !important",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "80px",
    },
  },
  mainImage: {
    width: "40%",
    objectFit: "cover",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
  },
  thankTypo: {
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
    fontSize: "55px !important",
    color: "#06283D !important",
    marginTop: "20px !important",
    [theme.breakpoints.only("xs")]: {
      fontSize: "40px !important",
      width: "100% !important",
      textAlign: "center !important",
    },
  },
  spanTypo: {
    color: "#3330E4 !important",
  },
  typoP: {
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    color: "#06283D !important",
    textAlign: "center !important",
    marginTop: "20px !important",
    [theme.breakpoints.only("xs")]: {
      padding: "10px 10px !important"
    },
  },
  // logo:{
  //   width:"230px"
  // }
}));
function LandingPage() {
  const classes = useStyle();
  const navigate = useNavigate()
  const auth = Date.now()
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
  useEffect(() => {

    setTimeout(() => {

      const userAuth = JSON.parse(localStorage.getItem('authUser'))
      if (!userAuth) {
        return
      } else {
        if (isTablet) {
          Swal.fire(
            {
              title: 'Currently your CTAF dashboard is accessible just on Desktop Version!',
              text: "We will soon launch on other devices and you will be first one to know :)",
              confirmButtonText: 'Yes'
            }
          ).then((result) => {
            if (result.isConfirmed) {
              navigate("/")
            }
          })
        } else {
          navigate("/dashboard/Home", { replace: true })
          window.location.reload(false)
        }

      }

    }, 2000)

  }, [])
  return (
    <ThemeProvider>
      <div className={classes.mainRoot}>
        {/* <img src={logo2} alt="logo" className={classes.logo}/> */}
        <img src={landingImage} alt="landing" className={classes.mainImage} />
        <Typography className={classes.thankTypo}>
          Thank you for <span className={classes.spanTypo}>Signing Up</span>
        </Typography>
        <Typography component="p" className={classes.typoP}>
          We will be on top of sharing the information on Corporates
          Transparency Act.
          <br />
          You will also get the early access to our CTA filing portal that will
          help you file <br />
          your CTA swiftly!
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;
