import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import lineLeft from "../../../images/client/projects/line.svg";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  main: {
    paddingBottom: "15px"
  },
  addicn: {
    color: "#3330E4",
  },
  accordionheading: {
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    fontWeight: "700 !important",


  },
  accordiondesc: {
    fontFamily: "Poppins !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
  accordion: {
    borderRadius: "10px !important",
    maxWidth: "920px !important",
    marginTop: '10px'
  },
  accordionExpanded: {
    borderLeft: "5px solid #3330E4",
    borderRadius: "10px !important",
    maxWidth: "920px !important",
  },
  lineBackground: {
    background: `url(${lineLeft}) no-repeat !important`,
  },
  glassTitle: {
    // rgba(255, 255, 255, 0.70)  
    //   background: "rgba(255, 255, 255, 0.70)!important",
    //   backdropfilter:"  blur( 11.5px ) !important",
    // webkitBackdropFilter: " blur( 11.5px ) !important",
    background: " rgba( 255, 255, 255, 0.25 )",
    backdropFilter: " blur( 4px )",
    webkitBackdropFilter: "blur( 4px )"
  }
}));

const AccordionItem = () => {
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    { console.log("expanded", isExpanded) }
  };

  const accordionData = [
    {
      panel: 'panel1',
      title: "What does this mean for your business?",
      desc: "According to FinCen, over 25 million small and mid-sized companies will have to begin reporting to FinCen by 2022 as a result of this new law.",
    },
    {
      panel: 'panel2',
      title: "What about Trusts and Partnerships?",
      desc: "The Corporate Transparency Act doesn't provide clear guidelines on how Trust and Partnerships will be handled. Please check back with CorporateTransparencyActFiling.com for more information as it develops.",
    },
    {
      panel: 'panel3',
      title: "What documentation do Company Applicants and Beneficial Owners need to show?",
      desc: "Each beneficial owner and company applicant must provide the following information: Full legal name Date of birth Current residential or business address Unique identifying number from a valid U.S. passport, personal identification card, or state driver's license, Non-US citizens must provide a legible and credible copy of the pages of their foreign passport bearing a photo of the person with date of birth and a unique identifying number as well as a person living in the state or tribal territory where the entity is created to certify the validity of the pages.",
    },
    {
      panel: 'panel4',
      title: "What Happens if I fail to file or lie?",
      desc: "Reporting violations or providing false information can result in up to $10,000 in fines and two-year prison terms!",
    },
    {
      panel: 'panel5',
      title: "What is a company applicant?",
      desc: "A corporate reporting company is defined in the Corporate Transparency Act as an American company that files a document with a state government office or similar office that creates a domestic reporting company or that registers a foreign reporting company. In addition, the act includes any individual who commands or directs the filing of such a document by another person.",
    },
    {
      panel: 'panel6',
      title: "When must companies comply with the Corporate Transparency Act?",
      desc: "The CorporateTransparencyActFiling.com website will notify you when you can file your report. The first day you can do so is in 2022. CorporateTransparencyActFiling.com will also notify you when your report must be submitted.",
    },
  ];
  return (
    <div className={classes.main}>
      {
        accordionData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
            className={expanded === item.panel ? classes.accordionExpanded : classes.accordion}
            sx={{
              '&:before': {
                borderTop: 'none !important',
                opacity: '0 !important'
              },
             filter:'drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 0px rgba(-48, 10, 62, -0.75))',
             boxShadow:'none'
            }}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <AccordionSummary className={classes.glassTitle}
              expandIcon={
                expanded === item.panel ? (
                  <RemoveCircleIcon className={classes.addicn} />
                ) : (
                  <AddCircleRoundedIcon className={classes.addicn} />
                )
              }
            >
              <Typography className={classes.accordionheading}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.glassTitle}>
              <Typography className={classes.accordiondesc}>{item.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  );
};

export default AccordionItem;
