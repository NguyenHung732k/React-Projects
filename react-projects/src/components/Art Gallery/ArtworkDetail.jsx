import React from 'react'

import notFound from '../../assets/img-not-available.jpg'

const ArtworkDetail = ({ artwork, onClose }) => {
    if (!artwork) return null


    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg max-w-lg mx-auto relative shadow-xl transition-transform transform scale-100 hover:scale-105">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>
                <img src={artwork.image ? artwork.image : notFound} alt={artwork.title} className="w-full h-72 object-cover mb-4 rounded-lg" />
                <h2 className="text-3xl font-bold mb-2">{artwork.title}</h2>
                <p className="text-xl text-gray-800 mb-4">by {artwork.artist}</p>
                <p className="text-gray-700">{artwork.description}</p>
            </div>
        </div>
    )
}

export default ArtworkDetail