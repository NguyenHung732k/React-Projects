import React, { useState } from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'

const WatchList = () => {

    const [movies, setMovies] = useState([])


    const addMovie = (movie) => {
        setMovies([...movies, movie])
    }

    const markAsWatched = (id) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, watched: !movie.watched } : movie
        ))
    }

    const rateMovie = (id, rating) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, rating } : movie
        ))
    }

    const addNote = (id, note) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, notes: note } : movie
        ))
    }

    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id))
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Movie Watchlist</h1>
                <MovieForm addMovie={addMovie} />
                <MovieList
                    movies={movies}
                    markAsWatched={markAsWatched}
                    rateMovie={rateMovie}
                    addNote={addNote}
                    deleteMovie={deleteMovie}
                />
            </div>
        </div>
    )
}

export default WatchList