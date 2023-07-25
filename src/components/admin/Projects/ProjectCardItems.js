import React from "react";
import { makeStyles } from "@mui/styles";
import fileIcon from "../../../images/admin/projectimg.svg";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Grid from "@mui/material/Grid";

const useStyle = makeStyles((theme) => ({
  cardbody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width:'100%',

    // margin: "12px 12px 15px 12px",
  },
  fileiconstyle: {
    width: "22px",
  },
  title: {
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
  },
}));
const ProjectCardItems = ({text}) => {
  const classes = useStyle();
  return (
    <>
     
        <Card className={classes.cardbody} >
          <CardActionArea>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img src={fileIcon} className={classes.fileiconstyle} />
                <Typography className={classes.title}>{text}</Typography>
                <StarBorderOutlinedIcon />
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
    
    </>
  );
};

export default ProjectCardItems;
