import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Redirect } from "../Common/Redirect";
import validator from "validator";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const useStyle = makeStyles((theme) => ({
  main: {
    backgroundColor: "#F8F8F8",
    borderRadius: "5px",
    height: "650px",
  },
  usertitle: {
    fontSize: "30px !important",
    fontWeight: "300 !important",
    fontFamily: "Poppins !important",
    color: "#3330E4",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  forminput: {
    background: "white",
    padding: "5px",
    borderRadius: "5px !important",
    width: "470px",
    height: "35px",
    color: "#D1DAFF !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
  form: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  matchpass: {
    color: "#0EB902",
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
  incorrectpass: {
    color: "#D8001D",
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
  buttonbody: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3330E4 !important",
    width: "70px !important",
    height: "35px !important",
    fontWeight: "500 !important",
    textTransform: "none !important",
  },
}));

const ForgotPassword = () => {
  const classes = useStyle();
  const navigate = useLocation();

  // strong password
  const [errorMessage, setErrorMessage] = React.useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong");
    } else {
      setErrorMessage("Not Strong");
    }
  };

  //show and hide password
  const [values, setValues] = React.useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formError, setFormError] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    let inputError = {
      password: "",
      confirmPassword: "",
    };
    if (values.confirmPassword && e.target.value !== values.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    } else if (values.confirmPassword && e.target.value === values.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password Match",
      });
      return;
    }
  };

  const handleClickShowPassword = (e) => {
    setShow({
      ...show,
      password: !show.password,
    });
  };

  const handleConfirmPassword = () => {
    setShow({
      ...show,
      confirmPassword: !show.confirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={classes.main}>
        <Container>
          <Container>
            <Typography className={classes.usertitle}>
              Hi,
              <br /> User Name
            </Typography>
            <div className={classes.form}>
              <div>
                <TextField
                  variant="standard"
                  InputProps={{
                    className: classes.forminput,
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <VisibilityIcon sx={{ color: "#3330E4" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter your current password"
                  disableUnderline={true}
                />
              </div>
              <Typography
                style={{ marginLeft: "20px" }}
                className={classes.incorrectpass}
              >
                Incorrect Password
              </Typography>
            </div>
            <div className={classes.form}>
              <div>
                <TextField
                  type={show.password ? "text" : "password"}
                  onChange={(e) => {
                    validate(e.target.value);
                    handleChange(e);
                  }}
                  value={values.password}
                  variant="standard"
                  name="password"
                  InputProps={{
                    className: classes.forminput,
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {show.password ? (
                            <VisibilityIcon sx={{ color: "#3330E4" }} />
                          ) : (
                            <VisibilityOffIcon sx={{ color: "#3330E4" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter your new password* "
                  disableUnderline={true}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Typography>
                  {" "}
                  {errorMessage === "" ? null : (
                    <Typography>
                      <Typography className={classes.matchpass}>
                        {errorMessage}
                      </Typography>
                    </Typography>
                  )}
                </Typography>
              </div>
            </div>
            <div className={classes.form}>
              <div>
                <TextField
                  type={show.confirmPassword ? "text" : "password"}
                  variant="standard"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  onChange={(e) => handleChange(e)}
                  InputProps={{
                    className: classes.forminput,
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={handleConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {show.confirmPassword ? (
                            <VisibilityIcon sx={{ color: "#3330E4" }} />
                          ) : (
                            <VisibilityOffIcon sx={{ color: "#3330E4" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Reenter your new password* "
                  disableUnderline={true}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Typography className={classes.matchpass}>
                  {formError.confirmPassword}
                </Typography>
              </div>
            </div>
            <div className={classes.buttonbody}>
              <div>
                <NavLink to="/Settings" style={{ textDecoration: "none" }}>
                  <Button variant="contained" className={classes.button}>
                    Save
                  </Button>
                </NavLink>
              </div>
              <div></div>
            </div>
            <div
              style={{
                marginLeft: "200px",
              }}
            ></div>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
