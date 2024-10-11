import React from 'react'

const Itinerary = ({ destinations }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-xl mb-4">Your Itinerary:</h2>
            <ul className="list-disc pl-5">
                {destinations.map((dest, index) => (
                    <li key={index} className="p-2 border-b last:border-b-0">
                        {dest}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Itinerary