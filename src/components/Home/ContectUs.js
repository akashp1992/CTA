import React from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import Groups from "../images/Groups.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: "poppins",
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
  },
  contectUs: {
    display: "flex",
    justifyContent:'center',
  },
  form:{
    background:'#f7f7f7',
    // height:'190px',
    borderRadius:'5px',
    width:'200px'
  },
  name: {
    display: "flex",
    flexDirection: "column",
    padding:'5px'
  },
  input: {
    border: "none",
    padding: "7px",
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
  // img:{
  //   // width:"100px",
  //   // [theme.breakpoints.only("lg")]:{
  //   //   width: "250px"
  //   // }
  // },
  // image: {
  //   width: "200px"
  // }
}));
function ContectUs() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Title title="Latest Information" />
        <p className={classes.title}>
          Thank you for your interest. Please fill out the form to inquire about
          your Problem.
        </p>
        <div className={classes.container}>
          <div className={classes.contectUs}>
            <div className={classes.image}>
              <img src={Groups} className={classes.img} />
            </div>
            <div className={classes.form}>
              <div className={classes.name}>
                <label className={classes.label}>First Name</label>
                <input
                  type="text"
                  placeholder=" First Name"
                  className={classes.input}
                />
              </div>
              <div className={classes.name}>
                <label className={classes.label}>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={classes.input}
                />
              </div>
              <div className={classes.name}>
                <label className={classes.label}>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className={classes.input}
                />
              </div>
              <div className={classes.button}>
                <p>Submit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContectUs;
