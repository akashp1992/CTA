import React, { useState, useEffect, useContext, useCallback, memo } from "react";
import { makeStyles } from "@mui/styles";
import {
    Button,
    Container,
    FormControlLabel,
    FormHelperText,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import Dropzone from "../../Projects/Dropzone";
import upload from "../../../../images/client/upload.svg";
import { NavLink, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FileContext from "../../Common/file-context";
// import Dropzone from "react-dropzone";
import {
    DatePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers-pro";

import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import FormInputText from "../FormInputText";
import { getProjectById } from "../../../../redux/client/project/projectByIdSlice";

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
        width: "430px",
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

const FileDetailsForm = ({ isDisable, projectId, sendDataToParent }) => {
    const classes = useStyle();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [passport, setPassport] = useState([])
    const [license, setLicense] = useState({
        type: "",
        license_and_passport: "",
        license: ""
    })
    const [document, setDocument] = useState([])
    const [formation, setFormation] = useState("");
    const handleChangeFormation = (e) => {
        setFormation(e.target.value);
    };
    const [text, setText] = useState({
        company_name: "",
        company_registration_number_or_code: "",
        foreign_company_registration_number_or_code: "",
        foreign_based_company_us: "",
        foreign_based_company: "",
        owner_name: "",
        state_of_formation: "",
        tin_ein_number: "",
        company_address: "",
        address: "",
        dob: "",
        foreign_tin_ein_number: "",
        country_of_formation: "",
        foreign_state_of_formation: "",
    })
    // const [doc, setDoc] = useState({
    //     type: "",
    //     license_and_passport: "",
    //     license: ""
    // })
    const [owner, setOwner] = useState("USNational");
    const [status, setStatus] = useState(true)

    const handleChangeOwner = (e) => {
        setOwner(e.target.value);
    };

    useEffect(() => {
        sendDataToParent(text.company_name)
    }, [text])


    const onSubmit = (data) => {
        { console.log("data", data) }

    }

    useEffect(() => {
        const request = {
            data: {
                id: projectId
            },
            onSuccess: async (res) => {
                const file = [];
                res.data.map((data) => {
                    setText({
                        ...data,
                        project_owner: data.project_owner,
                        formation_type: data.formation_type
                    })
                    data.document.map((doc) => {
                        // file.push({
                        //     license: doc.license,
                        //     license_and_passport: `${process.env.REACT_APP_LICENSE_PASSPORT}${doc.license_and_passport}`,
                        //     file_name:doc.license_and_passport,
                        //     type: doc.type

                        // })
                        setLicense({
                            license: doc.license,
                            license_and_passport: `${process.env.REACT_APP_LICENSE_PASSPORT}${doc.license_and_passport}`,
                            file_name: doc.license_and_passport,
                            type: doc.type

                        })
                        console.log("licenseee", license);
                    })

                })
                setData(res.data);
            },
            onFail: async (err) => {
                setStatus(err.response.data.success)
            }

        }
        dispatch(getProjectById(request))

        // if (!status) {
        //     localStorage.removeItem("projectId")
        //     return navigate("/dashboard/Create")
        // }

    }, [status])

    const myHelper = {
        country_of_formation: {
            required: "Country Of Formation is Required",
        },
        company_name: {
            required: "Company Name is Required",
        },
        foreign_state_of_formation: {
            required: "Foreign State Of Formation is Required",
        },
        state_of_formation: {
            required: "State Of Formation is Required",
        },
        tin_ein_number: {
            required: "TIN Or EIN Number is Required",
        },
        foreign_tin_ein_number: {
            required: "TIN Or EIN Number is Required",
        },
        foreign_based_company_us: {
            required: "Foreign Based Company is Required",
        },
        foreign_based_company: {
            required: "Foreign Based Company is Required",
        },
        company_registration_number_or_code: {
            required: "Company Reg Number is Required",
        },
        foreign_company_registration_number_or_code: {
            required: "Company Reg Number is Required",
        },
        owner_name: {
            required: "Owner Name is Required"
        },
        company_address: {
            required: "Company Address is Required"
        },
        address: {
            required: "Address is Required"
        },
        dob: {
            required: "Date Of Birth is Required"
        }
    };
    //Custom hook call
    // const { handleChange, values, errors, handleSubmit } = useForm();

    const { handleSubmit, reset, register, control, setValue, watch } = useForm()
    const [fileList, setFileList] = useState([]);


    useEffect(() => {
        console.log("STATE_CHANGED");
    });
    const [values, setValues] = React.useState(dayjs("YYYY-MM-DD"));

    const handleChange2 = (newValue) => {
        setValues(newValue)
    };


    const handleTextChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value,
        });
    };

    const [errorMessage, setErrorMessage] = React.useState(null);

    React.useEffect(() => {
        if (!values) setErrorMessage("Please Select Date Of Birth");
        if (!!values) setErrorMessage(null);

    }, [values]);
    return (
        <>
            {

                data.map((items) => (
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className={classes.main}>

                            <Container>
                                <Typography className={classes.usertitle2}>
                                    Company Details
                                </Typography>
                                <div className={classes.form}>
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Company Full Legal Name
                                        </Typography>
                                        <FormInputText value={text.company_name} defaultValue={items.company_name} isDisable={isDisable} name="company_name" onChange={handleTextChange} errorMsg={myHelper.company_name} type="text" classFormInput={classes.forminput} placeholder="Enter Your Company's Legal Name" control={control} />
                                        {/* {errors.username && (
              <Typography className={classes.error}>
                {errors.username}
              </Typography>
            )} */}
                                    </div>
                                    {console.log("document", document)}
                                    {console.log("passport", passport)}
                                    {console.log("license", license)}
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Company Current Legal Address
                                        </Typography>
                                        <Controller
                                            name="company_address"
                                            control={control}
                                            value={text.company_address}
                                            onChange={handleTextChange}

                                            rules={{
                                                required: true,
                                            }}
                                            render={({ field,
                                                fieldState: { error },

                                            }) => (
                                                <>
                                                    <textarea
                                                        {...field}
                                                        disabled={isDisable}
                                                        defaultValue={items.company_address}
                                                        placeholder="Enter Company's Legal Address"
                                                        rows="1"
                                                        cols="0"
                                                        className={classes.field2}
                                                    />
                                                    <span style={{ color: '#d32f2f', fontSize: '0.75rem' }}>{error ? myHelper.company_address[error.type] : ""}</span>
                                                </>
                                            )}
                                        />

                                    </div>
                                </div>

                                <div className={classes.form}>
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Place of company formation
                                        </Typography>
                                        <RadioGroup

                                            row
                                            onChange={handleChangeFormation}
                                            value="formation_type"
                                            name="formation_type"
                                        >
                                            <FormControlLabel
                                                value="US Jurisdiction"
                                                control={
                                                    <Radio
                                                        disabled={isDisable}
                                                        value="US"
                                                        name="formation_type"
                                                        checked={formation === "US" || items.formation_type === 1 ? true : false}
                                                    />
                                                }
                                                label="US Jurisdiction"
                                            />
                                            <FormControlLabel
                                                value="Foreign Formation"
                                                control={
                                                    <Radio
                                                        disabled={isDisable}
                                                        value="foreign"
                                                        name="formation_type"
                                                        checked={formation === "foreign" || items.formation_type === 2 ? true : false}
                                                    />
                                                }
                                                label="Foreign Formation"
                                            />
                                            {console.log("formation", values)}
                                        </RadioGroup>
                                    </div>
                                </div>
                                {formation === "foreign" || items.formation_type === 2 ? (
                                    <div>
                                        <div className={classes.form}>
                                            <div>
                                                <Typography className={classes.textfieldtitle}>
                                                    Country of Formation
                                                </Typography>
                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} defaultValue={items.country_of_formation} value={text.country_of_formation} name="country_of_formation" errorMsg={myHelper.country_of_formation} type="text" classFormInput={classes.forminput} placeholder="Enter Your Country of Formation" control={control} />
                                            </div>
                                            <div>
                                                <Typography className={classes.textfieldtitle}>
                                                    State of Formation
                                                </Typography>
                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} defaultValue={items.foreign_state_of_formation} name="foreign_state_of_formation" value={text.foreign_state_of_formation} errorMsg={myHelper.foreign_state_of_formation} type="text" classFormInput={classes.forminput} placeholder="Enter Your State of Formation" control={control} />
                                            </div>
                                        </div>
                                        <Typography className={classes.textfieldtitle}>
                                            Company Registration Document
                                        </Typography>
                                        <div>
                                            <FileContext.Provider value={[document, setDocument]}>
                                                <Dropzone isDisabled={isDisable} />
                                            </FileContext.Provider>
                                        </div>

                                    </div>
                                ) : (
                                    ""
                                )}
                                {formation === "US" || items.formation_type === 1 ? (
                                    <div className={classes.form}>
                                        <div>
                                            <Typography className={classes.textfieldtitle}>
                                                State Of Formation
                                            </Typography>
                                            <FormInputText isDisable={isDisable} onChange={handleTextChange} name="state_of_formation" defaultValue={items.state_of_formation} value={text.state_of_formation} errorMsg={myHelper.state_of_formation} type="text" classFormInput={classes.forminput} placeholder="Enter Your State of Formation" control={control} />
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div className={classes.form}>

                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            TIN and EIN number
                                        </Typography>
                                        {formation === "US" || items.formation_type === 1 ?
                                            (
                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} name="tin_ein_number" defaultValue={items.tin_ein_number} value={text.tin_ein_number} type="text" errorMsg={myHelper.tin_ein_number} classFormInput={classes.forminput} placeholder="Enter Your TIN and EIN number" control={control} />
                                            ) :
                                            (

                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} value={text.foreign_tin_ein_number} name="foreign_tin_ein_number" defaultValue={items.foreign_tin_ein_number} type="text" errorMsg={myHelper.foreign_tin_ein_number} classFormInput={classes.forminput} placeholder="Forigen Enter Your TIN and EIN number" control={control} />
                                            )
                                        }
                                    </div>

                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Foreign Based Company
                                        </Typography>
                                        {
                                            formation === "US" || items.formation_type === 1 ?
                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} name="foreign_based_company_us" defaultValue={items.foreign_based_company_us} value={text.foreign_based_company_us} errorMsg={myHelper.foreign_based_company_us} type="text" classFormInput={classes.forminput} placeholder="Enter Your  Foreign Based Company" control={control} />
                                                :
                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} name="foreign_based_company" defaultValue={items.foreign_based_company} value={text.foreign_based_company} errorMsg={myHelper.foreign_based_company} type="text" classFormInput={classes.forminput} placeholder="Enter Your  Foreign Based Company" control={control} />
                                        }
                                    </div>
                                </div>
                                <div className={classes.form}>
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Company Registration number or Code
                                        </Typography>
                                        {
                                            formation === "US" || items.formation_type === 1 ?
                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} name="company_registration_number_or_code" value={text.company_registration_number_or_code} defaultValue={items.company_registration_number_or_code} errorMsg={myHelper.company_registration_number_or_code} type="text" classFormInput={classes.forminput} placeholder="Enter Your Company Registration Number or Code" control={control} />
                                                :
                                                <FormInputText isDisable={isDisable} onChange={handleTextChange} name="foreign_company_registration_number_or_code" value={text.foreign_company_registration_number_or_code} defaultValue={items.foreign_company_registration_number_or_code} errorMsg={myHelper.foreign_company_registration_number_or_code} type="text" classFormInput={classes.forminput} placeholder="Enter Your Company Registration Number or Code" control={control} />
                                        }

                                    </div>
                                </div>
                                <div style={{ marginTop: "60px" }}>
                                    <Typography className={classes.usertitle2}>
                                        Company's Owner Details
                                    </Typography>
                                </div>
                                <div className={classes.form}>
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Business Owner Legal Name
                                        </Typography>
                                        <FormInputText isDisable={isDisable} defaultValue={items.project_owner.owner_name} onChange={handleTextChange} name="owner_name" errorMsg={myHelper.owner_name} type="text" classFormInput={classes.forminput} placeholder="Enter Business Owner Name" control={control} />

                                    </div>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <Typography className={classes.textfieldtitle}>
                                                Date Of Birth
                                            </Typography>

                                            <DatePicker
                                                inputFormat="YYYY/MM/DD"
                                                value={items.project_owner.dob}
                                                name="dob"
                                                defaultValue={items.project_owner.dob}
                                                onChange={handleChange2}
                                                disabled={isDisable}
                                                renderInput={(params) =>
                                                    <TextField {...params} error={!!errorMessage} />
                                                }
                                                InputProps={{
                                                    className: classes.forminput,
                                                    disableUnderline: true,
                                                }}
                                                disableUnderline={true}
                                            />
                                            {!!errorMessage && (
                                                <FormHelperText error margin="dense">
                                                    {errorMessage}
                                                </FormHelperText>
                                            )}
                                        </LocalizationProvider>
                                    </div>
                                </div>
                                <div className={classes.form}>
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Address
                                        </Typography>
                                        <Controller
                                            name="address"
                                            control={control}
                                            value={text.address}
                                            defaultValue={items.project_owner.address}
                                            onChange={handleTextChange}
                                            rules={{
                                                required: true,
                                            }}
                                            render={({ field,
                                                fieldState: { error },

                                            }) => (
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <textarea
                                                        disabled={isDisable}
                                                        {...field}
                                                        rows="1" cols="0" className={classes.field2} placeholder="Address"
                                                    />
                                                    <span style={{ color: '#d32f2f', fontSize: '0.75rem' }}>{error ? myHelper.address[error.type] : ""}</span>
                                                </div>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className={classes.form}>
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Submit Unique ID choose one
                                        </Typography>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            onChange={handleChangeOwner}
                                            value="unique_type"
                                            name="unique_type"
                                        >
                                            <FormControlLabel
                                                value="USNational"
                                                control={
                                                    <Radio
                                                        disabled={isDisable}
                                                        value="USNational"
                                                        name="unique_type"
                                                        checked={owner === "USNational" ? true : false}
                                                    />
                                                }
                                                label="US National"
                                            />
                                            <FormControlLabel
                                                value="Foreign National"
                                                control={
                                                    <Radio
                                                        disabled={isDisable}
                                                        value="foreignNational"
                                                        name="owner"
                                                        checked={owner === "foreignNational" ? true : false}
                                                    />
                                                }
                                                label="Foreign National"
                                            />
                                            {console.log("owner", owner)}
                                        </RadioGroup>
                                    </div>
                                </div>
                                {owner === "USNational" ? (
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Driving License & Passport
                                        </Typography>
                                        <div>
                                            <FileContext.Provider value={[license, setLicense]}>
                                                <Dropzone isDisabled={isDisable} />
                                            </FileContext.Provider>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                {owner === "foreignNational" ? (
                                    <div>
                                        <Typography className={classes.textfieldtitle}>
                                            Passport
                                        </Typography>
                                        <div>
                                            <FileContext.Provider value={[passport, setPassport]}>
                                                <Dropzone isDisabled={isDisable} />
                                            </FileContext.Provider>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                {/* <div className={classes.btnbody}>

                            <Button
                                type="submit"
                                value="Submit"
                                variant="contained"
                                className={classes.savebtn}

                            >
                                create
                            </Button>

                            <Button variant="outlined" className={classes.cancelbtn}>
                                cancel
                            </Button>
                        </div> */}
                            </Container>

                        </div>
                    </form>
                ))
            }

        </>
    )
}

export default memo(FileDetailsForm)