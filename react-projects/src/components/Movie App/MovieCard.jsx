import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.imdbID}`} class="bg-white border border-gray-200 rounded-lg shadow text-decoration-none">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-[480px] object-cover rounded" />

            <div className="flex flex-col gap-2 p-4">
                <div className="text-3xl text-black mt-2 block text-decoration-none">{movie.Title}</div>
                <h4 className="text-black">{movie.Year}</h4>
            </div>
        </Link>


    )
}

export default MovieCard