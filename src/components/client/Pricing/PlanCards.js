import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PlanBenefitData from "../Projects/PlanBenefitData";
import Sliders from "../Projects/Sliders";

const useStyle = makeStyles((theme) => ({
  // main: {
  //   backgroundColor: "#F8F8F8",
  //   borderRadius: "5px",
  //   height: "auto",
  // },
  allCardBody: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    paddingBottom: "10px",
    alignItems: "center",
  },
  firstCard: {
    borderRadius: "10px !important",
    borderTop: "10px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
    borderColor: "#F7F7F7",
    width: "370px",
    height: "630px",
  },
  secondCard: {
    borderRadius: "10px !important",
    borderTop: "10px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
    borderColor: "#3330E4",
    width: "370px",
    height: "680px",
  },
  thirdCard: {
    borderRadius: "10px !important",
    borderTop: "10px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
    borderColor: "#F7F7F7",
    width: "350px",
    height: "580px",
  },
  cardcontent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  firstCardHeading: {
    fontSize: "28px !important",
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    color: "#06283D !important",
  },
  firstCardSubHeading: {
    fontSize: "20px !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
    color: "#06283D !important",
  },
  firstCardDesc: {
    fontSize: "12px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    color: "#BEBEBE !important",
  },
  firstPlanPrice: {
    fontSize: "28px !important",
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    color: "#06283D !important",
  },
  firstPlanDescBody: {
    width: "220px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "1px solid #E8E8E8",
    padding: "4px 10px",
    boxShadow: "0px 2px 3px #d4d4d4",
  },
  firstPlanDesc: {
    fontSize: "12px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    color: "#D5D5D5 !important",
  },
  btn: {
    position: "absolute",
    left: "50%",
    bottom: "0",
    transform: "translate(-50%, -50%)",
    width: "150px !important",
    textTransform: "capitalize !important",
    border: "1px solid !important",
    borderColor: "#3330E4 !important",
    backgroundColor: "white !important",
    color: "#06283D !important",
    borderRadius: "20px !important",
    fontSize: "16px !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
  },
  btn2: {
    position: "absolute",
    left: "50%",
    bottom: "0",
    transform: "translate(-50%, -50%)",
    width: "150px !important",
    textTransform: "capitalize !important",
    border: "1px solid !important",
    borderColor: "#3330E4 !important",
    backgroundColor: "#3330E4 !important",
    color: "white !important",
    borderRadius: "20px !important",
    fontSize: "16px !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
  },
  // root: {
  //   maxWidth: 290,
  //   transition: "transform 0.25s ease-in-out",
  //   "&:hover": {
  //     transform: "scale3d(1.05, 1.05, 1)",
  //     "& .makeStyles-btn-31": {
  //       backgroundColor: "blue !important",
  //       color: "white !important",
  //     },
  //     "& .makeStyles-firstCard-21": {
  //       borderTop: "10px",
  //       borderBottom: "0px",
  //       borderRight: "0px",
  //       borderLeft: "0px",
  //       borderStyle: "solid",
  //       borderColor: "#3330E4",
  //     },
  //   },
  // },
}));
const PlanCards = (title) => {
  const classes = useStyle();
  const planBenefitData = [
    {
      title: "Lorem Ipsum has been the industry's standa",
      icon: true,
    },
    {
      title: "Lorem Ipsum has been the industry's standa",
      icon: true,
    },
    {
      title: "Lorem Ipsum has been the industry's standa",
      icon: false,
    },
    {
      title: "Lorem Ipsum has been the industry's standa",
      icon: false,
    },
    {
      title: "Lorem Ipsum has been the industry's standa",
      icon: false,
    },
    {
      title: "Lorem Ipsum has been the industry's standa",
      icon: false,
    },
  ];
  return (
    <div className={classes.main}>
      <div className={classes.allCardBody}>
        <div className={classes.root}>
          <Card className={classes.firstCard}>
            <CardContent>
              <div className={classes.cardcontent}>
                <div style={{ marginTop: "15px" }}>
                  <Typography className={classes.firstCardHeading}>
                    Free Trial
                  </Typography>
                </div>
                <div style={{ marginTop: "8px" }}>
                  <Typography className={classes.firstCardSubHeading}>
                    Lorem Ipsum has been the
                  </Typography>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <Typography className={classes.firstCardDesc}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    typ
                  </Typography>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className={classes.firstPlanPrice} component="h3">
                    $ Free
                  </span>
                  <span
                    style={{
                      fontSize: "14px ",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      color: "#BEBEBE ",
                      marginTop: "5px",
                    }}
                  >
                    /months
                  </span>
                </div>
                <div className={classes.firstPlanDescBody}>
                  <Typography className={classes.firstPlanDesc}>
                    Try out all features to determine what works best for you
                  </Typography>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Typography
                    style={{
                      fontSize: "12px ",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      color: "#BEBEBE ",
                    }}
                  >
                    7000 Lorem . 1 user
                  </Typography>
                </div>
                <div style={{ marginTop: "30px" }}>
                  {planBenefitData.map((item, index) => (
                    <PlanBenefitData title={item.title} icon={item.icon} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Button variant="contained" className={classes.btn}>
            Get Started
          </Button>
        </div>
        <div className={classes.root}>
          <div className={classes.secondCardBody}>
            <Card className={classes.secondCard}>
              <CardContent>
                <div className={classes.cardcontent}>
                  <div style={{ marginTop: "15px" }}>
                    <Typography className={classes.firstCardHeading}>
                      Short-Form
                    </Typography>
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <Typography className={classes.firstCardSubHeading}>
                      Lorem Ipsum has been the
                    </Typography>
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <Typography className={classes.firstCardDesc}>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of typ
                    </Typography>
                  </div>
                  <div>
                    <Sliders />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    {planBenefitData.map((item, index) => (
                      <PlanBenefitData title={item.title} icon={item.icon} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button variant="contained" className={classes.btn2}>
              Get Started
            </Button>
          </div>
        </div>
        <div className={classes.root}>
          <div className={classes.thirdCardBody}>
            <Card className={classes.firstCard}>
              <CardContent>
                <div className={classes.cardcontent}>
                  <div style={{ marginTop: "15px" }}>
                    <Typography className={classes.firstCardHeading}>
                      Long-Form
                    </Typography>
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <Typography className={classes.firstCardSubHeading}>
                      Lorem Ipsum has been the
                    </Typography>
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <Typography className={classes.firstCardDesc}>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of typ
                    </Typography>
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span className={classes.firstPlanPrice} component="h3">
                      $ 50
                    </span>
                    <span
                      style={{
                        fontSize: "14px ",
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        color: "#BEBEBE ",
                        marginTop: "5px",
                      }}
                    >
                      /months
                    </span>
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    {planBenefitData.map((item, index) => (
                      <PlanBenefitData title={item.title} icon={item.icon} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button variant="contained" className={classes.btn}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCards;
