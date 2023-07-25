import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  cardbody: {
    borderRadius: "10px",
    display: "block",
    // width: "100%",
    margin: "auto 8px",
    filter:'drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 0px rgba(-48, 10, 62, -0.75))'
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cardheadingbody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap:'4px'
  },
  title: {
    fontSize: "12px !important",

    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    color: "#3A3A3A !important"
  },
  pendingtitle: {
    fontSize: "60px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    color: "#06283D !important"
  },
  pendingdesc: {
    fontSize: "11px !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    color: "#3A3A3A !important"
  }
}));
const StatusCard = ({ title, desc, digit, icon }) => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.cardbody}>
        <Card>
          <CardActionArea>
            <CardContent >
              <div className={classes.card}>
                <div className={classes.cardheadingbody}>
                  <img src={icon} />
                  <Typography className={classes.title}>{title}</Typography>
                </div>
                <div>
                  <Typography className={classes.pendingtitle}>{digit}</Typography>
                </div>
                <div>
                  <Typography className={classes.pendingdesc}>{desc}</Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default StatusCard;
