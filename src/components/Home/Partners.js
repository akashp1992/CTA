import React from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import IconArrow from "../../images/IconArrow.svg";
import logo1 from "../../images/Partner/partner1-modified.png";
// import logo2 from "../../images/Partner/partner2-modified.png";
import logo3 from "../../images/Partner/partner3-modified.jpg";
import logo4 from "../../images/Partner/partner4-modified.png";
import logo5 from "../../images/Partner/partner5-modified.jpg";
import logo51 from "../../images/Partner/partner51-modified.jpg";
import logo6 from "../../images/Partner/partner6-modified.jpg";
import logo7 from "../../images/Partner/partner7-modified.jpg";
import logo8 from "../../images/Partner/partner8-modified.jpg";
import logo11 from "../../images/Partner/partner1.png";
import logo2 from "../../images/Partner/partner2.png";
import logo13 from "../../images/Partner/partner3.jpg";
import logo14 from "../../images/Partner/partner4.png";
import logo15 from "../../images/Partner/partner5.jpg";
import logo52 from "../../images/Partner/partner51.jpg";
import logo16 from "../../images/Partner/partner6.jpg";
import logo17 from "../../images/Partner/partner7.jpg";
import logo18 from "../../images/Partner/partner8.jpg";
import HoverImage from "react-hover-image";

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: "poppins",
    marginTop: "60px",
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
  },
  logos: {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marrginTop: "30px",
    marginBottom: "60px",
  },
  logo: {
    display: "flex",
    color: "#8d8d8d",
    // fontWeight:600,
    fontSize: "30px",
  },
  parent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]:{
      flexDirection: "column",
      marginBottom: "10px",
      marginTop: "10px"
    }
  },
  img: {
    marginRight: "5px",
  },
  spacing: {
    marginBottom: "20px",
  },
  middle: {
    marginBottom: "20px",
    width: "650px",
    flexWrap: "nowrap !important",
    [theme.breakpoints.down("sm")]:{
      flexWrap: "wrap !important",
    }
  },
}));

function Partners() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Title title="Our Trusted Partners " />
        <p className={classes.title}></p>
        <div className={classes.logos}>
          <Grid item container className={classes.spacing}>
            <Grid
              md={3}
              sm={3}
              lg={3}
              xl={3}
              xs={12}
              className={classes.parent}
            >
              <div className={classes.logo}>
                {/* <img src={logo1} style={{ width: "250px", height: "70px" }} /> */}
                {/* <p>Partner Logo</p> */}
                <HoverImage
                  src={logo1}
                  hoverSrc={logo11}
                  style={{ width: "170px", height: "50px" }}
                />
              </div>
            </Grid>
            <Grid
              md={3}
              lg={3}
              sm={3}
              xl={3}
              xs={12}
              className={classes.parent}
            >
              <div className={classes.logo}>
                {/* <img src={logo2} style={{ width: "80px" }} /> */}
                <HoverImage
                  src={logo2}
                  hoverSrc={logo2}
                  style={{ width: "140px", height: "55px" }}
                />
                {/* <p>Partner Logo</p> */}
              </div>
            </Grid>
            <Grid
              md={3}
              lg={3}
              sm={3}
              xl={3}
              xs={12}
              className={classes.parent}
            >
              <div className={classes.logo}>
                {/* <img src={logo3} style={{width: "90px", height: "70px"}} /> */}
                <HoverImage
                  src={logo3}
                  hoverSrc={logo13}
                  style={{ width: "70px", height: "55px" }}
                />
                {/* <p>Partner Logo</p> */}
              </div>
            </Grid>
            <Grid
              container
              md={3}
              lg={3}
              xl={3}
              xs={12}
              sm={3}
              className={classes.parent}
              alignItems="center"
            >
              <div className={classes.logo}>
                {/* <img src={logo4} style={{ width: "320px" }} /> */}
                <HoverImage
                  src={logo4}
                  hoverSrc={logo14}
                  style={{ width: "230px" }}
                />
                {/* <p>Partner Logo</p> */}
              </div>
            </Grid>
          </Grid>

          <Grid item container className={classes.middle}>
            
            {/* <Grid
              container
              md={4}
              lg={4}
              xl={4}
              xs={12}
              sm={4}
              className={classes.parent}
            >
              <div className={classes.logo} />
            </Grid> */}
            <Grid
              container
              md={4}
              lg={4}
              xl={4}
              xs={12}
              sm={4}
              className={classes.parent}
            >
              <div className={classes.logo}>
                {/* <img src={logo7} style={{ width: "250px" }} /> */}
                <HoverImage
                  src={logo7}
                  hoverSrc={logo17}
                  style={{ width: "180px" }}
                />
                {/* <p>Partner Logo</p> */}
              </div>
            </Grid>
            <Grid
              md={4}
              lg={4}
              sm={4}
              xl={4}
              xs={12}
              className={classes.parent}
            >
              <div className={classes.logo}>
                {/* <img src={logo6} style={{ width: "216px", height: "60px" }} /> */}
                <HoverImage
                  src={logo6}
                  hoverSrc={logo16}
                  style={{ width: "170px", height: "40px" }}
                />
                {/* <p>Partner Logo</p> */}
              </div>
            </Grid>
            {/* <Grid
              md={3.5}
              lg={3.5}
              sm={3.5}
              xl={3.5}
              xs={12}
              className={classes.parent}
            > */}
              {/* <div className={classes.logo}> */}
                {/* <img src={logo5} style={{ width: "250px" }} /> */}
                {/* <HoverImage
                  src={logo51}
                  hoverSrc={logo52}
                  style={{ width: "170px", height: "60px" }}
                /> */}
                {/* <p>Partner Logo</p> */}
              {/* </div>
            </Grid> */}
            <Grid
              md={4}
              lg={4}
              sm={4}
              xl={4}
              xs={12}
              className={classes.parent}
            >
              <div className={classes.logo}>
                {/* <img src={logo8} style={{ width: "250px" }} /> */}
                <HoverImage
                  src={logo8}
                  hoverSrc={logo18}
                  style={{ width: "170px" }}
                />
                {/* <p>Partner Logo</p> */}
              </div>
            </Grid> 
          </Grid>

          <Grid className={classes.spacing} item container>
           
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Partners;
