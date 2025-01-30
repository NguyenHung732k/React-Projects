import React from "react"
import { motion } from "framer-motion"
import EventCard from "./EventCard"
import { FaArrowRight } from "react-icons/fa"

const Timeline = ({ events }) => {
    // Sort the events in chronological order based on their ID or timestamp
    const sortedEvents = events.sort((a, b) => a.id - b.id) // Sorting events based on ID (or timestamp if available)

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-extrabold text-center text-gradient mb-8">Event Timeline</h2>
            <div className="relative space-y-10">
                {sortedEvents.map((event, index) => (
                    <div key={event.id} className="relative flex items-center">
                        {index > 0 && (
                            <div className="absolute w-1 h-full bg-gradient-to-b from-blue-500 to-blue-700 left-1/2 -ml-px top-0"></div>
                        )}
                        {index < sortedEvents.length - 1 && (
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-1/2 -ml-2 top-1/2 transform -translate-y-1/2">
                                <FaArrowRight className="text-white w-2 h-2 transform rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        )}
                        <motion.div
                            className="flex flex-col items-center space-y-4 w-full md:w-2/3 xl:w-1/2 mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <EventCard event={event} onClick={() => console.log("Event clicked:", event)} />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline