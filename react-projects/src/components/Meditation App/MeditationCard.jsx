import React from 'react'

const MeditationCard = ({ meditation }) => {
    return (
        <div className="max-w-sm w-96 rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
            <h3 className="font-bold text-xl p-4">{meditation.title}</h3>
            <p className="text-gray-700 p-4">Duration: {meditation.duration} minutes</p>
            <div className="p-4">
                <button className="btn">Start Meditation</button>
            </div>
        </div>
    )
}

export default MeditationCard