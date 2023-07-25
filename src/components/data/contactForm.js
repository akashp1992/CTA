import { Button, Input, InputLabel, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { doSignup } from "../../redux/auth/registerSlice";
import Toast from "../common/Toast";

const useStyle = makeStyles((theme) => ({
  outerShadow: {
    boxShadow: "-3px -3px 6px #FFFFFF,3px 3px 6px #9191918c!important",
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
  },
  lableRoot: {
    fontFamily: "Poppins !important",
    fontSize: "16px !important",
    color: "#00323A !important",
    fontWeight: "700 !important",
    marginBottom: "10px",
    marginTop: "20px",
  },
  formRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
  },
  submitButton: {
    background: "#3330E4 !important",
    boxShadow:
      "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3) !important",
    color: "white !important",
    textAlign: "center !important",
    fontFamily: "Poppins !important",
    borderRadius: "5px !important",
    padding: "7px !important",
    fontWeight: "600 !important",
    marginTop: "50px !important",
  },
  subTitle: {
    fontFamily: "Poppins regular !important",
    fontWeight: "regular !important",
    color: "#00323A",
    margin: "10px !important",
    fontSize: "16px !important",
    fontFamily: "poppins",
    fontWeight: "500 !important",
  },
}));
function ContactForm() {
  const classes = useStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const [msg, setMsg] = useState("")
  const [type, setType] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (isValid) {
      navigate("/thankyou")
    }
  }, [isValid])
  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      data: {
        ...values,
        password: '123456789',
        country_code: "91"
      },
      onSuccess: async (res) => {
        setMsg(res.message);
        setIsOpen(true)
        setType("success");
        console.log("success", res.message);
        setIsValid(res.success);
      },
      onFail: async (res) => {
        setIsOpen(true)
        setType("error");
        setMsg(res.response.data.message);
        console.log("fail", res.message);
        setIsValid(res.response.data.success);
       
      }
    }
    dispatch(doSignup(request))
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "10px" }}>
        <Typography className={classes.subTitle}>
          Save yourself from the unwanted penalty!{" "}
          <span
            style={{
              color: "#3330e4",
              fontSize: "16px",
              fontFamily: "poppins",
              fontWeight: "700 !important",
            }}
          >
            Signup now for early access to the CTA filing portal!
          </span>
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.outerShadow}>
          <div className={classes.formRoot}>
            <InputLabel className={classes.lableRoot}>First Name</InputLabel>
            <Input
              placeholder="Enter First Name"
              disableUnderline
              value={values.first_name}
              onChange={handleChange}
              name="first_name"
              className={classes.innerShadow}
            />
            <InputLabel className={classes.lableRoot}>Last Name</InputLabel>
            <Input
              placeholder="Enter Last Name"
              disableUnderline
              className={classes.innerShadow}
              value={values.last_name}
              onChange={handleChange}
              name="last_name"
            />
            <InputLabel className={classes.lableRoot}>Email</InputLabel>
            <Input
              placeholder="Enter Email"
              disableUnderline
              className={classes.innerShadow}
              value={values.email}
              onChange={handleChange}
              name="email"
            />
            <InputLabel className={classes.lableRoot}>Phone Number</InputLabel>
            <Input
              placeholder="Enter Phone Number"
              disableUnderline
              className={classes.innerShadow}
              value={values.phone}
              onChange={handleChange}
              name="phone"
            />
            <Button className={classes.submitButton} type="submit">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
      <Toast open={isOpen} msg={msg} type={type} handleClose={() => setIsOpen(false)} />
    </div>
  );
}

export default ContactForm;
