import React, { useState } from 'react'

const ItineraryForm = ({ addActivity }) => {

    const [destination, setDestination] = useState('')
    const [activity, setActivity] = useState('')
    const [date, setDate] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addActivity({ destination, activity, date })
        setDestination('')
        setActivity('')
        setDate('')
        setMessage('Activity added successfully!')
        setTimeout(() => setMessage(''), 3000)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Add New Activity</h2>
            {message && <p className="bg-green-100 text-green-700 p-2 rounded-md mb-4">{message}</p>}
            <div className="mb-4">
                <label className="block text-gray-700">Destination:</label>
                <input
                    type="text"
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Activity:</label>
                <input
                    type="text"
                    value={activity}
                    onChange={(event) => setActivity(event.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-md"
                    required
                />
            </div>
            <button type="submit" className="bg-[#1D4ED8] text-white p-2 rounded-md hover:bg-primary-dark">
                Add Activity
            </button>
        </form>
    )
}

export default ItineraryForm