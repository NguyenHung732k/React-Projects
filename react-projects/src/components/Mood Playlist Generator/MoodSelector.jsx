import React from 'react'
import { FaRegSmile, FaBed, FaBrain } from 'react-icons/fa'

const MoodSelector = ({ setMood }) => {
    const moods = [
        { name: 'Happy', icon: <FaRegSmile size={24} />, color: 'bg-yellow-500' },
        { name: 'Relaxed', icon: <FaBed size={24} />, color: 'bg-blue-400' },
        { name: 'Focused', icon: <FaBrain size={24} />, color: 'bg-green-500' },
    ]

    return (
        <div className="flex justify-center space-x-8 mt-6">
            {moods.map((mood) => (
                <button
                    key={mood.name}
                    onClick={() => setMood(mood.name)}
                    className={`p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl ${mood.color} text-white`}
                >
                    {mood.icon}
                </button>
            ))}
        </div>
    )
}

export default MoodSelector