import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box, TextField, Typography, TypographyProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import calIcon from "../../../images/admin/calIcon.svg";
import moment from "moment/moment";
const useStyle = makeStyles((theme) => ({
  dateLabel: {
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    color: "#8A8A8A !important",
    fontWeight: "400 !important",
  },
}));

const DatePicker = ({ open }) => {
  const classes = useStyle();
  const [dateRange, setDateRange] = React.useState({});
  const [value, setValue] = useState([null, null]);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  function removeTrailingSlash(str) {
    return str.replace(/\\/g, "");
  }
  const formatDate = (dateString) => {
    return moment(dateString).format("YY DD");
  };
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "StartDate", end: "EndDate" }}
    >
      <DateRangePicker
        value={value}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        showDaysOutsideCurrentMonth
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >


              {setStartDate(startProps.inputProps.value)}
              {setEndDate(endProps.inputProps.value)}
              {console.log("date", formatDate(startDate.toString()))}
              {localStorage.setItem("startDate", formatDate(startDate.toString()))}
              {localStorage.setItem("endDate", formatDate(endDate.toString()))}
              <Typography className={classes.dateLabel} {...startProps}>
                {startProps.inputProps.value === ""
                  ? "Start Date"
                  : startProps.inputProps.value}
              </Typography>
              <Box style={{ marginLeft: "5px", marginRight: "5px" }}> - </Box>
              <Typography className={classes.dateLabel} {...endProps}>
                {endProps.inputProps.value === ""
                  ? "End Date"
                  : endProps.inputProps.value}
              </Typography>
              <img
                src={calIcon}
                alt="cal"
                style={{ marginLeft: "5px", cursor: "pointer" }}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;

// {localStorage.setItem("startDate", startProps.inputProps.value)}
// {localStorage.setItem("endDate", endProps.inputProps.value)}