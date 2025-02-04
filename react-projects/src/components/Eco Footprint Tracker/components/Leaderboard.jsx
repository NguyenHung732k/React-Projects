import React from 'react'

const Leaderboard = () => {
    const users = [
        { name: 'Alice', points: 120, rank: 1 },
        { name: 'Bob', points: 100, rank: 2 },
        { name: 'Charlie', points: 90, rank: 3 },
    ]

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">Leaderboard</h2>
            <div className="space-y-4">
                {users.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
                        <div className="flex items-center gap-4">
                            <span className={`text-3xl ${user.rank === 1 ? 'text-yellow-500' : user.rank === 2 ? 'text-gray-400' : 'text-gray-500'}`}>
                                #{user.rank}
                            </span>
                            <p className="text-lg font-semibold text-gray-800 p-0 m-0">{user.name}</p>
                        </div>
                        <p className="text-lg font-semibold text-green-600 p-0 m-0">{user.points} points</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard