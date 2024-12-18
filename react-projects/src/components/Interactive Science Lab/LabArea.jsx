import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const LabArea = () => {
    const tools = [
        { id: '1', name: 'Beaker' },
        { id: '2', name: 'Test Tube' },
        { id: '3', name: 'Bunsen Burner' },
    ]

    const [droppedTools, setDroppedTools] = useState([])

    const onDragEnd = (result) => {
        const { destination, source } = result

        if (!destination) return

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        const sourceList = source.droppableId === 'tools' ? tools : droppedTools
        const destinationList = destination.droppableId === 'tools' ? tools : droppedTools

        const [removed] = sourceList.splice(source.index, 1)
        destinationList.splice(destination.index, 0, removed)

        if (destination.droppableId === 'tools') {
            setDroppedTools(droppedTools)
        } else {
            setDroppedTools(droppedTools)
        }
    }

    return (
        <div className="lab-area mt-6">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex space-x-4 mb-4">
                    <Droppable droppableId="tools" direction="horizontal">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="flex space-x-4"
                            >
                                {tools.map((tool, index) => (
                                    <Draggable key={tool.id} draggableId={tool.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="flex justify-center items-center p-2 bg-white rounded-md shadow-md cursor-move"
                                            >
                                                {tool.name}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="droppedTools" direction="horizontal">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="drop-area p-4 border-2 border-dashed rounded-md flex items-center justify-center"
                            >
                                <h4 className="text-gray-500">Drop tools here</h4>
                                {droppedTools.map((tool, index) => (
                                    <Draggable key={tool.id} draggableId={tool.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="tool p-2 bg-white rounded-md shadow-md"
                                            >
                                                {tool.name}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>

            <div className="mt-6">
                <h3 className="text-xl font-semibold">Dropped Tools:</h3>
                <ul>
                    {droppedTools.map((tool) => (
                        <li key={tool.id}>{tool.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LabArea