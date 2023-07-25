import React from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import peoples from "../../images/peoples.svg";
import icon1 from "../../images/New icon/CPA support.svg";
import dataIsProtected from "../../images/New icon/data is protected.svg";
import LatestUpdateOnNewLaw from "../../images/New icon/Latest update on new law.svg";
import fastestEsiest from "../../images/New icon/fastest & esiest.svg";
import FewClickFileProcessing from "../../images/New icon/Few click file processing.svg";
import noCostEleigibilityCheck from "../../images/New icon/no cost eleigibility check.svg";
import saveEditFile from "../../images/New icon/save & edit file.svg";
import TaxExpertsWorkingBehind from "../../images/New icon/Tax experts working behind.svg";
import yourOwnSecuredFilePortal from "../../images/New icon/your own secured file portal.svg";
import EasyFast from "../../images/New icon/Easy & fast.svg";
import multipleFilesStack from "../../images/New icon/multiple-files-stack.svg";
import dataIsProtect from "../../images/New icon/data is protect.svg";

const useStyles = makeStyles((theme) => ({
  parent: {
    paddingLeft: "8rem",

    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  main: {
    marginTop: "60px",
    fontFamily: "poppins",
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
  },
  container: {
    padding: "60px",
  },
  img: {
    width: "400px",
    marginTop: "20px",

    [theme.breakpoints.only("md")]: {
      width: "80%",
      marginTop: "-3px",
      marginRight: "52px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "290px",
    },
    [theme.breakpoints.only("xl")]: {
      marginRight: "82px",
      width: "73%",
    },
  },
  benefits: {
    [theme.breakpoints.only("md")]: {
      marginTop: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    [theme.breakpoints.only("sm")]: {
      justifyContent: "center",
      marginTop:"30px"
    },
  },
  data: {
    alignItems: "center",
    display: "flex",
    marginBottom: "10px",
    borderRadius: "21px",
    width: "490px",
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
    },
    [theme.breakpoints.only("lg")]: {
      width: "400px",
      marginLeft: "-20px",
    },
    [theme.breakpoints.only("md")]: {
      width: "390px",
      marginLeft: "-40px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "300px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "450px",
      // marginLeft: "-80px",
    },
  },
  icon: {
    width: "22px",
    height: "22px",
    [theme.breakpoints.only("md")]: {
      width: "18px",
      height: "18px",
    },
  },
  text: {
    color: "#06283d",
    fontSize: "15px",
    [theme.breakpoints.only("md")]: {
      fontSize: "12px",
    },
  },
  icnbody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3330e4",
    borderRadius: "50%",
    padding: "3px",
    width: "35px",
    height: "35px",
    marginRight: "10px",
    [theme.breakpoints.only("md")]: {
      width: "32px",
      height: "32px",
    },
  },
  benefit: {
    zIndex: "2",
    display: "flex",
    justifyContent: "end",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

function Benefits() {
  const data = [
    {
      img: FewClickFileProcessing,
      text: "Few clicks filing process",
    },
    {
      img: saveEditFile,
      text: "Save and edit your information anytime",
    },
    {
      img: yourOwnSecuredFilePortal,
      text: "Your own secured filing portal ",
    },
    {
      img: TaxExpertsWorkingBehind,
      text: "Tax experts working behind to verify and submit your filing",
    },
    {
      img: fastestEsiest,
      text: "Fastest and easiest filing experience",
    },
    {
      img: icon1,
      text: "CPA & Attorney support",
    },
    {
      img: dataIsProtected,
      text: "Data is protected and kept secure on our portal ",
    },
    {
      img: EasyFast,
      text: "Easy to access your information",
    },
    {
      img: multipleFilesStack,
      text: "Multi filing capabilities",
    },
    {
      img: noCostEleigibilityCheck,
      text: "No cost Eligibility Checkup",
    },
    {
      img: LatestUpdateOnNewLaw,
      text: "Latest update on New Law",
    },
  ];
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Title title="File with us Now!" />
        <p className={classes.title}>Your CTA filing made easy</p>
        <Grid item container className={classes.container}>
          <Grid
            md={6}
            sm={12}
            lg={6}
            xl={6}
            xs={12}
            className={classes.benefit}
          >
            <img src={peoples} className={classes.img} />
          </Grid>
          <Grid md={6} sm={12} xl={6} xs={12} className={classes.parent}>
            <div className={classes.benefits}>
              {data.map((list) => (
                <>
                  {" "}
                  <div className={classes.data}>
                    <div className={classes.icnbody}>
                      <img src={list.img} className={classes.icon} />
                    </div>
                    <div>
                      <p className={classes.text}>{list.text}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Benefits;
