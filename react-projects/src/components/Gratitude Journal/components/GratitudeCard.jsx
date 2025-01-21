import React from 'react'

const GratitudeCard = ({ entry, mood, date }) => {
    const moodEmojis = {
        Happy: '😊',
        Neutral: '😐',
        Sad: '😞',
        Angry: '😡',
        Calm: '😌'
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-xl w-full max-w-5xl mx-auto mb-6">
            <p className="mt-2 text-sm text-gray-500">
                <strong>Date:</strong> {date}
            </p>
            <p className="mt-4 text-sm text-gray-600">
                <strong>Mood:</strong>
                <span className={`font-semibold ml-2 ${mood === 'Happy' ? 'text-green-500' : mood === 'Sad' ? 'text-blue-500' : mood === 'Angry' ? 'text-red-500' : mood === 'Calm' ? 'text-gray-500' : 'text-yellow-500'}`}>
                    {moodEmojis[mood]} {mood}
                </span>
            </p>
            <p className="text-lg text-gray-800 italic">{entry}</p>
        </div>
    )
}

export default GratitudeCard