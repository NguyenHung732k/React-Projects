import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


const BarChart = ({ data }) => {

    const classSurvivalData = data.class.reduce((accumulator, pclass, index) => {
        if (!accumulator[pclass]) {
            accumulator[pclass] = { survived: 0, total: 0 }
        }
        accumulator[pclass].total += 1
        if (data.survival[index] === '1') {
            accumulator[pclass].survived += 1
        }
        return accumulator
    }, {})

    const classes = Object.keys(classSurvivalData)
    const survivalRates = classes.map(pclass => classSurvivalData[pclass].survived / classSurvivalData[pclass].total * 100)

    const chartData = {
        labels: classes,
        datasets: [
            {
                label: 'Survival Rate by Class',
                data: survivalRates,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
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
                    label: (tooltipItem) => `Class ${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`,
                },
            },
        },
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Survival Rate by Class</h2>
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default BarChart