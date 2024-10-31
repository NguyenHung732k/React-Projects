import React from 'react'

const ArtistProfile = ({ artist }) => {
    return (
        <div className="h-screen mx-auto p-4">
            <h1 className="text-3xl font-bold">{artist.name}</h1>
            <p className="text-gray-600">{artist.bio}</p>
            <h2 className="text-xl font-semibold mt-4">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {artist.artworks.map((art) => (
                    <div key={art.id} className="border rounded-lg shadow-md overflow-hidden">
                        <img src={art.imageUrl} alt={art.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold">{art.title}</h3>
                            <p className="text-gray-600">{`⭐ ${art.rating}`}</p>
                            <button className="mt-2 bg-blue-500 text-white rounded px-4 py-2">
                                Request Commission
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArtistProfile