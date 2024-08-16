import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEvents } from './contexts/EventContext'

const EventDetails = () => {
    const { id } = useParams()
    const { events, deleteEvent } = useEvents()
    const event = events.find(event => event.id === parseInt(id))

    if (!event) return <p>Event not found!</p>

    const handleDelete = () => {
        deleteEvent(event.id)
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
            <p className="text-gray-700">Date: {event.date}</p>
            <p className="text-gray-600 mt-2">{event.description}</p>
            <button className="bg-blue-500 p-2 rounded mr-2">
                <Link to={`/edit/${event.id}`} className="text-white text-decoration-none">
                    Edit
                </Link>
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
                <Link to="/" className="text-white text-decoration-none">
                    Delete
                </Link>
            </button>
            <button className="bg-gray-500 p-2 rounded ml-2">
                <Link to="/" className="text-white text-decoration-none">
                    Back to List
                </Link>
            </button>
        </div>
    )
}

export default EventDetails