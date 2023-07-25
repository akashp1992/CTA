import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import addIcon from "../../images/addIcon.svg";
import minIcon from "../../images/blackMin.svg";
import one from "../../images/pannel1.svg";
import two from "../../images/pannel2.svg";
import three from "../../images/pannel3.svg";

const useStyle = makeStyles((theme) => ({
  accordionTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "white",
    padding: "0rem",
    color: "#00323A !important",
    fontFamily: "Poppins !important",
    fontSize: "15px !important",
    fontWeight: "bold !important",
    background: "#FCFCFC !important",
    borderRadius: "15px !important",
  },
  accordionTitleActive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "white",
    background: "#FCFCFC !important",
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
    marginBottom: "10px",
    marginTop: "20px",
    borderRadius: "10px !important",
    border: "none !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#FCFCFC !important",

    "& css-yk33y0-MuiPaper-root-MuiAccordion-root.Mui-expanded": {
      margin: "0 !important",
    },
  },
  typoDesc: {
    color: "#00323A !important",
    fontFamily: "Poppins !important",
    fontSize: "15px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
  },
}));

function MustAccordian({ title, content, panel, content2 }) {
  const data = [
    {
      title: "Domestic Companies",
      content: `A U.S. entity formed on or after the effective date of the
          final Regs. must file its initial report within
          14 days of formation with the State.`,
      content2: `A U.S. entity formed before the effective date of the
      final Regs. must file its initial report within
      1 year of the final Reg's effective date.`,
      panel: "panel1",
      icon: one,
    },
    {
      title: "Foreign Companies",
      content: `A non-U.S. entity which first registers in a U.S. State on or after the effective date of the final Regs. must file its initial report within 14 days of State law registration.`,
      content2: `A non-U.S. entity which first registers in a U.S. State before the effective date of the final Regs. must file its initial report within 1 yearof the final Reg.’s effective date.`,
      panel: "panel2",
      icon: two,
    },
    {
      title: "Beneficial Owner",
      content: `An Individual either exercises substantial control or owns or controls at least 25 percent of the ownership interests in a reporting company unless the reporting company is publicly owned or controlled primarily by such individuals, in which case such individuals shall be deemed to have exercised substantial control over the reporting company.`,
      panel: "panel3",
      icon: three,
    },
  ];
  const [isActive, setIsActive] = useState(false);
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return data.map((item, index) => (
    <Accordion
      className={classes.accRoot}
      sx={{
        maxWidth: 600,
        "&:before": {
          borderTop: "none !important",
          backgroundColor: "transparent !important",
        },
      }}
      expanded={expanded === item.panel}
      onChange={handleChange(item.panel)}
      elevation={0}
    >
      <AccordionSummary
        expandIcon={
          expanded === item.panel ? (
            <img src={minIcon} alt="min" width="20px" />
          ) : (
            <img src={addIcon} alt="add" width="20px" />
          )
        }
        aria-controls={item.panel}
        id={panel}
      >
        <Typography className={classes.accordionTitle}>{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.typoDesc} noWrap={false}>
          {item.content}
        </Typography>
        <Typography className={classes.typoDesc} noWrap={false}>
          {item.content2}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));
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
}

export default MustAccordian;
