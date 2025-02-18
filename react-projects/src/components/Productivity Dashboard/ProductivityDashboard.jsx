import React from 'react'
import Sidebar from './Sidebar'
import TaskBoard from './TaskBoard'
import HabitTracker from './HabitTracker'
import ProgressChart from './ProgressChart'

const ProductivityDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1 p-8 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Your Tasks</h3>
                        <TaskBoard />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Daily Habit Tracker</h3>
                        <HabitTracker />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-semibold mb-4">Weekly Progress</h3>
                        <ProgressChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductivityDashboard