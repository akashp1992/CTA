import { FormControl, FormLabel, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    // marginRight: "20px !important",
    justifyContent: "space-around",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      justifyContent: "center",
      flexDirection:"column"
    },
  },
  mainLabel: {
    color: "#06283D !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    marginBottom: "15px ",
  },
  textField: {
    padding: "10px !important",
    marginLeft: "10px !important",
  },
  textFieldRoot: {
    height: "30px !important",
    marginRight: "20px !important",
    [theme.breakpoints.only("xs")]: {
      marginBottom:"30px !important"
    },
  },
}));
const EntityForm = () => {
  const classes = useStyle();
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className={classes.mainLabel}
        >
          3.Company & Entity name ?*
        </FormLabel>
        <div className={classes.container}>
          <TextField
            className={classes.textFieldRoot}
            inputProps={{ className: classes.textField }}
            placeholder="Company Name"
          />
          <TextField
            className={classes.textFieldRoot}
            inputProps={{ className: classes.textField }}
            placeholder="Entity Name"
          />
        </div>
      </div>
    </div>
  );
};

export default EntityForm;
