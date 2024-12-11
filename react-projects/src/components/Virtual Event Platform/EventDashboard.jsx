import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const EventDashboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-8 bg-gray-100 space-y-8">
                <h1 className="text-3xl font-semibold">Upcoming Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                        <h2 className="text-xl font-semibold">Event Title</h2>
                        <p className="text-gray-600">Date: 12/12/2024</p>
                        <p className="text-gray-600 mb-4">Attendees: 200</p>
                        <Link to="/event/1" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full text-decoration-none">
                            Manage Event
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EventDashboard