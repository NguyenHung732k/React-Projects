import React from 'react'

const ExhibitDetail = ({ exhibit, onClose }) => {

    if (!exhibit) return null


    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${exhibit ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                <h2 className="text-2xl font-bold">{exhibit.title}</h2>
                <img src={exhibit.image} alt={exhibit.title} className="w-full my-4 h-48 object-cover" />
                <p>{exhibit.description}</p>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl">&times;</button>
            </div>
        </div>
    )
}

export default ExhibitDetail