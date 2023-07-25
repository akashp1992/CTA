import React from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import checkmark from "../../images/checkmark.svg";
import arrow from "../../images/arrow.svg";
import flowerDesk from "../../images/flowerDesk.svg";
import desk from "../../images/desk.svg";
import user from "../../images/user.svg";
import device from "../../images/device.svg";
import TimingGroup from "../../images/TimingGroup.svg";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "80px",
    overflowX: "hidden",
    overflowY: "hidden",
    paddingBottom: "180px",
    paddingLeft: "50px",
    paddingRight: "50px",

    [theme.breakpoints.only("xl")]: {
      paddingBottom: "210px",
    },
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  description: {
    padding: "0 70px",
    marginTop: "10px",
    color: "#00323A",
    fontSize: "16px",
    fontFamily: "poppins",
    textAlign: "center",
    [theme.breakpoints.only("lg")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0",
    },
  },
  parent: {
    padding: "0 110px",
    [theme.breakpoints.only("lg")]: {
      padding: "0 47px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0",
    },
    [theme.breakpoints.only("md")]: {
      padding: "0",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "0",
    },
  },
  child: {
    display: "flex",
    justifyContent: "center",
  },
  cards: { marginTop: "30px" },
  card: {
    padding: "30px 20px",
    background: "#F7F7F7",
    width: "345px",
    height: "490px",
    borderRadius: "10px",
    position: "relative",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(94 104 121 / 7%)",
    border: "none",
    [theme.breakpoints.only("lg")]: {
      width: "325px !important",
      height: "480px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "345px !important",
      height: "475px",
      marginBottom: "20px",
    },
    [theme.breakpoints.only("md")]: {
      marginBottom: "20px",
      marginRight: "10px",
      width: "260px !important",
      height: "480px",
    },
    [theme.breakpoints.only("sm")]: {
      marginBottom: "30px",
      // marginRight: "10px",
      width: "500px !important",
      height: "auto",
      padding: "30px 20px",
    },
  },
  title: {
    color: "#3330E4",
    fontSize: "35px",
    fontWeight: "bold",
    inlineSize: "266px",
    textTransform: "uppercase",
    lineHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      inlineSize: "auto",
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "30px",
      inlineSize: "auto",
      textAlign: "center",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "30px",
    },
  },
  content: {
    display: "flex",
    alignItems: "start",
    marginTop: "20px",
  },
  cardData: {
    width: "238px",
    marginLeft: "20px",
    fontFamily: "poppins",
    fontSize: "14px",
    [theme.breakpoints.only("lg")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "14px",
      width: "100%",
    },
  },
  button: {
    position: "absolute",
    left: "19%",
    bottom: "8px",
    [theme.breakpoints.between(100, 640)]: {
      left: "16%",
    },
    [theme.breakpoints.only("md")]: {
      left: "9%",
    },
    [theme.breakpoints.only("sm")]: {
      margin:"auto",
      position: "relative",
      marginTop:"30px",
      left: "24%",
      bottom: "0",
    },
  },
  btn: {
    cursor: "pointer",
    width: "225px",
    height: "40px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 94%), 5px 5px 9px rgb(94 104 121 / 8%)",
    borderRadius: "25px",
    [theme.breakpoints.only("md")]: {
      width: "220px",
      height: "40px",
    },
  },
  arrow: {
    width: "18px",
  },
  bottom: {
    position: "relative",
    [theme.breakpoints.down("sm")]: { display: "none" },
  },
  desk: {
    width: "1220px",
    position: "absolute",
    left: "5rem",
    top: "15px",
    [theme.breakpoints.only("lg")]: {
      left: "0px",
      width: "1110px",
    },
    [theme.breakpoints.only("md")]: {
      left: "30px",
      width: "895px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "480PX",
    },
  },
  flowerDesk: {
    position: "absolute",
    bottom: "-9rem",
    left: "12px",
    width: "60px",
    [theme.breakpoints.down("lg")]: {
      left: "-34px",
    },
    [theme.breakpoints.only("md")]: {
      left: "-23px",
      width: "40px",
      bottom: "-6rem",
    },
    [theme.breakpoints.only("sm")]: {
      left: 0,
      width: "45px",
      bottom: "-5rem",
    },
  },
  device: {
    width: "100px",
    top: "-5rem",
    position: "absolute",
    right: "-23px",
    [theme.breakpoints.only("xl")]: {
      right: "34px",
    },
    [theme.breakpoints.only("md")]: {
      top: "-3rem",
      right: "-32px",
      width: "70px",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-5rem",
      right: "66px",
      width: "100px",
    },
  },

  user: {
    position: "absolute",
    right: "-42px",
    top: "-5rem",
    width: "150px",
    zIndex: "-1",
    [theme.breakpoints.only("xl")]: {
      right: "-14px",
      width: "13%;",
      top: "-99px;",
    },
    [theme.breakpoints.only("md")]: {
      top: "-3rem",
      right: "-46px",
      width: "100px",
    },

    [theme.breakpoints.only("sm")]: {
      top: "-3rem",
      right: "70px",
      width: "100px ",
    },
  },
  pTag: {
    color: "#3330E4",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: 500,
    [theme.breakpoints.only("xl")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "11px",
    },
  },
  icon: {
    width: "30px",
    [theme.breakpoints.only("md")]: {
      width: "20px",
    },
    [theme.breakpoints.only("lg")]: {
      width: "22px",
    },
  },
}));

