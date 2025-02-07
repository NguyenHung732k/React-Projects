import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameContext } from '../context/GameContext'

const CluePage = () => {
    const { location, user } = useGameContext()
    const [answer, setAnswer] = useState('')
    const [clue, setClue] = useState({
        question: "What has keys but can't open locks?",
        hint: "Think about music.",
        answer: "Piano",
        gpsCoordinates: { lat: 40.748817, lng: -73.985428 },
    })
    const navigate = useNavigate()

    const checkAnswer = () => {
        if (answer.toLowerCase() === clue.answer.toLowerCase()) {
            navigate("/completed")
        } else {
            alert('Wrong answer! Try again!')
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">{clue.question}</h2>
            <p className="mb-6 text-sm text-gray-600">{clue.hint}</p>
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your answer"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                    onClick={checkAnswer}
                >
                    Submit Answer
                </button>
            </div>
            <p className="mt-4 text-gray-600">
                Current Location: {location.lat ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : 'Loading...'}
            </p>
        </div>
    )
}

export default CluePage