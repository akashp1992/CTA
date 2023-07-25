import { makeStyles } from "@mui/styles";
import React from "react";
import backLogo from "../../images/aboutBackLogo.svg";
import { Container, Typography } from "@mui/material";
import cloudLogo from "../../images/uploadCloud.svg";
import aboutBanner from "../../images/aboutTop.svg";
import checkmark from "../../images/checkmark.svg";
import { useNavigate } from "react-router-dom";
import logo2 from "../../images/New icon/CTALogoBackgound.svg";
import FormDialog from "../Login/FormDialog";
import logo from "../../images/CTALogo2.svg";

const useStyle = makeStyles((theme) => ({
  mainRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "50px",
    width: "100%",
  },
  contentRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: "20px",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("sm")]: {
      flexDirection: "column",
    },
  },
  leftContent: {
    // background: `url(${logo2}) no-repeat`,
    paddingBottom: "34vh",
    backgroundSize: "70%",
    backgroundPosition: "left top",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      paddingBottom: "4vh",
      padding:"0px 10px"
      // justifyContent: "center",
    },
    [theme.breakpoints.only("sm")]: {
      paddingBottom: "4vh",
      paddingRight:"20px"
      // justifyContent: "center",
    },
  },
  typoTitle: {
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
    fontSize: "40px !important",
    color: "#00323A !important",
    marginTop: "50px !important",
    // marginLeft: "210px !important",
    marginBottom: "20px !important",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: "25px !important",
    },
  },
  typoPera: {
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    color: "#00323A !important",
    textAlign: "left",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      padding:"0px 10px"
    },
    // marginLeft: "75px !important",
  },
  typoPera2: {
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    color: "#00323A !important",
    textAlign: "left",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      // textAlign: "center",
    },
  },
  fileButtonRoot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    // marginRight: "100px",
    cursor: "pointer !important",
    marginTop: "30px",
    // marginLeft: "44px",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
    },
  },
  fileButton: {
    background: "#3330E4 !important",
    color: "white !important",
    textTransform: "none !important",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "5px",
    paddingLeft: "14px",
    paddingRight: "14px",
    paddingBottom: "5px",
    paddingTop: "5px",
    cursor: "pointer !important",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(94 104 121 / 30%)",
  },
  buttonTypo: {
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    color: "white !important",
    textAlign: "center",
    width: "100%",
    cursor: "pointer !important",
    marginRight: "5px !important",
  },
  rightContent: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  highlight: {
    color: "#3330E4 !important",
  },
  bgImg: {
    background: `url(${logo2}) no-repeat`,
    // paddingBottom: "34vh",
    // backgroundSize: "100%",
    width: "50%",
    height: "50%",
    left: "20px",
    position: "absolute",
    zIndex: "-1",
    backgroundPosition: "left top",
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  bgImgbody: {
    height: "1150px",
    width: "1000px",
    position: "absolute",
    zIndex: "-1",
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      display:"none"
    },
  },
  margin: {
    marginLeft: "130px",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "40px",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "40px",
    },
  },
  imgRight: {
    width: 500,
    [theme.breakpoints.only("xs")]: {
      width: 350,
    },
    [theme.breakpoints.only("md")]: {
      width: 450,
    },
  },
  banefitBody: {
    textAlign: "left",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // marginLeft: "152px",
    marginTop: "20px",
    [theme.breakpoints.only("xs")]: {
      width: "unset",
    },
  },
}));
function Banner() {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleRedirect = () => {
    let path = `/landing`;
    navigate(path);
  };
  return (
    <>
      {/* <div className={classes.logo}>
        <img src={logo} style={{ width: "220px",height: "200px", marginTop: "100px" }} />
      </div> */}
      <div className={classes.contentRoot}>
        {/* <Container maxWidth="lg">
          <Container> */}
        <div className={classes.margin}>
          <div className={classes.leftContent}>
            <div className={classes.bgImgbody}>
              <div className={classes.bgImg}></div>
            </div>

            <div>
              <Typography className={classes.typoTitle}>
                Get ready to file under the Corporate Transparency Act{" "}
                <span className={classes.highlight}>Swiftly!</span>
              </Typography>
            </div>
            <div
              style={
                {
                  // textAlign: "left",
                  // width: "60%",
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "flex-start"
                  // marginLeft: "60px !important",
                }
              }
            >
              {" "}
              <Typography className={classes.typoPera}>
                Taking care of Tax professionals and Company owners to file
                their CTA online through{" "}
                <span style={{ color: "#3330E4", fontWeight: "bold" }}>
                  America’s first online CTA filing portal!
                </span>
              </Typography>
              <br></br>
              <Typography className={classes.typoPera}>
                Our CTA online filing tool makes your filing experience swift!
              </Typography>
            </div>
            <div className={classes.banefitBody}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  Secured Filing Portal
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  Designed specifically for Single and Multiple filing
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  50+ CPA and tax agents working on your filing
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  Fastest and Easiest filing experience
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  First Online CTA filing platform
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  CPA help & support
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  Online Automated Filing system
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  Aligned with CTA Rules and Policies
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={checkmark}
                  style={{ marginRight: "10px", width: "18px" }}
                />
                <Typography className={classes.typoPera2}>
                  Save and Edit your Information Anytime
                </Typography>
              </div>
              {/* <ul>
              <li>Secured Filing Portal</li>
              <li>Designed specifically for Single and Multiple filing</li>
              <li>50+ CPA and tax agents working on your filing </li>
              <li>Fastest and Easiest filing experience</li>
              <li>First Online CTA filing platform</li>
              <li>CPA help & support</li>
              <li>Online Automated Filing system</li>
              <li>Aligned with CTA Rules and Policies</li>
              <li>Save and Edit your Information Anytime</li>
            </ul> */}
            </div>
            <div className={classes.fileButtonRoot} onClick={handleClickOpen}>
              <div className={classes.fileButton}>
                <Typography className={classes.buttonTypo}>
                  Sign up for Free Portal Access!
                </Typography>
                {/* <img src={cloudLogo} alt="img" width={20} /> */}
              </div>
            </div>
          </div>
        </div>
        {/* </Container>
        </Container> */}
        <div className={classes.rightContent}>
          <img src={aboutBanner} alt="banner" className={classes.imgRight} />
        </div>
      </div>
      <FormDialog open={open} close={handleClose} redirect={handleRedirect} />
    </>
  );
}

export default Banner;
