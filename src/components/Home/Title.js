import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import underLine from "../../images/underLine.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    fontFamily: "poppins",
    textAlign: "center",
  },
  text: {
    color: "#06283D",
    fontSize: "40px",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "30PX",
    },
  },
  line: {
    width: "230px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  },
}));

function Title({ title }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <p className={classes.text}>{title}</p>
        <img src={underLine} className={classes.line} />
      </div>
    </div>
  );
}

export default Title;
