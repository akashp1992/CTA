import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import line from "../../images/lineTitle.svg";
import contactImg from "../../images/contactImgAnimation.svg";
import ContactForm from "../data/contactForm";
import Title from "../Home/Title.js";

const useStyle = makeStyles((theme) => ({
  divRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "150px",
    paddingRight: "150px",
    marginBottom: "60px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
      marginBottom: "0px",
      marginTop: "0px",
    },
    [theme.breakpoints.only("sm")]: {
      padding:"0px 50px",
      marginBottom: "0px",
      marginTop: "0px",
    },
  },
  titleRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  typoTitle: {
    fontSize: "46px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
    margin: "10px !important",
  },
  subTitle: {
    fontFamily: "Poppins regular !important",
    fontWeight: "regular !important",
    color: "#00323A",
    margin: "10px !important",
    fontSize: "15px !important",
    fontFamily: "poppins",
  },
  formRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: "50px",
      flexDirection: "column",
      alignItems: "center", 
    },
    [theme.breakpoints.only("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  formLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },
  },
  formRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "30%",
    paddingLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom:"30px"
    },
  },
  img: {
    // objectFit: "cover",
    width: "1000px",
    [theme.breakpoints.only("lg")]: {
      width: "900px",
    },
    [theme.breakpoints.only("md")]: {
      width: "550px",
      marginRight: "50px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "unset ",
    },
    [theme.breakpoints.only("sm")]: {
      width: "1000px",
    },
  },
}));
function Contact() {
  const classes = useStyle();
  return (
    <div className={classes.divRoot}>
      {/* <div className={classes.titleRoot}>
        <Title title="Contact Us" />
        <Typography className={classes.subTitle}>
          Save yourself from the unwanted penalty! Signup now for early access
          to the CTA filing portal!
        </Typography>
      </div> */}
      <div className={classes.formRoot}>
        <div className={classes.formLeft}>
          <img src={contactImg} alt="img" className={classes.img} />
        </div>
        <div className={classes.formRight}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
