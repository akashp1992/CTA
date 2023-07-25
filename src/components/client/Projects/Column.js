import React, { useMemo } from 'react'
import * as _ from "radash";
import Droppable from '../../../client/primitives/Droppable'
import DraggableElement from '../../../components/client/Projects/DraggableElement';
import HeadingCard from '../../../components/client/Projects/ProjectStatusCard';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
    ColumnWrapper: {
        width: 210,
        borderWidth: 2,
        borderRadius: 10,
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
    const classes = useStyle();
    return (
        <div className={classes.ColumnWrapper}>
            <div className={classes.ColumnHeaderWrapper} >
                <HeadingCard heading={heading} amount={amounts} variant={columnIdentifier} />
            </div>
            <Droppable id={columnIdentifier}>

                {elements.map((elm, elmIndex) => (
                    <DraggableElement
                        key={`draggable-element-${elmIndex}-${columnIdentifier}`}
                        identifier={elm.id}
                        content={elm.content}
                        items={elm.items}
                        project_id={elm.project_id}
                    />
                ))}
                <div className={classes.DropPlaceholder} />
                {console.log("element", elements)}
            </Droppable>
        </div>
    )
}

export default Column
