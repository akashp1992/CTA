import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import {
  AppBar,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import mobileLogo from "../images/logo.svg";
import NavbarMobile from "../components/mobile/NavbarMobile";
import FormDialog from "./Login/FormDialog";
import logo from "../images/CTALogo2.svg";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "./FreezeBanner/FreezBanner";
import { Link } from 'react-scroll'
import FreezBanner from "./FreezeBanner/FreezBanner";
import LoginDialog from "./Login/LoginDialog";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../redux/auth/logoutSlice";
import useToken from "./common/useToken";
import { EncryptStorage } from "encrypt-storage";
const useStyle = makeStyles((theme) => ({
  appBar: {
    background: "white !important",
    color: "black",
  },
  appBarHome: {
    background: "transparent !important",
    color: "black",
  },
  navlinks: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    cursor: "pointer",
    marginLeft: "129px",
    float: "left",
    // [theme.breakpoints.down('md')]: {
    //     marginLeft: '40px'
    // }
  },
  link: {
    textDecoration: "none",
    color: "#333333",
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "15px",
    marginLeft: "30px",
  },
  titleRoot: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    marginLeft: 100,
    [theme.breakpoints.up(901)]: {
      marginLeft: 50,
      width: "30%",
    },
  },
  title: {
    margin: "10px !important",
    fontFamily: "Poppins !important",
    fontSize: "15px !important",
    color: "#06283D !important",
    textDecoration: "none",
    fontWeight: "500 !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "10px !important",
    },
  },
  titleSign: {
    margin: "5px !important",
    fontFamily: "Poppins !important",
    fontSize: "15px !important",
    color: "#06283D !important",
    fontWeight: "500 !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "10px !important",
    },
  },
  menuButton: {
    marginRight: 100,
    display: "flex",
    flexDirection: "row",
    fontFamily: "Poppins ragular",
    fontSize: "20px",
    cursor: "pointer",
    alignItems: "start",
    paddingTop: "8px !important",
    [theme.breakpoints.down(901)]: {
      fontSize: "8px !important",
    },
  },
  activePath: {
    margin: "10px !important",
    fontFamily: "Poppins !important",
    fontSize: "15px !important",
    color: "#06283D !important",
    fontWeight: "bold !important",
    textDecoration: "none",
  },
  logo: {
    cursor: "pointer",

    float: "left",
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
      alignItems: "center",
      width: "20px",
    },
  },
  mainAppBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    background: "transparent !important",
    zIndex: "10",
    paddingTop: "12px",
    height: "70px",
  },
  mainAppBarMin: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    background: "transparent !important",
    zIndex: "10",
    height: "70px !important",
    borderBottom: "1px solid rgb(218, 218, 218)",
  },
  menuActive: {
    fontFamily: "Poppins !important",
    fontSize: "11px !important",
    color: "#FFFFFF !important",
    fontWeight: "bold !important",
    background: "#3330E4",
    textDecoration: "none",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    boxShadow: "rgb(22 21 21 / 11%) 0px 5px 15px",
    height: "30px",
    marginTop: "-10px",
    textDecoration: "none",
  },
  menuBtn: {
    fontFamily: "Poppins !important",
    fontSize: "11px !important",
    color: "#06283D !important",

    textDecoration: "none",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",

    textAlign: "center",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    boxShadow: "rgb(22 21 21 / 11%) 0px 5px 15px",
    height: "30px",
    marginTop: "-10px",
    textDecoration: "none",
  },
  logoStyle: {
    left: "-142px",
    position: "relative",
    width: "150px",
    [theme.breakpoints.between(901, 1140)]: {
      left: "-50px",
    },
  },
}));

