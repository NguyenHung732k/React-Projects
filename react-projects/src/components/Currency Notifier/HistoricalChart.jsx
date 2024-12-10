import React from 'react'
import { Line } from 'react-chartjs-2'

const HistoricalChart = ({ historicalData }) => {
    const chartData = {
        labels: historicalData.map(item => item.date),
        datasets: [
            {
                label: 'Exchange Rate',
                data: historicalData.map(item => item.rate),
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                fill: false,
            }
        ]
    }

    return <Line data={chartData} />
}

export default HistoricalChart