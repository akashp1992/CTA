import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { accordionData } from "../data/content";
import FAQAccordion from "./FAQAccordion";
import line from "../../images/lineTitle.svg";
import Title from "../Home/Title.js";

const useStyle = makeStyles((theme) => ({
  accordion: {
    margin: "2rem auto",
  },
  titleRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   width: "90%",
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
    // [theme.breakpoints.down("md")]: {
    //   width: "90%",
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
    // [theme.breakpoints.down("lg")]: {
    //   width: "90%",
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
    [theme.breakpoints.down("lg")]: {
      padding: "0px 30px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0px",
    },
  },
  typoTitle: {
    fontSize: "46px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px !important",
      textAlign: "center",
    },
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
  },
  aa: {
    // background: "rgba( 255, 255, 255, 0.55 )",
    // boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ),",
    // backdropFilter: "blur( 4px )",
    // webkitBackdropFilter: " blur( 4px )",
    // borderRadius: "10px",
    // border: "1px solid rgba( 255, 255, 255, 0.18 )",
    background: "red",
  },
}));
function FAQ() {
  const classes = useStyle();
  return (
    <div className={classes.titleRoot} id="faq">
      <Title title="Frequently Asked Questions (FAQs)" />
      <div className={classes.accordion}>
        <FAQAccordion />
      </div>
    </div>
  );
}

export default FAQ;
