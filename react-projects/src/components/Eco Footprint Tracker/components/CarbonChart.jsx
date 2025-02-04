import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const CarbonChart = ({ transportation, energyUsage }) => {
  const data = {
    labels: ['Transportation', 'Energy Usage'],
    datasets: [
      {
        data: [transportation, energyUsage],
        backgroundColor: ['#34D399', '#60A5FA'],
        hoverBackgroundColor: ['#16A34A', '#3B82F6'],
      },
    ],
  }

  return (
    <div className="mt-6">
      <Pie data={data} />
    </div>
  )
}

export default CarbonChart