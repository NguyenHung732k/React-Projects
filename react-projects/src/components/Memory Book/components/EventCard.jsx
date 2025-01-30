import React from "react"

const EventCard = ({ event, onClick }) => {
    return (
        <div
            className="w-96 bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => onClick(event)}
        >
            <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{event.description}</p>
        </div>
    )
}

export default EventCard