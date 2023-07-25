import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "../../images/client/whatshot_FILL1_wght400_GRAD0_opsz48.svg";
import React from "react";
const useStyle = makeStyles((theme) => ({
  notifications: {
    display: "flex",
    flexDirection: "row",
    marginTop: "30px",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important"
  },
  Notificationimg: {
    marginRight: "10px",
    marginTop: "4px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px !important",
    color: "#06283D !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
  },
  description: {
    fontSize: "10px !important",
    color: "#343434 !important",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
  },
}));
function NotificationItems({ title, desc ,img}) {
  const classes = useStyle();
  return (
    <div className={classes.notifications}>
      <div className={classes.Notificationimg}>
        <img src={Image} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{desc}</Typography>
      </div>
    </div>
  );
}

export default NotificationItems;
