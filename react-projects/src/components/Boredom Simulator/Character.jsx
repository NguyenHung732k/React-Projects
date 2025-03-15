import React, { useState, useEffect } from "react"
import Confetti from "react-confetti"
import "./Character.css"

const actions = [
    "tapping feet",
    "sliding down slide",
    "juggling",
    "dancing",
    "exploding into confetti",
]

const Character = () => {
    const [boredomLevel, setBoredomLevel] = useState(0)
    const [currentAction, setCurrentAction] = useState(actions[0])
    const [isExploding, setIsExploding] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (boredomLevel < actions.length - 1) {
                setBoredomLevel((prev) => {
                    const newLevel = prev + 1
                    setCurrentAction(actions[newLevel])
                    return newLevel
                })
            } else {
                setIsExploding(true)
                clearInterval(interval)
            }
        }, 3000)
        return () => clearInterval(interval)
    }, [boredomLevel])

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        {isExploding && <Confetti />}
            <div className="max-w-lg w-full p-8 bg-white shadow-xl rounded-xl">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Boredom Simulator</h1>
                <div className="flex justify-center mb-6">
                    <div className={`character ${isExploding ? "explode" : currentAction}`}>
                        {isExploding ? (
                            <div className="confetti text-6xl animate-pulse">🎉💥🎉</div>
                            
                        ) : (
                            <div className="action text-xl font-medium">{currentAction}</div>
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-center text-xl font-semibold text-gray-700">Boredom Level: {boredomLevel + 1}</p>
                    <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                        <div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                            style={{ width: `${(boredomLevel / actions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => setBoredomLevel((prev) => Math.min(prev + 1, actions.length - 1))}
                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md focus:outline-none transition-all duration-300"
                    >
                        Make Them More Bored
                    </button>
                    <button
                        onClick={() => setBoredomLevel(0)}
                        className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md focus:outline-none transition-all duration-300"
                    >
                        Reset Boredom
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Character