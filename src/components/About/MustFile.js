import { ClassNames } from "@emotion/react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import line from "../../images/lineTitle.svg";
import curveBg from "../../images/curveBack.svg";
import leftImg from "../../images/mustLeft.svg";
import MustAccordian from "./MustAccordian";
import { accordionData } from "../data/contentAbout";
import { motion } from "framer-motion";
const useStyle = makeStyles((theme) => ({
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
    [theme.breakpoints.only("md")]: {
      fontSize: "40px !important",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "25px !important",
    },
  },
  mainRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px",
    marginTop: "-180px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "0px",
      padding: "50px",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "60px",
      padding: "50px",
    },
  },
  mainContentRoot: {
    backgroundPosition: "23%",
    backgroundSize: "contain",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("sm")]: {
      flexDirection: "column",
      alignItems:"Center"
    },
  },
  leftContent: {
    width: "50%",
    marginTop: "20px",
    alignItems: "center",
    paddingLeft: "100px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "0px",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: "20px",
      width: "50%",
    },
    [theme.breakpoints.only("sm")]: {
      paddingLeft: "0px",
      width: "100%",
      marginTop:"30px"
    },
  },
  rightContent: {
    width: "50%",
    marginTop: "20px",
    [theme.breakpoints.only("md")]: {
      width: "450px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "450px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "320px",
      marginLeft:"0px"
    },
  },
  curveStyle: {
    position: "absolute",
    width: "70%",
    left: "136px;",
    top: "-90px;",
    zIndex: "-1",
  },
  img: {
    width: "400px",
    [theme.breakpoints.only("md")]: {
      width: "300px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "300px",
    },
  },
  line: {
    width: "240px",
    [theme.breakpoints.only("xs")]: {
      width: "200px",
    },
  },
}));
function MustFile() {
  const classes = useStyle();
  return (
    <div className={classes.mainRoot}>
      <div style={{ position: "relative" }}>
        <svg
          className={classes.curveStyle}
          xmlns="http://www.w3.org/2000/svg"
          width="1381.006"
          height="818.819"
          viewBox="0 0 1381.006 818.819"
        >
          <motion.path
            id="Path_1888"
            data-name="Path 1888"
            d="M4479.361,925.4s-458.409-243.8-379.432,176.84,841.275,276.419,1193.237,472.144,72.109,39.488,72.109,39.488"
            transform="translate(-4090.251 -854.623)"
            fill="none"
            stroke="#3330e4"
            stroke-width="1"
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
      </div>
      <div className={classes.titleRoot}>
        <Typography className={classes.typoTitle}>Who Must File?</Typography>
        <img src={line} alt="line" className={classes.line} />
      </div>
      <div className={classes.mainContentRoot}>
        <div className={classes.leftContent}>
          <img className={classes.img} src={leftImg} alt="left" />
        </div>
        <div className={classes.rightContent}>
          <MustAccordian />
        </div>
      </div>
    </div>
  );
}

export default MustFile;
