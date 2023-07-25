import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
    Button,
    Container,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import FormInputText from "../../client/Common/FormInputText";
import { createTeamMember } from "../../../redux/admin/team/createTeamMemberSlice";

const useStyle = makeStyles((theme) => ({
    main: {
        backgroundColor: "#F8F8F8",
        borderRadius: "5px",
        minHeight: "850px",
        paddingBottom: "50px",
    },
    usertitle: {
        fontSize: "20px !important",
        fontWeight: "600 !important",
        fontFamily: "Poppins !important",
        color: "#06283D",
        paddingTop: "20px",
    },
    usertitle2: {
        fontSize: "20px !important",
        fontWeight: "600 !important",
        fontFamily: "Poppins !important",
        color: "#06283D",
        paddingTop: "20px",
        textAlign: "center !important",
    },
    forminput: {
        background: "white",
        padding: "15px",
        borderRadius: "5px !important",
        width: "400px",
        border: "2px solid #E8E8E8",
        height: "50px",
        marginRight: "5px",
        color: "#3A3A3A !important",
        fontSize: "16px !important",
        fontWeight: "400 !important",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent !important",
            outline: "none !important"
        }
    },
    form: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        justifyContent: "space-between",
    },
    textfieldtitle: {
        paddingBottom: "15px",
        color: "#06283D !important",
        paddingTop: "30px",
        fontFamily: "Poppins !important",
        fontSize: "16px !important",
        fontWeight: "500 !important",
    },
    uplaoddocbody: {
        width: "250px",
        // display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F9FE",
        border: "1px #3330E4",
        borderStyle: "dashed",
        borderRadius: "10px",
        borderWidth: "3px",
        padding: "20px",
        paddingBottom: 0,
        textAlign: "center",
    },

    filebtn: {
        backgroundColor: "#3330E4 !important",
        fontSize: "12px !important",
        textTransform: "capitalize !important",
    },
    uploadicn: {
        paddingRight: "7px",
    },
    btnbody: {
        marginTop: "20px",
    },
    savebtn: {
        marginRight: "0px !important",
        padding: "7px 40px !important",
        backgroundColor: "#3330E4 !important",
        fontSize: "12px !important",
        textTransform: "capitalize !important",
    },
    cancelbtn: {
        padding: "7px 40px !important",
        borderColor: "#CECECE !important",
        color: "black !important",
        fontSize: "12px !important",
        textTransform: "capitalize !important",
        marginLeft: "10px !important",
    },
    error: {
        color: "red !important",
        marginTop: "5px !important",
        fontSize: "12px !important",
        fontFamily: "Poppins !important",
    },
    field2: {
        borderRadius: "5px",
        padding: "11px",
        color: "#3A3A3A ",
        fontFamily: "poppins",
        fontSize: "16px ",
        fontWeight: "400",
        resize: "none",
        overflow: "hidden",
        width: "430px",
        border: "2px solid #E8E8E8",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        height: "50px",
    },
    fixDiv: {
        width: "100%",
        height: "350px",
    },
}));

