import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TaskBoard = () => {
    const [tasks, setTasks] = useState({
        todo: [
            { id: '1', content: 'Design new feature' },
            { id: '2', content: 'Research best practices' },
        ],
        inProgress: [
            { id: '3', content: 'Develop login page' },
        ],
        done: [
            { id: '4', content: 'Test UI components' },
        ],
    })

    const handleOnDragEnd = (result) => {
        const { destination, source } = result
        if (!destination) return

        const sourceColumn = source.droppableId
        const destinationColumn = destination.droppableId

        if (sourceColumn === destinationColumn && source.index === destination.index) return

        const newTasks = { ...tasks }
        const [removed] = newTasks[sourceColumn].splice(source.index, 1)
        newTasks[destinationColumn].splice(destination.index, 0, removed)

        setTasks(newTasks)
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="flex gap-8">
                {Object.keys(tasks).map((status) => (
                    <Droppable key={status} droppableId={status}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="bg-gradient-to-b from-gray-100 to-gray-200 p-4 rounded-lg w-80 shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-gray-700 capitalize mb-6">{status}</h3>
                                {tasks[status].map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="bg-white p-4 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                                            >
                                                {task.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    )
}

export default TaskBoard