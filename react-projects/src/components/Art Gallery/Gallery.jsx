import React from 'react'

import notFound from '../../assets/img-not-available.jpg'

const Gallery = ({ artworks, onSelect }) => {
    return (
        <div className="flex justify-center items-center gap-8 p-8">
            {artworks.map((artwork) => (
                <div
                    key={artwork.id}
                    className="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer shadow-lg"
                    onClick={() => onSelect(artwork)}
                >
                    <img src={artworks.image ? artwork.image : notFound} alt={artwork.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{artwork.title}</h3>
                        <p className="text-sm text-gray-600">{artwork.artist}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Gallery