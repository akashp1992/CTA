import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardItems from "./CardItems";
import { useDispatch } from "react-redux";
import { getAllProjects } from "../../../redux/client/dashboard/allProjectSlice";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  projectbody: {
    width: "100%",
    boxShadow: "0px 2px 2px #80808059",
    marginTop: "50px",
    borderRadius: "6px",
    marginLeft: '10px',
    paddingBottom: "25px",
    height: "100%"
  },
  title: {
    fontSize: "16px !important",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    margin: "15px !important",
    paddingTop: "15px",
  },
}));

const AllProjects = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [project, setProject] = useState([])
  const { profileData } = useSelector(state => state.profile)
  useEffect(() => {
    const request = {
      onSuccess: async (res) => {
        console.log("all projects", res.data);
        setProject(res.data)
      },
      onFail: async (error) => {
        console.log("all projects", error);
      }

    }
    dispatch(getAllProjects(request))
  }, [profileData])


  return (
    <div className={classes.projectbody}>
      <Typography className={classes.title}>All Projects</Typography>
      {/* <div className={classes.allprojectbody}> */}

      {/* </div> */}
      <Grid container spacing={4}>

        {
          project.filter(user => user.created_by === profileData.id).map((items, index) =>
          (
            <Grid item lg={3} md={4} sm={4}>

              <CardItems projectId={`CTA${items?.uuid?.slice(0, 4)}`} key={index} items={items} />
            </Grid>
          )
          )
        }

      </Grid>

    </div>
  );
};

export default AllProjects;
