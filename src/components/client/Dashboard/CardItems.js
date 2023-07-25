import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import fileIcon from "../../../images/client/projectimg.svg";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
import RightDrawer from "../Common/RightDrawer";
const useStyle = makeStyles((theme) => ({
  cardbody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    // margin: "12px 12px 15px 12px",
  },
  slide: {
    transition: "0.5s",
    height: "50px !important",

  },
  slide1: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    transition: '.7s',
    transform: 'translateY(100px)'
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
const CardItems = ({ projectId, isFilled, items }) => {
  const classes = useStyle();
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen)
  }

  const textMotion = {
    rest: {
      x: 0,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {

      x: 30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  }

  const slashMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };

  const [isHover, setIsHover] = useState(false)

  const handleHover = () => {
    setIsHover(true)
  }

  return (
    <>
      <Container >

        <Card className={classes.cardbody} onClick={handleDrawerOpen}>
          <CardActionArea >
            <CardContent >
              <div style={{ display: 'flex', flexDirection: 'column' }} >
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
          </CardActionArea>
        </Card>
      </Container>
      {console.log("mydata",items)}
      <RightDrawer setDrawerOpen={setDrawerOpen} open={drawerOpen} items={items} title={"hello"} />
    </>
  );
};
export default CardItems;
