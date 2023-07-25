import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Typography } from "@mui/material";
import add from "../../../images/admin/add.svg";
import searchIcn from "../../../images/admin/searchIcn.svg";
import TeamList from "./TeamList";
import { NavLink } from "react-router-dom";


const usestyles = makeStyles((theme) => ({
  CreateTeambar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "40px",
  },
  searchbar: {
    display: "flex",
    alignItems: "center",
    gap: "35px",
  },
  ErrorTitle: {
    color: "06283D !important",
    textAlign: "left !important",
    fontFamily: "Poppins !important",
    fontSize: "20px !important",
    fontWeight: "600 !important",
  },
  search: {},
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    width: "300px !important",
    height: "36px!important",
    borderRadius: "5px !important",
    border: "1px solid #D9D9D9 !important",
  },
  searchText: {
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "18px !important",
    color: "#404446 !important",
    outline: "0 !important",
    border: "none",
    width: "100%",
  },
  CreateTeam: {
    background: "#3330E4 !important",
    width: "160px !important",
    height: "40px !important",
  },
  addProject: {
    display: "flex !important",
    gap: "6px",
    justifyContent:'space-between'
  },
  buttonText: {
    fontSize: "12px !important",
    color: "#fff",
    textTransform: "initial !important",
    fontFamily: "poppins !important",
  },
}));

function CreateTeam(props) {
  const [inputText, setInputText] = React.useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const classes = usestyles();

  return (
    <div>
      <div className={classes.errorDataMain}>
        <Container>
          <div className={classes.CreateTeambar}>
            <div className={classes.searchbar}>
              <Typography className={classes.ErrorTitle}>Teams</Typography>
              <div className={classes.search}>
                <div className={classes.searchBox}>
                  <img src={searchIcn} style={{ paddingLeft: "15px" }} />
                  <input
                    className={classes.searchText}
                    placeholder="Search..."
                    onChange={inputHandler}
                  />
                </div>
              </div>
            </div>
            <div>
            <Button className={classes.CreateTeam}>
                <div className={classes.addProject}>
                  <img src={add} alt="add" />
                  <NavLink
                    to={`/dashboard/Admin/CreateTeamMember`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography className={classes.buttonText}>
                      {" "}
                      Create Member{" "}
                    </Typography>
                  </NavLink>
                </div>
              </Button>
            </div>
            <div>
          
              <Button className={classes.CreateTeam}>
                <div className={classes.addProject}>
                  <img src={add} />
                  <NavLink
                    to={`/dashboard/Admin/CreateTeamForm`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography className={classes.buttonText}>
                      {" "}
                      Create Team{" "}
                    </Typography>
                  </NavLink>
                </div>
              </Button>
            </div>
          </div>
          <div>
            {/* <List /> */}
            <TeamList input={inputText} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CreateTeam;
