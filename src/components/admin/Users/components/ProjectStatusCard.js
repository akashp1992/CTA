import React, { useEffect, useMemo } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as _ from 'radash';
import AddIcon from "@mui/icons-material/Add";
import ProjectCardItems from "./ProjectCardItems";
import { NavLink } from "react-router-dom";
import { styled } from "@stitches/react";

const useStyle = makeStyles((theme) => ({
  main: {
    backgroundColor: "#F8F8F8",
    borderRadius: "5px",
    height: "850px",
  },
  btnbody: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  createbtn: {
    backgroundColor: "#3330E4 !important",
    textTransform: "capitalize !important",
    fontSize: "12px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    display: "flex",
    alignItems: "center",
  },
  cardbody: (props) => {
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: "45px",
      borderTop: "2.5px",
      borderBottom: "0px",
      borderRight: "0px",
      borderLeft: "0px",
      borderStyle: "solid",
      width: '100%',
      
      borderColor: props.variant === "filedetails" ? "#D2D2D2 !important" : "#CB9500",

    }
    // props.variant === "fileDetails" ? "#D2D2D2 !important" : props.variant === "reviewByCta" ? "#CB9500 !important" : props.variant === "sendToFincen" ? "#A04343" : props.variant === "ctaFilled" ? "#1D7503" : "#1D7503",
  },
  cardbody2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "45px",
    borderColor: "#CB9500",
    borderTop: "2.5px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
    width: '100%'
  },
  cardbody3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "45px",
    borderColor: "#A04343",
    borderTop: "2.5px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
    width: '100%'
  },
  cardbody4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "45px",
    borderColor: "#1D7503",
    borderTop: "2.5px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
    width: '100%'
  },
  fileiconstyle: {
    width: "22px",
  },
  title: {
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
  },
  statusnum: {
    border: "1px solid #BEBEBE",
    width: "30px",
    textAlign: "center",
    borderRadius: "12px",
    marginLeft: '10px'
  },
  projectstatuscardbody: {
    marginTop: "50px",
  },
}));

const ProjectStatusCard = ({ heading, amount, variant }) => {
  const classes = useStyle({ variant });
  return (
    <>
      {console.log("variant", variant)}
      {console.log("heaing", heading)}
      <CardArea variant={variant}>
        <CardActionArea>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

              }}
            >
              <Typography className={classes.title}>
                {heading}
              </Typography>
              <div className={classes.statusnum}>
                <Typography
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  {amount}
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </CardArea>
    </>
  );
};

export default ProjectStatusCard;


const CardArea = styled("div", {
  display: "flex",
  flexDirection: "row",
  height: "50px",
  borderTop: "2.5px",
  borderBottom: "0px",
  borderRight: "0px",
  borderLeft: "0px",
  borderStyle: "solid",
  justifyContent: 'center',
  width: '100%',
  background: 'white',
  borderRadius: '4px',
  paddingTop: "-20px",
  boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  variants: {
    variant: {
      fileDetails: {
        borderTopColor: '#D2D2D2 !important',
      },
      reviewByCta: {
        borderColor: '#CB9500 !important',
      },
      sendToFinCen:{
        borderColor:'#A04343 !important',
      },
      ctaFilled:{
        borderColor:'#1D7503 !important'
      }
    },

  }
})