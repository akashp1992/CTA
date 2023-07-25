import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

import Carousel from "react-simply-carousel";
// import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import forward from "../../images/forward.svg";
import backward from "../../images/backward.svg";
import Title from "./Title";
import cta1 from "../../images/cta1.svg";
import file1 from "../../images/file1.svg";
import form1 from "../../images/form1.svg";
import calender1 from "../../images/calender1.svg";
import { motion } from "framer-motion";
import checkmark from "../../images/checkmark.svg";

const useStyles = makeStyles((theme) => ({
  titleRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // padding: "30px",
    marginTop: "60px",
  },
  typoTitle: {
    fontSize: "46px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
  },
  subTitle: {
    fontFamily: "Poppins regular !important",
    fontWeight: "regular !important",
    color: "#00323A",
    marginTop: "10px",
    fontSize: "15px !important",
    width: "1100px",
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    "& div": {
      flex: "1 0  26%",
      height: "50px,",
      backgroundColor: "lightgreen",
      border: "2px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2em",
    },
  },
  title: {
    color: "#00323a",
    fontSize: "16px",
    textAlign: "center",
    width: "1154px",
    marginTop: "15px",
    marginBottom: "25px",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },

  btnPrev: {},
  card: {
    textAlign: "center",
    background: "#F7F7F7",
    boxShadow: "1px 1px #F7F7F7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    width: "220px",
    margin: "0px 0px !important",
    fontFamily: "poppins !important",
    paddingTop: "10px",
    paddingBottom: "5px",
    paddingLeft: "3px",
    paddingRight: "3px",
    boxShadow:
      "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
    [theme.breakpoints.down("lg")]: {
      width: "266px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "328px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "307px",
    },
  },
  cardTitle: {
    fontSize: "17px",
    color: "#06283D",
    fontWeight: 600,
    margin: "20px 0",
  },
  cardSubTitle2: {
    fontSize: "13px",
    color: "#06283D",
    fontWeight: "500",
    margin: "10px auto",
  },
  cardImg: {
    marginTop: "6px",
  },
  cta: {
    marginTop: "6px",
    width: "105px",
  },
  cardContent: {
    padding: "0 16px",
    textAlign: "left",
    display: "flex !important",
    alignItems: "start",
    fontFamily: "Poppins !important",
    fontWeight: "400",
    justifyContent: "flex-start",
    fontSize: "12px !important",
    width: "100%",
  },
  cardButton: {
    width: "200px",
    height: "40px",
    background: "#3330E4",
    border: "none",
    borderRadius: "5px",
    margin: "30px 0",
    color: "#fff",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(12 56 131 / 35%)",
  },
  descStyle: {},
}));

function Item({ item }) {
  const classes = useStyles();

  return {
    /* {list.map((list) => (
       
      ))} */
  };
}
function AboutCta() {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);
  const list = [
    {
      img: file1,
      title: "Individuals, who need to file?",
      title2: "Companies need to identify the following",
      id: 1,
      content: {
        icon: checkmark,
        des: `Persons with the authority to incorporate at the Secretary of State level`,
        des2: `Persons with the authority to incorporate at the Secretary of State level`,
      }
    },
    {
      img: form1,
      title: "Required Filing Information",
      title2: "Information related to company applicants and beneficiaries:",
      id: 2,
      content: {
        icon: checkmark,
        des: `Full Name `,
        des2: `Birth Date`,
        des3: `Address`,
        des4: `UIN`,
        des5: `Document consisting UIN`,
      }
    },
    {
      img: calender1,
      title: "Who Needs To Report?",
      id: 3,
      title2:
        "Over 30 Million entities have to file CTA but there is no defined list yet to decide which companies fall under the criteria every company should be ready to file as when the law goes live the timeline would be really tight to file with FinCEN!",
    },
    {
      img: cta1,
      title: "Deadline to File? ",
      id: 4,
      title2: "After the CTA is incorporated!",
      content: {
        icon: checkmark,
        des: `New Entities: Companies need to file within 14 days of incorporation and annually thereafter to FinCEN.`,
        des2: `Active Companies: Companies incorporated before the CTA became a law will need to submit reporting within a period of one to two years.`,
      }
    },
    {
      img: cta1,
      title: "Penalty for Non-filers? ",
      id: 4,
      content: {
        icon: checkmark,
        des: `A maximum civil penalty of $500 per day (up to $10,000), and`,
        des2: `Imprisonment for up to two years.`,
      }
    },
  ];
  const btnPrev = {};
  return (
    <div className={classes.titleRoot}>
      <Title title="About CTA you need to know" />
      <div className={classes.title}>
        In order to prohibit unethical corporate practices like money laundering
        and terrorism financing, the US is putting regulations into effect. For
        the first time, entities registered at the Secretary of State level will
        be impacted by the Corporate Transparency Act's (CTA) beneficial
        ownership disclosure provisions. Numerous businesses operating in the
        nation will be impacted by these rules. Companies must get ready to
        file!{" "}
      </div>
      <Carousel
        // centerMode={true}
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
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <img src={backward} style={{ marginTop: "8px" }} />,
          style: {
            width: "50px",
            height: "50px",
            border: "none",
            borderRadius: "50%",

            boxShadow:
              "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(94 104 121 / 30%)",

            marginLeft: "40px",
            "@media (max-width: 600px)": {
              margin: 0,
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

            marginRight: "40px",
            "@media (max-width: 600px)": {
              margin: 0,
            },

            boxShadow:
              "-5px -5px 9px rgb(255 255 255 / 45%), 5px 5px 9px rgb(94 104 121 / 30%)",
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
              background: "#CDD8FF",
              display: "none",
            },
          },
          activeItemBtnProps: {
            style: {
              height: 6,
              width: 6,
              borderRadius: "50%",
              border: 0,
              display: "none",
              background: "#0938DF",
            },
          },
        }}
        itemsToShow={3}
        speed={400}
      >
        {list.map((item, index) => (
          <div
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "space-between",
            }}
          >
            <div className={classes.card}>
              <motion.img
                src={item.img}
                alt="Icons"
                whileHover={{ scale: 1.2 }}
              ></motion.img>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className={classes.cardTitle}>{item.title}</p>
                <p
                  className={classes.cardSubTitle2}
                  style={{ marginTop: "-10px" }}
                >
                  {item.title2}
                </p>
              </div>
              <div
                className={classes.cardContent}
              >
                <div style={{display:'flex',flexDirection:'row'}}>
                  <img width='13px' style={{ marginRight: '6px' }} src={item.content?.icon} />
                  <p>{item.content?.des}</p>
                  <p>{item.content?.des2}</p>
                  <p>{item.content?.des3}</p>
                  <p>{item.content?.des4}</p>
                  <p>{item.content?.des5}</p>
                </div>
              </div>


              {/* <div className={classes.cardButton}>Know More </div> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default AboutCta;
