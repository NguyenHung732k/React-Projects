import { useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

const Timeline = () => {
    const [events, setEvents] = useState([
        { year: 1990, event: 'John Doe was born' },
        { year: 2015, event: 'Jane Doe was married' },
    ])

    return (
        <div className="space-y-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4">Relationship Timeline</h2>
            <div className="space-y-3">
                {events.map((event, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div className="relative w-8 h-8 bg-blue-500 text-white flex justify-center items-center rounded-full">
                            <FaCalendarAlt className="w-4 h-4" />
                        </div>
                        <div className="flex-1 border-l-4 border-gray-300 pl-4">
                            <p className="text-lg font-semibold text-blue-500">{event.year}</p>
                            <p className="text-gray-600">{event.event}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline