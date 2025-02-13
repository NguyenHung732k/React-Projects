import React from 'react'
import { Bar } from 'react-chartjs-2'

const VoteResults = ({ pollResults }) => {
    const data = {
        labels: pollResults.map((result) => result.name),
        datasets: [
            {
                label: 'Votes',
                data: pollResults.map((result) => result.voteCount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-2xl font-semibold mb-6">Poll Results</h2>
            <Bar data={data} />
        </div>
    )
}

export default VoteResults