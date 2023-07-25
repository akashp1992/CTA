import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TabsRef from "../User/TabsRef";

const useStyle = makeStyles((theme) => ({
  main: {
    backgroundColor: "#F8F8F8",
    borderRadius: "5px",
    height: "850px",
    padding: '10px'
  },
  usertitle: {
    fontSize: "30px !important",
    fontWeight: "600 !important",
    fontFamily: "Poppins !important",
    color: "#3A3A3A !important",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  forminput: {
    background: "white",
    padding: "5px",
    borderRadius: "5px !important",
    width: "470px",
    height: "35px",
    color: "#D1DAFF !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
  form: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  available: {
    color: "#0EB902",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    paddingTop: "40px",
  },
  profilebody: {
    display: "flex",
    alignItems: "center",
  },
  profilelogo: {
    width: "80px",
  },
  photobtn: {
    width: "100%",
    height: "33px",
    marginLeft: "30px !important",
    backgroundColor: "#3330E4 !important",
    textTransform: "none !important"
  },
  formtitles: {
    fontSize: "16px !important",
    fontWeight: "500",
    color: "#3330E4",
    paddingBottom: "13px",
    paddingTop: "5px",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
  },
  buttonbody: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3330E4 !important",
    width: "70px !important",
    height: "35px !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
    fontSize: "15px !important",
    textTransform: "none !important"
  },
}));

const Setting = () => {
  const classes = useStyle();
  // const hiddenFileInput = useRef(null);
  // const [profile, setProfile] = useState(null);
  // const [profileThumb, setProfileThumb] = useState(null)
  // const handleChangeProfile = () => {
  //   hiddenFileInput.current.click();
  // }
  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     console.log("picture", e.target.files);
  //     setProfile(e.target.files[0]);
  //     const reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //       setProfileThumb(reader.result)
  //     })
  //     reader.readAsDataURL(e.target.files[0])
  //   }

  // }
  return (
    <>

      <div className={classes.main}>
        <Typography className={classes.usertitle}>Settings</Typography>
        <TabsRef />
      </div>

    </>
  );
};

export default Setting;

// <div className={classes.main}>
//         <Container>
//           <Container>
//             <Typography className={classes.usertitle}>
//               Hi,
//               <br /> User Name
//             </Typography>
//             <div className={classes.profilebody}>
//               <div style={{}}>
//                 <img src={profileThumb === null ? profilelogo : profileThumb} className={classes.profilelogo} />
//               </div>
//               <div>
//                 <Button className={classes.photobtn} onClick={handleChangeProfile} variant="contained">
//                   Change Photo
//                 </Button>
//                 <input ref={hiddenFileInput} type="file" onChange={handleChange} style={{ display: 'none' }} />
//               </div>
//             </div>
//             <div className={classes.form}>
//               <div>
//                 <Typography className={classes.formtitles}>
//                   About yourself*
//                 </Typography>
//                 <TextField
//                   variant="standard"
//                   InputProps={{
//                     className: classes.forminput,
//                     disableUnderline: true,
//                   }}
//                   placeholder="Enter something about your self "
//                   disableUnderline={true}
//                 />
//               </div>
//             </div>
//             <div className={classes.form}>
//               <div>
//                 <Typography className={classes.formtitles}>
//                   UserName*
//                 </Typography>
//                 <TextField
//                   variant="standard"
//                   InputProps={{
//                     className: classes.forminput,
//                     disableUnderline: true,
//                     endAdornment: (
//                       <InputAdornment>
//                         <IconButton>
//                           <img src={editicon} />
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                   placeholder="Enter your UserName"
//                   disableUnderline={true}
//                 />
//               </div>
//               <Typography
//                 style={{ marginLeft: "20px" }}
//                 className={classes.available}
//               >
//                 Available
//               </Typography>
//             </div>
//             <div className={classes.form}>
//               <div>
//                 <Typography className={classes.formtitles}>
//                   Email ID*
//                 </Typography>
//                 <TextField
//                   variant="standard"
//                   InputProps={{
//                     className: classes.forminput,
//                     disableUnderline: true,
//                     endAdornment: (
//                       <InputAdornment>
//                         <IconButton>
//                           <img src={editicon} />
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                   placeholder="Enter your Email ID "
//                   disableUnderline={true}
//                 />
//               </div>
//             </div>
//             <div className={classes.form}>
//               <div>
//                 <Typography className={classes.formtitles}>
//                   Contact Number*
//                 </Typography>
//                 <TextField
//                   variant="standard"
//                   InputProps={{
//                     className: classes.forminput,
//                     disableUnderline: true,
//                     endAdornment: (
//                       <InputAdornment>
//                         <IconButton>
//                           <img src={editicon} />
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                   placeholder="Enter your Contact Number"
//                   disableUnderline={true}
//                 />
//               </div>
//             </div>
//             <div className={classes.buttonbody}>
//               <div>
//                 <Button variant="contained" className={classes.button}>
//                   Save
//                 </Button>
//               </div>
//               <div></div>
//             </div>
//           </Container>
//         </Container>
//       </div>