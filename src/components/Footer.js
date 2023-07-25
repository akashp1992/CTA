import { Typography } from "@mui/material";
import React from "react";
import footerLogo from "../images/CTALogoFooter.svg";

import facebook from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import { makeStyles } from "@mui/styles";
import { NavLink, useNavigate } from "react-router-dom";
import FormDialog from "./Login/FormDialog";
import { fontStyle } from "@mui/system";
import LoginDialog from "./Login/LoginDialog";
import NewProduct from "./public/NewProduct";
import { Link } from "react-scroll"

const useStyles = makeStyles((theme) => ({
  rootFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    background: "#06283D",
    zIndex: "-1",
    color: "#FFFFFF",
    fontFamily: "Montserrat !important",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    }
  },
  columnRoot: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    [theme.breakpoints.down("md")]: {

      alignItems: 'center'
    }
  },
  typoText: {
    fontFamily: "Montserrat !important",

    textAlign: "left",
    marginTop: "23px",
    fontSize: "13px !important",
    width: "245px",
  },
  typoTitle: {
    fontFamily: "Montserrat !important",
    fontWeight: 700,
    color: "#FFFFFF",
    textAlign: "left",
    marginBottom: "20px",
    fontWeight: "700 !important",
  },
  typoDesc: {
    fontFamily: "Montserrat !important",
    textAlign: "left",
    color: "white !important",
    lineHeight: "38px !important",
    fontSize: "14px !important",
    textDecoration: "inherit !important",
  },
  iconWithText: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconWidth: {
    width: "24px",
    height: "24px",
  },
  socialIcon: {
    marginTop: "20px",
    mmarginBottm: "10px",
    width: "24px",
    cursor: "pointer"
  },
  socialRoot: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%'
    }

  },
  logoWidth: {
    width: "40%",
    marginBottom: "20px",
  },
  copyright: {
    textAlign: "center",
    color: "#ffffff",
    background: "#06283D",
    fontSize: "12px",
    paddingTop: "20px",
    fontFamily: "Montserrat !important",
  },
  comingsoon: {
    fontFamily: "poppins",
    fontStyle: "italic",
    fontSize: "20px",
    fontWeight: "700",
  },
}));
function Footer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClickLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenLogin(false);
  };
  const handleRedirect = () => {
    let path = `/landing`;
    navigate(path);
  };

  const handleSocialLink = (url) => {
    window.open(url, "_blank")
  }
  return (
    <>
      <div>
        <div className={classes.rootFooter}>
          <div className={classes.columnRoot}>
            <img src={footerLogo} alt="logo" className={classes.logoWidth} />
            <Typography className={classes.typoText}>
              <b>America’s First </b>CTA Filing Tool Relief to Tax professionals and
              Business Owners!
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <marquee
                behavior="scroll"
                direction="left"
                className={classes.comingsoon}
              >
                CTA Portal Coming Soon...
              </marquee>
            </div>
          </div>
          <div className={classes.columnRoot}>
            <div>
              <Typography className={classes.typoTitle}>CTA</Typography>
              <NavLink to={`/`} style={{ textDecoration: "inherit" }}>
                <Typography className={classes.typoDesc}>Home</Typography>
              </NavLink>
              <NavLink to={`/about`} style={{ textDecoration: "inherit" }}>
                <Typography className={classes.typoDesc}>About</Typography>
              </NavLink>
              <NavLink to={`/calculate`} style={{ textDecoration: "inherit" }}>
                <Typography className={classes.typoDesc}>Eligibility</Typography>
              </NavLink>
              {/* <Typography className={classes.typoDesc}>News</Typography>
              <Typography className={classes.typoDesc}>Blogs</Typography> */}
              <Link to="faq">
                <Typography className={classes.typoDesc}>FAQs</Typography>
              </Link>
            </div>
          </div>
          <div className={classes.columnRoot}>
            <div>
              <Typography className={classes.typoTitle}>Portal</Typography>
              <div >
                <Typography onClick={handleClickOpen} style={{ cursor: "pointer" }} className={classes.typoDesc}>Sign up</Typography>
                <Typography onClick={handleClickLoginOpen} style={{ cursor: "pointer" }} className={classes.typoDesc}>Sign In</Typography>
              </div>

              {/* <Typography className={classes.typoDesc}>My Account</Typography>
                    <Typography className={classes.typoDesc}>My Update</Typography> */}
            </div>
          </div>
          <div className={classes.columnRoot}>
            <div>
              <Typography className={classes.typoDesc}>Terms of Use</Typography>
              <Typography className={classes.typoDesc}>
                Privacy Policy
              </Typography>
              {/* <Typography className={classes.typoDesc}>Password update</Typography> */}
            </div>
          </div>

          <div className={classes.columnRoot}>
            <div className={classes.socialRoot}>
              <img
                src={facebook}
                className={classes.socialIcon}
                alt="facebook"
                onClick={() => handleSocialLink("https://www.facebook.com/ctafiling")}
              />
              <img src={twitter} className={classes.socialIcon} alt="twitter" />
              <img
                src={linkedin}
                className={classes.socialIcon}
                alt="linkedin"
              />
              <img src={insta} className={classes.socialIcon} alt="insta" />
            </div>
          </div>
        </div>
        <div className={classes.copyright}>
          <p>© {new Date().getFullYear()} Corporate Transparency Filing</p>
        </div>
      </div>
      <FormDialog open={open} close={handleClose} redirect={handleRedirect} />
      <LoginDialog open={openLogin} close={handleCloseLogin} />

      {/* <NewProduct /> */}
    </>
  );
}

export default Footer;
