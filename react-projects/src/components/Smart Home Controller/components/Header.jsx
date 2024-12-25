import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Smart Home Dashboard</h1>
            <nav className="space-x-4">
                <Link to="/" className="hover:bg-blue-500 text-white px-3 py-2 rounded-md text-decoration-none">Home</Link>
                <Link to="/analytics" className="hover:bg-blue-500 text-white px-3 py-2 rounded-md text-decoration-none">Analytics</Link>
                <Link to="/notifications" className="hover:bg-blue-500 text-white px-3 py-2 rounded-md text-decoration-none">Notifications</Link>
                <Link to="/scheduler" className="hover:bg-blue-500 text-white px-3 py-2 rounded-md text-decoration-none">Scheduler</Link>
            </nav>
        </header>
    )
}

export default Header