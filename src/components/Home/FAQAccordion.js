import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import addIcon from "../images/addIcon.svg";
import minIcon from "../images/minIcon.svg";

const useStyle = makeStyles((theme) => ({
  accordionTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "white",
    paddingLeft: "1rem",
    fontFamily: "Poppins !important",
    fontSize: "15px !important",
    fontWeight: "bold !important",
    borderRadius: "15px !important",
  },
  accordionTitleActive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "white",
    padding: "1rem",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "10px",
    borderRadius: "15px",

    borderLeft: "5px solid #3330E4",
  },
  accordionContent: {
    padding: "1rem",
    width: "100%",
  },
  accordionContentActive: {
    padding: "1rem",
    width: "100%",
  },
  borderBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "white",
    padding: "1rem",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "10px",
    borderRadius: "15px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  },
  accRoot: {
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px !important",
    marginBottom: "10px",
    borderRadius: "10px !important",
    border: "none !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  accRootActive: {
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px !important",
    marginBottom: "10px",
    borderRadius: "10px !important",
    borderLeft: "5px solid #3330E4 !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  // aaa:{
  //     paddingTop:'-60px'
  // }
}));

function FAQAccordion({ title, content, panel }) {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      className={expanded === panel ? classes.accRootActive : classes.accRoot}
      sx={{
        maxWidth: 800,
        "&:before": {
          borderTop: "none !important",
          backgroundColor: "transparent !important",
        },
      }}
      expanded={expanded === panel}
      onChange={handleChange(panel)}
      elevation={0}
    >
      <AccordionSummary
        expandIcon={
          expanded === panel ? (
            <img src={minIcon} alt="min" width="20px" />
          ) : (
            <img src={addIcon} alt="add" width="20px" />
          )
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.accordionTitle}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.aaa}>{content}</Typography>
      </AccordionDetails>
    </Accordion>
    // <div >
    //     <div className={isActive ? classes.accordionTitleActive : classes.accordionTitle} onClick={() => setIsActive(!isActive)}>
    //         <div >{title}</div>
    //         <div>{
    //             isActive ?
    //                 <img src={minIcon} alt="min" width="20px" style={{ float: 'left' }} />
    //                 :
    //                 <img src={addIcon} alt="add" width="20px" />
    //         }</div>
    //     </div>
    //     {isActive && <div className={isActive ? classes.accordionContentActive : classes.accordionContent}>{content}</div>}
    // </div>
  );
}

export default FAQAccordion;
