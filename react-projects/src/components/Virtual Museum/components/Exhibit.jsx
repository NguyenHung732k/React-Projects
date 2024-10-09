import React from 'react'

const Exhibit = ({ exhibit, onClick }) => {
    return (
        <div className="exhibit-card max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
            <img className="w-full h-48 object-cover" src={exhibit.image} alt={exhibit.title} />
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{exhibit.title}</h3>
                <p className="text-gray-600 text-base">{exhibit.description}</p>
                <button onClick={() => onClick(exhibit.id)} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    View Details
                </button>
            </div>
        </div>
    )
}

export default Exhibit