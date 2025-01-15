import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaTrophy, FaRunning, FaUsers, FaCog } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="flex flex-col w-64 h-screen bg-blue-800 text-white p-4 space-y-6">
            <h2 className="text-2xl font-bold">Workout Game</h2>
            <nav className="space-y-4">
                <Link to="/" className="flex items-center text-white text-lg hover:bg-blue-600 p-2 rounded-md text-decoration-none">
                    <FaHome className="mr-2" /> Home
                </Link>
                <Link to="/challenges" className="flex items-center text-white text-lg hover:bg-blue-600 p-2 rounded-md text-decoration-none">
                    <FaRunning className="mr-2" /> Challenges
                </Link>
                <Link to="/achievements" className="flex items-center text-white text-lg hover:bg-blue-600 p-2 rounded-md text-decoration-none">
                    <FaTrophy className="mr-2" /> Achievements
                </Link>
                <Link to="/multiplayer" className="flex items-center text-white text-lg hover:bg-blue-600 p-2 rounded-md text-decoration-none">
                    <FaUsers className="mr-2" /> Multiplayer
                </Link>
                <Link to="/profile" className="flex items-center text-white text-lg hover:bg-blue-600 p-2 rounded-md text-decoration-none">
                    <FaCog className="mr-2" /> Profile
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar