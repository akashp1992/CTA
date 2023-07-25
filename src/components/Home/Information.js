import React, { useState } from "react";
import Title from "./Title";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import information from "../../images/information.png";
import arrow from "../../images/arrow.svg";
import Carousel from "react-simply-carousel";
import forward from "../../images/forward.svg";
import backward from "../../images/backward.svg";

const useStyles = makeStyles((theme) => ({
  information: {
    padding: "30px 0",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    // boxShadow:'-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)'
  },
  main: {
    fontFamily: "poppins",
    textAlign: "center",
    padding: "30px 60px",
    marginTop: "100px",
    background: "#f7f7f7",
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
  },
  image: {
    width: "100%",
  },
  img: {
    width: "100%",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {},
  },
  parent: {
    width: "675px",
    boxShadow:
      "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
    },
  },
  content: {
    padding: "30px",
    textAlign: "left",
  },
  headline: {
    color: "#3330e4",
    fontSize: "14px",
    fontWeight: 700,
  },
  text: {
    color: "#00323a",
    fontSize: "12px",
    marginTop: "10px",
    color: "#00323A",
    // inlineSize:'320px'
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#f7f7f7",
    border: "none",
    width: "130px",
    padding: "5px 5px",
    height: "30px",
    fontSize: "15px",
    color: "#3330e4",
    borderRadius: "21px",
    float: "right",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 98%), 5px 5px 9px rgb(94 104 121 / 20%)",
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      float: "none",
      margin: "0 auto",
    },
  },
  left: {
    position: "absolute",
    left: 0,
    top: "35%",
  },
  right: {
    position: "absolute",
    right: 0,
    top: "35%",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  dark: {
    height: "5px",
    width: "5px",
    background: "#3330e4",
    borderRadius: "50%",
  },
  light: {
    height: "5px",
    width: "5px",
    background: "##e4e4ff",
    borderRadius: "50%",
  },
  arrow: {
    width: "17px",
    marginTop: "8px",
  },
}));

function Item({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.information}>
      <div className={classes.parent}>
        <Grid item container>
          <Grid md={6} lg={6} xl={6} xs={12}>
            <div className={classes.image}>
              <img src={information} className={classes.img} />
            </div>
          </Grid>
          <Grid md={6} lg={6} xl={6} xs={12}>
            <div className={classes.content}>
              <p className={classes.headline}>New Upcoming TAX act in USA</p>
              <p className={classes.text}>
                Loren content Loren content Loren content Loren content Loren
                content Loren content Loren content Loren content Loren content
                Loren content Loren content Loren content Loren content Loren
                content Loren content Loren content Loren content Loren
              </p>
              <p className={classes.text}>
                https://www.fincen.gov/anti-money-laundering-act-2020
              </p>
              <button className={classes.button}>
                <div>know more</div>
                <div>
                  <img src={arrow} className={classes.arrow} />
                </div>
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <img src={left} className={classes.left}/>
          <img src={right} className={classes.right}/> */}
    </div>

    //   <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
  );
}
function Information() {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      <div className={classes.main}>
        <Title title="Latest Information" />
        <p className={classes.title}>
          Contain information associated with the upcoming rulemaking:
        </p>

        <Carousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "center",
              userSelect: "text",
              alignItems: "center",
              display: "flex",
            },
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
              background: "blue",
            },
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: <img src={backward} style={{ marginTop: "8px" }} />,
            style: {
              width: "50px",
              height: "50px",
              border: "none",
              borderRadius: "50%",
              boxShadow:
                "-5px -5px 9px rgb(255 255 255 / 98%), 5px 5px 9px rgb(94 104 121 / 20%)",
              marginLeft: "50px",
              "@media (max-width: 600px)": {
                marginLeft: 0,
              },
            },
          }}
          backwardBtnProps={{
            children: <img src={forward} style={{ marginTop: "8px" }} />,
            style: {
              width: "50px",
              height: "50px",
              border: "none",
              borderRadius: "50%",
              boxShadow:
                "-5px -5px 9px rgb(255 255 255 / 98%), 5px 5px 9px rgb(94 104 121 / 20%)",
              marginRight: "50px",
              "@media (max-width: 600px)": {
                margin: "0px",
              },
            },
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 6,
                width: 6,
                borderRadius: "50%",
                border: 0,
                background: "#fff",
                margin: "0 5px",
              },
            },
            activeItemBtnProps: {
              style: {
                height: 6,
                width: 6,
                borderRadius: "50%",
                border: 0,
                background: "#0938DF",
                margin: "0 5px",
              },
            },
          }}
          itemsToShow={1}
          speed={400}
        >
          {Array.from({ length: 3 }).map((item, index) => (
            <Item />
          ))}
        </Carousel>

        {/* <div className={classes.dots}>
        <div className={classes.light}></div>
              <div className={classes.dark}></div>
              <div className={classes.light}></div>
            </div> */}
      </div>
    </div>
  );
}

export default Information;
