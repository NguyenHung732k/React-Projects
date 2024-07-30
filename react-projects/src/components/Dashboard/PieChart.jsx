import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const survivalCounts = data.survival.reduce((accumulator, survived) => {
        accumulator[survived] = (accumulator[survived] || 0) + 1
        return accumulator
    }, {})

    const chartData = {
        labels: ['Survived', 'Not Survived'],
        datasets: [
            {
                label: 'Survival Distribution',
                data: [survivalCounts['1'] || 0, survivalCounts['0'] || 0],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 0.75,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `Count: ${tooltipItem.raw}`,
                },
            },
        },
    }

    return (
        <div className="max-h-fit flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Survival Distribution</h2>
            <Pie style={{ maxWidth: "250px", maxHeight: "250px" }} data={chartData} options={options} />
        </div>
    )
}

export default PieChart