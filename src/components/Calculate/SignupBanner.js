import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import blurLogo from "../../images/blurCTA.svg";
import backCell from "../../images/backCell.svg";
import logo from "../../images/CTALogo2.svg";
import logo2 from "../../images/New icon/CTAlogoShield.svg";
import { useNavigate } from "react-router-dom";
import FormDialog from "../Login/FormDialog";

const useStyle = makeStyles((theme) => ({
  mainRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "50px",
    background: `url(${backCell}) no-repeat`,
    backgroundPosition: "right",
    width: "100%",
    backgroundSize: "50%",
    paddingTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.only("xs")]: {
      padding: "10px 20px",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      marginTop: "30px",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "10px 20px",
    },
  },
  contentRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginLeft: "20px",
    width: "50%",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  contentTypoBlue: {
    color: "#3330E4",
    fontFamily: "Poppins !important",
    fontSize: "30px !important",
    fontWeight: "bolder !important",
    [theme.breakpoints.only("lg")]: {
      fontSize: "28px !important",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "25px !important",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "22px !important",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: "22px !important",
    },
  },
  contentTypo: {
    color: "#06283D",
    fontFamily: "Poppins !important",
    fontSize: "30px !important",
    fontWeight: "bold !important",
    textAlign: "left",
    [theme.breakpoints.only("lg")]: {
      fontSize: "28px !important",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "25px !important",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "22px !important",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: "22px !important",
    },
  },
  signupButton: {
    background: "#3330E4 !important",
    color: "white !important",
    width: "150px !important",
    textTransform: "none !important",
    float: "right",
    fontFamily: "Poppins !important",
    height: "26px !important",
    marginLeft: "30px !important",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(94 104 121 / 30%)",
    [theme.breakpoints.only("md")]: {
      width: "130px !important",
      height: "30px !important",
      marginLeft: "50px !important",
    },
    [theme.breakpoints.only("sm")]: {
      width: "150px !important",
      height: "30px !important",
      marginLeft: "50px !important",
    },
  },
  logo: {
    width: "230px",
    paddingLeft: "80px",
    paddingRight: "20px",
    [theme.breakpoints.only("md")]: {
      width: "200px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0px",
      width: "100px",
    },
    [theme.breakpoints.only("sm")]: {
      paddingLeft: "10px",
      width: "150px",
    },
  },
}));
function SignupBanner({ bg }) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

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
  return (
    <>
      <div style={{ background: bg, marginTop: '100px' }}>
        <div className={classes.mainRoot}>
          <img src={logo2} alt="logo" className={classes.logo} />
          <div className={classes.contentRoot}>
            <Typography className={classes.contentTypo}>
              Signup to America’s first
              {/* CTA online Filing Software */}
            </Typography>
            <Typography className={classes.contentTypo}>
              CTA online Filing Software
            </Typography>
            {/* <Typography className={classes.contentTypoBlue}>
            Sign up now to be on top of
            <br /> new CTA law
          </Typography> */}
          </div>
          <Button className={classes.signupButton} onClick={handleClickOpen}>
            Sign up Now
          </Button>
        </div>
      </div>
      <FormDialog open={open} close={handleClose} redirect={handleRedirect} />
    </>
  );
}

export default SignupBanner;
