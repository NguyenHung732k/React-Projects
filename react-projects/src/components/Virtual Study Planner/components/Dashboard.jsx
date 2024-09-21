import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale } from 'chart.js'

import { useStudy } from '../context/StudyContext'

ChartJS.register(LineElement, CategoryScale, LinearScale)

const Dashboard = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Study Hours',
                data: [5, 10, 15, 20],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }

    const { goals, sessions, progress } = useStudy()

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Study Hours This Week</h2>
                    <p className="text-xl font-bold">{progress.totalHours} Hours</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
                    <p className="text-xl font-bold">{sessions.length} Sessions</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Overall Goal Progress</h2>
                    <div className="w-full h-32">
                        <Line data={data} />
                    </div>
                    <p className="text-xl font-bold">{progress.completedSessions} / {goals.length} Goals Completed</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard