import React from 'react'
import { motion } from 'framer-motion'
import useTimelineStore from './useTimelineStore'


const events = [
    { id: 1, title: 'Event 1', description: 'Details about event 1', date: '2024-01-01' },
    { id: 2, title: 'Event 2', description: 'Details about event 2', date: '2024-02-01' },
    { id: 3, title: 'Event 3', description: 'Details about event 3', date: '2024-02-01' },
    { id: 4, title: 'Event 4', description: 'Details about event 4', date: '2024-02-01' },
    { id: 5, title: 'Event 5', description: 'Details about event 5', date: '2024-02-01' },
    { id: 6, title: 'Event 6', description: 'Details about event 6', date: '2024-02-01' },
]


const Timeline = () => {
    const { selectedEvent, setSelectedEvent, clearSelectedEvent } = useTimelineStore()



    const handleClick = (event) => {
        setSelectedEvent(event)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center gap-8">
            {/* <div className="absolute top-0 left-1/2 w-1 bg-gray-300 h-full hidden md:block"></div> */}
            <div className="flex flex-col items-center space-y-6">
                {events.map(event => (
                    <div key={event.id} className="relative flex items-center group">
                        <div
                            className="bg-blue-600 w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 transform group-hover:scale-125"
                            onClick={() => setSelectedEvent(event)}
                        />
                        <div className="ml-6 md:ml-8">
                            <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                            <p className="text-gray-500 text-sm">{event.date}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-full max-w-md"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800">{selectedEvent.title}</h2>
                    <p className="text-gray-700 mt-2">{selectedEvent.description}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => clearSelectedEvent()}
                    >
                        Close
                    </button>
                </motion.div>
            )}
        </div>
    )
}

export default Timeline