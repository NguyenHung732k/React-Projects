import React from 'react'

const ItineraryList = ({ activities }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Your Itinerary</h2>
            {activities.length === 0 ? (
                <p className="text-gray-500">No activities added yet.</p>
            ) : (
                <ul className="space-y-4">
                    {activities.map((activity, index) => (
                        <li key={index} className="border border-gray-300 p-4 rounded-md shadow-sm">
                            <h3 className="text-lg font-semibold">{activity.destination}</h3>
                            <p>{activity.activity}</p>
                            <p className="text-gray-600">{activity.date}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ItineraryList