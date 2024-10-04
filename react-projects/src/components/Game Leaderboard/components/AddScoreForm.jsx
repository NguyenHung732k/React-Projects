import React, { useState } from 'react'

const AddScoreForm = ({ addScore }) => {
    const [player, setPlayer] = useState('')
    const [score, setScore] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!player || !score) {
            setError('Both fields are required.')
            return
        }
        setError('')
        const newScore = {
            id: Date.now(),
            player,
            score: parseInt(score, 10),
        }
        addScore(newScore)
        setPlayer('')
        setScore('')
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex flex-col md:flex-row md:space-x-2 p-4 border rounded-lg shadow-md bg-white">
            <input
                type="text"
                placeholder="Player Name"
                value={player}
                onChange={(event) => setPlayer(event.target.value)}
                className={`border p-2 flex-1 rounded ${error ? 'border-red-500' : ''}`}
                required
            />
            <input
                type="number"
                placeholder="Score"
                value={score}
                onChange={(event) => setScore(event.target.value)}
                className={`border p-2 flex-1 rounded ${error ? 'border-red-500' : ''}`}
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded transition hover:bg-blue-700"
            >
                Add Score
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    )
}

export default AddScoreForm