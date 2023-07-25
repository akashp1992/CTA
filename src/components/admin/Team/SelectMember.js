import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { Button, Container, TextField, Typography, Grid, Autocomplete, Checkbox } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { makeStyles } from "@mui/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTeamMemberList } from "../../../redux/admin/team/teamMemberSlice";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { createTeam } from "../../../redux/admin/team/createTeamSlice";
import { toogleSnackbar } from "../../../redux/client/common/snackbarSlice";
import { setTypeNotification } from "../../../redux/admin/notification/notificationSlice";
import { sendNotificationType } from "../../../components/common/notificationUtils"

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
  formselecter: {
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
    marginBottom: '7px',
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
function SelectMember() {
  const dispatch = useDispatch();
  const [memberList, setMemberList] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");
  const classes = useStyle();
  const testSchema = Yup.object().shape({
    team: Yup.string().required("Enter your team name"),
    member: Yup.string().required("Select team members")
  });
  const [values, setValues] = useState({
    team: "",
    member: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const data = []
    const request = {
      onSuccess: (res) => {
        res?.data?.map((member) => {
          data.push({
            team_member_id: member.id,
            first_name: member.first_name,
            last_name: member.last_name
          })
          setMemberList(data)
        })
      },
      onFail: (err) => {

      }
    }
    dispatch(getTeamMemberList(request))
  }, [])


  const handleMemberChange = selectedMember => {
    console.log("selected", selectedMember.first_name);
    setSelectedMember(selectedMember);
  };

  const options = [
    { value: " user1", label: "user1" },
    { value: "user2", label: "user2" },
    { value: "user3", label: "user3" },
  ];

  const defaultValues = {
    team: "",
  }
  // var notiOptions = {
  //   body: 'Notification Body',
  //   icon: 'https://www.vkf-renzel.com/out/pictures/generated/product/1/356_356_75/r12044336-01/general-warning-sign-10836-1.jpg?    auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   dir: 'ltr',
  // };
  // const notification = new Notification('Hello', notiOptions);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const myHelper = {
    member: "member Required",
    team: "team name Required"
  }
  const onSubmit = (data) => {
    const member_id = []
    data.member.map((items) => {
      member_id.push(items.team_member_id)
    })
    const request = {
      data: {
        name: data.team,
        team_member_id: member_id.join(",")
      },
      onSuccess: (res) => {
        if (res.success === true) {
          navigate("/dashboard/Admin/Teams", { replace: true })
          dispatch(setTypeNotification(sendNotificationType("create_team")))
          dispatch(toogleSnackbar({ open: true, msg: res.message, type: "success" }))
        } else {
          navigate("/dashboard/Admin/CreateTeamForm", { replace: true })
          dispatch(toogleSnackbar({ open: true, msg: res.message, type: "error" }))
        }

      },
      onFail: (err) => {

      }
    }
    dispatch(createTeam(request))
    console.log("ids", member_id.join(","))
  }





  const validationSchema = Yup.object().shape({
    team: Yup.string().trim().required().min(3).max(64),
    member: Yup.array()
      .of(
        Yup.object().shape({
          member_id: Yup.string(),
          first_name: Yup.string(),
        })
      )
      .min(1, "Select At list One Member")
  });
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(validationSchema)
  })
  return (


    // <Formik validationSchema={testSchema} initialValues={initialValues}>
    //   {({
    //     handleChange,
    //     handleBlur,
    //     values,
    //     errors,
    //     touched,
    //     handleSubmit,
    //     setFieldTouched,
    //     setFieldValue
    //   }) => {
    //     return (
    //       <>
    //         <div className={classes.main}>
    //           <div style={{ width: '400px' }}>
    //             {console.log("memberList", memberList)}
    //             <Typography className={classes.textfieldtitle} > Team Name</Typography>
    //             <TextField
    //               placeholder="Enter Team Name"
    //               name="team"
    //               margin="normal"
    //               variant="outlined"
    //               onChange={handleChange("team")}
    //               autoComplete='off'
    //               InputProps={{
    //                 classes: { input: classes.input }
    //               }}
    //               style={{ width: "100%", background: 'white', marginTop: 0 }}
    //               styles={customStyles}
    //               value={values.team}
    //               onBlur={() => {
    //                 console.log("team");
    //               }}
    //             />
    //             <span className={classes.error}>{errors.team}</span>
    //           </div>

    //           <div style={{ width: '400px' }}>
    //             <Typography className={classes.textfieldtitle} > Team Members</Typography>
    //             {/* <Select
    //               placeholder="Select team Members"
    //               value={selectedMember}
    //               onChange={selectedOption => {
    //                 handleMemberChange(selectedOption);

    //                 console.log("values", values.member);
    //                 handleChange("member")(selectedOption.value);;
    //               }}
    //               styles={customStyles}
    //               isSearchable={true}
    //               options={options}
    //               name="member"
    //               isLoading={false}
    //             /> */}
    //             <Autocomplete
    //               multiple
    //               sx={{ background: 'white' }}
    //               id="checkboxes-tags-demo"
    //               options={memberList}
    //               disableCloseOnSelect
    //               name="member"
    //               getOptionLabel={(option) => option.first_name}
    //               onChange={(e, value) => {handleChange("member",value); console.log("member",value)}}
    //               renderOption={(props, option, { selected }) => (
    //                 <li {...props}>
    //                   <Checkbox
    //                     icon={icon}
    //                     checkedIcon={checkedIcon}
    //                     style={{ marginRight: 8 }}
    //                     checked={selected}

    //                   />
    //                   {option.first_name}
    //                 </li>
    //               )}
    //               styles={customStyles}
    //               renderInput={(params) => (
    //                 <TextField {...params} variant="outlined" placeholder="Select Team Member" />
    //               )}
    //             />
    //             <span className={classes.error}> {errors.member}</span>
    //           </div>

    //         </div>
    //         <div
    //         >
    //           <div className={classes.btnbody}>
    //             <Button variant="contained" className={classes.savebtn} onClick={handleSubmit} noValidate>
    //               Create
    //             </Button>
    //             <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/Admin/Teams`}>
    //               <Button variant="outlined" className={classes.cancelbtn}>
    //                 Cancel
    //               </Button>
    //             </NavLink>
    //           </div>

    //         </div>
    //       </>
    //     );
    //   }}
    // </Formik>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.main}>
        <div style={{ width: '400px' }}>
          {console.log("memberList", memberList)}
          <Typography className={classes.textfieldtitle} > Team Name</Typography>
          <Controller
            control={control}
            onChange={handleChange}
            value={values.team}
            name="team"
            rules={{
              required: true,
            }}
            render={({ field
            }) => (
              <>
                <TextField
                  {...field}
                  placeholder="Enter Team Name"
                  margin="normal"
                  variant="outlined"

                  autoComplete='off'
                  InputProps={{
                    classes: { input: classes.input }
                  }}
                  error={!!errors.team}
                  helperText={
                    errors.team && `${errors.team.message}`
                  }
                  style={{ width: "100%", background: 'white', marginTop: 0 }}
                  styles={customStyles}

                  onBlur={() => {
                    console.log("team");
                  }}
                />

              </>
            )}
          />

        </div>

        <div style={{ width: '400px' }}>
          <Typography className={classes.textfieldtitle} > Team Members</Typography>
          {/* <Select
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
                 /> */}
          <Controller
            name="member"
            value={values.member}
            control={control}

            render={({ field: { ref, ...field } }) => (

              <>
                <Autocomplete
                  {...field}
                  multiple={true}
                  disableClearable
                  disablePortal
                  filterSelectedOptions
                  onChange={(event, value) => field.onChange(value)}
                  sx={{ background: 'white' }}
                  id="checkboxes-tags-demo"
                  options={memberList}
                  disableCloseOnSelect
                  value={field.value}
                  isOptionEqualToValue={(option, value) => value.first_name === undefined || value.first_name === "" || option.first_name === value.first_name}
                  getOptionLabel={(option) => option.first_name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}

                      />
                      {option.first_name}
                    </li>
                  )}
                  styles={customStyles}
                  renderInput={(params) => (
                    <TextField {...params} type="search" name="member" variant="outlined" placeholder="Select Team Member" error={!!errors.member}
                      helperText={
                        errors.member && `${errors.member.message}`
                      } inputRef={ref} />
                  )}
                />

              </>

            )}

          />
        </div>

      </div>
      <div
      >
        <div className={classes.btnbody}>
          <Button variant="contained" className={classes.savebtn} type="submit" noValidate>
            Create
          </Button>
          <NavLink style={{ textDecoration: 'none' }} to={`/dashboard/Admin/Teams`}>
            <Button variant="outlined" className={classes.cancelbtn}>
              Cancel
            </Button>
          </NavLink>
        </div>

      </div>
    </form>
  );
}

export default SelectMember
