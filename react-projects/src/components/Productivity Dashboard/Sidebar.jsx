import React from 'react'
import { FaTasks, FaCalendarAlt, FaChartLine, FaTrophy } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="bg-gray-900 text-white w-64 p-6 h-screen flex flex-col">
            <h2 className="text-3xl font-bold mb-8 text-center">Productivity Hub</h2>
            <ul className="flex flex-col space-y-6">
                <li className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-xl transition-all">
                    <FaTasks className="mr-3 text-xl" /> Tasks
                </li>
                <li className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-xl transition-all">
                    <FaCalendarAlt className="mr-3 text-xl" /> Habits
                </li>
                <li className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-xl transition-all">
                    <FaChartLine className="mr-3 text-xl" /> Insights
                </li>
                <li className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-xl transition-all">
                    <FaTrophy className="mr-3 text-xl" /> Goals
                </li>
            </ul>
        </div>
    )
}

export default Sidebar