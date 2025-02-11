import React, { useState, useEffect } from "react"

const Streaks = () => {
    const [streak, setStreak] = useState(0)

    useEffect(() => {
        const savedStreak = localStorage.getItem("streak")
        if (savedStreak) {
            setStreak(Number(savedStreak))
        }
    }, [])

    const handleActivityCompletion = () => {
        setStreak(streak + 1)
        localStorage.setItem("streak", streak + 1)
    }

    return (
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-6 transition-all">
            <h2 className="text-2xl text-gray-700 font-medium mb-4">Your Streak</h2>
            <p className="mb-4 text-xl text-gray-800">Days of completed self-care activities: {streak}</p>
            <button
                onClick={handleActivityCompletion}
                className="bg-blue-500 text-white p-4 rounded-xl w-full font-semibold hover:bg-blue-600 transition-all">
                Complete Activity
            </button>
        </div>
    )
}

export default Streaks