const CreateMember = () => {
    const classes = useStyle();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [passport, setPassport] = useState([])
    const [license, setLicense] = useState([])
    const [document, setDocument] = useState([])
    const [gender, setGender] = useState("Male");
    const handleChangeGender = (e) => {
        setGender(e.target.value);
    };
    const [text, setText] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        country_code: 0
    })
    const [owner, setOwner] = useState("USNational");

    const handleCancle = () => {
        navigate("/dashboard/Admin/CreateTeamForm", { replace: true })
    };

    useEffect(() => {
        localStorage.removeItem("projectId")
    }, [text])
    const onSubmit = (data) => {

        { console.log("data", data) }
        const request = {
            data: {
                ...data,
                gender: gender === "Male" ? 1 : 2
            },
            onSuccess: async (res) => {
                console.log("success", res.data);
                if (res.success === true) {
                    navigate("/dashboard/Admin/CreateTeamForm")
                }
            },
            onFail: async (err) => {
                console.log("error", err);
            }
        }
        dispatch(createTeamMember(request))
    }

    const myHelper = {
        first_name: {
            required: "First Name Required",
        },
        last_name: {
            required: "Last Name Required",
        },
        email: {
            required: "Email Required",
        },
        phone: {
            required: "Phone Number Required",
        },
        gender: {
            required: 'Gender Required'
        },
        country_code: {
            required: "Country Code Required"
        }
    };
    //Custom hook call
    // const { handleChange, values, errors, handleSubmit } = useForm();

    const { handleSubmit, control } = useForm()

    useEffect(() => {
        console.log("STATE_CHANGED");
    });

    // const handleChange2 = (newValue) => {
    //     setValues(newValue)
    // };
    const handleTextChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={classes.main}>
                    <Container>
                        <Typography className={classes.usertitle}>
                            Create Team Member
                        </Typography>
                        <div className={classes.form}>
                            <div>
                                <Typography className={classes.textfieldtitle}>
                                    First Name
                                </Typography>
                                <FormInputText value={text.first_name} name="first_name" onChange={handleTextChange} errorMsg={myHelper.first_name} type="text" classFormInput={classes.forminput} placeholder="Enter Your First Name" control={control} />
                            </div>
                            <div>
                                <Typography className={classes.textfieldtitle}>
                                    Last Name
                                </Typography>
                                <FormInputText value={text.last_name} name="last_name" onChange={handleTextChange} errorMsg={myHelper.last_name} type="text" classFormInput={classes.forminput} placeholder="Enter Your Last Name" control={control} />
                            </div>

                        </div>
                        <div className={classes.form}>
                            <div>
                                <Typography className={classes.textfieldtitle}>
                                    Email
                                </Typography>
                                <FormInputText value={text.email} name="email" onChange={handleTextChange} errorMsg={myHelper.email} type="email" classFormInput={classes.forminput} placeholder="Enter Your Email" control={control} />
                            </div>
                            <div>
                                <Typography className={classes.textfieldtitle}>
                                    Phone
                                </Typography>
                                <FormInputText value={text.phone} name="phone" onChange={handleTextChange} errorMsg={myHelper.phone} type="tel" classFormInput={classes.forminput} placeholder="Enter Your Phone" control={control} />
                            </div>

                        </div>
                        <div className={classes.form} style={{ marginBottom: '20px' }}>
                            <div>
                                <Typography className={classes.textfieldtitle}>
                                    Country Code
                                </Typography>
                                <FormInputText value={text.country_code} name="country_code" onChange={handleTextChange} errorMsg={myHelper.country_code} type="number" classFormInput={classes.forminput} placeholder="Enter Country Code" control={control} />
                            </div>
                            <div style={{ display: 'felx', justifyContent: 'center', width: '100%', marginLeft: '10px' }}>
                                <Typography className={classes.textfieldtitle}>
                                    Select Gender
                                </Typography>
                                <RadioGroup
                                    style={{ marginTop: '10px' }}
                                    row
                                    onChange={handleChangeGender}
                                    value="gender"
                                    name="gender"
                                >
                                    <FormControlLabel
                                        value="Male"
                                        control={
                                            <Radio
                                                value="Male"
                                                name="gender"
                                                checked={gender === "Male" ? true : false}
                                            />
                                        }
                                        label="Male"
                                    />
                                    <FormControlLabel
                                        value="Female"
                                        control={
                                            <Radio
                                                value="Female"
                                                name="gender"
                                                checked={gender === "Female" ? true : false}
                                            />
                                        }
                                        label="Female"
                                    />

                                </RadioGroup>
                            </div>
                        </div>
                        <div className={classes.btnbody}>

                            <Button
                                type="submit"
                                value="Submit"
                                variant="contained"
                                className={classes.savebtn}
                            >
                                create
                            </Button>

                            <Button variant="outlined" onClick={handleCancle} className={classes.cancelbtn}>
                                cancel
                            </Button>
                        </div>
                    </Container>

                </div>
            </form>

        </>
    );
};

export default CreateMember;
