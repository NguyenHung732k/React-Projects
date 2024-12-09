import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SeatSelection from './SeatSelection'
import { fetchMovies } from './services/api'
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const getMovie = async () => {
            const movies = await fetchMovies()
            const selectedMovie = movies.find(m => m.id === parseInt(movieId))
            setMovie(selectedMovie)
        }
        getMovie()
    }, [movieId])

    if (!movie) {
        return <div>Loading...</div>
    }

    const handleSeatSelection = (seat) => {
        setSelectedSeats(prevSeats => {
            const newSeats = [...prevSeats]
            if (newSeats.includes(seat)) {
                return newSeats.filter(s => s !== seat)
            } else {
                newSeats.push(seat)
            }
            return newSeats
        })
    }

    const handleSubmit = () => {
        setTotalPrice(selectedSeats.length * 10)
        navigate('/payment')
    }

    return (
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Select Your Seats for {movie.title}</h2>
            <SeatSelection selectedSeats={selectedSeats} onSeatClick={handleSeatSelection} />

            <div className="mt-6">
                <h3 className="font-semibold text-lg">Selected Seats:</h3>
                {selectedSeats.length > 0 ? (
                    <ul className="mt-2 text-sm text-gray-600">
                        {selectedSeats.map((seat, index) => (
                            <li key={index} className="mb-2">
                                Seat {seat}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-400">No seats selected yet.</p>
                )}
            </div>

            <div className="mt-6 flex justify-end items-center">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                    disabled={selectedSeats.length === 0}
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    )
}

export default BookingForm