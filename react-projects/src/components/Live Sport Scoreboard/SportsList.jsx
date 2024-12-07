import React from 'react'

const sports = ['Soccer', 'Basketball', 'Tennis', 'Baseball']

const SportsList = ({ onSelectSport }) => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sports.map((sport, index) => (
                <button
                    key={index}
                    onClick={() => onSelectSport(sport)}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg transition duration-300 transform hover:bg-blue-600 hover:scale-105 focus:outline-none"
                >
                    {sport}
                </button>
            ))}
        </div>
    )
}

export default SportsList