function NavBar() {
  const classes = useStyle();
  const pathName = useLocation().pathname;
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [status, setStatus] = useState(false)
  const [userAuth, setUserAuth] = useState(false)
  const dispatch = useDispatch();
  const isUser = localStorage.getItem('authUser');
  const user = Date.now()
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);


  // const { token, setToken } = useToken()
  // const encryptStorage = new EncryptStorage('ramlalsebachkerahe', { storageType: 'sessionStorage' })

  useEffect(() => {

    const userAuth = JSON.parse(localStorage.getItem('authUser'))
    if (!userAuth) {
      return
    } else {
      setStatus(userAuth)
    }
  }, [status, navigate, userAuth])

  const scrolled = () => scrollY > 40;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickLoginOpen = () => {
    setLoginOpen(true)
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

  const handleClickLogout = () => {
    localStorage.setItem('authUser', false)
    localStorage.setItem('logout', Date.now)
   // window.location.reload(false)
    const request = {
      onSuccess: async () => {

      }
    }
    dispatch(doLogout(request))
  }

  const handleRedirect = () => {
    let path = `/landing`;
    navigate(path);
  };

  return (
    <>
      {console.log("status web", status)}
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              className={classes.logo}
              style={{ width: "20%" }}
            />
            <NavbarMobile />
          </div>
        ) : (
          <div
            className={scrolled() ? classes.mainAppBarMin : classes.mainAppBar}
          >
            <div className={classes.titleRoot}>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to={`/`}
                  className={
                    pathName === `/` ? classes.menuActive : classes.menuBtn
                  }
                >
                  Home
                </NavLink>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to={`/about`}
                  className={
                    pathName === `/about` ? classes.menuActive : classes.menuBtn
                  }
                >
                  About
                </NavLink>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to={`/calculate`}
                  className={
                    pathName === `/calculate`
                      ? classes.menuActive
                      : classes.menuBtn
                  }
                  style={{ marginRight: "10px" }}
                >
                  {" "}
                  Eligibility
                </NavLink>
              </Typography>

              <Link
                to="faq"
              >

                <Typography

                  variant="h6"
                  className={classes.menuBtn}
                  style={{ marginRight: "20px" }}
                >
                  FAQs
                </Typography></Link>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to={`/support`}
                  className={
                    pathName === `/support`
                      ? classes.menuActive
                      : classes.menuBtn
                  }
                  style={{ marginRight: "10px" }}
                >
                  {" "}
                  Support
                </NavLink>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to={`/blogs`}
                  className={
                    pathName === `/blogs`
                      ? classes.menuActive
                      : classes.menuBtn
                  }
                  style={{ marginRight: "10px" }}
                >
                  {" "}
                  Blogs
                </NavLink>
              </Typography>
            </div>

            <div>
              {scrolled() ? (
                <img src={logo} className={classes.logoStyle} />
              ) : pathName !== "/" ? (
                <img src={logo} className={classes.logoStyle} />
              ) : (
                <img
                  src={logo}
                  style={{
                    display: "none",
                  }}
                />
              )}
            </div>

            {
              status ?
                <div className={classes.menuButton} >
                  <Typography variant="h6" className={classes.menuBtn} onClick={handleClickLogout}>
                    logout
                  </Typography>
                </div>
                :
                <div className={classes.menuButton} >
                  <Typography variant="h6" className={classes.menuBtn} onClick={handleClickLoginOpen}>
                    Sign in
                  </Typography>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    /
                  </span>
                  <Typography variant="h6" className={classes.menuBtn} onClick={handleClickOpen} >
                    Sign up
                  </Typography>
                </div>
            }
            <FormDialog
              open={open}
              close={handleClose}
              redirect={handleRedirect}
            />
            <LoginDialog
              open={loginOpen}
              close={handleLoginClose}
              redirect={handleRedirect}
            />
          </div>
        )}

      </AppBar>
      <FreezBanner isMobile={isMobile} />

    </>
  );
}

export default NavBar;

// <>
// <AppBar
//   position="fixed"
//   className={classes.appBar}
//   elevation={0}
// >
//   <CssBaseline />
//   <Toolbar
//     disableGutters={true}
//     style={{ background: "transparent !important" }}
//   >
//     {isMobile ? (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           width: "100%",
//           alignItems: "center",
//         }}
//       >
//         <img src={logo} alt="logo" className={classes.logo} style={{width:'20%'}}/>
//         <NavbarMobile />
//       </div>
//     ) : (
//       <>
//         <div
//           // className={
//           //   scrolled() ? classes.mainAppBarMin : classes.mainAppBar
//           // }
//           className={
//             scrolled() ? classes.mainAppBarMin : classes.mainAppBar
//           }
//         >
//           <div className={classes.titleRoot}>
//             <Typography variant="h6" className={classes.title}>
//               <NavLink
//                 to={`/`}
//                 className={
//                   pathName === `/` ?  classes.menuActive : classes.menuBtn
//                 }
//               >
//                 Home
//               </NavLink>
//             </Typography>
//             <Typography variant="h6" className={classes.title}>
//               <NavLink
//                 to={`/about`}
//                 className={
//                   pathName === `/about`
//                     ?  classes.menuActive : classes.menuBtn
//                 }
//               >
//                 About
//               </NavLink>
//             </Typography>
//             <Typography variant="h6" className={classes.title}>
//               <NavLink
//                 to={`/calculate`}
//                 className={
//                   pathName === `/calculate`
//                     ?  classes.menuActive : classes.menuBtn
//                 }
//                 style={{marginRight:'10px'}}
//               >
//                 {" "}
//                 CTA Eligibility
//               </NavLink>
//             </Typography>
//             <Typography variant="h6" className={classes.menuBtn} style={{marginRight:'20px'}}>
//               FAQs
//             </Typography>
//             <Typography variant="h6" className={classes.menuBtn}>
//               Contact
//             </Typography>
//           </div>
//           {/* <div> */}
//           {scrolled() ? (
//             <img
//               src={logo}
//               style={{
//                 width: "150px",
//                 position: "absolute",
//                 left: "45%",
//                 transition: "height 0.5s ease 0s",
//                 top: "0",
//                 paddingTop: "8px",
//               }}
//             />
//           ) : pathName !== "/" ? (
//             <img
//               src={logo}
//               style={{
//                 width: "150px",
//                 position: "absolute",
//                 left: "45%",
//                 transition: "height 0.5s ease 0s",
//                 top: "0",
//                 paddingTop: "8px",
//               }}
//             />
//           ) : (
//             ""
//           )}
//           {/* </div> */}
//           <div className={classes.menuButton} onClick={handleClickOpen}>
//             <Typography variant="h6" className={classes.menuBtn}>
//               Sign in
//             </Typography>
//             <span
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 color: "black",
//               }}
//             >
//               /
//             </span>
//             <Typography variant="h6" className={classes.menuBtn}>
//               Sign up
//             </Typography>
//           </div>
//         </div>

//         <FormDialog
//           open={open}
//           close={handleClose}
//           redirect={handleRedirect}
//         />
//       </>
//     )}
//   </Toolbar>
// </AppBar>
