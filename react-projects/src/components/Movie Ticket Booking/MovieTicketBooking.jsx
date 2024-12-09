import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieList from './MovieList'
import BookingForm from './BookingForm'
import Payment from './Payment'
import Confirmation from './Confirmation'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('public-key-here')

const MovieTicketBooking = () => {
    return (
        <Router>
            <Elements stripe={stripePromise}>
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/booking/:movieId" element={<BookingForm />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </Elements>
        </Router>
    )
}

export default MovieTicketBooking