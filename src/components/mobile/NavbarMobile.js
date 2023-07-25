import React, { useState } from "react";
import navLogo from "../../images/New icon/CTAlogoShield.svg"
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from 'react-scroll'

import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';
import FormDialog from "../Login/FormDialog";
import LoginDialog from "../Login/LoginDialog";
import { useDispatch } from "react-redux";
import { toogleSnackbar } from "../../redux/client/common/snackbarSlice";
import Swal from "sweetalert2";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
  },
  activeLink: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "black",
  },
}));

function NavbarMobile() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathName = useLocation().pathname;
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const theme = useTheme()
  const dispatch = useDispatch()
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleClickLoginOpen = () => {
    if (isTablet) {
      Swal.fire(
        'Currently your CTAF dashboard is accessible just on Desktop Version!',
        'We will soon launch on other devices and you will be first one to know :)',
        'success'
      )
      setOpenDrawer(false)
      setLoginOpen(false)
    } else {
      setLoginOpen(true)
    }
  }

  const handleLoginClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLoginOpen(false);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Drawer
        open={openDrawer}
        anchor="top"
        onClose={() => setOpenDrawer(false)}
        style={{}}
      >

        <div style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: "center", flexDirection: 'column', justifyContent: "center" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '10px' }}>
            <img src={navLogo} alt="logo" style={{ width: "50px", height: '50px' }} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px', alignItems: 'center' }}>
              <PersonAddAltIcon onClick={() => handleClickOpen()} /> / <LoginIcon onClick={() => handleClickLoginOpen()} />
            </div>
            <div onClick={() => setOpenDrawer(false)}>
              <CloseIcon />
            </div>
          </div>
          <div style={{ margin: '10px', marginTop: '10px' }} onClick={() => setOpenDrawer(false)}>
            <NavLink to={`/`} className={pathName === "/" ? classes.activeLink : classes.link}>
              Home
            </NavLink>
          </div>
          <div style={{ margin: '10px', marginTop: '10px' }} onClick={() => setOpenDrawer(false)}>
            <NavLink to={`/about`} className={pathName === "/about" ? classes.activeLink : classes.link}>
              About
            </NavLink>
          </div>
          <div style={{ margin: '10px', marginTop: '10px' }} onClick={() => setOpenDrawer(false)}>
            <NavLink to={`/calculate`} className={pathName === "/calculate" ? classes.activeLink : classes.link}>
              Eligibility
            </NavLink>
          </div>
          <div style={{ margin: '10px', marginTop: '10px' }} onClick={() => setOpenDrawer(false)}>
            <Link to={`faq`} className={pathName === "faq" ? classes.activeLink : classes.link}>
              FAQs
            </Link>
          </div>
          <div style={{ margin: '10px', marginTop: '10px' }} onClick={() => setOpenDrawer(false)}>
            <NavLink to={`/support`} className={pathName === "/support" ? classes.activeLink : classes.link}>
              Support
            </NavLink>
          </div>
          <div style={{ margin: '10px', marginTop: '10px' }} onClick={() => setOpenDrawer(false)}>
            <NavLink to={`/blogs`} className={pathName === "/blogs" ? classes.activeLink : classes.link}>
              Blogs
            </NavLink>
          </div>
        </div>
        {/* <List style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: "center", flexDirection: 'column', justifyContent: "center" }}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to={`/`} className={classes.link}>
                Home
              </NavLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to={`/about`} className={classes.link}>
                About
              </NavLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to={`/calculate`} className={classes.link}>
                Contact
              </NavLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <a to="/about" className={classes.a}>
                Faq
              </a>
            </ListItemText>
          </ListItem>
          <Divider />
        </List> */}
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon color="black" />
      </IconButton>

      <FormDialog
        open={open}
        close={handleClose}
      />
      <LoginDialog
        open={loginOpen}
        close={handleLoginClose}

      />
    </>

  );
}
export default NavbarMobile;
