import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, TextField, Typography } from "@mui/material";
import SelectMember from '../Team/SelectMember'
import { NavLink } from "react-router-dom";
import add from "../../../images/admin/add.svg";
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

  form: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    justifyContent: "space-between",
  },
  CreateTeam: {
    background: "#3330E4 !important",

    height: "40px !important",

  },
  addProject: {
    display: "flex !important",
    gap: "6px",
  },
  buttonText: {
    fontSize: "14px !important",
    color: "#fff",
    textTransform: "initial !important",
    fontFamily: "poppins !important",
  },

}));

const CreateTeamForm = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.main}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className={classes.usertitle} >Create Team</Typography>
            <div style={{ paddingTop: "20px", }}>

              {/* <Button className={classes.CreateTeam}>
                <div className={classes.addProject}>
                  <img src={add} alt="add" />
                  <NavLink
                    to={`/dashboard/Admin/CreateTeamMember`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography className={classes.buttonText}>
                      {" "}
                      Create New Member{" "}
                    </Typography>
                  </NavLink>
                </div>
              </Button> */}
            </div>
          </div>
          <div className={classes.form}>
            <div style={{ width: '100%' }}>
              <SelectMember />
            </div>

          </div>


        </Container>
      </div>
    </>
  );
};

export default CreateTeamForm;
