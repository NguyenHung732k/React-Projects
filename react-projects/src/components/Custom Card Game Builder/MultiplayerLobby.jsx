import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MultiplayerLobby = () => {
    const [gameCode, setGameCode] = useState('')
    const navigate = useNavigate()

    const handleGameCodeChange = (event) => setGameCode(event.target.value)

    const handleJoinGame = () => {
        if (gameCode) {
            navigate(`/game/${gameCode}`)
        } else {
            alert('Please enter a valid game code.')
        }
    }

    return (
        <div className="flex justify-center items-center space-x-8 p-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3 text-center">
                <h3 className="text-xl font-semibold mb-4">Host a Game</h3>
                <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition" onClick={() => alert('Hosting game...')}>
                    Host Game
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-1/3 text-center">
                <h3 className="text-xl font-semibold mb-4">Join a Game</h3>
                <input
                    type="text"
                    placeholder="Enter Game Code"
                    className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={gameCode}
                    onChange={handleGameCodeChange}
                />
                <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                    onClick={handleJoinGame}
                >
                    Join Game
                </button>
            </div>
        </div>
    )
}

export default MultiplayerLobby