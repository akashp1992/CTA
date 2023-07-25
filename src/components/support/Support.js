import { Button, Container, InputLabel, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import { useDispatch } from 'react-redux';
import logo2 from "../../images/New icon/CTALogoBackgound.svg";
import { toogleSnackbar } from '../../redux/client/common/snackbarSlice';
import { createSupport } from '../../redux/support/supportSlice';
import Toast from '../client/Common/Toast';
import successAnim from '../../lottie/success.json'

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: '100px',
        marginBottom: '70px'
    },
    rootMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
        }
    },
    leftRoot: {
        display: 'flex',
        width: '50%',
        background: `url(${logo2}) no-repeat`,
        backgroundSize: '50%',
        backgroundPosition: "center center",
        [theme.breakpoints.down("md")]: {
            backgroundSize: '100%',
            height: '50vh',
            width: '100%',
        }
    },
    left: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',

    },
    right: {
        width: '50%',
        [theme.breakpoints.down("md")]: {
            width: '100%',
        }
    },
    list: {
        fontFamily: 'Poppins !important',
        color: "#232323 !important",
        fontSize: '14px !important',
        fontWeight: '700 !important',
        margin: '10px 20px !important'
    },
    outerShadow: {
        boxShadow: "-3px -3px 6px #FFFFFF,3px 3px 6px #9191918c!important",
        width: "100%",
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
}))
const Support = () => {
    const classes = useStyles();
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState("")
    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        mobile_no: "",
        company_name: "",
        company_website: "",
        reason: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false)
                setFormValues("");
            }, 3000)
        }
    }, [success])

    useEffect(() => {
        window.scroll(0, 0);
      }, [])
    const handleOnSubmit = (e) => {
        console.log("data", e);
        const request = {
            data: {
                first_name: formValues.first_name,
                last_name: formValues.last_name,
                mobile_no: formValues.mobile_no,
                company_name: formValues.company_name,
                company_website: formValues.company_website,
                reason: formValues.reason
            },
            onSuccess: (res) => {
                if (res.success) {
                    setSuccess(true);
                }
            },
            onFail: (err) => {
                setMsg(err.message)
                setOpen(true)
            }
        }
        dispatch(createSupport(request))
    };
    const handleClose = (reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 5000)
    }, [open])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: successAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div className={classes.main}>
            {console.log("success dd", success)}
            <Container>
                <div className={classes.rootMain}>
                    <div className={classes.leftRoot}>
                        <div className={classes.left}>
                            <Typography className={classes.list}>
                                <span style={{ color: "#3330E4" }}>Phone:</span> 713.859.8000
                            </Typography>
                            <Typography className={classes.list}>
                                <span style={{ color: "#3330E4" }}> Email:</span> info@transparencyactfiling.com
                            </Typography>
                            <Typography className={classes.list}>
                                <span style={{ color: "#3330E4" }}> Our Support Hours:</span> 9am - 5pm PST | Monday -  Friday
                            </Typography>
                            <Typography className={classes.list}>
                                <span style={{ color: "#3330E4" }}> Address:</span> Houston, TX, USA
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.right}>
                        {
                            success ?
                                <div style={{ display: 'flex', flexDirection: "column", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Lottie options={defaultOptions} height={400} width={300} />
                                    <p>{msg}</p>
                                </div>
                                :
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "relative",
                                        marginTop: "20px",
                                    }}
                                >
                                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                                        <div className={classes.outerShadow}>
                                            <div className={classes.formRoot}>
                                                <div style={{ display: 'flex' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <InputLabel className={classes.lableRoot}>
                                                            First Name
                                                        </InputLabel>
                                                        <TextField
                                                            value={formValues.first_name}
                                                            name="first_name"
                                                            placeholder="Enter First Name"
                                                            disableUnderline
                                                            onChange={handleChange}
                                                            error={!!errors['first_name']}
                                                            helperText={errors['first_name'] ? errors['first_name'].message : ''}
                                                            className={classes.innerShadow}
                                                        />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <InputLabel className={classes.lableRoot}>Last Name</InputLabel>
                                                        <TextField
                                                            name="last_name"
                                                            value={formValues.last_name}
                                                            placeholder="Enter Last Name"
                                                            disableUnderline
                                                            onChange={handleChange}
                                                            className={classes.innerShadow}
                                                        />
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <InputLabel className={classes.lableRoot}>Company Website</InputLabel>
                                                        <TextField
                                                            value={formValues.company_website}
                                                            name="company_website"
                                                            onChange={handleChange}
                                                            placeholder="Enter Company Website"
                                                            disableUnderline
                                                            className={classes.innerShadow}
                                                        />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <InputLabel className={classes.lableRoot}>Company Name</InputLabel>
                                                        <TextField
                                                            value={formValues.company_name}
                                                            name="company_name"
                                                            onChange={handleChange}
                                                            placeholder="Enter Company Name"
                                                            disableUnderline
                                                            className={classes.innerShadow}
                                                        />
                                                    </div>
                                                </div>
                                                <InputLabel className={classes.lableRoot}>Mobile Number</InputLabel>
                                                <TextField
                                                    onChange={handleChange}
                                                    value={formValues.mobile_no}
                                                    name="mobile_no"
                                                    placeholder="Enter Mobile Number"
                                                    disableUnderline
                                                    className={classes.innerShadow}
                                                />

                                                <InputLabel className={classes.lableRoot}>Reason</InputLabel>
                                                <TextField
                                                    value={formValues.reason}
                                                    name="reason"
                                                    onChange={handleChange}
                                                    placeholder="Enter Reason"
                                                    disableUnderline
                                                    className={classes.innerShadow}
                                                />

                                                <Button
                                                    type="submit"
                                                    style={{ width: '100%', color: 'white' }}
                                                    className={classes.submitButton}
                                                >
                                                    Submit
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        }
                    </div>
                </div>
            </Container>
            <Toast msg={msg} open={open} type="error" onClose={handleClose} />
        </div>
    )
}

export default Support