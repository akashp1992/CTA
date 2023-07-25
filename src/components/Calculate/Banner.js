import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  LinearProgress,
  Radio,
  RadioGroup,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container, width } from "@mui/system";
import React, { useState } from "react";
import logo from "../../images/logo.svg";
import QuizForm from "../QuizForm";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import UserForm from "./forms/UserForm";
import EntityForm from "./forms/EntityForm";
import RevenueForm from "./forms/RevenueForm";
import WebsiteForm from "./forms/WebsiteForm";
import EmailForm from "./forms/EmailForm";
import PhoneForm from "./forms/PhoneForm";
import { useDispatch } from "react-redux";
import { doEligibility } from "../../redux/auth/eligibilitySlice";
import Toast from "../common/Toast";
import successAnim from '../../lottie/success.json'
import Lottie from "react-lottie";
import { useEffect } from "react";

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
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.23) !important",
    },
    borderColor: "rgba(0, 0, 0, 0.23) !important"
  },
  textFieldRoot: {
    height: "30px !important",
    borderColor: "rgba(0, 0, 0, 0.23) !important",
    // marginLeft: "10px !important",
    [theme.breakpoints.only("xs")]: {
      padding: "30px !important",
      width: "400px",
      borderColor: "rgba(0, 0, 0, 0.23) !important"
      // marginLeft: "30px !important",
    },
  },
  textFieldEntityRoot: {
    height: "30px !important",
    marginRight: "20px !important",
    borderColor: "rgba(0, 0, 0, 0.23) !important",
    [theme.breakpoints.only("xs")]: {
      marginBottom: "30px !important",
      borderColor: "rgba(0, 0, 0, 0.23) !important"
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  mainRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  contentRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "60px !important",
    },
  },
  // logo: {
  //   width: "100px",
  //   height: "100px",
  //   marginBottom: "20px",
  //   marginTop: "20px",
  // },
  typoHeading: {
    fontSize: "40px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
    color: "#06283D !important",
    [theme.breakpoints.only("xs")]: {
      fontSize: "25px !important",
    },
  },
  progressBarRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "150px",
    width: "100%",
  },
  progressStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(90deg)",
    height: "270px",
    width: "50%",
    [theme.breakpoints.only("xs")]: {
      height: "100px",
      width: "100%",
      flexDirection: "column",
      justifyContent: "end",
    },
    [theme.breakpoints.only("sm")]: {
      width: "30%",
      height: "270px",
    },
  },
  buttonRoot: {
    height: "28px !important",
    width: "20 !important",
    textTransform: "none !important",
    background: "#3330E4 !important",
    color: "white !important",
    margin: "10px !important",
    fontFamily: "Poppins !important",
    paddingRight: "10px !important",
  },
  buttonDisableRoot: {
    height: "28px !important",
    width: "20 !important",
    fontFamily: "Poppins !important",
    textTransform: "none !important",
    background: "#F7F7F7 !important",
    color: "white !important",
    margin: "10px !important",
    paddingRight: "10px !important",
  },
  progress: {
    width: 200,
    backgroundColor: `rgb(216 213 213)`,
    "& .MuiLinearProgress-bar": {
      backgroundColor: `rgb(51,48,228)`,
    },
    [theme.breakpoints.only("xs")]: {
      transform: "rotate(-90deg)",
    },
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
    // height: "250px",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  bodySuccess: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    // height: "250px",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  proTypo: {
    paddingLeft: "2px",
    transform: "rotate(-90deg)",
    [theme.breakpoints.only("xs")]: {
      textAlign: "right !important",
      width: "100% !important",
    },
  },
  formBody: {
    width: "950px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      justifyContent: "center",
      padding: "0px 15px",
    },
    [theme.breakpoints.only("md")]: {
      width: "900px",
    },
  },
  allButton: {
    display: "flex",
    alignItems: "flex-end",
    width: "50%",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginTop: "40px",
      justifyContent: "center",
    },
    [theme.breakpoints.only("sm")]: {
      width: "100%",
      flexDirection: "row",
    },
  },
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      padding: "0px 15px",
    },
  },
  rootRadio: {
    color: "default !important",
    "&.Mui-checked": {
      color: "#3330E4 !important",
    },
  },

  containerWebsite: {
    display: "flex",
    marginTop: "10px",
  },
  mainLabelWebsite: {
    color: "#06283D !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    marginBottom: "10px ",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center"
    },
  },
  textFieldWebsite: {
    padding: "10px !important",
    marginLeft: "10px !important",
    borderColor: "rgba(0, 0, 0, 0.23) !important"
  },
  textFieldRootWebsite: {
    height: "30px !important",
    borderColor: "rgba(0, 0, 0, 0.23) !important"
    // marginLeft: '10px !important',
  },
  mainWebsite: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      alignItems: "center",
    },
  },
  containerEmail: {
    display: 'flex',
    marginTop: '10px',
  },
  mainLabelEmail: {
    color: "#06283D !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    marginBottom: "15px ",
  },
  textFieldEmail: {
    padding: '10px !important',
    marginLeft: '10px !important',
    borderColor: "rgba(0, 0, 0, 0.23) !important"
  },
  textFieldRootEmail: {
    height: '30px !important',
    borderColor: "rgba(0, 0, 0, 0.23) !important"
  },

  containerPhone: {
    display: 'flex',
    marginTop: '10px',
  },
  mainLabelPhone: {
    color: "#06283D !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    marginBottom: "15px ",

  },
  textFieldPhone: {
    padding: '10px !important',
    marginLeft: '10px !important',
    borderColor: "rgba(0, 0, 0, 0.23) !important"


  },
  textFieldRootPhone: {
    height: '30px !important',
    borderColor: "rgba(0, 0, 0, 0.23) !important"
  }
}));
function Banner() {
  const classes = useStyle();
  //lottie animation 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [isDisable, setDisable] = useState(true)
  const [msg, setMsg] = useState("")
  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    profession: "",
    company_name: "",
    entity_name: "",
    gross_revenue: "",
    company_website: "",
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
    if (!values.first_name || !values.last_name) {
      setDisable(false)
    }
  }, [isDisable])

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      data: { ...values },
      onSuccess: async (res) => {
        setMsg(res.message);
        setIsOpen(true)
        setType("success");
        setSuccess(res.success);
      },
      onFail: async (res) => {
        setIsOpen(true)
        setType("error");
        setMsg(res.response.data.message);
        setSuccess(res.response.data.success);
      }
    }

    if (values.first_name === "" || values.last_name === "") {

      setMsg("Enter FirstName or Last Name");
      setIsOpen(true)
      setType("error");
      setProgress(10)
    } else if (values.profession === "") {
      setMsg("Select Profession");
      setIsOpen(true)

      setType("error");
      setProgress(25)
    } else if (values.company_name === "" || values.entity_name === "") {
      setMsg("Enter CompanyName or Entity Name");
      setIsOpen(true)
      setType("error");
      setProgress(40)
    } else if (values.gross_revenue === "") {
      setMsg("Select Gross Revenue");
      setIsOpen(true)
      setType("error");
      setProgress(55)
    } else if (values.company_website === "") {
      setProgress(70)
    } else if (values.email === "") {
      setProgress(85)
    } else if (values.phone === "") {
      setProgress(100)
    } else {
      dispatch(doEligibility(request))
    }


  }
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false)
        setProgress(10)
        setValues("");
      }, 3000)
    }
  }, [success])
  var [progress, setProgress] = useState(10);
  const handleNextClick = () => {
    setProgress((prevProgress) => {
      if (prevProgress === 100) {
        return 10;
      }
      return progress + 15
    });

  };

  const isEnable = (process) => {
    switch (process) {
      case 10:
        return !values?.first_name?.length > 0 || !values?.last_name?.length > 0
      case 25:
        return !values?.profession?.length > 0
      case 40:
        return !values?.company_name?.length > 0 || !values?.entity_name?.length > 0
      case 55:
        return !values?.gross_revenue?.length > 0
      case 70:
        return !values?.company_website?.length > 0
      case 85:
        return !values?.email?.length > 0
    }
  }

  const handleBackClick = () => {
    setProgress((prevProgress) => {
      if (prevProgress === 100) {
        return progress - 15;
      }
      return progress - 15;
    });
  };
  // const enable =  !values.profession.length > 0 || !values.company_name.length > 0 || !values.entity_name.length > 0 || !values.gross_revenue.length > 0 || !values.company_website.length > 0 || !values.email.length > 0 

  return (
    <>
      {/* <div className={classes.logo}>
          <img src={logo} style={{ width: "220px",height: "200px", marginTop: "100px" }} />
        </div> */}
      <div style={{}} className={classes.mainDiv}>
        {/* <Container maxWidth="xl"> */}
        <div className={classes.contentRoot}>
          {/* <img src={logo} alt="logo" className={classes.logo} /> */}
          <Typography className={classes.typoHeading}>
            Do you fall under CTA!
          </Typography>
          <Typography className={classes.typoHeading}>
            {" "}
            Answer and Find out!
          </Typography>
        </div>
        {/* </Container > */}
        <div style={{}} className={!success ? classes.body : classes.bodySuccess}>
          {
            !success ?
              <div className={classes.progressStyle}>
                <LinearProgress
                  className={classes.progress}
                  variant="determinate"
                  sx={{
                    height: "2px",
                  }}
                  value={progress}
                />
                <Typography className={classes.proTypo}>{progress} %</Typography>
              </div> : ""
          }
          <div style={{}} className={classes.formBody}>
            {!success ? < div >
              {progress === 10 ? (
                //users fields
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
                        onChange={handleChange}
                        value={values.first_name}
                        className={classes.textFieldRoot}
                        inputProps={{ className: classes.textField }}
                        placeholder="First Name"

                      />
                      <TextField
                        name="last_name"
                        onChange={handleChange}
                        value={values.last_name}
                        className={classes.textFieldRoot}
                        inputProps={{ className: classes.textField }}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              ) : progress === 25 ? (
                //quiz fields
                <div className={classes.main}>
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.mainLabel}
                    >
                      2.Are You?*
                    </FormLabel>
                    <RadioGroup

                      onChange={handleChange}
                      value={values.profession}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="profession"
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio className={classes.rootRadio} />}
                        label="Business Owner"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio className={classes.rootRadio} />}
                        label="Tax Professional"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio className={classes.rootRadio} />}
                        label="Beneficial Owner"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              ) : progress === 40 ? (
                //Entiy Fields
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
                        name="company_name"
                        onChange={handleChange}
                        value={values.company_name}
                        className={classes.textFieldEntityRoot}
                        inputProps={{ className: classes.textField }}
                        placeholder="Company Name"
                      />
                      <TextField
                        className={classes.textFieldEntityRoot}
                        inputProps={{ className: classes.textField }}
                        placeholder="Entity Name"
                        name="entity_name"
                        onChange={handleChange}
                        value={values.entity_name}
                      />
                    </div>
                  </div>
                </div>
              ) : progress === 55 ? (
                //Revenue Feilds
                <div className={classes.main}>
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.mainLabel}
                    >
                      4.What is your yearly gross revenue?
                    </FormLabel>
                    <RadioGroup
                      onChange={handleChange}
                      value={values.gross_revenue}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="gross_revenue"
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio className={classes.rootRadio} />}
                        label="Business Owner"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio className={classes.rootRadio} />}
                        label="Tax Professional"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio className={classes.rootRadio} />}
                        label="Beneficial Owner"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              ) : progress === 70 ? (
                <div>
                  <div style={{}} className={classes.mainWebsite}>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.mainLabelWebsite}
                    >
                      5.Company Website (if any)?
                    </FormLabel>
                    <div className={classes.containerWebsite}>
                      <TextField
                        className={classes.textFieldRootWebsite}
                        inputProps={{ className: classes.textFieldWebsite }}
                        placeholder="Company Website"
                        name="company_website"
                        onChange={handleChange}
                        value={values.company_website}
                      />
                    </div>
                  </div>
                </div>
              ) : progress === 85 ? (
                //Email Feild
                <div >
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.mainLabelEmail}
                    >
                      6.Your Email?
                    </FormLabel>
                    <div className={classes.containerEmail}>
                      <TextField className={classes.textFieldRootEmail} inputProps={{ className: classes.textField }} placeholder='Your Email'
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      />

                    </div>
                  </FormControl>
                </div>
              ) : progress === 100 ? (
                <div >
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.mainLabelPhone}
                    >
                      7.Your Phone Number?
                    </FormLabel>
                    <div className={classes.containerPhone}>
                      <TextField className={classes.textFieldRootPhone} inputProps={{ className: classes.textFieldPhone }} placeholder='Your Phone Number'
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                      />

                    </div>
                  </FormControl>
                </div>
              ) : (
                ""
              )}
            </div> :
              <div style={{ display: 'flex', flexDirection: "column", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie options={defaultOptions} height={400} width={300} />
                <p>{msg}</p>
              </div>
            }
          </div>
          {
            !success ?
              <div className={classes.allButton}>
                <div>
                  <Button
                    onClick={handleBackClick}
                    startIcon={<ArrowBackIosIcon style={{ marginLeft: "6px" }} />}
                    disabled={progress === 10 ? true : false}
                    className={
                      progress === 10
                        ? classes.buttonDisableRoot
                        : classes.buttonRoot
                    }
                  >
                    Back
                  </Button>
                  {
                    progress === 100
                      ?
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        className={classes.buttonRoot}
                        disabled={!values.email.length > 0}
                      >
                        Submit
                      </Button>
                      :
                      <Button
                        onClick={handleNextClick}
                        endIcon={<ArrowForwardIosIcon />}
                        className={isEnable(progress) ? classes.buttonDisableRoot
                          : classes.buttonRoot}
                        disabled={isEnable(progress)}
                      //disabled={enable}
                      >
                        Next
                      </Button>
                  }
                  <Toast open={isOpen} msg={msg} type={type} handleClose={() => setIsOpen(false)} />
                </div>
              </div> : ""
          }
        </div>
      </div>
    </>
  );
}

export default Banner;
