import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const HealthTrackerWidget = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Steps Taken',
                data: [12000, 15000, 10000, 18000, 13000, 9000, 14000],
                backgroundColor: '#4caf50',
                borderColor: '#388e3c',
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Steps Taken Over the Week',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.raw} steps`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days of the Week',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Steps',
                },
                beginAtZero: true,
            },
        },
    }

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Health Tracker: Daily Steps</h3>
            <Bar data={data} options={options} />
        </div>
    )
}

export default HealthTrackerWidget