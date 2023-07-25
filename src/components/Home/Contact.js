import React from "react";
import ContactForm from "../data/contactForm";
import Groups from "../../images/Groups.svg";
import { makeStyles } from "@mui/styles";
import { TypeText } from "@mui/material";
import Title from "./Title";

const useStyle = makeStyles((theme) => ({
  divRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleRoot: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  typoTitle: {
    fontSize: "46px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
    margin: "10px !important",
  },
  subTitle: {
    fontFamily: "Poppins regular !important",
    fontWeight: "regular !important",
    color: "#00323A",
    margin: "10px !important",
    fontSize: "15px !important",
  },
  formRoot: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: "60px",
  },
  formLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    width: "70%",
  },
  formRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "25%",
  },
}));

function Contact() {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.divRoot}>
        <div className={classes.titleRoot}>
          <Title title="We Are Here To Help" />
          <p className={classes.title}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={classes.formRoot}>
          <div className={classes.formLeft}>
            <img src={Groups} alt="img" className={classes.image} />
          </div>
          <div className={classes.formRight}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
