import { Button, Container } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import * as _ from "radash";
import AllProjects from "../Dashboard/AllProjects";
import CreateProject from "./CreateProject";
import ForgotPassword from "./ForgotPassword";
import PlanCards from "../Pricing/PlanCards";
import ProjectStatusCard from "./ProjectStatusCard";
import Setting from "./Setting";
import StepperProcess from "./StepperProcess";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import Column from "./Column";
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { getAllProjects } from "../../../redux/client/dashboard/allProjectSlice";
import { useSelector } from "react-redux";
import {
  restrictToHorizontalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers"
import { getProfile } from "../../../redux/client/common/profileSlice";
import Spinner from "../Common/Spinner";
import EmptyData from "../Common/EmptyData";
import { getFavouriteProject } from "../../../redux/client/project/favouriteProjectSlice";

const useStyle = makeStyles((theme) => ({
  main: {
    backgroundColor: "#F8F8F8",
    borderRadius: "5px",
    height: "850px",
  },
  MainWrapper: {
    display: "flex",
    justifyContent: "left",

    paddingTop: 40,
    paddingBottom: 40,
    fontFamily: "Anek Telugu",

  },
  btnbody: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  createbtn: {
    backgroundColor: "#3330E4 !important",
    textTransform: "capitalize !important",
    fontSize: "12px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    display: "flex",
    alignItems: "center",
  },
}))
export const DEFAULT_COLUMN = "filedetails";
const COLUMNS = ["FileDetails", "Review by CTA", "Send to FinCen", "CTA Filled"];
// const DEFAULT_DATA_STATE = [
//   {
//     id: _.uid(6),
//     content: "CTA0001586",
//     column: DEFAULT_COLUMN,
//   },
//   {
//     id: _.uid(6),
//     content: "CTA0001587",
//     column: DEFAULT_COLUMN,
//   },
//   {
//     id: _.uid(6),
//     content: "CTA0001588",
//     column: DEFAULT_COLUMN,
//   },
// ];
const Project = () => {
  const dispatch = useDispatch()
  const classes = useStyle();
  const [userId, setUserId] = useState({});
  const [data, setData] = useState(
    []
  );
  const [projectStatus, setProjectStatus] = useState([{
    status: 0
  }])

  //get status by value
  const projectStatusFromApi = (status) => {
    switch (status) {
      case 1:
        return "fileDetails"

      case 2:
        return "reviewByCta"

      case 3:
        return "sendToFinCen"

      case 4:
        return "ctaFilled"

      default:
        return "fileDetails"
    }
  }
  const { loading } = useSelector(state => state.getAllProjects)
  const [statues, setStatues] = useState({})

  useEffect(() => {
    //Get Profile Details
    const requestUser = {
      onSuccess: (res) => {
        console.log("profile", res.data);
        setUserId(res.data)
      },
      onFail: (err) => {
        console.log("error Profile", err);
      }
    }
    dispatch(getProfile(requestUser))

    //Get Project Items
    let newData = []
    let projectStatus = []
    const request = {
      onSuccess: async (res) => {
        // items.project_process[0].project_status === 2 ? "reviewByCta" : "fileDetails"
        res.data.map((items, index) => {
          newData.push({
            created_by: items.created_by,
            id: items.uuid,
            project_id: items.id,
            content: `CTA${items.uuid.slice(0, 4)}`,
            items: items,
            column: projectStatusFromApi(items.project_process[0].project_status)
          })
        })
        setData(newData.filter(user => user.created_by === userId.id))
      },
      onFail: async (error) => {
        setData([])
      }
    }
    dispatch(getAllProjects(request))
    return () => {
      dispatch(getAllProjects())
    }
  }, [userId.id, projectStatus.id])


  const handleOnDragEnd = useCallback(
    ({ active, over }) => {
      const elementId = active.id;
      const deepCopy = [...data];
      const updatedState = deepCopy.map((elm) => {
        if (elm.id === elementId) {
          const column = over?.id ? String(over.id) : elm.column;
          return { ...elm, column };
        }
        return elm;
      });
      setData(updatedState);
    },
    [data, setData]

  );

  useEffect(() => {
    const request = {
      onSuccess: (res) => {
      },
      onFail: (err) => {

      }
    }
    dispatch(getFavouriteProject(request))


  }, [])
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )
  return (
    <>
      <div className={classes.main}>
        <Container>
          {console.log("process", statues)}
          <div className={classes.btnbody}>
            <NavLink to={`/dashboard/Create`} style={{ textDecoration: 'none' }}>
              <Button className={classes.createbtn} variant="contained">
                <AddIcon />
                Create New Project
              </Button>
            </NavLink>
          </div>

          {
            loading ?
              <Spinner color="#3330E4" />
              :
              data && data.length !== 0 ?
                <DndContext onDragEnd={handleOnDragEnd} sensors={sensors}>
                  <div className={classes.MainWrapper}>
                    {COLUMNS.map((column, columnIndex) => (
                      <>
                        <Column
                          key={`column-${columnIndex}`}
                          heading={column}
                          elements={_.select(
                            data,
                            (elm) => elm,
                            (f) => f.column === _.camal(column)
                          )}
                        />

                      </>

                    ))}

                  </div>

                </DndContext>
                :
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <EmptyData />
                </div>

          }
        </Container>
        {console.log("details", data)}
      </div>
    </>
  );
};

export default Project;