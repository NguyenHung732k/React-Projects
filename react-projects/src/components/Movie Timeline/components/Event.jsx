import React from 'react'

const Event = ({ event }) => {
    return (
        <div className="w-96 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
            <h2 className="font-bold text-2xl text-gray-800 mb-3 hover:text-blue-600 transition duration-200">
                {event.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4">{event.description}</p>

            {event.media && (
                <div className="media-container">
                    <img
                        src={event.media}
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                </div>
            )}
        </div>
    )
}

export default Event