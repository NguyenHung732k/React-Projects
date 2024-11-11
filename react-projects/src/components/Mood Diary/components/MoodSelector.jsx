import React from 'react'

const moods = [
    { emoji: "😃", label: "Happy" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😠", label: "Angry" },
    { emoji: "😌", label: "Calm" },
    { emoji: "😕", label: "Confused" },
    { emoji: "😴", label: "Tired" },
]

const MoodSelector = ({ onSelectMood, selectedMood }) => {
    return (
        <div className="flex justify-center space-x-8 mb-6">
            {moods.map((mood, index) => (
                <button
                    key={index}
                    onClick={() => onSelectMood(mood)}
                    className={`text-6xl transition transform hover:scale-125 focus:outline-none ${selectedMood?.emoji === mood.emoji ? 'text-indigo-600' : ''}`}
                    title={mood.label}
                >
                    {mood.emoji}
                </button>
            ))}
        </div>
    )
}

export default MoodSelector