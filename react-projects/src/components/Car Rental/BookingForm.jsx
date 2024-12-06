import React, { useState } from 'react'

const BookingForm = ({ car }) => {
    const [pickupDate, setPickupDate] = useState('')
    const [dropoffDate, setDropoffDate] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ pickupDate, dropoffDate, location })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold">Book {car.name}</h2>

            <div>
                <label className="block text-lg font-medium">Pickup Date</label>
                <input
                    type="date"
                    value={pickupDate}
                    onChange={(event) => setPickupDate(event.target.value)}
                    className="w-full p-3 border rounded-lg mt-2"
                />
            </div>

            <div>
                <label className="block text-lg font-medium">Drop-off Date</label>
                <input
                    type="date"
                    value={dropoffDate}
                    onChange={(event) => setDropoffDate(event.target.value)}
                    className="w-full p-3 border rounded-lg mt-2"
                />
            </div>

            <div>
                <label className="block text-lg font-medium">Pickup Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="w-full p-3 border rounded-lg mt-2"
                    placeholder="Enter pickup location"
                />
            </div>

            <button
                type="submit"
                className="bg-primary text-white w-full p-4 rounded-lg hover:bg-blue-600 transition-all duration-200"
            >
                Complete Booking
            </button>
        </form>
    )
}

export default BookingForm