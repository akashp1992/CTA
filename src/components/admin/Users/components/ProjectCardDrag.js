import React, { useCallback, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProjectCardItems from "./ProjectCardItems";
import * as _ from "radash";
import { DndContext } from "@dnd-kit/core";
import Column from "./Column";

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
        filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 0px rgba(-48, 10, 62, -0.75)) !important",
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


export const DEFAULT_COLUMN = "filedetails";
const COLUMNS = ["FileDetails", "Review by CTA", "Send to FinCen", "CTA Filled"];
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

const ProjectStatusCardDrag = () => {
    const [data, setData] = useState(DEFAULT_DATA_STATE);
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
            console.log("drag")
            setData(updatedState);
        },
        [data, setData]
    );
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
                            
                            
                        />
                    </div>
                    <DndContext onDragEnd={handleOnDragEnd}>
                        <div className={classes.MainWrapper} >
                            {COLUMNS.map((column, columnIndex) => (
                                <Column
                                    key={`column-${columnIndex}`}
                                    heading={column}
                                    elements={_.select(
                                        data,
                                        (elm) => elm,
                                        (f) => f.column === _.camal(column)
                                    )}
                                />
                            ))}

                        </div>
                    </DndContext>

                </Container>

            </div>
        </>
    );
};

export default ProjectStatusCardDrag;
