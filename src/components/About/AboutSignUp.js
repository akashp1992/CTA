import { Input, InputLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import dot from "../../images/dott.svg";
import ctaWave from "../../images/ctaWave.svg";
import FormDialog from "../Login/FormDialog";
import Toast from "../common/Toast";
const useStyle = makeStyles((theme) => ({
  mainRoot: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: "150px",
    paddingRight: "92px",
    paddingTop: "50px",
    paddingBottom: "50px",
    background: "#F7F7F7",
    // [theme.breakpoints.only("sm")]: {
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   padding: "50px 10px",
    // },
    [theme.breakpoints.only("sm")]: {
      padding: "30px 40px",
    },
    [theme.breakpoints.only("xs")]: {
      alignItems: "center",
      flexDirection: "column",
      padding: "30px 40px",
    },
  },
  leftContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "49%",
    zIndex: 1,
    [theme.breakpoints.only("xs")]: {
      alignItems: "center",
      width: "100%",
      textAlign: "center",
      marginBottom: "20px"
    },
  },
  rightContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "51%",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  formContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  typoText: {
    fontFamily: "Poppins !important",
    fontWeight: "bolder !important",
    fontSize: "30px !important",
    [theme.breakpoints.only("lg")]: {
      fontSize: "26px !important",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "22px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px !important",
    },
    
    
  },
  outerShadow: {
    boxShadow:
      "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
    width: "321px",
    background: "#F7F7F7",
    borderRadius: "10px",
  },
  innerShadow: {
    boxShadow:
      "inset -5px -5px 9px rgb(254 254 254 / 83%), inset 5px 5px 9px rgb(94 104 121 / 19%)",
    background: "transprent",
    borderRadius: "5px",
    width: "100%",
    padding: "5px",
    paddingLeft: "10px",
    margin: "8px !important",
  },
  lableRoot: {
    fontFamily: "Poppins !important",
    fontSize: "16px !important",
    color: "#00323A !important",
    fontWeight: "700 !important",
    marginBottom: "10px",
    marginTop: "20px",
  },
  labelStyle: {
    fontFamily: "Poppins !important",
    fontSize: "16px !important",
    fontWeight: "500 !important",
    color: "#00323A !important",
    marginLeft: "10px",
  },
  formRoot: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    padding: "20px",
  },
  submitButton: {
    background: "#3330E4",
    boxShadow:
      "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins",
    borderRadius: "10px",
    padding: "10px 10px !important",
    fontWeight: "500",
    marginTop: "13px",
    cursor: "pointer",
    width: '200px',
    transition: "all 0.3s ease",
    [theme.breakpoints.only("lg")]: {
      padding: "3px 33px",
    },
    [theme.breakpoints.only("md")]: {
      padding: "3px 30px",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "3px 28px",
    },
  },
  wave: {
    position: "absolute",
    width: "83%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
function AboutSignUp() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [msg, setMsg] = useState("")
  const [type, setType] = useState("");
  const [values, setValues] = useState({
    first_name: "",
    last_name: ""
  })
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleClickOpen = () => {
    // if (values.first_name === "") {
    //   setIsOpen(true)
    //   setMsg("Enter First Name")
    //   setType("error")
    // } else if (values.last_name === "") {
    //   setIsOpen(true)
    //   setMsg("Enter Last Name")
    //   setType("error")
    // } else {
    setOpen(true)
    // }
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={classes.mainRoot}>
      <div>
        <img src={ctaWave} className={classes.wave} />
      </div>
      {/*  */}
      <div className={classes.leftContent}>
        <Typography className={classes.typoText}>
          Get Early Access to Upcoming{" "}
          <span style={{ color: "#3330E4" }}>America's First</span>
          <span style={{ color: "#3330E4" }}> CTA Filing portal!</span>
        </Typography>
      </div>
      <div className={classes.rightContent}>
        {/* <div className={classes.formContent}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <InputLabel className={classes.labelStyle}>First Name</InputLabel>
            <Input
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              placeholder="Enter First Name"
              className={classes.innerShadow}
              disableUnderline
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputLabel className={classes.labelStyle}> Last Name</InputLabel>
            <Input
              placeholder="Enter Last Name"
              className={classes.innerShadow}
              disableUnderline
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <img src={dot} alt="" />
        </div> */}
        <div className={`first_button ${classes.submitButton}`} onClick={handleClickOpen}>Sign up</div>
      </div>
      <FormDialog open={open} close={handleClose} firstName={values.first_name} lastName={values.last_name} />
      <Toast open={isOpen} msg={msg} type={type} handleClose={() => setIsOpen(false)} />
    </div >
  );
}

export default AboutSignUp;
