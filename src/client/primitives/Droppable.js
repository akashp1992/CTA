import { useDroppable } from '@dnd-kit/core';
import React, { useMemo } from 'react'

const Droppable = ({ id, children }) => {
    const { isOver, setNodeRef } = useDroppable({ id });
    const style = useMemo(
        () => ({
            opacity: isOver ? 0.5 : 1,
        }),
        [isOver]
    );
    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    )
}

export default Droppable