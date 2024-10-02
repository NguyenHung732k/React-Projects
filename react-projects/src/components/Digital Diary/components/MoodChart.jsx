import React from 'react'
import { Bar } from 'react-chartjs-2'

const MoodChart = ({ entries }) => {
    const moodCounts = {}

    entries.forEach(entry => {
        moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1
    })

    const data = {
        labels: Object.keys(moodCounts),
        datasets: [
            {
                label: 'Mood Counts',
                data: Object.values(moodCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    }

    return (
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl mb-4 font-semibold">Mood Trends</h2>
            <Bar data={data} />
        </div>
    )
}

export default MoodChart