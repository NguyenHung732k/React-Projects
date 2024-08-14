import React from 'react'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js'


ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend)



const Chart = ({ labels, data }) => {

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Price',
                data: data,
                borderColor: '#4F46E5',
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderWidth: 2,
                fill: true,
            }
        ]
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <Line style={{ minWidth: "600px", minHeight: "300px"}} data={chartData} />
        </div>
    )
}

export default Chart