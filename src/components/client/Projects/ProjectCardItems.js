import React from "react";
import { makeStyles } from "@mui/styles";
import fileIcon from "../../../images/client/projectimg.svg";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Grid from "@mui/material/Grid";
import UserModal from "../modals/UserModal";
import { useState } from "react";
import { useCallback } from "react";
import { AddFavouriteProject } from "../../../redux/client/project/favouriteProjectSlice";
import Toast from "../Common/Toast";
import { useDispatch } from "react-redux";
import RightDrawer from "../Common/RightDrawer";
import { toogleSnackbar } from "../../../redux/client/common/snackbarSlice";
const useStyle = makeStyles((theme) => ({
  cardbody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",

    // margin: "12px 12px 15px 12px",
  },
  fileiconstyle: {
    width: "22px",
  },
  title: {
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    margin: "auto !important",
  },
  starIcon: {
    position: "absolute",
    top: "2px",
    right: "5px",
    width: "18px !important",
  },
}));
const ProjectCardItems = ({ text, items, projectId }) => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("")
  const dispatch = useDispatch()
  const [toastOpen, setToastOpen] = useState(false)
  const [type, setType] = useState("")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerOpen = (isOpen) => {
    setDrawerOpen(isOpen)
  }
  const onHandleClick = useCallback((open, title) => {
    setOpen(open);
    setTitle(title);
    console.log("open modal");
  });

  const [isHover, setIsHover] = useState(false)
  const handleAddClick = () => {
    { console.log("projectId", projectId); }
    const request = {
      data: {
        project_id: projectId,
        status: 1
      },
      onSuccess: (res) => {
        setToastOpen(true)
        setType("success")
        setMsg(res.message)
        dispatch(toogleSnackbar({ open: true,  type: "success",
        msg: res.message}))
        //console.log("res remove project", res.message);
      },
      onFail: (err) => {
        setToastOpen(true)
        setType("error")
        setMsg(err.message)
        console.log("err remove project", err);
      }
    }
    dispatch(AddFavouriteProject(request))

  }
  return (
    <>
      <Card className={classes.cardbody} >
        <CardActionArea>
          <CardContent >
            <div style={{ display: 'flex', flexDirection: 'column' }} onClick={() => handleDrawerOpen(true)}>
              <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img src={fileIcon} className={classes.fileiconstyle} />
                <Typography className={classes.title}>{text}</Typography>
              </div>
              <div style={isHover ? { transition: "all 0.9s ease-in-out", transform: "translate(0%, 30%)", display: 'flex', flexDirection: 'column' } : {}}>
                {
                  isHover ?

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{ fontFamily: 'Poppins', fontWeight: '700' }}>TIN / EIN Number</p>
                      <p>{items.tin_ein_number === null ? items.foreign_tin_ein_number : items.tin_ein_number}</p>
                    </div>
                    : ""
                }
              </div>
            </div>

          </CardContent>
          <div onClick={() => { handleAddClick(); onHandleClick(false, text); handleDrawerOpen(false) }}>
            <StarBorderOutlinedIcon className={classes.starIcon} />
          </div>
        </CardActionArea>

      </Card>

      {/* {open && <UserModal closeModal={setOpen} title={title} items={items} />} */}
      {/* <Toast open={toastOpen} msg={msg} type={type} handleClose={() => setToastOpen(false)} /> */}
      {<RightDrawer open={drawerOpen} setDrawerOpen={setDrawerOpen} title={title} items={items} />}
    </>
  );
};
export default ProjectCardItems;
