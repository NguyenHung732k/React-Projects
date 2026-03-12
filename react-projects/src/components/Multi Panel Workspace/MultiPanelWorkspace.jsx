import React from 'react'
import { DndContext } from "@dnd-kit/core"



const MultiPanelWorkspace = () => {
    return (
        <DndContext
            onDragEnd={(event) => moveTab(event)}
        >
            <Workspace />
        </DndContext>
    )
}

export default MultiPanelWorkspace