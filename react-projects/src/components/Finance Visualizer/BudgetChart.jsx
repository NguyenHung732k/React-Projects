import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement)

const BudgetChart = ({ data }) => {
    const chartData = {
        labels: ['Income', 'Expenses'],
        datasets: [
            {
                label: 'Monthly Budget',
                data: [data.income, data.expenses],
                backgroundColor: ['#38b2ac', '#e53e3e'],
            },
        ],
    }

    return (
        <div className="relative">
            <div className="w-full h-64 md:h-80">
                <Bar data={chartData} />
            </div>
        </div>
    )
}

export default BudgetChart