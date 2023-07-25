import { Diversity2Outlined } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo2 from "../../../images/CTALogo2.svg";
import bgImage from "../../../images/New icon/CTALogoBackgound.svg";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    imageLogo: {
        width: "200px",

    },
    bgImage: {
        height: "auto",
        width: "30%",
        marginTop: "-370px",
        marginLeft: "1100px",
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "100px",
        [theme.breakpoints.only("sm")]: {
            display: 'none'
        },
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
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

const AdminLogin = () => {
    const classes = useStyle();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleOnSubmit = (e) => {
        console.log("firstName", formValues.first_name);
        const request = {
            data: {
                ...formValues

            },
            onSuccess: async (res) => {
                // setMsg(res.message);
                // const url = res.data.token;
                // setToken(url)
                // setIsOpen(true)
                // setType("success");
                // console.log("success", res.message);
                // setIsValid(res.success);
            },
            onFail: async (res) => {
                // setIsOpen(true)
                // setType("error");
                // console.log("fail", res.message);
                // setIsValid(res.response.data.success);
                // setMsg(res.response.data.message);
            }
        }
        //dispatch(doLogin(request))


    };

  return (
    <>
          
    <div
       
        style={{ overflowY: 'hidden !important',backgroundColor: "#F7F7F7 !important" }}
        className={classes.dialogRoot}
        
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
                // onClick={close}
            >
                {/* <img src={closeIcon} alt="icon" /> */}
            </div>
            <div>
                <img src={logo2} alt="logo" className={classes.imageLogo} />
            </div>
            {/* <Typography className={classes.descStyle}>
Please fill out the form to inquire about your Problem.
</Typography> */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    marginTop: "20px",
                    overflowX: 'hidden !important'
                }}
            >
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className={classes.outerShadow}>
                        <div className={classes.formRoot}>
                            <InputLabel className={classes.lableRoot}>Email</InputLabel>
                            <TextField
                                onChange={handleChange}
                                value={formValues.email}
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                disableUnderline
                                className={classes.innerShadow}
                            />
                            <InputLabel className={classes.lableRoot}>Password</InputLabel>
                            <TextField
                                value={formValues.phone}
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChange}
                                placeholder="Enter Password"
                                disableUnderline
                                className={classes.innerShadow}
                                InputProps={{
                                    endAdornment: <InputAdornment>
                                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }}
                            />
                            <div className={classes.submitButton}>
                                <Button
                                    type="submit"
                                    style={{ width: '100%', color: 'white' }}
                                    // onClick={onClose}
                                >
                                    Login
                                </Button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                <Typography sx={{ fontSize: '16px !important', fontFamily: "Poppins !important", fontWight: '700 !important', }}>Problems signing in?<span style={{ color: "#3330E4 !important" }}>{" "}Click here</span></Typography>
                                <Typography sx={{ fontSize: '16px !important', fontFamily: "Poppins !important", fontWight: '700 !important', cursor: 'pointer' }}>New to CTAF?<span style={{ color: "#333064" }} > Sign Up</span></Typography>
                            </div>
                        </div>
                    </div>
                </form>
                <div
                    className={classes.bgImage}
                >
                   
                    <img src={bgImage} alt="bg" />
                </div>
            </div>
            {/* <Toast open={isOpen} msg={msg} type={type} handleClose={() => setIsOpen(false)} /> */}
        </div>
    </div>

{/* <FormDialog open={isSignupOpen} close={false} /> */}
</>
  )
}

export default AdminLogin