import React, { useState } from 'react'

const LibraryPage = () => {
    const [favorites, setFavorites] = useState([
        { title: 'A Night at the Fire', isFavorite: true },
        { title: 'Tales from the Woods', isFavorite: false },
    ])

    const toggleFavorite = (index) => {
        const newFavorites = [...favorites]
        newFavorites[index].isFavorite = !newFavorites[index].isFavorite
        setFavorites(newFavorites)
    }

    return (
        <div className="h-screen flex flex-col items-center space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Your Story Library</h2>

            <div className="space-y-4 w-full max-w-md">
                {favorites.map((story, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <i className="fas fa-bookmark text-yellow-500"></i>
                            <p className="text-white my-0">{story.title}</p>
                        </div>
                        <button
                            className="text-yellow-500"
                            onClick={() => toggleFavorite(index)}
                        >
                            <i className={`fas fa-heart ${story.isFavorite ? 'text-red-500' : ''}`}></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LibraryPage