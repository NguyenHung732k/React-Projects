import React from 'react'
import { Link } from 'react-router-dom'
import { useGameContext } from '../context/GameContext'

const GameCompleted = () => {
    const { user } = useGameContext()

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center">
                <h2 className="text-2xl font-bold text-green-600">Congratulations, {user.name}!</h2>
                <p className="mt-4">You successfully completed the treasure hunt!</p>
                <p className="text-xl mt-4">Your reward: <span className="font-bold">100 points</span></p>
                <Link to="/profile">
                    <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all">
                        Claim Your Prize
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default GameCompleted