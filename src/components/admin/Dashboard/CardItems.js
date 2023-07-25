import React from "react";
import { makeStyles } from "@mui/styles";
import fileIcon from "../../../images/admin/projectimg.svg";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
const useStyle = makeStyles((theme) => ({
  cardbody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // margin: "12px 12px 15px 12px",
  },
  fileiconstyle: {
    width: "22px",
  },
  title: {
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    marginRight: "30px !important",
    textTransform: 'uppercase !important'
  },
  startIcn: {
    position: "absolute",
    width: "18px !important",
    right: "0",
    top: "0",
    marginRight: "2px",
  },
}));
const CardItems = ({ projectId, isFilled }) => {
  const classes = useStyle();
  return (
    <>
      <Container>

        <Card className={classes.cardbody}>
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
                <img src={fileIcon} className={classes.fileiconstyle} />&nbsp;&nbsp;&nbsp;
                <Typography className={classes.title}>
                  {projectId}
                </Typography>
                {
                  isFilled ?
                    <StarIcon sx={{ color: "#3330E4" }} className={classes.startIcn} />
                    :
                    <StarBorderOutlinedIcon className={classes.startIcn} />

                }
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

      </Container>
    </>
  );
};
export default CardItems;
