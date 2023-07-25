import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bannerHome: {
    width: "100%",
    position: "fixed",
    zIndex: "999",
    background: "white",
    marginTop: "80px",
    textAlign: "center",
  },
  bannerAbout: {
    width: "100%",
    position: "fixed",
    zIndex: "999",
    background: "white",
    marginTop: "50px",
    textAlign: "center",
  },
  bannerCalcu: {
    width: "100%",
    position: "fixed",
    zIndex: "999",
    background: "white",
    marginTop: "69px",
    textAlign: "center",
  },
  bannerHomeMobile: {
    width: "100%",
    position: "fixed",
    zIndex: "999",
    background: "white",
    marginTop: "30px",
    textAlign: "center",
  },
  bannerAboutMobile: {
    width: "100%",
    position: "fixed",
    zIndex: "999",
    background: "white",
    marginTop: "10px",
    textAlign: "center",
  },
  bannerCalcuMobile: {
    width: "100%",
    position: "fixed",
    zIndex: "999",
    background: "white",
    marginTop: "20px",
    textAlign: "center",
  },
  displayNone: {
    display: "none",
  },
}));
const FreezBanner = ({ isMobile }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const classes = useStyles();
  console.log("pathName", pathName);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.pageYOffset);
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  const scrolled = () => scrollY > 40;
  const mobileScroll = () => scrollY > 20;
  return (
    <div
      // className={
      //   pathName === "/"
      //     ? scrolled()
      //       ? classes.bannerHome
      //       : ""
      //     : pathName === "/about"
      //     ? classes.bannerAbout
      //     : pathName === "/calculate"
      //     ? classes.bannerCalcu
      //     : classes.bannerHome
      // }
      className={
        isMobile
          ? pathName === "/"
            ? mobileScroll()
              ? classes.bannerHomeMobile
              : classes.displayNone
            : pathName === "/about"
            ? mobileScroll()
              ? classes.bannerAboutMobile
              : classes.displayNone
            : pathName === "/calculate"
            ? mobileScroll()
              ? classes.bannerCalcuMobile
              : classes.displayNone
            : classes.displayNone
          : pathName === "/"
          ? scrolled()
            ? classes.bannerHome
            : ""
          : pathName === "/about"
          ? scrolled()
            ? classes.bannerAbout
            : ""
          : pathName === "/calculate"
          ? scrolled()
            ? classes.bannerCalcu
            : ""
          : ""
      }
    >
      <p
        style={
          isMobile
            ? {
                color: "#3330E4",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "13px",
                padding: "20px",
              }
            : {
                color: "#3330E4",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "20px",
                padding: "20px",
              }
        }
      >
        CTA rules are effective from January 1, 2024. Get Free Access to our
        Filing portal Now!
      </p>
    </div>
  );
};

export default FreezBanner;
