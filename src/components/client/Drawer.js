import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ListItemIcon,
  Drawer,
  AppBar,
  Toolbar,
  InputBase,
  TextField,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  CssBaseline,
  ScopedCssBaseline,
  ListItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Collapse,
} from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import QuizIcon from "@mui/icons-material/Quiz";
import { makeStyles } from "@mui/styles";
import logo from "../../images/client/CTALogo.svg";
import logo2 from "../../images/client/Icon awesome-monero.svg";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/client/common/profileSlice";
import { useSelector } from "react-redux";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { getFavouriteProject } from "../../redux/client/project/favouriteProjectSlice";
import { doLogout } from "../../redux/auth/logoutSlice";
import inMemoryJwtService from "../../services/inMemoryJwtService";
import projectIcon from "../../images/admin/projectimgBlack.svg"
import projectIconWhite from "../../images/admin/projectimgWhite.svg"
import Notification from "../admin/Notification";

const useStyle = makeStyles((theme) => ({
  menuItem: {
    fontFamily: "Poppins !important",
    color: "#3A3A3A !important",
    fontSize: '14px !important'
  },
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
  hiddenRightSidebar: {
    display: "none",
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
    width: "597px",
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
    flexGrow: 2,
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
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const loc = useLocation();
  const navigate = useNavigate()
  const [size, setSize] = useState(null)
  const [expand, setExpand] = useState(false)
  const pathName = loc.pathname;
  const authUser = useSelector(state => state.login)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleExpand = () => {
    setExpand(!expand)
  }

  const { profileData } = useSelector(state => state.profile)
  const { count } = useSelector(state => state.favourite)

  const info = useMemo(() => ({
    first_name: user.first_name,
    last_name: user.last_name,
  }), [user.first_name, user.last_name])


  //get project length
useEffect(()=>{
  if(localStorage.getItem("isAdmin") ==="true"){
    navigate("/dashboard/Admin/Home")
  }
},[localStorage.getItem("isAdmin")])
  //get profile form api
  useEffect(() => {
    
    const request = {
      onSuccess: (res) => {
        console.log("profile", res.data);
       res.data.map((user)=>{
        setUser(user)
       
       })
      },
      onFail: (err) => {
        console.log("error Profile", err);
        if (err.response.status === 401) {
          localStorage.removeItem("authUser")
          localStorage.setItem("logout", Date.now())
          navigate("/")
        }
      }
    }
    dispatch(getProfile(request))
  }, [, info, count])


  // useEffect(()=>{
  //   if(localStorage.getItem("isRootUser")!== 0)
  //   {
  //     navigate("/dashboard/Home",{replace:true})
  //   }
  // },[localStorage.getItem("isRootUser")])


  useEffect(() => {
    const request = {
      onSuccess: (res) => {
      },
      onFail: (err) => {

      }
    }
    dispatch(getFavouriteProject(request))


  }, [count])
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
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const classes = useStyle();
  const { children } = props;
  const location = useLocation();
  const [active, setActive] = useState(false);
  let CustomListItemButton = ({ to, primary, icons, activeIcons, isVisible, isExpand }) => (
    <>
      {console.log("isuser",user)}
      <ListItemButton
        component={Link}
        to={to}
        onClick={isVisible ? isExpand : ""}
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
        {isVisible ? <ExpandMore /> : ""}
      </ListItemButton>

    </>
  );
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CssBaseline />
        {console.log("callback", count)}
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
              to={`/dashboard/Home`}
              primary="Dashboard"
              activeIcons={<DashboardIcon sx={{ color: "white !important" }} />}
              icons={<DashboardIcon sx={{ color: "#06283D !important" }} />}
            />
            <CustomListItemButton
              tabIndex="1"
              component={Link}
              isVisible={count !== 0 ? true : false}
              isExpand={handleExpand}
              to={`/dashboard/Project`}
              primary="Project"
              activeIcons={<img src={projectIconWhite} alt="" style={{ width: '19px', marginLeft: '2px' }} />}
              icons={<img src={projectIcon} alt="" style={{ width: '19px', marginLeft: '2px' }} />}

            />
            {
              count !== 0 ?
                (<List>
                  <Collapse in={expand} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}
                        component={Link}
                        to={"/dashboard/Favorite"}
                        classes={{
                          selected:
                            "/dashboard/Favorite" === location.pathname ? classes.activeListItem : classes.listItem,
                        }}
                        selected={"/dashboard/Favorite" === location.pathname}

                      >
                        <ListItemIcon>
                          {"/dashboard/Favorite" === location.pathname ? <StarBorder sx={{ color: "white !important" }} /> : <StarBorder sx={{ color: "#06283D !important" }} />}

                        </ListItemIcon>
                        <ListItemText primary="Faviourite" primaryTypographyProps={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          fontWeight: "500 !important",
                        }} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>) :
                ""
            }
            {/* <CustomListItemButton
              component={Link}
              to={`/dashboard/Faq`}
              primary="FAQ's"
              activeIcons={<QuizIcon sx={{ color: "white !important" }} />}
              icons={<QuizIcon sx={{ color: "#06283D !important" }} />}
            /> */}
            <CustomListItemButton
              component={Link}
              to={`/dashboard/BulkUpload`}
              primary="Bulk Upload"
              activeIcons={<NoteAddIcon sx={{ color: "white !important" }} />}
              icons={<NoteAddIcon sx={{ color: "#06283D !important" }} />}
            />
          </List>
          <NavLink style={{ textDecoration: "none", color: '#3A3A3A', fontFamily: "Poppins" }} to="/dashboard/Faq">
            <div className={classes.bottomNav}>
              <h1 className={classes.bottomNavHeading}>
                <SupportAgentIcon />
                Support
              </h1>
            </div>
          </NavLink>
        </Drawer>

        <AppBar elevation={0} className={classes.appbarRoot} >
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
                        <MicIcon sx={{ color: "#06283D" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search something related CTA"
                disableUnderline={true}
              />
            </div>
            <div>

            </div>
            <div className={classes.profile}>
              <NavLink style={{ textDecoration: "none" }} to="/dashboard/Create">
                <PostAddIcon sx={{ color: "#000000", marginRight: '20px', fontSize: '35px', cursor: 'pointer' }} />
              </NavLink>
              <div onClick={handleToggle} style={{ display: "flex", justifyContent: 'flex-end', alignItems: 'center', cursor: 'pointer' }}>
                <img src={logo2} alt="logo" />
                <div className={classes.userInfo}>
                  <Typography
                    color="black"
                    sx={{
                      fontSize: "14px !important",
                      color: "#444444 !important",
                      margin: "0px 5px !important",
                      fontFamily: "Poppins !important",
                      fontWeight: "600 !important",
                    }}
                  >
                    {user.first_name}{" "}{user.last_name}
                  </Typography>
                  <Typography
                    color="black"
                    sx={{
                      fontSize: "10px",
                      color: "#444444",
                      fontFamily: "Poppins !important",
                      fontWeight: "400 !important",
                      margin: "0px 5px",
                    }}
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"

                  >
                    Client
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
                            <NavLink
                              style={{ textDecoration: "none" }}
                              to={`/dashboard/Settings/0`}

                            >
                              {" "}
                              <MenuItem
                                className={classes.menuItem}
                                onKeyDown={handleClose}
                              >
                                Profile Details
                              </MenuItem>
                            </NavLink>
                            <NavLink
                              style={{ textDecoration: "none" }}
                              to={`/dashboard/Settings/1`}
                            >
                              <MenuItem
                                onKeyDown={handleClose}
                                className={classes.menuItem}
                              >
                                Plan and Billing
                              </MenuItem>
                            </NavLink>
                            <NavLink
                              style={{ textDecoration: "none" }}
                              to={`/dashboard/Settings/2`}
                            >
                              <MenuItem
                                className={classes.menuItem}
                                onKeyDown={handleClose}

                              >
                                Team
                              </MenuItem>
                            </NavLink>
                            <NavLink
                              style={{ textDecoration: "none" }}
                              to={`/dashboard/Settings/3`}
                            >
                              <MenuItem
                                onKeyDown={handleClose}
                                className={classes.menuItem}
                              >
                                Security
                              </MenuItem>
                            </NavLink>

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
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>{children}</main>
        <div
          variant="permanent"
          anchor="right"
          className={
            pathName === `/dashboard/Settings/1`
              ? classes.hiddenRightSidebar
              : classes.rightSidebar
          }
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
