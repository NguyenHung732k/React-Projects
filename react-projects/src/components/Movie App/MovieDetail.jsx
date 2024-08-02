import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const API_KEY = 'dda9b98d'


const MovieDetail = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)


    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
                setMovie(response.data)
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        }

        fetchMovies()

    }, [id])

    if (!movie) return <div>Loading...</div>

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">{movie.Title}</h2>
            <p>{movie.Year}</p>
            <div className="max-w-screen-xl flex justify-center items-start gap-8 p-8">
                <img src={movie.Poster} alt={movie.Title} className="w-96 h-96 object-cover" />
                <div className="flex flex-col justify-start items-start">
                    <h3>Plot:</h3>
                    <p className="mt-2 ml-8">{movie.Plot}</p>
                    <div className="flex flex-col gap-3 mt-4">
                        <h5> <span>{movie.Rated}</span> </h5>
                        <h5><span>{movie.Runtime}</span> </h5>
                        <h5> <span>{movie.Genre}</span> </h5>
                        <h5> <span>{movie.Director}</span> </h5>
                        <h5>Actors: <span>{movie.Actors}</span> </h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail