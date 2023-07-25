import { FormControl, FormLabel, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "10px",
  },
  mainLabel: {
    color: "#06283D !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    marginBottom: "10px ",
    [theme.breakpoints.only("xs")]: {
      textAlign:"center"
    },
  },
  textField: {
    padding: "10px !important",
    marginLeft: "10px !important",
  },
  textFieldRoot: {
    height: "30px !important",
    // marginLeft: '10px !important',
  },
  main: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      alignItems: "center",
    },
  },
}));
const WebsiteForm = () => {
  const classes = useStyle();
  return (
    <div>
      <div style={{}} className={classes.main}>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className={classes.mainLabel}
        >
          5.Company Website (if any)?
        </FormLabel>
        <div className={classes.container}>
          <TextField
            className={classes.textFieldRoot}
            inputProps={{ className: classes.textField }}
            placeholder="Company Website"
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteForm;
