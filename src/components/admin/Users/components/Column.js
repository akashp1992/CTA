import React, { useMemo } from 'react'
import * as _ from "radash";
import Droppable from '../../../../admin/primitives/Droppable'
import DraggableElement from './DraggableElement';
import HeadingCard from './ProjectStatusCard';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles((theme) => ({
    ColumnWrapper: {
        width: 210,
        borderWidth: 2,
        borderRadius: 10,
        filter: 'drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 0px rgba(-48, 10, 62, -0.75))'
        // filter:" drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 0px rgba(-43, 10, 62, -0.75))",

    },
    ColumnHeaderWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: '#000',
        padding: "0px 10px 0px 10px",
        borderRadius: 10,
    },
    DropPlaceholder: {
        height: 35,
        backgroundColor: "transparent",
        marginTop: 15,

    }
}))

const Column = ({ heading, elements }) => {
    const columnIdentifier = useMemo(() => _.camal(heading), [heading])


    const amounts = useMemo(
        () => elements.filter((elm) => elm.column === columnIdentifier).length,
        [elements, columnIdentifier]
    );
    console.log("columnIdentifier", amounts);
    const classes = useStyle();


    return (
        <div className={classes.ColumnWrapper}>
            <div className={classes.ColumnHeaderWrapper} >
                <HeadingCard heading={heading} amount={amounts} variant={columnIdentifier} />
            </div>
            <Droppable id={columnIdentifier}>
                {console.log("datafinish", elements)
                
                }
                {
                    console.log("column number", columnIdentifier)
                }
                {elements.map((elm, elmIndex) => (
                    <DraggableElement
                        key={`draggable-element-${elmIndex}-${columnIdentifier}`}
                        identifier={elm.id}
                        items={elm.items}
                        project_id={elm.project_id}
                        content={elm.content}
                    />

                ))}
                <div className={classes.DropPlaceholder} />
            </Droppable>

        </div>
    )
}

export default Column
