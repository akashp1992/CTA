import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Typography } from "@mui/material";
import add from "../../../images/admin/add.svg";
import searchIcn from "../../../images/admin/searchIcn.svg";
import PlanListingData from "./PlanListingData";
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
    width: "342px !important",
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
  },
  CreateTeam: {
    background: "#3330E4 !important",
    width: "164px !important",
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
  search: {},
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '342px !important', height: "36px!important",
    borderRadius: '5px !important',
    border: '1px solid #D9D9D9 !important',
  },
  searchText: {
    fontFamily: 'Poppins !important',
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "18px !important",
    color: "#404446 !important",
    outline:'0 !important',
    border:'none',
    width:'100%'
   
  },
}));

function PlanListing() {
  const classes = usestyles();
  const [inputText, setInputText] = React.useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <div className={classes.errorDataMain}>
        <Container>
          <div className={classes.CreateTeambar}>
            <div className={classes.searchbar}>
              <Typography className={classes.ErrorTitle}>Users</Typography>
              <div className={classes.search}>
        
              <div className={classes.searchBox}  >
                <img src={searchIcn} style={{paddingLeft:"15px"}}/>
                <input className={classes.searchText} placeholder="Search..." onChange={inputHandler} />
              </div>
            </div>
            </div>
            <div>
              {/* <TeamModel /> */}
              <NavLink
                to={`/dashboard/Admin/CreatePlan`}
                style={{ textDecoration: "none" }}
              >
                <Button className={classes.CreateTeam}>
                  <div className={classes.addProject}>
                    <img src={add} />
                    <Typography className={classes.buttonText}>
                      Create New Plan
                    </Typography>
                  </div>
                </Button>
              </NavLink>
            </div>
          </div>
          <div>
            <PlanListingData  input={inputText}/>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PlanListing;
