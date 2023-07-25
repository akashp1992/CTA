import { Slider, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React from "react";
import { makeStyles } from "@mui/styles";
import sliderIcon from "../../../images/client/projects/sliderIcon.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 280,
  },
  firstPlanPrice: {
    fontSize: "28px !important",
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    color: "#06283D !important",
  },
  spandesign: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
    color: "#BEBEBE !important",
    marginTop: "5px",
  },
  rootSlider: {
    "& .css-187mznn-MuiSlider-root": {
      color: "red !important",
    },
  },
}));

const SuccessSlider = styled(Slider)(({ theme }) => ({
  color: "#3330E4",
  "& .MuiSlider-thumb": {
    backgroundImage: `url(${sliderIcon}) !important`,
    backgroundRepeat: "no-repeat !important;",
    backgroundColor: "transparent !important",
    borderRadius: "0 !important",
    width: "30px !important",
    height: "15px !important",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `none !important`,
    },
    "&.Mui-active": {
      boxShadow: `none !important`,
    },
    "&:before": {
      boxShadow: `none !important`,
    },
  },
}));

const Sliders = () => {
  const [value, setValue] = React.useState(7000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyle();
  return (
    <div style={{ marginTop: "30px" }}>
      <div className={classes.root}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className={classes.firstPlanPrice}>
            {value === 7000
              ? "$18"
              : value === 8000
              ? "$30"
              : value === 9000
              ? "$50"
              : "$70"}
          </Typography>
          <span className={classes.spandesign}>/months</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography className={classes.spandesign}>7000</Typography>
          <Typography className={classes.spandesign}>10000</Typography>
        </div>
        <SuccessSlider
          defaultValue={7000}
          value={value}
          onChange={handleChange}
          step={1000}
          min={7000}
          max={10000}
          marks
          class
          es={classes.rootSlider}
        />
        <div>
          <Typography className={classes.spandesign}>
            {value === 7000
              ? "7000 lorem . 1 user"
              : value === 8000
              ? "8000 lorem . 2 user"
              : value === 9000
              ? "9000 lorem . 3 users"
              : "10000 lorem . 4 users"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
