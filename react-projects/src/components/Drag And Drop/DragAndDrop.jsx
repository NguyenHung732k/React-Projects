import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


const initialItems = [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
]


const DragAndDrop = () => {

    const [items, setItems] = useState(initialItems)

    const onDragEnd = (result) => {

        const { destination, source } = result

        if (!destination) return

        if (destination.index === source.index) return

        const updatedItems = Array.from(items)
        const [movedItem] = updatedItems.splice(source.index, 1)
        updatedItems.splice(destination.index, 0, movedItem)

        setItems(updatedItems)
    }

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`w-full max-w-lg bg-white rounded-lg shadow-lg p-6 ${snapshot.isDraggingOver ? 'bg-blue-50' : ''
                                }`}
                        >
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`mb-4 p-4 rounded-lg shadow-md cursor-pointer ${snapshot.isDragging ? 'bg-blue-400 text-white' : 'bg-blue-500 text-white'
                                                }`}
                                            style={{ ...provided.draggableProps.style, ...provided.dragHandleProps.style }}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default DragAndDrop