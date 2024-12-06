import React from 'react'
import { useParams } from 'react-router-dom'
import BookingForm from './BookingForm'

import imgNotFound from '../../assets/img-not-available.jpg'


const CarDetails = ({ cars }) => {
    const { carId } = useParams()
    const car = cars.find((car) => car.id === carId)

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{car.name}</h1>
            <img src={car.image || imgNotFound} alt={car.name} className="w-full h-96 object-cover mt-4" />
            <p className="mt-4">{car.description}</p>
            <div className="mt-6">
                <span className="text-xl font-semibold">${car.price}/day</span>
            </div>
            <BookingForm car={car} />
        </div>
    )
}

export default CarDetails