import React, { useEffect, useState } from "react";
import AllProjects from "./AllProjects";
import StatusCard from "../StatusCard";
import Graph from "./Graph";
import fileIcon from "../../../images/client/files.svg"
import reviewIcon from "../../../images/client/reviewIcon.svg"
import pushIcon from "../../../images/client/pushIcon.svg"
import penddingIcon from "../../../images/client/penddingIcon.svg"
import completedIcon from "../../../images/client/completedIcon.svg"
import { getCount } from "../../../redux/client/dashboard/countSlice";
import CardItems from "./CardItems";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EncryptStorage } from "encrypt-storage";
import crypto from 'crypto-js'
import inMemoryJwtService from "../../../services/inMemoryJwtService";
function Dashboard() {

  const counterState = useSelector(state => state.count.count)
  const [pFile, setPFile] = useState(0)
  const [pReview, setPReview] = useState(0)
  const [pushed, setPushed] = useState(0)
  const [completed, setCompleted] = useState(0)
  const encryptStorage = new EncryptStorage('ramlalsebachkerahe', {
    storageType: 'localStorage',
  });
  const dispatch = useDispatch()
  const [tokenParam] = useSearchParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(Date.now())
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
      onFail: async () => {

      }
    }
    dispatch(getCount(request))

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
    </div>
  );
}

export default Dashboard;
