import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
// import logo from "../../images/logo.svg";
import logo from "../../images/CTALogo2.svg";
import checkbox from "../../images/checkbox.svg";
import upload from "../../images/upload.svg";
import banner1 from "../../images/banner1.svg";
import banner2 from "../../images/banner2.svg";
import noteBack from "../../images/bgNote.svg";
import { useEffect } from "react";
import { useState } from "react";
import FormDialog from "../Login/FormDialog";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    background: `url(${noteBack}) no-repeat`,
    backgroundPosition: "center 35px",
    backgroundSize: "75%",
    paddingBottom: "10rem",

    [theme.breakpoints.only("xl")]: {
      paddingBottom: "18rem !important",
    },
    [theme.breakpoints.down("sm")]: {
      background: "none",
      padding: 0,
    },
    // [theme.breakpoints.down("md")]: {

    //   background: `url(${banner2}) no-repeat`,
    //   backgroundSize: '100%',
    //   backgroundPosition: 'center bottom',

    // },
  },
  hero: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    background: `url(${banner1}) no-repeat`,
    backgroundSize: 'cover',
    zIndex: '-1',
    opacity: '0.20',
    backgroundPosition: 'center',
    "&::before": {
      content: "",
      position: "absolute",
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'

    }
  },
  banner: {
    padding: "0 38px",
    marginTop: "90px",
    position: "relative",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navs: {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    width: "410px",
    height: "28px",
  },

  items: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#06283D !important",
    fontFamily: "poppins",
  },
  item: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#06283D !important",
    fontFamily: "poppins",
  },
  forms: {
    fontSize: "15px",
    fontWeight: "regular ",
    color: "#06283D !important",
    fontFamily: "poppins",
  },
  content: {
    textAlign: "center",
    marginTop: "-100px",
    fontFamily: "poppins",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.only("xl")]: {
      marginBottom: "70px",
    },

  },
  title: {
    fontFamily: "poppins",
    color: "#06283D",
    fontSize: "45px !important",
    fontWeight: 600,
    lineSpace: "79px",
    paddingTop: "40px",
    lineHeight: "60px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px !important",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "20px !important",
    },

  },
  description: {
    color: "#06283D",
    fontFamily: "poppins",
    fontSize: "14px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  heading: {
    color: "#06283D",
    fontFamily: "poppins",
    fontSize: "16px",
    marginTop: "30px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  acts: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      width: "100%",
    },
  },
  act: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  button: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  data: {
    width: "250px",
    cursor: "pointer",
    height: "35px",
    display: "flex",
    justifyContent: "space-around",
    background: "#3330E4",
    alignItems: "center",
    color: "white",
    fontSize: "15px",
    fontWeight: 500,
    textTransform: "uppercase",
    borderRadius: "4px",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%)",
  },
  icon: {
    marginRight: "5px",
    width: "19px",
  },
  images: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  left: {
    position: "absolute",
    left: 0,
    width: "400px",
    bottom: "-17rem",
    height: "549px",
    [theme.breakpoints.only("xl")]: {
      left: 0,
      width: "580px",
      bottom: "-16rem",
    },
    [theme.breakpoints.down("lg")]: {
      width: "300px",
      bottom: "-20rem",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "-22rem",
    },
  },
  right: {
    position: "absolute",
    right: 0,
    width: "500px",
    bottom: "-9.5rem",
    [theme.breakpoints.only("xl")]: {
      width: "645px",
      bottom: "-13rem",
    },
    [theme.breakpoints.down("lg")]: {
      width: "380px",
      bottom: "-11rem",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "-12rem",
      width: "330px",
    },
  },
  tagMain: {
    display: "flex",
    marginTop: "10px",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "220px",
    marginTop: "10px",
    [theme.breakpoints.only("xs")]: {
      width: "180px",
      marginTop: "40px"
    },
  },
}));

function Banner() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleRedirect = () => {
    let path = `/landing`;
    navigate(path);
  };

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <div className={classes.main}>
      <div className={classes.banner}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <img src={logo} className={classes.logo} />
          </div>
          {
            mobile ?
              <div className={classes.hero} /> : ""
          }
          <div className={classes.title}>
            <p>The Corporate Act is Here!</p>
            <p>Are You Ready To File?</p>
          </div>
          <div className={classes.description}>
            <p>
              America's First Online CTA Filing Management Portal
              {/* <br />
           Filing Dates, Requirements, Exemptions & Updates + 30% Off CTA
           Filer Services */}
            </p>
          </div>
          <div className={classes.tagMain}>
            <div>
              <p style={{ marginLeft: "15px", fontWeight: "600" }}>Seamless</p>
            </div>
            <div>
              <p
                style={{
                  marginLeft: "15px",
                  fontWeight: "600",
                  color: "#3330E4",
                }}
              >
                |
              </p>
            </div>
            <div>
              <p style={{ marginLeft: "15px", fontWeight: "600" }}>
                Accessible
              </p>
            </div>
            <div>
              <p
                style={{
                  marginLeft: "15px",
                  fontWeight: "600",
                  color: "#3330E4",
                }}
              >
                |
              </p>
            </div>
            <div>
              <p style={{ marginLeft: "15px", fontWeight: "600" }}>Automated</p>
            </div>
            <div>
              <p
                style={{
                  marginLeft: "15px",
                  fontWeight: "600",
                  color: "#3330E4",
                }}
              >
                |
              </p>
            </div>
            <div>
              <p style={{ marginLeft: "15px", fontWeight: "600" }}>Secured</p>
            </div>
            <div>
              <p
                style={{
                  marginLeft: "15px",
                  fontWeight: "600",
                  color: "#3330E4",
                }}
              >
                |
              </p>
            </div>
            <div>
              <p style={{ marginLeft: "15px", fontWeight: "600" }}>
                {" "}
                Automated Filing
              </p>
            </div>
          </div>
          <div>
            <p className={classes.heading}>The Act is for</p>
            <div className={classes.acts}>
              <div className={classes.act}>
                <img src={checkbox} className={classes.icon} />
                <p style={{ marginRight: "15px" }}>Domestic Comapnies</p>
              </div>
              <div className={classes.act}>
                <img src={checkbox} className={classes.icon} />
                <p style={{ marginRight: "15px" }}>Foreign Comapnies</p>
              </div>
              <div className={classes.act}>
                <img src={checkbox} className={classes.icon} />
                <p style={{ marginRight: "15px" }}>Beneficial Owner's</p>
              </div>
            </div>
            <div className={classes.button} onClick={handleClickOpen}>
              <div className={classes.data}>
                <p>Sign Up For Free Access!</p>
                {/* <img src={upload} /> */}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.images}>
          <img src={banner1} className={classes.left} />
          <img src={banner2} className={classes.right} />
        </div>
      </div>
      <FormDialog open={open} close={handleClose} redirect={handleRedirect} />
    </div>
  );
}

export default Banner;
