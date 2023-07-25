import { FormControl, FormLabel, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginRight: "20px",
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
      marginRight: "0px",
      marginTop: "0px"
    },
  },
  mainLabel: {
    color: "#06283D !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    marginBottom: "15px ",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "30px",
      marginBottom: "0px ",
    },
  },
  textField: {
    padding: "10px !important",
    marginLeft: "10px !important",
  },
  textFieldRoot: {
    height: "30px !important",
    // marginLeft: "10px !important",
    [theme.breakpoints.only("xs")]: {
      padding: "30px !important",
      width: "400px"
      // marginLeft: "30px !important",
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));
const UserForm = ({ parentCallBack }) => {
  const classes = useStyle();
  const onTrigger = (e) => {
    e.preventDefault();
    parentCallBack(e.target.first_name, e.target.last_name)
  }
  return (
    <div>
      <div className={classes.main}>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className={classes.mainLabel}
        >
          1.First Name & Last Name ?*
        </FormLabel>
        <div className={classes.container}>
          <TextField
            name="first_name"
            className={classes.textFieldRoot}
            inputProps={{ className: classes.textField }}
            placeholder="First Name"
          />
          <TextField
            name="last_name"
            className={classes.textFieldRoot}
            inputProps={{ className: classes.textField }}
            placeholder="Last Name"
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
