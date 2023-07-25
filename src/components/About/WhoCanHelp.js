import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import build from "../../images/build.svg";
import hand from "../../images/hand.svg";
import check from "../../images/check.svg";
import person from "../../images/person.svg";
import line from "../../images/lineTitle.svg";
import curve from "../../images/pathCurve.svg";
import li from "../../images/li.svg";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  titleRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    background: "#F7F7F7",
    paddingBottom: "20px",
  },
  typoTitle: {
    fontSize: "46px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bolder !important",
    marginTop: "40px !important",
    [theme.breakpoints.only("xs")]: {
      fontSize: "33px !important",
    },
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  typoDesc: {
    fontSize: "14px !important",
    margin: "10px !important",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
  },
  paddingLeftoRight: {
    paddingLeft: "230px",
    paddingRight: "150px",
    [theme.breakpoints.only("xs")]: {
      padding: "0px 10px",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "0px 50px",
    },
  },
  fileWithRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${curve}) no-repeat`,
    height: "30vh",
    backgroundPosition: "140px 0",
    backgroundSize: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "20vh",
      padding: "0px 20px",
    },
  },
  signupButton: {
    background: "#3330E4 !important",
    color: "white !important",
    // width: "150px !important",
    textTransform: "none c",
    float: "right",
    fontSize: "10px !important",
    fontFamily: "Poppins !important",
    // height: "50px",
    paddingRight: "100px",
    textTransform: "none !important",
    marginRight: "10px !important",
    padding: "5px 3px !important",
  },
  typoFileWith: {
    fontFamily: "Poppins !important",
    color: "#3330E4 !important",
    fontWeight: "bold !important",
    marginRight: "10px !important",
    fontSize: "22px !important",
    [theme.breakpoints.only("xs")]: {
      fontSize: "14px !important",
    },
  },
  typoCTA: {
    fontFamily: "Poppins !important",
    color: "#06283D !important",
    fontWeight: "bold !important",
    fontSize: "12px !important",
  },
  typoSpan: {
    fontFamily: "Poppins !important",
    color: "#3330E4 !important",
    fontWeight: "bold !important",
    fontSize: "12px !important",
    marginLeft: "5px !important",
  },
  desc: {
    fontFamily: "Poppins !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
    fontSize: "14px !important",
    marginTop: "20px !important",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      padding: "0px 10px",
    },
    [theme.breakpoints.only("md")]: {
      textAlign: "center",
      padding: "0px 30px",
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      padding: "0px 30px",
    },
  },
  line: {
    width: "250px",
    [theme.breakpoints.only("xs")]: {
      width: "200px",
    },
  },
}));

function WhoCanHelp() {
  const classes = useStyle();
  return (
    <div style={{ marginTop: "60px" }}>
      <div className={classes.titleRoot}>
        <Typography className={classes.typoTitle}>WHY FILE CTA?</Typography>
        <img src={line} alt="line" className={classes.line} />
        <Typography className={classes.desc}>
          Creating a Database of all kinds of business owners and their rights
          in the U.S. or NON-U.S companies registered to do business in the
          nation
        </Typography>
      </div>
      <div className={classes.listItem}>
        <div className={classes.paddingLeftoRight}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={li} alt="hand" style={{ width: 25 }} />
            {/* <Typography className={classes.typoDesc}>
              Attorney’s Role : Attorney’s Role for New Companies: For reporting
              companies created or registered after the final Reg.’s effective
              date, the onus will be on the attorney forming the company to
              assist clients in meeting the 14-day deadline for the company’s
              initial FinCEN report, since the client’s CPA may not be aware of
              the new company’s formation or registration until after this
              14-day deadline expires.
            </Typography> */}
            <Typography className={classes.typoDesc}>
              Reduce money laundering, funding of terrorism and other illicit
              activity
            </Typography>
          </div>
        </div>
        <div style={{ background: "#F7F7F7" }}>
          <div className={classes.paddingLeftoRight}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={li} alt="hand" width={25} />
              {/* <Typography className={classes.typoDesc}>
                CPA’s Role: CPA’s may be in the best position to assist
                pre-existing companies avoid the Act’s penalties given the
                relatively current information they have on these companies for
                federal income tax and Texas franchise tax purposes.{" "}
              </Typography> */}
              <Typography className={classes.typoDesc}>
                Database accessible on permission by the state and foreign law
                enforcement
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.paddingLeftoRight}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={li} alt="hand" width={25} />
            {/* <Typography className={classes.typoDesc}>
              Given this 1-year deadline, CPAs and attorneys should begin now
              notifying clients of (i) the reporting obligation (ii) all the
              information need from 25% owners, management personnel and
              “company applicants” (iii) the penalties for non-compliance.
            </Typography> */}
            <Typography className={classes.typoDesc}>
              Financial Crimes Enforcement Network “FinCen” is the authority
              behind CTA
            </Typography>
          </div>
        </div>
        {/* <div style={{ background: "#F7F7F7", paddingBottom: "20px" }}>
          <div className={classes.paddingLeftoRight}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={build} alt="hand" width={25} />
              <Typography className={classes.typoDesc}>
                Attorneys and CPAs should promptly begin assessing which of
                their clients’ pre-existing companies may qualify for a
                reporting exemption (discussed below) as of this 1-year deadline
              </Typography>
            </div>
          </div>
        </div> */}
      </div>
      <div className={classes.fileWithRoot}>
        <Typography className={classes.typoFileWith}>
          Not sure if you should file?
        </Typography>
        <NavLink to={`/calculate`}>
          <Button className={classes.signupButton}>
            Calculate your Eligibility Now!
          </Button>
        </NavLink>
        {/* <Typography className={classes.typoCTA}>
          & Don't worry about your
        </Typography>
        <Typography className={classes.typoSpan}> CTA file</Typography> */}
      </div>
    </div>
  );
}

export default WhoCanHelp;
