import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GoalTrackerWidget = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Progress (%)',
                data: [20, 40, 60, 80, 100],
                fill: false,
                borderColor: '#4caf50',
                tension: 0.1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Goal Progress Over the Week',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.raw}%`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Progress (%)',
                },
                min: 0,
                max: 100,
            },
        },
    }

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Goal Progress</h3>
            <Line data={data} options={options} />
        </div>
    )
}

export default GoalTrackerWidget