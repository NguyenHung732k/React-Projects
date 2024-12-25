import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

const EnergyAnalytics = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Energy Consumption (kWh)',
                data: data.map(item => item.consumption),
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                tension: 0.1,
            },
        ],
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Energy Usage Analytics</h3>
            <Line data={chartData} />
        </div>
    )
}

export default EnergyAnalytics