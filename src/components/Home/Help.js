import React from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import map from "../../images/map.svg";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: "poppins",
    textAlign: "center",
    paddingTop: "60px",
    paddingBottom: "50px",
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
  },
  parent: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 100px",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    background: `url(${map}) no-repeat `,
    backgroundSize: "48%",
    backgroundPosition: "center center",
    [theme.breakpoints.only("xl")]: {
      padding: "120px 100px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  child: {
    width: "550px",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  circle29: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&:hover": {
      boxShadow:
        "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%);",
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },

  circle19: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&:hover": {
      boxShadow:
        "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%);",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
  circle10: {
    width: "95px",
    height: "95px",
    borderRadius: "50%",
    background: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&:hover": {
      boxShadow:
        "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%);",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
  circleBottom10: {
    width: "95px",
    height: "95px",
    borderRadius: "50%",
    background: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    left: "6rem",
    top: "-7rem",
    "&:hover": {
      boxShadow:
        "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%);",
    },
    [theme.breakpoints.down("sm")]: {
      top: 0,
      left: 0,
      marginBottom: "10px",
    },
  },
  circle16: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    right: "-10rem",
    top: "-49px",
    "&:hover": {
      boxShadow:
        "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%);",
    },

    [theme.breakpoints.down("sm")]: {
      top: 0,
      right: 0,
      marginBottom: "10px",
    },
  },

  circle14: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    left: "9rem",
    top: "-4rem",

    "&:hover": {
      boxShadow:
        "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%);",
    },
    [theme.breakpoints.down("sm")]: {
      top: 0,
      left: 0,
      marginBottom: "10px",
    },
  },
  percentage29: {
    color: "#06283d",
    fontSize: "50px",
  },
  percentage19: {
    color: "#06283d",
    fontSize: "40px",
  },

  percentage10: {
    color: "#06283d",
    fontSize: "25px",
  },
  percentage16: {
    color: "#06283d",
    fontSize: "27px",
  },
  percentage14: {
    color: "#06283d",
    fontSize: "26px",
  },
  data: {
    fontSize: "9px",
    width: "99px",
  },
  bottoms: {
    width: "550px",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
function Help() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Title title="We Are Here To Help" />
        <p className={classes.title}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={classes.parent}>
          <div className={classes.child}>
            <div className={classes.circle29}>
              <div className={classes.percentage29}>
                <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  29%
                </motion.p>
              </div>
              <div className={classes.data}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className={classes.circle19}>
              <div className={classes.percentage19}>
                <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  19%
                </motion.p>
              </div>
              <div className={classes.data}>
                <p>Lorem Ipsum is simply dummy text of the printing and.</p>
              </div>
            </div>
            <div className={classes.circle10}>
              <div className={classes.percentage10}>
                <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  10%
                </motion.p>
              </div>
              <div className={classes.data}>
                <p>Lorem Ipsum is simply dummy</p>
              </div>
            </div>
          </div>
          <div className={classes.bottoms}>
            <div className={classes.circle16}>
              <div className={classes.percentage16}>
                <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  16%
                </motion.p>
              </div>
              <div className={classes.data}>
                <p>Lorem Ipsum is simply dummy text of the</p>
              </div>
            </div>
            <div className={classes.circle14}>
              <div className={classes.percentage14}>
                <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  14%
                </motion.p>
              </div>
              <div className={classes.data}>
                <p>Lorem Ipsum is simply dummy text of the</p>
              </div>
            </div>
            <div className={classes.circleBottom10}>
              <div className={classes.percentage10}>
                <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  10%
                </motion.p>
              </div>
              <div className={classes.data}>
                <p>Lorem Ipsum is simply dummy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
