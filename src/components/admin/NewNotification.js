


import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, TextField, Typography ,TextareaAutosize } from "@mui/material";
import Dropzone from "./Pricing/Dropzone";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const useStyle = makeStyles((theme) => ({
  main: {
    backgroundColor: "#F8F8F8",
    borderRadius: "5px",
    height: "850px",
  },
  usertitle: {
    fontSize: "20px !important",
    fontWeight: "600 !important",
    fontFamily: "Poppins !important",
    color: "#06283D",
    paddingTop: "20px",
  },
  forminput: {
    background: "white",
    padding: "15px",
    borderRadius: "5px !important",
    width: "430px",
    border: "2px solid #E8E8E8",
    height: "50px",
    marginRight: "5px",
    color: "#BEBEBE !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F9FE",
    border: "1px #3330E4",
    borderStyle: "dashed",
    borderRadius: "10px",
    borderWidth: "3px",
    padding: "20px",
  },
  title1: {
    fontSize: "10px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    color: "#BEBEBE",
    paddingBottom: "5px",
  },
  title2: {
    fontSize: "18px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    color: "#06283D",
    paddingBottom: "10px",
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
    marginTop: "40px",
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
    marginLeft: "20px !important",
  },
  formselecter: {
    background: "white",
    padding: "15px",
    borderRadius: "5px !important",
    width: "430px",
    height: "50px",
    marginRight: "5px",
    fontFamily: "Poppins !important",
    color: "black!important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    border: "2px solid #E8E8E8",
  },
  plantitle: {
    fontFamily: "Poppins !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    color: "#BEBEBE !important",
  },
  error: {
    color: 'red ',

  },
  parent: {

  }
}));

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '55px',
    marginBottom: '7px'
  }),
}
const NewNotification = () => {
  const classes = useStyle();
  const [openModal, setOpenModal] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [selectedduration, setSelectedduration] = useState("");

  const testSchema = Yup.object().shape({
    title: Yup.string().required(" Notification title is required"),
    desc: Yup.string().required("Description is required"),
    duration: Yup.string().required("Select Notification duration")
  });

  const initialValues = {
    title: "",
    amount: "",
    desc: "",
    duration: ""
  };


  const handleMemberChange = selectedduration => {
    console.log(selectedduration);
    setSelectedduration(selectedduration);
  };

  const options = [
    { value: "10 days", label: "10 days" },
    { value: "20 days", label: "20 days" },
    { value: "30 days", label: "30 days" },
  ];

  return (
    <>
      <div className={classes.main}>
        <Container>
          <Typography className={classes.usertitle}>Create Notification</Typography>

          <Formik validationSchema={testSchema} initialValues={initialValues}>
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              handleSubmit,
              setFieldTouched
            }) => {
              return (
                <>

                  <div className={classes.parent}>

                    <div style={{ width: '400px' }}>
                      <Typography className={classes.textfieldtitle} > Notifiaction Title</Typography>
                      <TextField
                        placeholder="Enter Notification Title"
                        name="title"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange("title")}
                        autoComplete='off'
                        InputProps={{
                          classes: { input: classes.input }
                        }}
                        style={{ width: "100%", background: 'white', marginTop: 0 }}
                        styles={customStyles}
                        value={values.title}
                        onBlur={() => {
                          console.log("title");
                        }}
                      />
                      <span className={classes.error}>{errors.title}</span>
                    </div>
                   
                  </div>
                  <div className={classes.parent}>
                   
                    <div style={{ width: '400px' }}>
                      <Typography className={classes.textfieldtitle} > Description</Typography>
                      <TextareaAutosize
                       name="desc"
                       onChange={handleChange("desc")}
                        aria-label="empty textarea"
                        placeholder="Enter Description"
                        style={{ width: 402 , height:'100px', fontFamily:'poppins', borderColor: " #C1C1C1",
                          borderRadius: "4px", }}
                        value={values.desc}
                        onBlur={() => {
                          console.log("desc");
                        }}
                        InputProps={{
                          classes: { input: classes.input }
                        }}
                        styles={customStyles}
                        // onBlur={() => {
                        //   console.log("desc");
                        // }}
                      />
                     
                      <span className={classes.error}>{errors.desc}</span>
                    </div>
                    <div style={{ width: '400px' }}>
                      <Typography className={classes.textfieldtitle} > Notification Duration</Typography>
                      <Select
                        placeholder="Select Notification Duration"
                        value={selectedduration}
                        onChange={selectedOption => {
                          handleMemberChange(selectedOption);

                          console.log("values", values.duration);
                          handleChange("duration")(selectedOption.value);;
                        }}
                        styles={customStyles}
                        isSearchable={true}
                        options={options}
                        name="duration"
                        isLoading={false}
                      // loadingMessage={() => "Fetching year"}
                      // noOptionsMessage={() => "Year appears here"}
                      />
                      <span className={classes.error}> {errors.duration}</span>
                    </div>
                  </div>
                  <Typography className={classes.textfieldtitle}>
                      Uplaod Image
                    </Typography>
                    <Dropzone />
                  <div className={classes.btnbody}>
                    <Button variant="contained" className={classes.savebtn} onClick={handleSubmit} noValidate>
                      create
                    </Button>
                    <Button variant="outlined" className={classes.cancelbtn}>
                      cancel
                    </Button>
                  </div>

                  <div
                  >


                  </div>
                </>
              );
            }}
          </Formik>



          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
          />
        </Container>
      </div>
    </>
  );
};

export default NewNotification;
