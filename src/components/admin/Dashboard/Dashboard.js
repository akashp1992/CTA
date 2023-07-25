import React, { useEffect, useState } from "react";
import AllProjects from "./AllProjects";
import StatusCard from "./StatusCard";
import Graph from "./Graph";
import fileIcon from "../../../images/admin/files.svg";
import reviewIcon from "../../../images/admin/reviewIcon.svg";
import pushIcon from "../../../images/admin/pushIcon.svg";
import penddingIcon from "../../../images/admin/penddingIcon.svg";
import completedIcon from "../../../images/admin/completedIcon.svg";
import CardItems from "./CardItems";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountAdmin } from "../../../redux/admin/dashboard/countSlice";
import { Button } from "@mui/material";
function Dashboard() {

  const [pFile, setPFile] = useState(0)
  const [pReview, setPReview] = useState(0)
  const [pushed, setPushed] = useState(0)
  const [completed, setCompleted] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const request = {
      onSuccess: async (res) => {
        res?.data?.map((items, index) => (
          setPFile(items["Total pending files"]),
          setPReview(items["Total pending review"]),
          setPushed(items["Total pushed"]),
          setCompleted(items["Total competed files"])
        ))
      },
      onFail: async (err) => {
        if (err.response.status === 401) {
          navigate("/", { replace: true })
        }
      }
    }
    dispatch(getCountAdmin(request))

  }, [pFile, pReview, pushed, completed])

  const statusData = [
    {
      title: "Waiting for Filing",
      desc: "Total Pending Files",
      icon: fileIcon,
      digit: pFile
    },
    {
      title: "Under Review",
      desc: "Total Pending Review",
      icon: reviewIcon,
      digit: pReview
    },
    {
      title: "Pushed to FinCen",
      desc: "Total Pushed",
      icon: pushIcon,
      digit: pushed
    },
    {
      title: "Pending Details",
      desc: "Total Pending Details",
      icon: penddingIcon,
      digit: "0"
    },
    {
      title: "Completed Files",
      desc: "Total Completed Files",
      icon: completedIcon,
      digit: completed
    }
  ]

  return (
    <div>
      <div style={{ display: "flex" }}>
        {statusData?.map((items, index) => {
          return (
            <>
              {console.log("dashboard", items.digit)}
              <StatusCard key={index} title={items.title} desc={items.desc} digit={items.digit} icon={items.icon} />

            </>
          );
        })}
       
      </div>
      <AllProjects />
      <Graph />
    </div>
  );
}

export default Dashboard;