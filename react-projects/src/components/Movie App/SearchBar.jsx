import React, { useState, useEffect } from 'react'
import axios from 'axios'


const API_KEY = 'dda9b98d'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [showDropdown, setShowDropdown] = useState(false)



    useEffect(() => {
        if (query.length < 3) {
            setMovies([])
            return
        }

        const fetchMovies = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
                setMovies(response.data.Search || [])
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        }

        fetchMovies()
    }, [query])


    const handleClick = (movie) => {
        setQuery(movie.Title)
        onSearch(query)
    }

    const handleChange = (event) => {
        setShowDropdown(true)
        setQuery(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            setHighlightedIndex((prev) => Math.min(prev + 1, movies.length - 1))
        } else if (event.key === 'ArrowUp') {
            setHighlightedIndex((prev) => Math.max(prev - 1, 0))
        } else if (event.key === 'Enter') {
            if (highlightedIndex >= 0 && highlightedIndex < movies.length) {
                handleClick(movies[highlightedIndex])
                setShowDropdown(false)
            }
        }
    }

    return (
        <div className="p-4 w-2/6 mx-auto">
            <div className="flex items-center">
                <input
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for movies"
                />
                <button type="button" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
            {showDropdown && movies.length > 0 && (
                <ul className="w-auto absolute bg-white border border-gray-300 max-h-60 mt-2 p-0 py-0 rounded shadow z-50">
                    {movies.map((movie, index) => (
                        <li
                            key={movie.imdbID}
                            onClick={() => handleClick(movie)}
                            className={index === highlightedIndex ? 'leading-5 text-lg bg-slate-300 mb-1 px-2' : 'leading-5 text-lg mb-1 px-2'}
                        >
                            {movie.Title} ({movie.Year})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar