import React from 'react'

const InfoModal = ({ attraction, onClose }) => {
    if (!attraction) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 max-w-lg mx-auto dark:bg-gray-900">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{attraction.name}</h2>
                <img className="w-full h-48 object-cover mb-4 dark:text-white" src={attraction.image} alt={attraction.name} />
                <p className="text-gray-700 mb-4 dark:text-white">{attraction.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default InfoModal