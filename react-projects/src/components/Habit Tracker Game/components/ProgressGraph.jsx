import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const ProgressGraph = ({ habitData }) => {
    const { dates, completedDays, targetDays } = habitData

    // Chart Data
    const data = {
        labels: dates, // e.g., ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        datasets: [
            {
                label: 'Completed Habits',
                data: completedDays, // e.g., [1, 2, 3, 4, 5]
                borderColor: '#34D399', // Green line color
                backgroundColor: 'rgba(52, 211, 153, 0.2)', // Light green background color under the line
                pointBackgroundColor: '#34D399', // Green points
                pointRadius: 5,
                fill: true, // To fill the area under the line
                tension: 0.4, // Smooth curve for the line
                borderWidth: 3,
            },
            {
                label: 'Target Days',
                data: targetDays, // e.g., [1, 1, 1, 1, 1]
                borderColor: '#FBBF24', // Yellow line for target days
                backgroundColor: 'rgba(251, 191, 36, 0.2)', // Light yellow background
                pointBackgroundColor: '#FBBF24', // Yellow points
                pointRadius: 5,
                fill: false, // No filling under the target line
                borderWidth: 2,
                borderDash: [5, 5], // Dotted line style for target
            }
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const { datasetIndex, dataIndex } = context;
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        return `${label}: ${value} day${value > 1 ? 's' : ''}`;
                    },
                },
            },
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days of the Week',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    color: '#1F2937',
                },
                ticks: {
                    font: {
                        size: 12,
                        weight: '600',
                    },
                    color: '#4B5563',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Days Completed',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    color: '#1F2937',
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    font: {
                        size: 12,
                        weight: '600',
                    },
                    color: '#4B5563',
                },
            },
        },
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-xl font-semibold text-dark mb-4">Your Habit Progress</h3>
            <Line data={data} options={options} height={300} />
        </div>
    )
}

export default ProgressGraph