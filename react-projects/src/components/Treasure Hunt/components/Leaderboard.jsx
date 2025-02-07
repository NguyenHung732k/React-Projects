import React from 'react'

const Leaderboard = ({ players }) => {
    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index} className="flex justify-between py-2">
                        <span>{player.name}</span>
                        <span>{player.score} points</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Leaderboard