import React from 'react'
import Event from './Event'

const Timeline = ({ events }) => {
    return (
        <div className="timeline-container mt-12 px-4 sm:px-6 md:px-12">
            {events.length === 0 ? (
                <p className="text-center text-xl text-gray-500 mt-12">No events added yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {events.map((event) => (
                        <Event key={event.id} event={event} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Timeline