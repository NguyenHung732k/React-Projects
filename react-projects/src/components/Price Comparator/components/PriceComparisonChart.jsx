import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const PriceComparisonChart = ({ item, stores, storePrices }) => {
    const chartData = {
        labels: stores.map((store) => store.name),
        datasets: [
            {
                label: `Price of ${item}`,
                data: stores.map((store) => {
                    const storeData = storePrices.find((price) => price.storeId === store.id)
                    const priceData = storeData ? storeData.priceList.find((p) => p.item === item) : null
                    return priceData ? priceData.price : 0
                }),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `$${value.toFixed(2)}`,
                },
            },
        },
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center mb-4">Price Comparison for "{item}"</h3>
            <Bar data={chartData} options={chartOptions} />
        </div>
    )
}

export default PriceComparisonChart