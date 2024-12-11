import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 p-4 space-y-6">
            <h2 className="text-2xl font-bold text-center">Dashboard</h2>
            <nav className="space-y-4">
                <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded-md block text-decoration-none">Dashboard</Link>
                <Link to="/schedule" className="hover:bg-gray-700 p-2 rounded-md block text-decoration-none">Event Schedule</Link>
            </nav>
        </aside>
    )
}

export default Sidebar