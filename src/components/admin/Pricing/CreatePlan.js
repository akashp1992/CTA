import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, TextField, Typography, TextareaAutosize } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Toastify from "../Toastify/Toastify";
import { Toaster } from 'react-hot-toast';
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toogleSnackbar } from "../../../redux/client/common/snackbarSlice";
import { createPlan } from "../../../redux/admin/plan/createPlanSlice";

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
const CreatePlan = () => {
  const classes = useStyle();
  const [openModal, setOpenModal] = React.useState(false);
  const [values, setValues] = React.useState({
    title: "",
    amount: "",
    desc: "",
    duration: ""
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };
  const dispatch = useDispatch()
  const [selectedduration, setSelectedduration] = useState("");
  const testSchema = Yup.object().shape({
    title: Yup.string().required(" Plan title is required"),
    amount: Yup.string().required("Enter amount"),
    desc: Yup.string().required("Description is required"),
  });

  const defaultValues = {
    title: "",
    amount: "",
    desc: "",
    duration: ""
  };

  const options = [
    { value: "3", label: "3 months" },
    { value: "6", label: "6 months" },
    { value: "12", label: "12 months" },
  ];


  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(testSchema)
  })

  const onSubmit = (data) => {
    const request = {
      data: {
        title: data.title,
        amount: data.amount,
        duration_in_month: parseInt(data.duration),
        description: data.desc
      },
      onSuccess: (res) => {
        if (res.success === true) {
          setValues({
            title: "",
            amount: "",
            desc: "",
            duration: ""
          })
          dispatch(toogleSnackbar({ open: true, type: "success", msg: res.message }))
        }
      },
      onFail: (err) => {

      }
    }
    dispatch(createPlan(request))
  }
  return (
    <>
      <div className={classes.main}>
        <Container>
          <Typography className={classes.usertitle}>Create Plan</Typography>

          {/* <Formik validationSchema={testSchema} onSubmit={({ setSubmiting }) => {
            console.log("data", setSubmiting)
          }} initialValues={initialValues}>
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
                  <form onSubmit={() => handleSubmit(onSubmit)}>
                    <div className={classes.parent}>

                      <div style={{ width: '400px' }}>
                        <Typography className={classes.textfieldtitle} > Plan Title</Typography>
                        <TextField
                          placeholder="Enter Plan Title"
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
                      <div style={{ width: '400px' }}>
                        <Typography className={classes.textfieldtitle} > Amount</Typography>
                        <TextField
                          placeholder="Enter Amount"
                          name="amount"
                          margin="normal"
                          variant="outlined"
                          onChange={handleChange("amount")}
                          autoComplete='off'
                          InputProps={{
                            classes: { input: classes.input }
                          }}
                          style={{ width: "100%", background: 'white', marginTop: 0 }}
                          styles={customStyles}
                          value={values.amount}
                          onBlur={() => {
                            console.log("amount");
                          }}
                        />
                        <span className={classes.error}>{errors.amount}</span>
                      </div>
                    </div>
                    <div className={classes.parent}>
                      <div style={{ width: '400px' }}>
                        <Typography className={classes.textfieldtitle} > Plan Duration</Typography>
                        <Select
                          placeholder="Select Plan Duration"
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
                      <div style={{ width: '400px' }}>
                        <Typography className={classes.textfieldtitle} > Description</Typography>
                        <TextareaAutosize
                          name="desc"
                          onChange={handleChange("desc")}
                          aria-label="empty textarea"
                          placeholder="Enter Description"
                          style={{
                            width: 402, height: '100px', fontFamily: 'poppins', outline: 'none', borderColor: " #C1C1C1",
                            borderRadius: "4px",
                          }}
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
                    </div>
                  </form>
                  <div className={classes.btnbody}>
                    <Button variant="contained" className={classes.savebtn} type="submit" noValidate>
                      create
                    </Button>
                    <NavLink style={{ textDecoration: "none" }} to={`/dashboard/Admin/Users`}>
                      <Button variant="outlined" className={classes.cancelbtn}>
                        cancel
                      </Button>
                    </NavLink>
                  </div>

                  <div
                  >


                  </div>

                </>
              );
            }}
          </Formik> */}
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.parent}>

                <div style={{ width: '400px' }}>
                  <Typography className={classes.textfieldtitle} > Plan Title</Typography>
                  <Controller
                    control={control}
                    onChange={handleChange}
                    value={values.title}
                    name="title"
                    rules={{
                      required: true,
                    }}
                    render={({ field
                    }) => (
                      <>
                        <TextField
                          {...field}
                          placeholder="Enter Plan Title"
                          margin="normal"
                          variant="outlined"
                          autoComplete='off'
                          InputProps={{
                            classes: { input: classes.input }
                          }}
                          style={{ width: "100%", background: 'white', marginTop: 0 }}
                          styles={customStyles}

                          onBlur={() => {
                            console.log("title");
                          }}
                        />
                        {/* <span className={classes.error}>{errors?.title}</span> */}
                      </>
                    )} />
                </div>
                <div style={{ width: '400px' }}>
                  <Typography className={classes.textfieldtitle} > Amount</Typography>
                  <Controller
                    control={control}
                    onChange={handleChange}

                    value={values.amount}
                    name="amount"
                    rules={{
                      required: true,
                    }}
                    render={({ field
                    }) => (
                      <>
                        <TextField
                          {...field}
                          placeholder="Enter Amount"
                          margin="normal"
                          variant="outlined"
                          autoComplete='off'
                          InputProps={{
                            classes: { input: classes.input }
                          }}
                          style={{ width: "100%", background: 'white', marginTop: 0 }}
                          styles={customStyles}

                          onBlur={() => {
                            console.log("amount");
                          }}
                        />
                        {/* <span className={classes.error}>{errors?.amount?.message}</span> */}
                      </>
                    )} />
                </div>
              </div>
              <div className={classes.parent}>
                <div style={{ width: '400px' }}>
                  <Typography className={classes.textfieldtitle}>Plan Duration</Typography>
                  <Controller
                    control={control}
                    name="duration"
                    onChange={handleChange}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => {
                      const { onChange, name, value, ref } = field
                      return (
                        <>
                          <Select
                            inputRef={ref}
                            placeholder="Select Plan Duration"
                            onChange={(val) => { onChange(val.value) }}
                            value={options.find((v) => v.value === value)}
                            styles={customStyles}
                            isSearchable={true}
                            options={options}
                            name={name}

                            isLoading={false}
                          // loadingMessage={() => "Fetching year"}
                          // noOptionsMessage={() => "Year appears here"}
                          />
                          {/* <span className={classes.error}> {errors?.duration}</span> */}
                        </>
                      )

                    }} />
                </div>
                <div style={{ width: '400px' }}>
                  <Typography className={classes.textfieldtitle} > Description</Typography>
                  <Controller
                    control={control}
                    name="desc"
                    onChange={handleChange}
                    value={values.title}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { ref, ...field }
                    }) => (
                      <>
                        <TextareaAutosize

                          {...field}
                          aria-label="empty textarea"
                          ref={ref}
                          placeholder="Enter Description"
                          style={{
                            width: 402, height: '100px', fontFamily: 'poppins', outline: 'none', borderColor: " #C1C1C1",
                            borderRadius: "4px",
                          }}
                          InputProps={{
                            classes: { input: classes.input }
                          }}
                          styles={customStyles}
                        />

                        {/* <span className={classes.error}>{errors?.desc}</span> */}
                      </>
                    )} />
                </div>
              </div>

              <div className={classes.btnbody}>
                <Button variant="contained" className={classes.savebtn} type="submit" >
                  create
                </Button>
                <NavLink style={{ textDecoration: "none" }} to={`/dashboard/Admin/Users`}>
                  <Button variant="outlined" className={classes.cancelbtn}>
                    cancel
                  </Button>
                </NavLink>
              </div>
            </form>

            <div
            >


            </div>

          </>

        </Container>
      </div>
      <Toaster />
    </>
  );
};

export default CreatePlan;
