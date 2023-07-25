import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import SquareIcon from "@mui/icons-material/Square";
import AccordionItem from "./AccordionItem";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const useStyle = makeStyles((theme) => ({
  main: {
    backgroundColor: "#F9f9f9",
    borderRadius: "5px",
    height: "auto",
  },
  child: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  faqheading: {
    fontFamily: "Poppins !important",
    fontSize: "20px !important",
    fontWeight: "700 !important",
  },
  supporticn: {
    color: "#3330E4",
    width: "15px !important",
    marginRight: "5px",
  },
  supportheading: {
    fontFamily: "Poppins !important",
    fontSize: "12px !important",
    fontWeight: "400 !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Faq = () => {
  const classes = useStyle();
  const doCall = (telNumber) => {
    window.location = `tel:${telNumber}`
  }
  return (
    <>
      <div className={classes.main}>
        <Container>
          <div className={classes.child}>
            <Typography className={classes.faqheading}>
              Frequently Asked Questions (FAQs)
            </Typography>
            <div>
              <Typography className={classes.supportheading}>
                <SquareIcon className={classes.supporticn} />
                Live Support
              </Typography>
            </div>
          </div>

          <AccordionItem />
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', marginTop: "50px" }}>
            <div>
              <Typography sx={{ fontFamily: "Poppins", fontWeight: '600', fontSize: '26px' }}>
                More Questions?
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '30%' }}>
              <EmailIcon sx={{ fontSize: 40, cursor: "pointer" }} onClick={() => window.location = 'mailto:yourmail@domain.com'} />
              <CallIcon sx={{ fontSize: 40, cursor: "pointer" }} onClick={() => doCall("+911122334455")} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Faq;
