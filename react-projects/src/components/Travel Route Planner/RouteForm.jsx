import React, { useState } from 'react'

const RouteForm = ({ onSubmit }) => {
    const [destinations, setDestinations] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(destinations.split(',').map(dest => dest.trim()))
        setDestinations('')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto my-4">
            <h2 className="text-xl mb-4">Enter Your Destinations</h2>
            <input
                type="text"
                placeholder="e.g., Paris, London, Berlin"
                value={destinations}
                onChange={(event) => setDestinations(event.target.value)}
                className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
                Plan Route
            </button>
        </form>
    )
}

export default RouteForm