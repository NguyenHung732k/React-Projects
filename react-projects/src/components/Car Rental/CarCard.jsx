import React from 'react'
import { Link } from 'react-router-dom'

import imgNotFound from '../../assets/img-not-available.jpg'

const CarCard = ({ car }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={car.image || imgNotFound} alt={car.name} className="w-full h-60 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{car.name}</h2>
                <p className="text-gray-600 mt-2">{car.description}</p>
                <div className="flex justify-between mt-4">
                    <span className="font-semibold text-xl">${car.price}/day</span>

                    <Link to={`/car/${car.id}`} className="bg-primary text-white px-4 py-2 rounded-lg text-decoration-none hover:bg-blue-600 transition-all duration-200">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarCard