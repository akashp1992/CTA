import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  Divider,
  IconButton,
  Input,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemText,
  Slide,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import closeIcon from "../../images/closeDialog.svg";
import ContactForm from "../data/contactForm";
import logo from "../../images/logo.svg";
import { makeStyles } from "@mui/styles";
import bgDialog from "../../images/dialogBg.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo2 from "../../images/CTALogo2.svg";
import bgImage from "../../images/New icon/CTALogoBackgound.svg";
import { useDispatch } from "react-redux";
import { doSignup } from "../../redux/auth/registerSlice";
import Toast from "../common/Toast";
import { Controller, useForm } from "react-hook-form";
import LoginDialog from "./LoginDialog";
import Swal from "sweetalert2";

const useStyle = makeStyles((theme) => ({
  imageLogo: {
    width: "200px",
  },
  descStyle: {
    fontFamily: "Poppins !important",
    color: "#00323A !important",
    fontWeight: "500",
    margin: "10px !important",
  },
  dialogRoot: {
    background: `#F7F7F7 !important`,
  },
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
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important",
      borderColor: "transparent !important",
    },
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
    textTransform: "capitalize !important"
  },
}));
function FormDialog({ open, close, redirect, firstName, lastName }) {
  const classes = useStyle();
  const navigate = useNavigate();
  const [onClose, setOnClose] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [msg, setMsg] = useState("")
  const [type, setType] = useState("");
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
  const [isValid, setIsValid] = useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const dispatch = useDispatch();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const myHelper = {
    email: {
      required: "Email is Required",
      pattern: "Invalid Email Address",
    },
    first_name: {
      required: "First Name is Required",
    },
    last_name: {
      required: "Last Name is Required",
    },
    phone: {
      required: "Phone Number is Required",
    },
    password:{
      required:"Password is Required"
    }
  };
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };


  useEffect(() => {
    if (isValid) {

      setTimeout(() => {
        setOnClose(close)
        setFormValues("")
      }, 2000)
      if (!onClose) {
        navigate("/thankyou")
        setOnClose(true)
      }
    }
  }, [isValid, onClose])
  const handleOnSubmit = (e) => {
    //e.preventDefault();

    // const formFields = Object.keys(formValues);
    // let newFormValues = { ...formValues };

    // for (let index = 0; index < formFields.length; index++) {
    //   const currentField = formFields[index];
    //   const currentValue = formValues[currentField].value;

    //   if (currentValue === "") {
    //     newFormValues = {
    //       ...newFormValues,
    //       [currentField]: {
    //         ...newFormValues[currentField],
    //         error: true,
    //       },
    //     };

    //   }
    // }
    console.log("firstName", formValues.first_name);
    const request = {
      data: {
        first_name: formValues.first_name || firstName,
        last_name: formValues.last_name || lastName,
        email: formValues.email,
        phone: formValues.phone,
        password: formValues.password,
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
        console.log("fail", res.message);
        setIsValid(res.response.data.success);
        setMsg(res.response.data.message);
      }
    }
    dispatch(doSignup(request))
  };

  useEffect(() => {
    if (isValid) {
      if (isTablet) {
        Swal.fire(
          'Currently your CTAF dashboard is accessible just on Desktop Version!',
          'We will soon launch on other devices and you will be first one to know :)',
          'success'
        )
        setOnClose(true)
      }
    } else {

    }
  }, [])
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const handleLoginClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsLoginOpen(false);
  }

  const handleLoginOpen = () => {
    setIsLoginOpen(true)

  }
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={close}
        style={{ overflowX: 'hidden !important' }}
        classes={{ paper: classes.dialogRoot }}
        keepMounted
        BackdropProps={{ style: { backgroundColor: "#F7F7F7 !important" } }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "40px",
            }}
            onClick={close}
          >
            <img src={closeIcon} alt="icon" />
          </div>
          <div>
            <img src={logo2} alt="logo" className={classes.imageLogo} />
          </div>
          {/* <Typography className={classes.descStyle}>
          Please fill out the form to inquire about your Problem.
        </Typography> */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginTop: "20px",
              overflowX: 'hidden'
            }}
          >
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <div className={classes.outerShadow}>
                <div className={classes.formRoot}>
                  <InputLabel className={classes.lableRoot}>
                    First Name
                  </InputLabel>
                  <TextField
                    value={formValues.first_name === "" ? firstName : formValues.first_name}
                    name="first_name"
                    placeholder="Enter First Name"
                    disableUnderline
                    onChange={handleChange}
                    error={!!errors['first_name']}
                    helperText={errors['first_name'] ? errors['first_name'].message : ''}
                    className={classes.innerShadow}
                  />
                  <InputLabel className={classes.lableRoot}>Last Name</InputLabel>
                  <TextField
                    name="last_name"
                    value={formValues.last_name === "" ? lastName : formValues.last_name}
                    placeholder="Enter Last Name"
                    disableUnderline
                    onChange={handleChange}
                    className={classes.innerShadow}
                  />
                  <InputLabel className={classes.lableRoot}>Email</InputLabel>
                  <TextField
                    onChange={handleChange}
                    value={formValues.email}
                    name="email"
                    placeholder="Enter Email"
                    disableUnderline
                    className={classes.innerShadow}
                  />
                   <InputLabel className={classes.lableRoot}>Password</InputLabel>
                  <TextField
                    value={formValues.password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Enter Password"
                    disableUnderline
                    className={classes.innerShadow}
                  />
                  <InputLabel className={classes.lableRoot}>Phone Number</InputLabel>
                  <TextField
                    value={formValues.phone}
                    name="phone"
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    disableUnderline
                    className={classes.innerShadow}
                  />
                  <DialogActions className={classes.submitButton}>
                    <Button
                      type="submit"
                      style={{ width: '100%', color: 'white' }}
                      onClick={onClose}
                    >
                      Sign Up
                    </Button>

                  </DialogActions>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <Typography sx={{ fontSize: '14px !important', fontFamily: "Poppins !important", fontWight: '700 !important' }}>Already have a CTAF Account?</Typography>
                    <Typography sx={{ fontSize: '10px !important', fontFamily: "Poppins !important", fontWight: '700 !important' }}>Sign in & get started with your CTA process</Typography>
                    <Typography onClick={handleLoginOpen} sx={{ color: "#3330E4 !important", fontSize: '18px !important', fontFamily: "Poppins !important", fontWight: '700 !important', cursor: 'pointer' }}>Sign in</Typography>
                  </div>
                </div>
              </div>
            </form>
            <div
              style={{
                height: "auto",
                width: "30%",
                marginTop: "-370px",
                marginLeft: "1100px",
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "100px",
              }}
            >
              {console.log("status", isValid)}
              <img src={bgImage} className={classes.bgImage} alt="bg" />
            </div>
          </div>
          <Toast open={isOpen} msg={msg} type={type} handleClose={() => setIsOpen(false)} />
        </div>
      </Dialog>
      <LoginDialog
        open={isLoginOpen}
        close={handleLoginClose}

      />
    </>
  );
}

export default FormDialog;
