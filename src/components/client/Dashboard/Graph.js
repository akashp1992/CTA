import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js/auto';
// import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker'
import Chart from "react-apexcharts";
import DatePicker from "./DatePicker";

const useStyle = makeStyles((theme) => ({
  dataRange: {
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    color: "#06283D !important",
    fontWeight: "500 !important",

    paddingLeft: "10px",
    paddingRight: "10px",
  },
  graphLabel: {
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    color: "#06283D !important",
    fontWeight: "600 !important",
  },
  dateLabel: {
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    color: "#8A8A8A !important",
    fontWeight: "400 !important",

    paddingLeft: "10px",
    paddingRight: "10px",
  },
  monthActive: {
    color: "#3330E4 !important",
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    marginRight: "10px !important",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    cursor: 'pointer',
    boxShadow: "rgb(22 21 21 / 11%) 0px 5px 15px",
    height: "30px",
    marginTop: "-10px",
  },
  monthBtn: {
    color: "#8A8A8A !important",
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    cursor: 'pointer',
    marginRight: "10px !important",
  },
}));

const Graph = () => {
  const [categories, setCategories] = useState(["01 Jan",
    "02 Jan",
    "03 Jan",
    "04 Jan",
    "05 Jan",
    "06 Jan",
    "07 Jan",
    "08 Jan",
    "09 Jan",
    "10 Jan",
    "11 Jan",
    "12 Jan",
    "01 Feb",
    "02 Feb",
    "03 Feb",
    "04 Feb",
    "05 Feb",
    "06 Feb",
    "07 Feb",
    "08 Feb",
    "09 Feb",
    "10 Feb",
    "11 Feb",
    "12 Feb",
    "01 Mar",
    "02 Mar",
    "03 Mar",
    "04 Mar",
    "05 Mar",
    "06 Mar",
    "07 Mar",
    "08 Mar",
    "09 Mar",
    "10 Mar",
    "11 Mar",
    "12 Mar",]);
  const [data, setData] = useState([45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10])
  const options = {
    markers: {
      size: 8,
      colors: undefined,
      strokeColors: "#3330E4",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,

      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    chart: {
      id: "basic-bar",

      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3330E4"],
    stroke: {
      width: 4,
      dashArray: 6,
      borderRadius: 10,
      curve: "straight",
      lineCap: "round",
    },
    xaxis: {
      labels: {
        rotate: -90,
        rotateAlways: true,
      },
      categories: categories
    },

  };

  const series = [
    {
      name: "series-1",
      data: data,
    },
  ];

  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const monthHead = [3, 6, 8];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleActiveClick = index => {
    setActiveIndex(index)
    index === 0 ?
      setCategories(
        ["01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
          "01 Feb",
          "02 Feb",
          "03 Feb",
          "04 Feb",
          "05 Feb",
          "06 Feb",
          "07 Feb",
          "08 Feb",
          "09 Feb",
          "10 Feb",
          "11 Feb",
          "12 Feb",
          "01 Mar",
          "02 Mar",
          "03 Mar",
          "04 Mar",
          "05 Mar",
          "06 Mar",
          "07 Mar",
          "08 Mar",
          "09 Mar",
          "10 Mar",
          "11 Mar",
          "12 Mar",]
      )
      : index === 1 ?
        setCategories(

          ["01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
            "01 Feb",
            "02 Feb",
            "03 Feb",
            "04 Feb",
            "05 Feb",
            "06 Feb",
            "07 Feb",
            "08 Feb",
            "09 Feb",
            "10 Feb",
            "11 Feb",
            "12 Feb",
            "01 Mar",
            "02 Mar",
            "03 Mar",
            "04 Mar",
            "05 Mar",
            "06 Mar",
            "07 Mar",
            "08 Mar",
            "09 Mar",
            "10 Mar",
            "11 Mar",
            "12 Mar",
            "01 Apr",
            "02 Apr",
            "03 Apr",
            "04 Apr",
            "05 Apr",
            "06 Apr",
            "07 Apr",
            "08 Apr",
            "09 Apr",
            "10 Apr",
            "11 Apr",
            "12 Apr",
            "01 May",
            "02 May",
            "03 May",
            "04 May",
            "05 May",
            "06 May",
            "07 May",
            "08 May",
            "09 May",
            "10 May",
            "11 May",
            "12 May",
            "01 Jun",
            "02 Jun",
            "03 Jun",
            "04 Jun",
            "05 Jun",
            "06 Jun",
            "07 Jun",
            "08 Jun",
            "09 Jun",
            "10 Jun",
            "11 Jun",
            "12 Jun",
          ]

        ) : index === 2 ?
          setCategories(

            ["01 Jan",
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
              "01 Feb",
              "02 Feb",
              "03 Feb",
              "04 Feb",
              "05 Feb",
              "06 Feb",
              "07 Feb",
              "08 Feb",
              "09 Feb",
              "10 Feb",
              "11 Feb",
              "12 Feb",
              "01 Mar",
              "02 Mar",
              "03 Mar",
              "04 Mar",
              "05 Mar",
              "06 Mar",
              "07 Mar",
              "08 Mar",
              "09 Mar",
              "10 Mar",
              "11 Mar",
              "12 Mar",
              "01 Apr",
              "02 Apr",
              "03 Apr",
              "04 Apr",
              "05 Apr",
              "06 Apr",
              "07 Apr",
              "08 Apr",
              "09 Apr",
              "10 Apr",
              "11 Apr",
              "12 Apr",
              "01 May",
              "02 May",
              "03 May",
              "04 May",
              "05 May",
              "06 May",
              "07 May",
              "08 May",
              "09 May",
              "10 May",
              "11 May",
              "12 May",
              "01 Jun",
              "02 Jun",
              "03 Jun",
              "04 Jun",
              "05 Jun",
              "06 Jun",
              "07 Jun",
              "08 Jun",
              "09 Jun",
              "10 Jun",
              "11 Jun",
              "12 Jun",
              "01 July",
              "02 July",
              "03 July",
              "04 July",
              "05 July",
              "06 July",
              "07 July",
              "08 July",
              "09 July",
              "10 July",
              "11 July",
              "12 July",
              "01 Aug",
              "02 Aug",
              "03 Aug",
              "04 Aug",
              "05 Aug",
              "06 Aug",
              "07 Aug",
              "08 Aug",
              "09 Aug",
              "10 Aug",
              "11 Aug",
              "12 Aug",]

          ) :
          setCategories(

            ["01 Jan",
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
              "01 Feb",
              "02 Feb",
              "03 Feb",
              "04 Feb",
              "05 Feb",
              "06 Feb",
              "07 Feb",
              "08 Feb",
              "09 Feb",
              "10 Feb",
              "11 Feb",
              "12 Feb",
              "01 Mar",
              "02 Mar",
              "03 Mar",
              "04 Mar",
              "05 Mar",
              "06 Mar",
              "07 Mar",
              "08 Mar",
              "09 Mar",
              "10 Mar",
              "11 Mar",
              "12 Mar",]

          )

    index === 0 ?
      setData(
        [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      )
      : index === 1 ?
        setData(
          [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10,]
        ) : index === 2 ?
          setCategories(

            [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10,]

          ) :
          setCategories(

            ["01 Jan",
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
              "01 Feb",
              "02 Feb",
              "03 Feb",
              "04 Feb",
              "05 Feb",
              "06 Feb",]

          )
  }

  //For Active and Inactive Button
  const typoButton = monthHead.map((el, index) => {
    return (
      <Typography key={index} onClick={() => handleActiveClick(index)} className={activeIndex === index ? classes.monthActive : classes.monthBtn}>{`${el} Months`}</Typography>
    )
  })
  return (
    <div
      style={{
        marginTop: "20px",
        background: "#FFFFFF",
        boxShadow: "1px 1px 3px #0000004d",
        padding: "20px 15px 10px 15px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          alignItems: "center",
        }}
      >
        <Typography className={classes.graphLabel}>Graph</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography className={classes.dataRange}>Data Range</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DatePicker />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {typoButton}
        </div>
      </div>
      <div
        style={{
          background: "#FCFDFF",
          boxShadow: "1px 1px 3px #0000004d",
          borderRadius: "12px",
        }}
      >
        <Chart options={options} series={series} type="line" height={300} />
      </div>
    </div>
  );
};

export default Graph;

// <Line style={{ background: '#FCFDFF', boxShadow: '1px 1px 5px black' }} options={options} data={data} />
