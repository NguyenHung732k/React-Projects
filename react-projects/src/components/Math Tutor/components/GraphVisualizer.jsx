import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js'

const GraphVisualizer = ({ data }) => {
    const chartData = {
        labels: data.x,
        datasets: [
            {
                label: 'Equation Graph',
                data: data.y,
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
            },
        ],
    }

    return <Line data={chartData} />
}

export default GraphVisualizer