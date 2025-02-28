import React, { useState } from 'react'

const DifficultySelector = ({ level, setDifficulty }) => {

    const handleDifficultyChange = (level) => {
        setDifficulty(level)
    }

    return (
        <div className="mb-6 text-center">
            <p className="text-lg font-semibold mb-3">Select Difficulty: {level} </p>
            <div className="flex justify-center items-center space-x-4">
                <button
                    className="p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
                    onClick={() => handleDifficultyChange('Easy')}
                >
                    <p>Easy</p>
                </button>
                <button
                    className="p-4 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-200"
                    onClick={() => handleDifficultyChange('Medium')}
                >
                    <p>Medium</p>
                </button>
                <button
                    className="p-4 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-200"
                    onClick={() => handleDifficultyChange('Hard')}
                >
                    <p>Hard</p>
                </button>
            </div>
        </div>
    )
}

export default DifficultySelector