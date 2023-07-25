import React from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import checkmark from "../../images/checkmark.svg";
import arrow from "../../images/arrow.svg";
// import flowerDesk from '../../images/flowerDesk.svg'
// import desk from '../../images/desk.svg'
// import user from '../../images/user.svg'
// import device from '../../images/device.svg'
import TimingGroup from "../../images/TimingGroup.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "80px",
    overflowX: "hidden",
    overflowY: "hidden",
    paddingBottom: "150px",
  },
  description: {
    padding: "0 42px",
    marginTop: "10px",
    color: "#00323A",
    fontSize: "16px",
    fontFamily: "poppins",
    textAlign: "center",
  },
  parent: {
    padding: "0 110px",
  },
  child: {
    display: "flex",
    justifyContent: "center",
  },
  cards: { marginTop: "30px" },
  card: {
    padding: "30px 20px",
    background: "#F7F7F7",
    width: "275px",
    height: "525px",
    borderRadius: "10px",
    position: "relative",
  },
  title: {
    color: "#3330E4",
    fontSize: "35px",
    fontWeight: "bold",
    inlineSize: "266px",
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
  },
  button: {
    position: "absolute",
    left: "27%",
    bottom: "8px",
  },
  btn: {
    width: "150px",
    height: "40px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "21px",
    boxShadow:
      "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
  },
  arrow: {
    width: "18px",
  },
  bottom: {
    position: "relative",
  },
  // desk: {
  //     width: "1200px",
  //     position: "absolute",
  //     marginLeft: "145px",
  //     top:"15px"
  // },
  // flowerDesk: {
  //     position: "absolute",
  //     bottom: "-5rem",
  //     left: "12px",
  //     width: "60px",

  // },
  // device:{
  //     width:"100px",
  //     top: "-5rem",
  // position: "absolute",
  // right: "45px",
  // },

  // user:{
  //     position: "absolute",
  //     right: 30,
  //     top: "-5rem",
  //     width: "150px",
  //     zIndex: "-1",}
}));

function Timings() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Title title="Timing of Filing" />
        <div className={classes.parent}>
          <p className={classes.description}>
            An entity must file a new report within 30 days after any change in
            any information that was reported in the most recent filed report.
            if the entity filed information that was inaccurate at the time of
            filing, the company would have to file a corrected report within 14
            calendar days of the date it knew, or should have known, that the
            information was inaccurate.
          </p>
          <div className={classes.cards}>
            <Grid item container>
              <Grid md={4} lg={4} xl={4} className={classes.child}>
                <div className={classes.card}>
                  <div className={classes.title}>
                    <p>Domestic Companies</p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} />
                    <p className={classes.cardData}>
                      A U.S. entity formed on or after the effective date of the
                      final Regs. must file its initial report within{" "}
                      <b>14 days</b> of formation with the State
                    </p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} />
                    <p className={classes.cardData}>
                      A U.S. entity formed before the effective date of the
                      final Regs. must file its initial report within{" "}
                      <b>1 year</b> of the final Reg.’s effective date.{" "}
                    </p>
                  </div>
                  <div className={classes.button}>
                    <div className={classes.btn}>
                      <p>File Report</p>
                      <img src={arrow} className={classes.arrow} />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid lg={4} xl={4} md={4} className={classes.child}>
                <div className={classes.card}>
                  <div className={classes.title}>
                    <p>Foreign Companies</p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} />
                    <p className={classes.cardData}>
                      A non-U.S. entity which first registers in a U.S. State on
                      or after the effective date of the final Regs. must file
                      its initial report within <b>14 days</b> of State law
                      registration.{" "}
                    </p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} />
                    <p className={classes.cardData}>
                      A non-U.S. entity which first registers in a U.S. State
                      before the effective date of the final Regs. must file its
                      initial report within <b>1 year</b>of the final Reg.’s
                      effective date.{" "}
                    </p>
                  </div>
                  <div className={classes.button}>
                    <div className={classes.btn}>
                      <p>File Report</p>
                      <img src={arrow} className={classes.arrow} />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid lg={4} xl={4} md={4} className={classes.child}>
                <div className={classes.card}>
                  <div className={classes.title}>
                    <p>Beneficial Owner</p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} />
                    <p className={classes.cardData}>
                      A beneficial owner is any individual who directly or
                      indirectly, through any contract, arrangement,
                      understanding, relationship, or otherwise exercises
                      substantial control over the entity.{" "}
                    </p>
                  </div>
                  <div className={classes.content}>
                    <img src={checkmark} />
                    <p className={classes.cardData}>
                      A Beneficial owner is defined as person with substantial
                      control of company or has at least <b>25% ownership.</b>
                    </p>
                  </div>
                  <div className={classes.button}>
                    <div className={classes.btn}>
                      <p>File Report</p>
                      <img src={arrow} className={classes.arrow} />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className={classes.bottom}>
          <img src={TimingGroup} />
        </div>
      </div>
    </div>
  );
}

export default Timings;
