import React, { useState } from 'react'
import Leaderboard from './components/Leaderboard'
import AddScoreForm from './components/AddScoreForm'

const GameLeaderboard = () => {
    const [scores, setScores] = useState([
        { id: 1, player: 'Player1', score: 1500 },
        { id: 2, player: 'Player2', score: 1200 },
        { id: 3, player: 'Player3', score: 1800 },
    ])

    const [filter, setFilter] = useState('')
    const [sortOrder, setSortOrder] = useState('asc')

    const addScore = (newScore) => {
        setScores([...scores, newScore])
    }

    const filteredScores = scores
        .filter(score => score.player.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => (sortOrder === 'asc' ? a.score - b.score : b.score - a.score))

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white p-4 text-center shadow-md">
                <h1 className="text-3xl font-bold">Game Leaderboard</h1>
            </header>
            <main className="flex-grow p-4">
                <AddScoreForm addScore={addScore} />
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Filter by player"
                        className="border p-2 mb-4 w-full md:w-1/3 mr-2 rounded"
                        onChange={(event) => setFilter(event.target.value)}
                    />
                    <select
                        onChange={(event) => setSortOrder(event.target.value)}
                        className="border p-2 mb-4 w-full md:w-1/3 rounded"
                    >
                        <option value="asc">Sort by Score Ascending</option>
                        <option value="desc">Sort by Score Descending</option>
                    </select>
                </div>
                <Leaderboard scores={filteredScores} />
            </main>
        </div>
    )
}

export default GameLeaderboard