function Timings() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Title title="Who Must Report!" />
        <div className={classes.parent}>
          <p className={classes.description}>
            Reporting Companies including current and future domestic and
            international ones, must report based on the Rule, with certain
            exceptions.
          </p>
          <div className={classes.cards}>
            <Grid item container>
              <Grid
                md={4}
                lg={4}
                xl={4}
                xs={12}
                sm={12}
                className={classes.child}
              >
                <div className={classes.card}>
                  <div className={classes.title}>
                    <p>Domestic Companies</p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} className={classes.icon} />
                    <p className={classes.cardData}>
                      <b>14 days,</b> if a U.S. entity formed on or after the
                      effective date of the Corporate Transparency Act must file
                      its initial report of formation with the State.
                    </p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} className={classes.icon} />
                    <p className={classes.cardData}>
                      <b>1 Year,</b> if a U.S. entity formed before the
                      effective date of the Corporate Transparency Act must file
                      its initial report of formation with the State.
                    </p>
                  </div>
                  <NavLink to={`/calculate`}>
                    <div className={classes.button}>
                      <div className={classes.btn}>
                        <p className={classes.pTag}>
                          Calculate your Eligibility
                        </p>
                        <img src={arrow} className={classes.arrow} />
                      </div>
                    </div>
                  </NavLink>
                </div>
              </Grid>
              <Grid
                lg={4}
                xl={4}
                md={4}
                xs={12}
                sm={12}
                className={classes.child}
              >
                <div className={classes.card}>
                  <div className={classes.title}>
                    <p>Foreign Companies</p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} className={classes.icon} />
                    <p className={classes.cardData}>
                      <b>14 Days</b> for non-U.S. entity which first registers
                      in a U.S. State on or after the effective date of the
                      Corporate Transparency Act must file its initial report
                      within 14 days of State law registration.
                    </p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} className={classes.icon} />
                    <p className={classes.cardData}>
                      <b>1 Year</b> for non-U.S. entity which first registers in
                      a U.S. State before the effective date of the Corporate
                      Transparency Act must file its initial report within 1
                      Year of State law registration
                    </p>
                  </div>
                  <NavLink to={`/calculate`}>
                    <div className={classes.button}>
                      <div className={classes.btn}>
                        <p className={classes.pTag}>
                          Calculate your Eligibility
                        </p>
                        <img src={arrow} className={classes.arrow} />
                      </div>
                    </div>
                  </NavLink>
                </div>
              </Grid>
              <Grid
                lg={4}
                xl={4}
                md={4}
                xs={12}
                sm={12}
                className={classes.child}
              >
                <div className={classes.card}>
                  <div className={classes.title}>
                    <p>Beneficial Owner</p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} className={classes.icon} />
                    <p className={classes.cardData}>
                      An Individual either exercises substantial control or owns
                      or controls at least <b>25 percent</b> of the ownership
                      interests in a reporting company unless the reporting
                      company is publicly owned or controlled primarily by such
                      individuals, in which case such individuals shall be
                      deemed to have exercised substantial control over the
                      reporting company.
                    </p>
                  </div>
                  <NavLink to={`/calculate`}>
                    <div className={classes.button}>
                      <div className={classes.btn}>
                        <p className={classes.pTag}>
                          Calculate your Eligibility
                        </p>
                        <img src={arrow} className={classes.arrow} />
                      </div>
                    </div>
                  </NavLink>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        {/* <div className={classes.bottom}>
          <img src={flowerDesk} className={classes.flowerDesk} />
          <img src={desk} className={classes.desk} />
          <img src={device} className={classes.device} />
          <img src={user} className={classes.user} />
        </div> */}
      </div>
    </div>
  );
}

export default Timings;
