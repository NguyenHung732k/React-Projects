import React, { useState } from "react"
import EventCard from "../components/EventCard"
import { useNavigate } from "react-router-dom"

const MemoryBookPage = ({ events }) => {
    const navigate = useNavigate()

    const handleCardClick = (event) => {
        navigate(`/event/${event.id}`)
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Memory Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} onClick={handleCardClick} />
                ))}
            </div>
        </div>
    )
}

export default MemoryBookPage