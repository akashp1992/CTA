import React from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import signUp from "../../images/signUp.svg";
import signIn from "../../images/signIn.svg";
import uploadSmall from "../../images/uploadSmall.svg";
import verification from "../../images/verification.svg";
import ctaSmall from "../../images/ctaSmall.png";
import fc from "../../images/fc.svg";
import user2 from "../../images/user2.svg";
import table from "../../images/table.svg";
import line1 from "../../images/line1anim.svg";
import line2 from "../../images/line2.svg";
import { motion, useScroll } from "framer-motion";
import "../../anim.css";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "80px",
    fontFamily: "poppins",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  section: {
    display: "flex",
    marginTop: "20px",
    background: "#f7f7f7",
    marginBottom: "160px",
    [theme.breakpoints.only("xl")]: {
      marginBottom: "83px",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginBottom: "50px",
    },
    [theme.breakpoints.only("sm")]: {
      paddingBottom: "26rem",
    },
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
  },
  parent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "250px",
    marginRight: "12px",
    [theme.breakpoints.only("xl")]: {
      paddingBottom: "345px",
      marginTop: "62px",
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: "0px",
      margin: 0,
      padding: "20px",
    },
  },
  parentTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    height: "33px",
    background: "#f7f7f7",
    borderRadius: "25px",
    zIndex: 2,
    padding: "0 10px",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 98%), 5px 5px 9px rgb(94 104 121 / 20%);",
    [theme.breakpoints.only("md")]: {
      height: "55px",
    },
  },
  name: {
    color: "#06283d",
    fontSize: "12px",
  },
  icon: {
    width: "21px",
    marginRight: "4px",
    display: "flex",
    alignItems: "center",
  },
  parentData: {
    // width: "100px",
    textAlign: "center",
    color: "#00323a",
    fontSize: "11px",
  },
  content: {},
  line1: {
    width: "100%",
    position: "absolute",
    top: "8.5rem",
    "@global": {
      strokeDasharray: 2300,
      strokeDashoffset: 2300,
      animation: "dash 5s linear forwards",
      "@keyframes dash": {
        to: {
          strokeDashoffset: 0,
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      top: "8.3rem",
    },
    [theme.breakpoints.only("xl")]: {
      top: "13rem",
    },
  },
  line2: {
    position: "absolute",
    top: "24.1rem",
    left: "13rem",
    width: "40%",
    [theme.breakpoints.up("xl")]: {
      top: "29.2rem",
      left: "9rem",
      width: "36%",
    },
    [theme.breakpoints.only("md")]: {
      top: "29.6rem",
      left: "4rem",
      width: "56%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  img: {
    width: "20px",
  },
  user2: {
    position: "absolute",
    top: "20.5rem",
    width: "150px",

    [theme.breakpoints.only("xl")]: {
      top: "25.5rem",
      left: "43.0rem",
    },
    [theme.breakpoints.only("lg")]: {
      left: "36.0rem",
    },
    [theme
      .breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      top: "35rem"
    },
  },

  table: {
    position: "absolute",
    top: "29.4rem",
    left: "26rem",
    zIndex: "1",
    [theme.breakpoints.only("xl")]: {
      left: "31%",
      top: "34.4rem",
    },

    [theme.breakpoints.only("md")]: {
      top: "-15rem",
      left: "1rem",
      zIndex: 1,
      position: "relative",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-13.2rem",
      left: "-3rem",
      zIndex: 1,
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      top: "44rem",
      left: "9rem",
      width: "500px"
    },
  },
  smallDevice: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  userMini: {
    width: "115px",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  tableMini: {
    width: "323px",
    position: "absolute",
    bottom: "6px",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

function FileWithUs() {
  const classes = useStyles();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
  });
  const list = [
    {
      text: "Setup your email and password to access the fastest CTA filing portal that takes care of your filing problem before you do!",
      logo: signUp,
      title: "Sign up",
    },
    {
      text: "Access your dashboard by signing in with your created login and start filing your CTA",
      logo: signIn,
      title: "sign in",
    },
    {
      text: "Create project and our portal will ask you predefined requirements to upload as required to file your company CTA",
      logo: ctaSmall,
      title: "Create Project and Upload Details",
    },
    {
      text: "Sit back and relax when our automated system is verifying and uploading your application on FinCen.",
      logo: uploadSmall,
      title: "Verification and FinCen Upload",
    },
    {
      text: "The Final stage is when your CTA is filed successfully and your account has now received the certificates. ",
      logo: verification,
      title: "CTA Filed and Received",
    },
    // {
    //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing ",
    //   logo: fc,
    //   title: "Document Upload",
    // },
  ];
  return (
    <div>
      <div className={classes.main}>
        <Title title="File with Us" />
        <p className={classes.title}>
          Automated secured online portal to file your CTA
        </p>

        <div className={classes.section}>
          {list.map((list) => (
            <div className={classes.content}>
              <div className={classes.parent}>
                <div className={classes.parentTitle}>
                  <div className={classes.icon}>
                    <img src={list.logo} className={classes.img} />
                  </div>
                  <div className={classes.name}>{list.title}</div>
                </div>
                <div className={classes.parentData}>
                  <p>{list.text} </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <img src={user2} className={classes.user2} />
        <img src={table} className={classes.table} />


        <svg
          className={classes.line1}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="392.9159851074219"
          viewBox="-1 3461.598 1910.839 392.916"
        >
          <motion.path
            d="M-.5 3469h1745.636s203.937-46.57 158.636 102.219c-45.3 148.787-443.953 286.126-637.466 283.764"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="#3330e4"
            fill="transparent"
            data-name="Path 1346"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              repeat: "Infinity",
              ease: "backOut",
              duration: 3,
              delay: 1,
            }}
            style={{ pathLength: scrollYProgress }}
          ></motion.path>
        </svg>

        <svg
          className={classes.line2}
          xmlns="http://www.w3.org/2000/svg"
          width="720.8"
          height="812.26"
          viewBox="158.232 3856.885 720.8 812.26"
        >
          <motion.path
            d="M650.6 3857.432s-636.874-13.092-461.23 402.07c175.646 415.16 419.35 381.82 438.248 223.548 18.896-158.273-356.456-145.717-310.505 74.516 45.95 220.233 455.968 72.742 562.42-74.516"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="#3330e4"
            fill="transparent"
            data-name="Path 1469"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              repeat: "Infinity",
              ease: "linear",
              duration: 3,
              delay: 1.5,
            }}
          />
        </svg>
        <div className={classes.smallDevice}>
          <img src={user2} className={classes.userMini} />
          <img src={table} className={classes.tableMini} />
        </div>
      </div>
    </div>
  );
}

export default FileWithUs;
