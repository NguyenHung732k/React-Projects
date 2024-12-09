import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import { fetchMovies } from './services/api'

const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchMovies().then(data => setMovies(data))
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList