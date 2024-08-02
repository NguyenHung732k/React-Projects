import React, { useEffect, useState } from 'react'
import axios from 'axios'

import SearchBar from '../SearchBar'
import MovieCard from '../MovieCard'

const API_KEY = 'dda9b98d'


const Home = () => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`)
                setMovies(response.data.Search || [])
            } catch (error) {
                console.error('Error fetching image:', error)
            }
        }

        fetchMovies()
    }, [])



    const searchMovies = async (query) => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
        setMovies(response.data.Search || [])

        console.log(response.data)
    }


    return (
        <div className="w-screen flex flex-col justify-center items-center">
            <SearchBar onSearch={searchMovies} />
            <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-16">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home