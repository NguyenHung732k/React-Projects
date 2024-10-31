import React from 'react'

const ArtGallery = ({ artworks }) => {
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-auto">
            {artworks.map(art => (
                <div key={art.id} className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                    <img src={art.imageUrl} alt={art.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">{art.title}</h2>
                        <p className="text-gray-600">{art.artist}</p>
                        <p className="text-yellow-500">{`⭐ ${art.rating}`}</p>
                        <button className="mt-2 bg-blue-500 text-white rounded px-4 py-2">Request Commission</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArtGallery