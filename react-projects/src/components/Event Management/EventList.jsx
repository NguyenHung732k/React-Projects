import React from 'react'
import { useEvents } from './contexts/EventContext'
import { Link } from 'react-router-dom'

const EventList = () => {
    const { events } = useEvents()

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Event List</h2>
            <div className="space-y-4">
                <button className="bg-blue-500 text-white p-2 rounded">
                    <Link to="/create" className="text-white text-decoration-none">
                        Create New Event
                    </Link>
                </button>
                {events.map((event) => (
                    <div key={event.id} className="border border-gray-300 rounded-lg p-4">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p className="text-gray-700">{event.date}</p>
                        <p className="text-gray-600">{event.description}</p>
                        <div className="mt-2 flex justify-between">
                            <Link
                                to={`/events/${event.id}`}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-decoration-none"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventList