import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const PortfolioChart = ({ data }) => {
    const chartData = {
        labels: data.map((entry) => entry.time),
        datasets: [
            {
                label: 'Portfolio Value',
                data: data.map((entry) => entry.value),
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `Value: $${context.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Portfolio Value ($)',
                },
                beginAtZero: true,
            },
        },
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Portfolio Performance</h2>
            <Line data={chartData} options={chartOptions} />
        </div>
    )
}

export default PortfolioChart