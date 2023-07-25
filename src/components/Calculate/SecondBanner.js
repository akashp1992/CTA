import {
  Button,
  Grid,
  LinearProgress,
  SvgIcon,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container, width } from "@mui/system";
import React, { useState } from "react";
import logo from "../../images/logo.svg";
import QuizForm from "../QuizForm";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import UserForm from "./forms/UserForm";
import EntityForm from "./forms/EntityForm";
import RevenueForm from "./forms/RevenueForm";
import WebsiteForm from "./forms/WebsiteForm";
import EmailForm from "./forms/EmailForm";
import PhoneForm from "./forms/PhoneForm";

const useStyle = makeStyles((theme) => ({
  mainRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  contentRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "170px"
  },
  logo: {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
    marginTop: "20px",
  },
  typoHeading: {
    fontSize: "40px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
    color: "#06283D !important",
  },
  progressBarRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "150px",
    width: "100%",
  },
  progressStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(90deg)",
    width: "100%",
  },
  buttonRoot: {
    height: "24px !important",
    width: "0 !important",
    textTransform: "none !important",
    background: "#3330E4 !important",
    color: "white !important",
    margin: "10px !important",
  },
  buttonDisableRoot: {
    height: "24px !important",
    width: "0 !important",
    textTransform: "none !important",
    background: "#F7F7F7 !important",
    color: "white !important",
    margin: "10px !important",
  },
}));
function SecondBanner() {
  const classes = useStyle();
  const [progress, setProgress] = useState(10);
  const handleNextClick = () => {
    setProgress((prevProgress) => {
      if (prevProgress === 100) {
        return 10;
      }
      return progress + 15;
    });
  };
  return (
    <Container maxWidth="xl">
      <div className={classes.contentRoot}>
        {/* <img src={logo} alt="logo" className={classes.logo} /> */}
        <Typography className={classes.typoHeading}>
          Do you fall under CTA!
        </Typography>
        <Typography className={classes.typoHeading}>
          {" "}
          Answer and Find out!
        </Typography>
      </div>
      <Grid
        container
        lg={12}
        md={12}
        direction="column"
        sx={{ padding: "50px 50px 10px 10px" }}
      >
        <Grid container direction="column" md={6}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={classes.progressStyle}>
              <LinearProgress
                variant="determinate"
                sx={{
                  width: 200,
                  height: "2px",

                  backgroundColor: `rgb(216 213 213)`,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `rgb(51,48,228)`,
                  },
                }}
                value={progress}
              />
              <Typography
                style={{ paddingLeft: "2px", transform: "rotate(-90deg)" }}
              >
                {progress} %
              </Typography>
            </div>

            <div style={{ width: '100%' }}>
              {
                progress === 10 ?
                  <UserForm /> :
                  progress === 25 ? <QuizForm /> : progress === 40 ? <EntityForm /> : progress === 55 ? <RevenueForm /> : progress === 70 ? <WebsiteForm /> : progress === 85 ? <EmailForm /> : progress === 100 ? <PhoneForm /> : ""
              }
            </div>
          </div>
        </Grid>
        <Grid
          container
          item
          md={8}
          justifyContent="flex-end"
          sx={{ paddingRight: "100px" }}
        >
          <Button
            onClick={handleNextClick}
            startIcon={<ArrowBackIosIcon style={{ marginLeft: "6px" }} />}
            disabled={progress === 25 ? true : false}
            className={
              progress === 25 ? classes.buttonDisableRoot : classes.buttonRoot
            }
          >
            Back
          </Button>
          <Button
            onClick={handleNextClick}
            endIcon={<ArrowForwardIosIcon />}
            className={classes.buttonRoot}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SecondBanner;

// <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' ,marginBottom:'100px'}}>
// <div className={classes.mainRoot}>
//     <div className={classes.contentRoot}>
//         <img src={logo} alt="logo" className={classes.logo} />
//         <Typography className={classes.typoHeading}>Do You Need to File?</Typography>
//         <Typography className={classes.typoHeading}> Take The Quiz and Find Out!</Typography>

//     </div>

// </div>
// <div className={classes.progressBarRoot}>
//     <div className={classes.progressStyle}>
//         <LinearProgress variant='determinate' sx={{
//             width:200,
//             height: '2px',

//             backgroundColor: `rgb(216 213 213)`,
//             "& .MuiLinearProgress-bar": {
//                 backgroundColor: `rgb(51,48,228)`
//             },

//         }} value={progress} />
//         <Typography style={{ paddingLeft: '2px', transform: "rotate(-90deg)" }}>{progress} %</Typography>

//     </div>
//     <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
//         <QuizForm />

//     </div>

// </div>
// <div style={{ display: 'inline-flex', flexDirection: 'row', width: '77%', justifyContent: 'end' ,}}>
//     <Button onClick={handleNextClick} startIcon={<ArrowBackIosIcon style={{marginLeft:'6px'}}/>} disabled={progress === 25 ? true : false} className={progress === 25 ? classes.buttonDisableRoot : classes.buttonRoot}>Back</Button>
//     <Button onClick={handleNextClick} endIcon={<ArrowForwardIosIcon />} className={classes.buttonRoot}>Next</Button>
// </div>
// </div>
