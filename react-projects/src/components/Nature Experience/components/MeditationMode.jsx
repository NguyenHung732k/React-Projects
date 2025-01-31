import React from 'react'

const MeditationMode = ({ isActive, setMeditationActive }) => {
    return isActive ? (
        <div className="absolute inset-0 bg-black opacity-70 flex flex-col items-center justify-center text-white p-6">
            <div className="text-xl font-semibold text-center mb-4">
                <p>Focus on your breath...</p>
                <p>Relax and listen to the sounds around you.</p>
            </div>
            <button
                className="bg-indigo-600 p-3 rounded-lg text-white text-lg"
                onClick={() => setMeditationActive(false)}
            >
                Stop Meditation
            </button>
        </div>
    ) : null
}

export default MeditationMode