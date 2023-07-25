import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fontFamily } from "@mui/system";
import React from "react";
import line from "../../images/lineTitle.svg";
import li from "../../images/li.svg";
// import listCheckIcon from '../../images/listCheck.svg'
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
    fontWeight: "bolder !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "26px !important",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "45px !important",
    },
  },
  listItemRoot: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "50px",
    paddingBottom: "50px",
    // display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0px 10px",
      marginTop:"20px"
    },

    // "& ul": {
    //     listStyleImage: `url(${listCheckIcon})`,
    //     display: 'inline-block',
    //     marginTop: '50px',
    // },
    "& li": {
      lineHeight: "30px",
      marginBottom: "10px",
      fontFamily: "Poppins",
      color: "#06283D",
      fontSize: "14px",
    },
  },

  listItem: {
    display: "flex !important",
    alignItems: "flex-start !important",
    marginBottom: "20px",
  },
  desc: {
    marginLeft: "10px",
  },
}));
function WhyCta() {
  const classes = useStyle();
  return (
    <div style={{ background: "#F7F7F7", paddingTop: "60px" }}>
      <div className={classes.titleRoot}>
        <Typography className={classes.typoTitle}>Why CTA </Typography>
        <img src={line} alt="line" />
      </div>
      <div className={classes.listItemRoot}>
        {/* <ul> */}
        <div className={classes.listItem}>
          <img src={li} />{" "}
          <p className={classes.desc}>
            The purpose of the Act was to reduce money laundering, funding of
            terrorism and other illicit activity by creating a database of
            persons who beneficially own various (i) companies formed in the
            U.S. and (ii) non-U.S. companies which register to do business in
            the U.S.
          </p>
        </div>
        <div className={classes.listItem}>
          <img src={li} />{" "}
          <p className={classes.desc}>
            This database will be accessible by both U.S. and foreign law
            enforcement.
          </p>
        </div>
        <div className={classes.listItem}>
          <img src={li} />{" "}
          <p className={classes.desc}>
            The Financial Crimes Enforcement Network (known as “FinCEN”) is a
            U.S. Treasury Dept. agency. It is responsible for enforcing the Act
            and promulgating regulations under the Act
          </p>
        </div>
        <div className={classes.listItem}>
          <img src={li} />{" "}
          <p className={classes.desc}>
            On December 7, 2021, FinCEN proposed regulations under the Act (the
            “Reg.”).
          </p>
        </div>
        <div className={classes.listItem}>
          <img src={li} />{" "}
          <p className={classes.desc}>
            The comment period on the Reg. expired on February 7, 2022 so the
            Reg. is not yet final..
          </p>
        </div>
        <div className={classes.listItem}>
          <img src={li} />{" "}
          <p className={classes.desc}>
            The effective date of these Reg. differs depending on whether the
            “reporting company” was formed before or after the Reg.
          </p>
        </div>
        {/* <p>This database will be accessible by both U.S. and foreign law enforcement.
                    </p>
                    <p>The Financial Crimes Enforcement Network (known as “FinCEN”) is a U.S. Treasury Dept. agency.  It is responsible for enforcing the Act and promulgating regulations under the Act</p>
                    <p>On December 7, 2021, FinCEN proposed regulations under the Act (the “Reg.”).
                    </p>
                    <p>The comment period on the Reg. expired on February 7, 2022 so the Reg. is not yet final.</p>
    <p>The effective date of these Reg. differs depending on whether the “reporting company” was formed before or after the Reg.</p>*/}
        {/*</ul>*/}
      </div>
    </div>
  );
}

export default WhyCta;
