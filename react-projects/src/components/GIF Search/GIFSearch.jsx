import React, { useState, useEffect } from 'react'
import axios from 'axios'


const GIFSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [gifs, setGifs] = useState([])
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (searchTerm) {
            setIsLoading(true)
            axios
                .get(`https://api.giphy.com/v1/gifs/search`, {
                    params: {
                        q: searchTerm,
                        api_key: process.env.REACT_APP_GIPHY_API_KEY,
                        limit: 12,
                    },
                })
                .then((response) => {
                    setGifs(response.data.data)
                })
                .catch((error) => console.error("Error fetching gifs", error))
                .finally(() => setIsLoading(false))
        }
    }, [searchTerm])

    const handleFavorite = (gif) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some(fav => fav.id === gif.id)
            if (isFavorite) {
                return prevFavorites.filter(fav => fav.id !== gif.id)
            } else {
                return [...prevFavorites, gif]
            }
        })
    }

    const handleClearSearch = () => {
        setSearchTerm('')
        setGifs([])
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <h1 className="text-4xl font-extrabold text-indigo-600 mb-8">GIF Search & Favorites</h1>

            <div className="flex items-center w-full max-w-md mb-6">
                <input
                    type="text"
                    placeholder="Search for GIFs..."
                    className="px-4 py-2 mr-2 w-full rounded-lg border border-gray-300 shadow-md focus:outline-none"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button
                    onClick={handleClearSearch}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                >
                    Clear
                </button>
            </div>

            {isLoading && (
                <div className="flex justify-center items-center w-full">
                    <div className="w-8 h-8 border-4 border-t-4 border-indigo-600 rounded-full animate-spin"></div>
                </div>
            )}

            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 transition-all ease-in-out duration-300`}>
                {gifs.map((gif) => (
                    <div
                        key={gif.id}
                        className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                        onClick={() => handleFavorite(gif)}
                    >
                        <img
                            src={gif.images.fixed_height.url}
                            alt={gif.title}
                            className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                            {favorites.some(fav => fav.id === gif.id) ? 'Unfavorite' : 'Favorite'}
                        </div>
                    </div>
                ))}
            </div>

            {/* Favorites Section */}
            {favorites.length > 0 && (
                <div className="mt-12 w-full max-w-5xl">
                    <h2 className="text-2xl font-bold text-indigo-500 mb-6">Your Favorites</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {favorites.map((gif) => (
                            <div key={gif.id} className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={gif.images.fixed_height.url}
                                    alt={gif.title}
                                    className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                                    Unfavorite
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default GIFSearch