import React from 'react'

const AttractionCard = ({ attraction, onClick }) => {
    return (
        <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer relative group"
            onClick={onClick}
        >
            <img className="w-full h-48 object-cover" src={attraction.image} alt={attraction.name} />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2 text-gray-700">{attraction.name}</p>
                <p className="text-gray-700 text-base">{attraction.description}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg">More Info</span>
            </div>
        </div>
    )
}

export default AttractionCard