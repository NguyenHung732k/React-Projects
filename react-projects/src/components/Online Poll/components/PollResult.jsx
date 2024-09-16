import { Bar } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const PollResult = ({ poll }) => {
    const data = {
        labels: poll.options,
        datasets: [
            {
                label: 'Votes',
                data: poll.votes,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'rgba(53, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className="bg-white p-6 rounded-lg mx-auto max-w-lg mt-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Results for "{poll.question}"</h2>
            <div className="flex justify-center gap-20">
                <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
                <Pie data={data} />
            </div>
        </div>
    )
}

export default PollResult