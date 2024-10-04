import React from 'react'

const Leaderboard = ({ scores }) => {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Leaderboard</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 border-b">Rank</th>
                        <th className="py-2 border-b">Player</th>
                        <th className="py-2 border-b">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={score.id} className="hover:bg-gray-100 transition duration-150">
                            <td className="py-2 border-b text-center">{index + 1}</td>
                            <td className="py-2 border-b text-center">{score.player}</td>
                            <td className="py-2 border-b text-center">{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard