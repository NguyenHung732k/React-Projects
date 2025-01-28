import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { useState, useEffect } from "react"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Analytics = ({ dreams }) => {
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        const tagCounts = {}
        dreams.forEach((dream) => {
            dream.tags.forEach((tag) => {
                tagCounts[tag] = tagCounts[tag] ? tagCounts[tag] + 1 : 1
            })
        })

        const labels = Object.keys(tagCounts)
        const data = labels.map((label) => tagCounts[label])

        setChartData({
            labels,
            datasets: [
                {
                    label: "Tag Frequency",
                    data,
                    backgroundColor: "rgba(67, 56, 200, 0.2)",
                    borderColor: "rgba(67, 56, 200, 1)",
                    borderWidth: 1,
                },
            ],
        })
    }, [dreams])

    return (
        <div className="bg-indigo-100 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Dream Analytics</h3>
            {chartData ? (
                <Bar data={chartData} />
            ) : (
                <div className="text-gray-500">No data available.</div>
            )}
        </div>
    )
}

export default Analytics