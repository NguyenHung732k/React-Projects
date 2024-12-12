import React from 'react'

const Leaderboard = ({ leaderboardData }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
            <ul className="space-y-4">
                {leaderboardData.map((user, index) => (
                    <li key={user.id} className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <span className="font-semibold">{index + 1}. {user.name}</span>
                            {user.badge && <span className="text-sm text-blue-500">🏆 {user.badge}</span>}
                        </div>
                        <span className="font-medium">${user.portfolioValue}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Leaderboard