import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, SvgIcon, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const useStyle = makeStyles((theme) => ({
  planBenefit: {
    fontSize: "13.5px !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
    color: "#06283D !important",
  },
}));
const PlanBenefitData = ({ title, icon }) => {
  const classes = useStyle();
  return (
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        {icon ? (
          <CheckCircleRoundedIcon
            sx={{ width: "20px", color: "#3330E4", marginRight: "5px" }}
          />
        ) : (
          <CancelRoundedIcon sx={{width: "20px", color: "#3330E4", marginRight: "5px"}} />
        )}
        <Typography className={classes.planBenefit}>{title}</Typography>
    </div>
  );
};

export default PlanBenefitData;
