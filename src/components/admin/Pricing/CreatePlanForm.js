
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { makeStyles } from "@mui/styles";

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
    marginLeft: "20px !important",
    textTransform: "capitalize !important",
  },
  error: {
    color: 'red ',

  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    gap: '2px'
  },
  textfieldtitle: {
    paddingBottom: "5px",
    color: "#06283D !important",
    paddingTop: "30px",
    fontFamily: "Poppins !important",
    fontSize: "16px !important",
    fontWeight: "500 !important",
  },

}));
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '55px',
    marginBottom: '7px'
  }),
  // placeholder: (defaultStyles) => {
  //   return {
  //     ...defaultStyles,
  //     color: '#C7C9C9 !important',
  //     fontFamily: 'Poppins !important',
  //     fontStyle: "normal !important",
  //     fontWeight: " 400 !important",
  //     fontSize: "16px",
  //     lineHeight: "24px",
  //   }
  // },
 

}

const inputProps = {

};
function CreatePlanForm() {
  const [selectedMember, setSelectedMember] = useState("");
  const classes = useStyle();
  const testSchema = Yup.object().shape({
    team: Yup.string().required("Enter your team name"),
    member: Yup.string().required("Select team members")
  });

  const initialValues = {
    team: "",
    member: ""
  };


  const handleMemberChange = selectedMember => {
    console.log(selectedMember);
    setSelectedMember(selectedMember);
  };

  const options = [
    { value: " user1", label: "user1" },
    { value: "user2", label: "user2" },
    { value: "user3", label: "user3" },
  ];

  return (
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
            <div className={classes.main}>
              <div style={{ width: '400px' }}>
                <Typography className={classes.textfieldtitle} > Team Name</Typography>
                <TextField
                  placeholder="Enter Team Name"
                  name="team"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange("team")}
                  autoComplete='off'
                  InputProps={{
                    classes: { input: classes.input }
                  }}
                  style={{ width: "100%", background: 'white', marginTop: 0 }}
                  styles={customStyles}
                  value={values.team}
                  onBlur={() => {
                    console.log("team");
                  }}
                />
                <span className={classes.error}>{errors.team}</span>
              </div>

              <div style={{ width: '400px' }}>
                <Typography className={classes.textfieldtitle} > Team Members</Typography>
                <Select
                  placeholder="Select team Members"
                  value={selectedMember}
                  onChange={selectedOption => {
                    handleMemberChange(selectedOption);

                    console.log("values", values.member);
                    handleChange("member")(selectedOption.value);;
                  }}
                  styles={customStyles}
                  isSearchable={true}
                  options={options}
                  name="member"
                  isLoading={false}
                // loadingMessage={() => "Fetching year"}
                // noOptionsMessage={() => "Year appears here"}
                />
                <span className={classes.error}> {errors.member}</span>
              </div>

            </div>
            <div
            >
              

            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default CreatePlanForm
