import React from 'react'

const MoodSelector = ({ setMood }) => {
    const moods = ['Happy', 'Sad', 'Anxious', 'Angry', 'Relaxed'];

    return (
        <div className="flex space-x-4 mb-4 justify-center">
            {moods.map(mood => (
                <div
                    key={mood}
                    onClick={() => setMood(mood)}
                    className={`w-16 h-16 flex items-center justify-center rounded-full cursor-pointer 
                                ${mood === 'Happy' ? 'bg-yellow-300' :
                            mood === 'Sad' ? 'bg-blue-300' :
                                mood === 'Anxious' ? 'bg-red-300' :
                                    mood === 'Angry' ? 'bg-orange-400' :
                                        'bg-green-300'} 
                                hover:scale-105 transition-transform`}
                >
                    <span className="text-xl font-bold text-white">{mood.charAt(0)}</span>
                </div>
            ))}
        </div>
    )
}

export default MoodSelector