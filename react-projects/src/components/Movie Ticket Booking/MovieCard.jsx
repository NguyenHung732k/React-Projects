import React from 'react'
import { Link } from 'react-router-dom'


const MovieCard = ({ movie }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover hover:opacity-80 transition-opacity duration-300"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.genre}</p>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-yellow-500">{movie.rating}</span>
                    <span className="text-xs text-gray-400">{movie.releaseDate}</span>
                </div>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    <Link
                        to={`/booking/${movie.id}`}
                        className="my-4 bg-blue-500 text-white py-2 px-4 rounded-md text-decoration-none hover:bg-blue-600 transition-colors"
                    >
                        Book Now
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default MovieCard