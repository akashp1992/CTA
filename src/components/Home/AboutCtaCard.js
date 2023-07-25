import React, { useState } from "react";
import Slider from "react-slick";
import forward from "../../images/forward.svg";
import backward from "../../images/backward.svg";
import Title from "./Title";
import cta1 from "../../images/cta1.svg";
import file1 from "../../images/file1.svg";
import form1 from "../../images/form1.svg";
import calender1 from "../../images/calender1.svg";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  titleRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
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
    margin: "10px",
    fontFamily: "poppins",
    paddingTop: "10px",
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
  sliderRoot: {},
}));

function Item({ item }) {
  const classes = useStyles();
  const list = [
    {
      img: file1,
      title: "Individuals, who need to file?",
      id: 1,
      des: "<ul><li>Persons with the authority to incorporate at the Secretary of State level</li><li>Beneficial Owners who own or control at least 25% of the company</li></ul>",
    },
    {
      img: form1,
      title: "Required Filing Information",
      id: 2,
      des: "<ul><li>Full Name</li><li>Birth Date</li><li>Address</li><li>UIN</li><li>Document consisting UIN</li></ul>",
    },
    {
      img: calender1,
      title: "Who Needs To Report?",
      id: 3,
      desc: "Over 30 Million entities have to file CTA but there is no defined list yet to decide which companies fall under the criteria every company should be ready to file as when the law goes live the timeline would be really tight to file with FinCEN!",
    },
    // {
    //   img: cta1,
    //   title: "Deadline to File? ",
    //   id: 4,
    //   des: "<ul><li>Active Companies: Companies incorporated before the CTA became a law will need to submit reporting within a period of one to two years.</li><li>New Entities Companies need to file within 14 days of incorporation and annually thereafter to FinCEN</li></ul>",
    //   desc: "After the CTA is incorporated!",
    // },
  ];

  return list.map((list) => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={classes.card}>
        <motion.img
          src={list.img}
          alt="Icons"
          whileHover={{ scale: 1.2 }}
        ></motion.img>
        <p className={classes.cardTitle}>{list.title}</p>
        <p>{list.desc}</p>
        <div
          className={classes.cardContent}
          dangerouslySetInnerHTML={{ __html: list.des }}
        />

        <div className={classes.cardButton}>Know More </div>
      </div>
    </div>
  ));
}
const AboutCtaCard = () => {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
  };
  return (
    <>
      <div className={classes.titleRoot}>
        <Title title="About CTA you need to know" />
        <div className={classes.title}>
          In order to prohibit unethical corporate practices like money
          laundering and terrorism financing, the US is putting regulations into
          effect. For the first time, entities registered at the Secretary of
          State level will be impacted by the Corporate Transparency Act's (CTA)
          beneficial ownership disclosure provisions. Numerous businesses
          operating in the nation will be impacted by these rules. Companies
          must get ready to file!n within one year of any changes.{" "}
        </div>
        <Slider className={classes.sliderRoot} initialSlide={1} {...settings}>
          <Item />
        </Slider>
      </div>
    </>
  );
};

export default AboutCtaCard;
