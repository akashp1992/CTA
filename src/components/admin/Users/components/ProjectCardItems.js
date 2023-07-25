import React from "react";
import { makeStyles } from "@mui/styles";
import fileIcon from "../../../../images/admin/projectimg.svg";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useState } from "react";
import { useCallback } from "react";
import UserModal from "../modals/UserModal";
import RightDrawer from "../../../client/Common/RightDrawer";

const useStyle = makeStyles((theme) => ({
  cardbody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: '100%',

    // margin: "12px 12px 15px 12px",
  },
  fileiconstyle: {
    width: "22px",
  },
  title: {
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    margin: 'auto !important'
  },
  starIcon: {
    position: 'absolute',
    top: '2px',
    right: '5px',
    width: '18px !important'
  }
}));
const ProjectCardItems = ({ text, items, projectId }) => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const onHandleClick = useCallback((open, title) => {
    setOpen(open);
    setTitle(title);
    console.log("open")
  })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerOpen = (isOpen) => {
    setDrawerOpen(isOpen)
  }
  const [isHover, setIsHover] = useState(false)
  return (
    <>
      <Card className={classes.cardbody} onClick={() => handleDrawerOpen(true)}>
        <CardActionArea>
          <CardContent>
            <div
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

              }}
            >
              <img src={fileIcon} className={classes.fileiconstyle} />
              <Typography className={classes.title}>{text}</Typography>
              {/* <StarBorderOutlinedIcon className={classes.starIcon} /> */}
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

          </CardContent>
          <div onClick={() => { onHandleClick(false, text); handleDrawerOpen(false) }}>
            <StarBorderOutlinedIcon className={classes.starIcon} />
          </div>
        </CardActionArea>
      </Card>
      {
        <RightDrawer open={drawerOpen} isAdmin={true} setDrawerOpen={setDrawerOpen} title={title} items={items} />
      }
    </>
  );
};

export default ProjectCardItems;
