import {
    AppBar,
    Button,
    Dialog,
    DialogActions,
    Divider,
    IconButton,
    Input,
    InputAdornment,
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import crypto from "crypto-js";
import logo2 from "../../images/CTALogo2.svg";
import bgImage from "../../images/New icon/CTALogoBackgound.svg";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/auth/loginSlice";
import Toast from "../common/Toast";
import { useForm } from "react-hook-form";
import useToken from "../common/useToken";
import FormDialog from "./FormDialog";
import { toogleSnackbar } from "../../redux/client/common/snackbarSlice";

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
function LoginDialog({ open, close, redirect, firstName, lastName }) {
    const classes = useStyle();
    const navigate = useNavigate();
    const [onClose, setOnClose] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [msg, setMsg] = useState("")
    const [type, setType] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const [isRootUser, setIsRootUser] = useState(-1)
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
    const handleSignupClose = (reason) => {
        if (reason === "clickaway") {
            return;
        }
        setIsSignupOpen(false);
    }

    const handleSignupOpen = () => {
        setIsSignupOpen(true)

    }
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const dispatch = useDispatch();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { token, setToken } = useToken()
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
        }
    };
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

    // useEffect(() => {
    //     if (isValid) {
    //         if (isTablet) {
    //             redirect("/mobile")
    //             setOnClose(false)
    //         } else {
    //             redirect("/dashboard/Home")
    //         }
    //     }
    // }, [isTablet])

    useEffect(() => {
        if (isValid) {
            setTimeout(() => {
                setOnClose(close)
                setFormValues("")
            }, 2000)
            if (!onClose) {
                /// const decryptToken = crypto.AES.decrypt(tokenString, 'ramlalsebachkerahe').toString(crypto.enc.Utf8);

                if (localStorage.getItem("authUser") && localStorage.getItem("isAdmin")==="false") {
                    navigate("/dashboard/Home", { replace: true })
                    window.location.reload(false)
                } 
                 if (localStorage.getItem("authUser") && localStorage.getItem("isAdmin") ==="true") {
                    navigate("/dashboard/Admin/Home", { replace: true })
                    window.location.reload(false)
                } else {
                    if (isTablet) {
                        navigate("/", { replace: true })
                    }
                }
            }
        }
    }, [isValid, onClose])
    const handleOnSubmit = (e) => {
        console.log("firstName", formValues.first_name);
        const request = {
            data: {
                ...formValues

            },
            onSuccess: async (res) => {
                setMsg(res.message);
                const url = res.data.token;
                setToken(url)
                setIsOpen(true)
                setType("success");
                console.log("success", res.message);
                setIsValid(res.success);
                setIsRootUser(res.data?.is_root_user)
            },
            onFail: async (res) => {
                setIsOpen(true)
                setType("error");
                console.log("fail", res.message);
                setIsValid(res.response.data.success);
                setMsg(res.response.data.message);
            }
        }
        dispatch(doLogin(request))


    };
    return (
        <>
{console.log("root user",isRootUser)}
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
                                    <DialogActions className={classes.submitButton}>
                                        <Button
                                            type="submit"
                                            style={{ width: '100%', color: 'white' }}
                                            onClick={onClose}
                                        >
                                            Login
                                        </Button>
                                    </DialogActions>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                        <Typography sx={{ fontSize: '16px !important', fontFamily: "Poppins !important", fontWight: '700 !important', }}>Problems signing in?<span style={{ color: "#3330E4 !important" }}>{" "}Click here</span></Typography>
                                        <Typography sx={{ fontSize: '16px !important', fontFamily: "Poppins !important", fontWight: '700 !important', cursor: 'pointer' }}>New to CTAF?<span style={{ color: "#333064" }} onClick={handleSignupOpen}> Sign Up</span></Typography>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div
                            className={classes.bgImage}
                        >
                            {console.log("status", isValid)}
                            <img src={bgImage} alt="bg" />
                        </div>
                    </div>
                    <Toast open={isOpen} msg={msg} type={type} handleClose={() => setIsOpen(false)} />
                </div>
            </Dialog>

            {/* <FormDialog open={isSignupOpen} close={false} /> */}
        </>
    );
}

export default LoginDialog;
