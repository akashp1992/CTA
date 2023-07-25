import React, { useEffect, useState } from "react";
import {
  ListItemIcon,
  Drawer,
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  CssBaseline,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Paper,
  Grow,
  Popper,
} from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { makeStyles } from "@mui/styles";
import logo from "../../images/admin/CTALogo.svg";
import projectIcon from "../../images/admin/projectimgBlack.svg"
import projectIconWhite from "../../images/admin/projectimgWhite.svg"
import logo2 from "../../images/admin/Icon awesome-monero.svg";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import Notification from "./Notification";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ErrorIcon from "@mui/icons-material/Error";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentsIcon from "@mui/icons-material/Payments";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import GroupIcon from '@mui/icons-material/Group';
import Chatbot from "./chatBot/Chatbot";
import inMemoryJwtService from "../../services/inMemoryJwtService";

const useStyle = makeStyles((theme) => ({
  sideDrawer: {
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    width: "200px",
    background: "#F7F7F7",
  },
  rightSidebar: {
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    width: "300px",
    background: "#FFF",
  },
  avatarLogo: {
    marginTop: "10px",
  },
  bottomNavHeading: {
    fontSize: "18px",
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins !important",
    fontWeight: "400",
  },
  bottomNav: {
    display: "flex",
    flexDirection: "row",
  },
  searchBar: {
    width: "100%",
    boxShadow: "0px",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
  search: {
    background: "white",
    border: "1px solid #06283D !important",
    padding: "5px",
    borderRadius: "15px !important",
    width: "497px",
    height: "40px",
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "12px",
    width: "50%",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    padding: "75px 24px 0px 24px",
  },
  appbarRoot: {
    display: "flex",
    justifyContent: "center !important",
    justifyContent: "right",
    width: "100%",
    zIndex: "1 !important",
  },
  activeListItem: {
    background: "#3330E4 !important",
    color: "white !important",
  },
  listItem: {
    background: "white !important",
  },
  listActiveText: {
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    color: "#070707 !important",
  },
  listText: {
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    color: "#FFFFFF !important",
  },
  listicon: {
    color: "#06283D !important",
  },
  activelisticon: {
    color: "white !important",
  },
}));
const Sidebar = (props) => {
  const classes = useStyle();
  const { children } = props;
  const location = useLocation();
  const anchorRef = React.useRef(null);
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [open, setOpen] = useState(false)
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleLogout = () => {
    setOpen(false)
    // const request = {
    //   onSuccess: (res) => {
    //     console.log("logout", res);
    //   },
    //   onFail: (err) => {
    //     console.log("logout err", err);
    //   }
    // }
    // dispatch(doLogout(request))
    localStorage.removeItem('authUser')
    inMemoryJwtService.deleteToken()
    navigate("/", { replace: true })
  }
  
  useEffect(()=>{
    if(localStorage.getItem("isAdmin") ==="false"){
      navigate("/dashboard/Home")
    }
  },[localStorage.getItem("isAdmin")])
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  let CustomListItemButton = ({ to, primary, icons, activeIcons }) => (
    <ListItemButton
      component={Link}
      to={to}
      classes={{
        selected:
          to === location.pathname ? classes.activeListItem : classes.listItem,
      }}
      selected={to === location.pathname}
    >
      <ListItemIcon>
        {to === location.pathname ? activeIcons : icons}
      </ListItemIcon>
      <ListItemText
        className={
          to === location.pathname ? classes.listText : classes.listActiveText
        }
        primaryTypographyProps={{
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: "500 !important",
        }}
        primary={primary}
      />
    </ListItemButton>
  );
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={classes.sideDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
              background: "#F7F7F7",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: "0",
            },
          }}
        >
          <div className={classes.avatarLogo}>
            <img src={logo} alt="logo" style={{ width: '130px', height: '130px' }} />
          </div>
          <List>
            <CustomListItemButton
              component={Link}
              to={`/dashboard/Admin/Home`}
              primary="Dashboard"
              activeIcons={<DashboardIcon sx={{ color: "white !important" }} />}
              icons={<DashboardIcon sx={{ color: "#06283D !important" }} />}
            />
            <CustomListItemButton
              tabIndex="1"
              component={Link}
              to={`/dashboard/Admin/Project`}
              primary="Project"
              activeIcons={<img src={projectIconWhite} alt="" style={{ width: '19px', marginLeft: '2px' }} />}
              icons={<img src={projectIcon} alt="" style={{ width: '19px', marginLeft: '2px' }} />}
            />
            <CustomListItemButton
              component={Link}
              to={`/dashboard/Admin/Errors`}
              primary="Errors"
              activeIcons={<ErrorIcon sx={{ color: "white !important" }} />}
              icons={<ErrorIcon sx={{ color: "#06283D !important" }} />}
            />
            <CustomListItemButton
              component={Link}
              to={`/dashboard/Admin/Teams`}
              primary="Teams"
              activeIcons={<GroupsIcon sx={{ color: "white !important" }} />}
              icons={<GroupsIcon sx={{ color: "#06283D !important" }} />}
            />
            <CustomListItemButton
              component={Link}
              to={`/dashboard/Admin/Users`}
              primary="Users"
              activeIcons={<GroupIcon sx={{ color: "white !important" }} />}
              icons={<GroupIcon sx={{ color: "#06283D !important" }} />}
            />
            <CustomListItemButton
              component={Link}
              to={`/dashboard/Admin/Groups`}
              primary="Groups"
              activeIcons={<GroupIcon sx={{ color: "white !important" }} />}
              icons={<GroupIcon sx={{ color: "#06283D !important" }} />}
            />
          </List>
          <div
            className={classes.bottomNav}
            onClick={() => setOpenChat(!openChat)}
          >
            <h1 className={classes.bottomNavHeading}>
              <SupportAgentIcon />
              Support
            </h1>
          </div>
        </Drawer>

        <AppBar elevation={0} className={classes.appbarRoot}>
          <Toolbar sx={{ backgroundColor: "#FFFFFF" }}>
            <div className={classes.searchBar}>
              <TextField
                variant="standard"
                InputProps={{
                  className: classes.search,
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon sx={{ color: "#C7C9C9" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <MicNoneOutlinedIcon sx={{ color: "#06283D" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search something related CTA"
                disableUnderline={true}
              />
            </div>
            <div className={classes.profile}>
              <img src={logo2} alt="logo" />
              <div className={classes.userInfo} onClick={handleToggle}>
                <Typography
                  color="black"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#444444",
                    margin: "0px 5px",
                    fontFamily: "Poppins",
                    cursor:"pointer"
                  }}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  ref={anchorRef}
                >
                  Admin
                </Typography>
              </div>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                onClose={handleClose}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-left"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList

                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}

                        >
                          <MenuItem
                              onClick={handleLogout}

                              className={classes.menuItem}
                            >
                              Logout
                            </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          {children}{" "}
          {/* <div style={{ display: openChat ? "" : "none" }}>
            <Chatbot />
          </div> */}
        </main>

        <div
          variant="permanent"
          anchor="right"
          className={classes.rightSidebar}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
              background: "white",
              alignItems: "center",
              borderWidth: 0,
            },
          }}
        >
          <Notification />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
