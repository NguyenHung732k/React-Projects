import React, { useState } from 'react'
import { toast } from 'react-toastify'

const VolunteerForm = ({ onAdd }) => {

    const [hours, setHours] = useState('')
    const [activity, setActivity] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onAdd({ hours, activity })
        setHours('')
        setActivity('')
        toast.success('Volunteer hour added successfully!')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 m-6">
            <h3 className="text-lg font-semibold mb-4">Add Donation</h3>
            <div className="flex space-x-4">
                <input
                    type="number"
                    value={hours}
                    onChange={(event) => setHours(event.target.value)}
                    placeholder="Amount"
                    required
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={activity}
                    onChange={(event) => setActivity(event.target.value)}
                    placeholder="Cause"
                    required
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 transition">
                    Add
                </button>
            </div>

        </form>
    )
}

export default VolunteerForm