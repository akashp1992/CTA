import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationItems from "./NotificationItems";
import AddIcon from "@mui/icons-material/Add";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  main: {
    float: "right",
    marginTop: "2.6rem",
    margin: "5px",
    marginTop: "75px",
    backgroundColor: "#F8F8F8",
    padding: "10px",
    borderRadius: "5px",
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
  },
  mainnotificationheading: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    marginLeft: "10px !important",
  },
  notificationheadingbody: {
    display: "flex",
    alignItems: "center",
  },
  subchild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  createbtn: {
    marginTop: "15px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    textTransform: "capitalize !important",
    backgroundColor: "#3330E4 !important",
    width: "250px",
    height: "30px",
  },
  addicn: {
    width: "20px !Important",
    marginRight: "4px",
  },
  notfound: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  notfoundText: {
    fontFamily: 'Poppins !important',
    fontSize: '20px !important',
    fontWeight: '700 !important'
  }
}));

const Notification = () => {
  const classes = useStyle();
  const { notificationList } = useSelector(state => state.notification)
  const newNotification = notificationList?.data
  const notificationData = [
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
    {
      title: "CTA file process update ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledF",
    },
  ];
  return (
    <>
      <div className={classes.main}>
        {console.log("notification list", notificationList)}
        <div className={classes.subchild}>
          <div className={classes.notificationheadingbody}>
            <Badge
              overlap="circular"
              variant="standard"
              badgeContent={notificationList.length}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "red",
                  marginRight: "0px",
                  marginTop: "3px",
                  zIndex: "0",
                  height: "15px",
                  fontSize: "10px",
                },
              }}
            >
              <NotificationsNoneOutlinedIcon sx={{ color: "#5D5D5D" }} />
            </Badge>
            <Typography className={classes.mainnotificationheading}>
              Notifications
            </Typography>
          </div>
          {/* <NavLink
            to={`/dashboard/Admin/NewNotification`}
            style={{ textDecoration: "none", display: 'none' }}
          >
            <Button className={classes.createbtn} variant="contained">
              {" "}
              <AddIcon className={classes.addicn} />
              Create New
            </Button>
          </NavLink> */}

          {notificationList.length > 0 ?

            notificationList.map((items, index) => (
              <NotificationItems title={items.title} desc={items.message} />
            ))
            :
            <div className={classes.notfound}>
              <Typography className={classes.notfoundText}>
                Not Found
              </Typography>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Notification;
