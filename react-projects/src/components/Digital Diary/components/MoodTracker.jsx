import React from 'react'

const MoodTracker = ({ setMood }) => {
    const moods = ['😊 Happy', '😃 Excited', '😐 Neutral', '😟 Anxious', '😢 Sad']

    return (
        <div className="flex space-x-4 mb-4">
            {moods.map((mood) => (
                <button
                    key={mood}
                    onClick={() => setMood(mood)}
                    className="p-2 border border-blue-300 bg-white hover:bg-blue-100 transition rounded-full shadow-md"
                >
                    {mood}
                </button>
            ))}
        </div>
    )
}

export default MoodTracker