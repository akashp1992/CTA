import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardItems from "./CardItems";
import { useDispatch } from "react-redux";
import { getAllProjectsAdmin } from "../../../redux/admin/dashboard/allProjectSlice";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  projectbody: {
    width: "100%",
    boxShadow: "0px 2px 2px #80808059",
    marginTop: "50px",
    borderRadius: "6px",
    marginLeft: '10px',
    paddingBottom: "25px"
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
    dispatch(getAllProjectsAdmin(request))
  }, [profileData])
  const [itemsToShow, setItemsToShow] = useState(4)
  const showmore = () => {
    setItemsToShow(itemsToShow + 4)
  }

  const showless = () => {
    setItemsToShow(itemsToShow - 4)
  }
  return (
    <div className={classes.projectbody}>
      <Typography className={classes.title}>All Projects</Typography>
      {/* <div className={classes.allprojectbody}> */}

      {/* </div> */}
      <Grid container spacing={4}>

        {
          project.slice(0, itemsToShow).map((items, index) => (
            <Grid item lg={3} md={4} sm={4}>
              <CardItems projectId={`CTA${items.uuid.slice(0, 4)}`} key={index} />
            </Grid>
          ))
        }

      </Grid>
      {itemsToShow < project.length ? <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'center', alignItems: 'center', width: '100%' }}><Button style={{ fontFamily: 'Poppins', fontWeight: '500', textTransform: 'none' }} onClick={showmore}>View More</Button></div> : ""}
    </div>
  );
};

export default AllProjects;
