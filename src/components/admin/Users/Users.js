
import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, TextField, Typography } from "@mui/material";
import * as _ from "radash";
import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import Column from "../Users/components/Column";
import UserModal from "./modals/UserModal";
import { restrictToHorizontalAxis, restrictToVerticalAxis, restrictToWindowEdges } from "@dnd-kit/modifiers";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectsWithStatus } from "../../../redux/admin/projects/AllProjectWithStatusSlice";
import Spinner from "../../client/Common/Spinner";
import EmptyData from "../../client/Common/EmptyData";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import { doUpdateProcessStatus } from "../../../redux/admin/projects/processUpdateSlice";
import { toogleSnackbar } from "../../../redux/client/common/snackbarSlice";

export const DEFAULT_COLUMN = "fileDetails";

const DEFAULT_DATA_STATE = [
  {
    id: _.uid(6),
    content: "CTA0001586",
    column: DEFAULT_COLUMN,
  },
  {
    id: _.uid(6),
    content: "CTA0001587",
    column: DEFAULT_COLUMN,
  },

];

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
  searchuserbody: {
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  search: {
    background: "white",
    padding: "5px",
    borderRadius: "5px !important",
    width: "180px",
    height: "35px",
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    filter: 'drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 0px rgba(-48, 10, 62, -0.75))'
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
  cardbody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "45px",
    borderColor: "#D2D2D2",
    borderTop: "2.5px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
  },
  cardbody2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "45px",
    borderColor: "#CB9500",
    borderTop: "2.5px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
  },
  cardbody3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "45px",
    borderColor: "#A04343",
    borderTop: "2.5px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
  },
  cardbody4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "45px",
    borderColor: "#1D7503",
    borderTop: "2.5px",
    borderBottom: "0px",
    borderRight: "0px",
    borderLeft: "0px",
    borderStyle: "solid",
  },
  fileiconstyle: {
    width: "22px",
  },
  title: {
    fontSize: "14px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
  },
  statusnum: {
    border: "1px solid #BEBEBE",
    width: "30px",
    textAlign: "center",
    borderRadius: "12px",
  },
  projectstatuscardbody: {
    marginTop: "50px",
  },
}));
const Project = () => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )
  //const [allProject, setAllProject] = useState([])
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([])
  const { loading } = useSelector(state => state.allProjectWithStatus)
  //get status by value
  const projectStatus = (status) => {
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
  const COLUMNS = ["FileDetails", "Review by CTA", "Send to FinCen", "CTA Filled"];
  const newData = []
  const status = []
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDrag, setIsDrag] = useState(false)

  const [q, setQ] = useState("");
  const [requestData, setRequestData] = useState({
    process_id: "",
    project_id: "",
    created_by_user_id: "",
    project_status: ""
  })


  // function callme(input) {
  //   const splitedText = input.split("@")
  //   const newText = splitedText[0].split("").map((e, index) => index < 2 ? e : "*")
  //   console.log("newtexgt", newText.join("") + "@" + splitedText[1])
  // }
  const handleConfirmDialog = (isDragging) => {
    if (isDragging) {
      // Swal.fire({
      //   title: 'Are you sure?',
      //   text: 'You want to Process',
      //   icon: 'question',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Yes!',
      //   allowOutsideClick: false,
      //   allowEscapeKey: false
      // })
    }
  }

  //filter funcation
  const fillteredData = !q ?
    data :
    data.filter((project) => {
      project.id.toLowerCase().includes(q.toLowerCase())
    })
  //get all project from api
  useEffect(() => {

    const request = {
      onSuccess: (res) => {
        res.data.map((data, index) => {
          status.push({
            project_id: data.process.project_id,
            project_status: data.process.project_status,
            created_by: data.created_by,
            id: data.uuid,
            project_id: data.id,
            content: `CTA${data.uuid.slice(0, 4)}`,
            items: data,
            column: projectStatus(data.process.project_status)
          })
        })
        setData(status)
        //console.log("searched", Object.values(status))

      },
      onFail: (err) => {
        console.log("erro project", err)
        setData([])
      }
    }
    dispatch(getAllProjectsWithStatus(request))
  }, [])

  //change status
  useEffect(() => {
    const request = {
      data: {
        process_id: requestData.process_id,
        project_id: requestData.project_id,
        created_by_user_id: requestData.created_by_user_id,
        project_status: requestData.project_status
      },
      onSuccess: (res) => {
        if (res.success) {
          dispatch(toogleSnackbar({
            open: true,
            type: 'success',
            msg: `${res.message}`
          }))
        }
      },
      onFail: (err) => {
        console.log(err)
      }
    }

    if (isDrag) {
      dispatch(doUpdateProcessStatus(request))
    }
  })

  const getHeadingFromDrag = (heading) => {
    switch (heading) {
      case "fileDetails":
        return 1
      case "reviewByCta":
        return 2
      case "sendToFinCen":
        return 3
      case "ctaFilled":
        return 4
      default:
        return 1
    }
  }

  const handleOnDragEnd = useCallback(
    ({ active, over }) => {
      const elementId = active.id;
      const deepCopy = [...data];
      const updatedState = deepCopy.map((elm, index) => {
        const column = over?.id ? String(over.id) : elm.column;
        if (elm.id === elementId) {
          if (over.id !== elm.column) {
            handleConfirmDialog(true)
            console.log("project_id", elm.project_id);
            console.log("created_by", elm.created_by);
            console.log("project_status", elm.column);

            setRequestData({
              process_id: elm.items.process.id,
              project_id: elm.project_id,
              created_by_user_id: elm.created_by,
              project_status: getHeadingFromDrag(column)
            })


          }
          if (elm.column !== column) {
            setIsDrag(true)
          } else {
            setIsDrag(false)
          }
          console.log("project_status_column", getHeadingFromDrag(column));
          return { ...elm, column };
        }

        return elm;

      });

      setData(updatedState);
    },
    [data, setData]
  )
  const keys = ["content", "project_id", "created_by"];
  const filterData = data.filter((p) => {
  return  keys.some((key) => p[key].toString().toLowerCase().includes(q))
  })
  const classes = useStyle();
  return (
    <>
      <div className={classes.main}>
        <Container>
          <div className={classes.searchuserbody}>
            <TextField
              variant="standard"
              InputProps={{
                className: classes.search,
                disableUnderline: true,
              }}
              placeholder="Search User ID"
              disableUnderline={true}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          {
            loading ?
              <Spinner color="#3330E4" />
              :
              data && data.length !== 0 ?
                <DndContext onDragEnd={handleOnDragEnd} useDragOverlay={true} modifiers={[restrictToWindowEdges]} sensors={sensors} >

                  <div className={classes.MainWrapper}>
                    {COLUMNS.map((column, columnIndex) => (
                      <div >
                        <Column
                          key={`column-${columnIndex}`}
                          heading={column}
                          elements={_.select(
                            !q ?
                              data :
                              filterData,
                            (elm) => elm,
                            (f) => f.column === _.camal(column)
                          )}
                        />
                      </div>

                    ))}

                  </div>

                </DndContext>
                :
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <EmptyData />
                </div>
          }
          {console.log("all Data", requestData)}
          {console.log("column", column)}
          {console.log("isDrag", data)}
        </Container>

      </div>

    </>
  )
}

export default Project