import React, { useState } from "react"

const MoodTracker = () => {
    const [mood, setMood] = useState("")

    const handleMoodChange = (event) => {
        setMood(event.target.value)
    }

    return (
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-6 transition-all">
            <h2 className="text-2xl text-gray-700 font-medium mb-4">Mood Tracker</h2>
            <input
                type="text"
                value={mood}
                onChange={handleMoodChange}
                placeholder="How are you feeling today?"
                className="border-2 border-gray-300 p-4 rounded-xl w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <p className="mt-4 text-lg text-gray-600">Your mood: {mood}</p>
        </div>
    )
}

export default MoodTracker