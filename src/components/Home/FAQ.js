import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { accordionData } from "./data/content";
import FAQAccordion from "./FAQAccordion";
import Title from "./Title";

const useStyle = makeStyles((theme) => ({
  accordion: {
    margin: "2rem auto",
    background:'red'
  },
  titleRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  typoTitle: {
    fontSize: "46px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold",
  },
  ssss:{
    color:'red'
  }
}));
function FAQ() {
  const classes = useStyle();
  return (
    <div className={classes.titleRoot}>
      <Title title="Frequently Asked Questions (FAQs)" />

      {/* <img src={line} alt="line" style={{ marginTop: '10px' }} /> */}
      <div className={classes.accordion}>
        {accordionData.map(({ title, content }) => (
          <FAQAccordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
