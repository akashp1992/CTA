import { Button, Container, Divider, IconButton, InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Toast from '../Common/Toast';
import { changePassword, editProfile } from '../../../redux/client/common/profileSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller, useForm } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        fontFamily: 'Poppins !important',
        fontSize: '20px !important',
        color: '#3A3A3A !important',
        fontWeight: '600 !important',
        marginTop: '10px'
    },
    forminput: {
        background: "white",
        padding: "15px",
        borderRadius: "5px !important",
        width: "430px",
        border: "2px solid #E8E8E8",
        height: "50px",
        marginRight: "5px",
        color: "#3a3a3a !important",
        fontSize: "16px !important",
        fontWeight: "400 !important",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    },
    forminputPassword: {
        background: "white",
        padding: "15px",
        borderRadius: "5px !important",
        width: "100%",
        border: "2px solid #E8E8E8",
        height: "50px",
        marginRight: "5px",
        color: "#3a3a3a !important",
        fontSize: "16px !important",
        fontWeight: "400 !important",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    },
    form: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textfieldtitle: {
        paddingBottom: "15px",
        color: "#06283D !important",
        paddingTop: "15px",
        fontFamily: "Poppins !important",
        fontSize: "14px !important",
        fontWeight: "400 !important",
    },
    buttonRoot: {
        width: '100%', display: 'flex', justifyContent: 'flex-end',
        paddingTop: '15px'
    },
    button: {
        background: '#3330E4 !important',
        borderRadius: '7px !important',
        textTransform: "none !important",
        fontFamily: 'Poppins !important',
    },
    outlineButton: {
        border: '1px solid rgba(51, 48, 228, 1) !important',
        color: '#3330E4 !important',
        borderRadius: '7px !important',
        textTransform: "none !important",
        marginTop: '10px !important',
        fontFamily: 'Poppins !important',
    },
    emailTitle: {
        fontFamily: 'Poppins !important',
        fontSize: '16px !important',
        fontWeight: '400 !important',
        marginTop: '15px'
    },
    email: {
        fontFamily: 'Poppins !important',
        fontSize: '16px !important',
        fontWeight: '700 !important',
        marginTop: '15px'
    }
}))
const ProfileDetails = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { profileData } = useSelector(state => state.profile)
    const [values, setValues] = useState({
        first_name: profileData.first_name,
        last_name: profileData.last_name
    });
    const [passwords, setPasswords] = useState({
        old_password: "",
        password: "",
        new_confirm_password: ""
    })
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [type, setType] = useState("");

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handlePassowrdChange = (e) => {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {

        const request = {
            data: {
                first_name: values.first_name,
                last_name: values.last_name
            },
            onSuccess: async (res) => {
                setOpen(true)
                setMsg(res.message)
                setType("success")
                setValues({
                    first_name: "",
                    last_name: ""
                })
            },
            onFail: async (err) => {
                setOpen(true)
                setMsg(err.message)
                setType("error")
            }

        }
        dispatch(editProfile(request))
    }



    useEffect(() => {

    }, [profileData])

    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { handleSubmit, control } = useForm()
    const handlePasswordSubmit = (data) => {
        const request = {
            data: {
                ...data
            },
            onSuccess: async (res) => {
                setOpen(true)
                setMsg(res.message)
                setType("success")
                setPasswords({
                    old_password: "",
                    password: "",
                    new_confirm_password: ""
                })
            },
            onFail: async (err) => {
                setOpen(true)
                setMsg(err.message)
                setType("error")
            }
        }
        dispatch(changePassword(request))
    }

    ///error Helper
    const myHelper = {
        old_password: {
            required: "Old Password Required",
        },
        password: {
            required: "New Password Required",
        },
        new_confirm_password: {
            required: "Confirm Password Required",
        },

    };

    return (
        <Container maxWidth="lg">
            <div className={classes.main}>
                <Typography className={classes.title}>Personal Information</Typography>
                <form>
                    <div className={classes.form}>
                        <div>
                            <Typography className={classes.textfieldtitle}>
                                First Name
                            </Typography>
                            <TextField
                                name="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                variant="standard"
                                InputProps={{
                                    className: classes.forminput,
                                    disableUnderline: true,
                                }}
                                placeholder="First Name"
                                disableUnderline={true}
                            />
                        </div>
                        <div>
                            <Typography className={classes.textfieldtitle}>
                                Last Name
                            </Typography>
                            <TextField
                                variant="standard"
                                name="last_name"
                                value={values.last_name}
                                onChange={handleChange}
                                InputProps={{
                                    className: classes.forminput,
                                    disableUnderline: true,
                                }}
                                placeholder="Last Name"
                                disableUnderline={true}
                            />
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div>
                            <Typography className={classes.textfieldtitle}>
                                Company Name
                            </Typography>
                            <TextField
                                name="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                variant="standard"
                                InputProps={{
                                    className: classes.forminput,
                                    disableUnderline: true,
                                }}
                                placeholder="Company Name"
                                disableUnderline={true}
                            />
                        </div>
                        <div>
                            <Typography className={classes.textfieldtitle}>
                                Comnpany Address
                            </Typography>
                            <TextField
                                variant="standard"
                                name="last_name"
                                value={values.last_name}
                                onChange={handleChange}
                                InputProps={{
                                    className: classes.forminput,
                                    disableUnderline: true,
                                }}
                                placeholder="Company Address"
                                disableUnderline={true}
                            />
                        </div>
                    </div>
                </form>
                <div className={classes.buttonRoot}>
                    <Button type="submit" variant='contained' className={classes.button} onClick={handleOnSubmit}>Update</Button>
                </div>
                <Divider style={{ paddingTop: '15px' }} />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Typography className={classes.title}>
                        Email Address
                    </Typography>
                    <Button variant='outlined' className={classes.outlineButton}>Change</Button>
                </div>
                <Typography className={classes.emailTitle}>Your Email Address Is <span className={classes.email}>{profileData.email}</span></Typography>

                <Divider style={{ paddingTop: '15px' }} />
                <Typography className={classes.title}>Personal Information</Typography>
                <div className={classes.form}>
                    <form style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
                        <div>
                            <Typography className={classes.textfieldtitle}>
                                Current Password
                            </Typography>
                            <Controller
                                name="old_password"
                                control={control}
                                value={passwords.old_password}
                                onChange={handlePassowrdChange}
                                rules={{
                                    required: true,
                                }}
                                render={({ field,
                                    fieldState: { error },

                                }) => (
                                    <TextField
                                        helperText={error ? myHelper.old_password[error.type] : ""}
                                        error={error !== undefined}
                                        variant="standard"
                                        {...field}
                                        type={showOldPassword ? "text" : "password"}
                                        InputProps={{
                                            className: classes.forminputPassword,
                                            disableUnderline: true,
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowOldPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>

                                        }}
                                        placeholder="Current Password"
                                        disableUnderline={true}

                                    />)}
                            />
                        </div>
                        <div>
                            <Typography className={classes.textfieldtitle}>
                                New Password
                            </Typography>
                            <Controller
                                name="password"
                                control={control}
                                value={passwords.password}
                                onChange={handlePassowrdChange}
                                rules={{
                                    required: true,
                                }}
                                render={({ field,
                                    fieldState: { error },

                                }) => (
                                    <TextField
                                        helperText={error ? myHelper.password[error.type] : ""}
                                        error={error !== undefined}
                                        variant="standard"
                                        {...field}
                                        type={showNewPassword ? "text" : "password"}
                                        InputProps={{
                                            className: classes.forminputPassword,
                                            disableUnderline: true,
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowNewPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                        }}
                                        placeholder="New Password"
                                        disableUnderline={true}
                                    />)}
                            />
                        </div>
                        <div>
                            <Typography className={classes.textfieldtitle}>
                                Confirm Password
                            </Typography>
                            <Controller
                                name="new_confirm_password"
                                control={control}
                                value={passwords.new_confirm_password}
                                onChange={handlePassowrdChange}
                                rules={{
                                    required: true,
                                }}
                                render={({ field,
                                    fieldState: { error },

                                }) => (
                                    <TextField
                                        helperText={error ? myHelper.new_confirm_password[error.type] : ""}
                                        error={error !== undefined}
                                        variant="standard"
                                        {...field}
                                        type={showConfirmPassword ? "text" : "password"}
                                        InputProps={{
                                            className: classes.forminputPassword,
                                            disableUnderline: true,
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowConfirmPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                        }}
                                        placeholder=" Confirm Password"
                                        disableUnderline={true}
                                    />)}
                            />
                        </div>

                    </form>
                </div>
                <div className={classes.buttonRoot}>
                    <Button variant='contained' onClick={handleSubmit(handlePasswordSubmit)} type="submit" className={classes.button}>Change Password</Button>
                </div>
            </div>
            <Toast open={open} msg={msg} type={type} handleClose={() => setOpen(false)} />
        </Container>
    )
}

export default ProfileDetails