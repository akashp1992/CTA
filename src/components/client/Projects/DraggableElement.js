import { makeStyles } from '@mui/styles';
import React, { useMemo } from 'react'
import Draggable from "../../../client/primitives/Draggable";
import ProjectCardItems from './ProjectCardItems';

const useStyle = makeStyles((theme) => ({
    ElementWrapper: {
        borderRadius: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        paddingLeft: "9px",
        paddingRight: '9px'
    },
    ElementText: {
        fontSize: 18,
        fontWeight: 600,
    }
}))
function DraggableElement({ identifier, content, items, project_id }) {
    const classes = useStyle();
    const itemIdentifier = useMemo(() => identifier, [identifier])
    return (
        // <Draggable id={itemIdentifier} >
        <Draggable  >
            <div className={classes.ElementWrapper}>
                <ProjectCardItems text={content} items={items} projectId={project_id} />
            </div>
        </Draggable>
    )
}

export default DraggableElement


