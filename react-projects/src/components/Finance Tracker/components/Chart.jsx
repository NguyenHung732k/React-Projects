import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'


const Chart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                data: data.map(item => item.value),
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            },
        ],
    }

    return (
        <Pie data={chartData} />
    )
}

export default Chart