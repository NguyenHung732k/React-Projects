import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

const ProgressTracker = () => {
    const progressData = {
        totalMeditations: 15,
        totalTime: 300,
        meditationPerWeek: [2, 3, 5, 1, 4, 0, 2],
    }

    const barChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Meditations per Week',
                data: progressData.meditationPerWeek,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    }

    const lineChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Total Time Meditated (minutes)',
                data: [50, 120, 180, 300],
                fill: false,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
            },
        ],
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Your Progress</h2>
            <div className="text-center mb-4">
                <p className="text-lg">Total Meditations: <span className="font-semibold">{progressData.totalMeditations}</span></p>
                <p className="text-lg">Total Time Meditated: <span className="font-semibold">{progressData.totalTime} minutes</span></p>
            </div>

            <div className="my-8">
                <h3 className="text-xl font-semibold text-gray-700">Meditations per Week</h3>
                <Bar data={barChartData} options={{ scales: { y: { beginAtZero: true } } }} />
            </div>

            <div className="my-8">
                <h3 className="text-xl font-semibold text-gray-700">Total Time Meditated Over Time</h3>
                <Line data={lineChartData} options={{ scales: { y: { beginAtZero: true } } }} />
            </div>
        </div>
    )
}

export default ProgressTracker