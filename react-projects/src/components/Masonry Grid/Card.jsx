import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Card = ({ content, index }) => {
    return (
        <Draggable key={content.id} draggableId={content.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white shadow-lg rounded-xl p-4 transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                    <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-48 object-cover rounded-lg transition-all hover:opacity-80"
                    />
                    <h2 className="text-xl font-semibold mt-2 text-gray-900">{content.title}</h2>
                    <p className="text-gray-600 mt-1">{content.description}</p>
                </div>
            )}
        </Draggable>
    )
}

export default Card
