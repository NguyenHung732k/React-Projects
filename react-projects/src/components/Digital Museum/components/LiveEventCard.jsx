import React from 'react'
import { Link } from 'react-router-dom'

const LiveEventCard = ({ event }) => (
    <div className="flex flex-col items-start justify-between gap-4 bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        <div className="space-y-2">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-500">{event.date}</p>
        </div>
        <Link to={`/live-event/${event.id}`} className="bg-blue-500 text-white px-2 py-2 rounded-lg text-decoration-none">
            Watch Now
        </Link>
    </div>
)

export default LiveEventCard