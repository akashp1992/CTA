import React from "react";
import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: "poppins ",
    background: "#f7f7f7",
    padding: "35px 0px",
  },
  text: {
    color: "#06283d",
    fontSize: "25px",
    fontWeight: 700,
    width: "370px",
    marginTop: "20px",
  },
  span: {
    color: "#3330e4",
  },
  parent: {
    display: "flex",
    justifyContent: "end",
  },
  form: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  name: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    border: "none",
    padding: "2px",
    background: "#f7f7f7",
    "&::placeholder": {
      fontSize: "12px",
      color: "#06283d",
      opacity: "0.30000001192092896",
    },
  },
  label: {
    color: "#00323a",
    fontSize: "14px",
    marginBottom: "10px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    background: "#3330e4",
    border: "none",
    color: "#ffffff",
    fontSize: "10px",
    width: "140px",
    height: "21px",
    borderRadius: "5px",
    marginTop: "30px",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  dark: {
    height: "5px",
    width: "5px",
    background: "#3330e4",
    borderRadius: "50%",
  },
  light: {
    height: "5px",
    width: "5px",
    background: "##e4e4ff",
    borderRadius: "50%",
  },
}));
function Signup() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Grid item container>
          <Grid md={6} lg={6} xl={6} className={classes.parent}>
            <div className={classes.text}>
              <p>
                Sign up now on simple{" "}
                <span className={classes.span}> 2 Step </span> to be top of new
                CTA law
              </p>
            </div>
          </Grid>
          <Grid md={6} lg={6} xl={6}>
            <div className={classes.form}>
              <div className={classes.name}>
                <label className={classes.label}>First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className={classes.input}
                />
              </div>
              <div className={classes.name}>
                <label className={classes.label}>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className={classes.input}
                />
              </div>
            </div>
            <div className={classes.dots}>
              <div className={classes.dark}></div>
              <div className={classes.light}></div>
            </div>
            <div className={classes.button}>
              <button className={classes.btn}>Next For Sign up</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Signup;
