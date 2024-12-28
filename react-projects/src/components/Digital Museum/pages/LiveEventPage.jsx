import React, { useState, useEffect } from 'react'

const LiveEventPage = () => {
    const event = {
        id: '1',
        title: "Live Art Tour: Renaissance Art",
        description: "Join us for a live tour of the Renaissance art collection. Our expert guide will walk you through the most iconic pieces from the period.",
        speaker: "Dr. John Doe",
        date: "2024-12-30T18:00:00Z",
        imageUrl: "/images/renaissance-art-tour.jpg",
        videoUrl: "https://www.example.com/live-stream",
    }

    const [timeRemaining, setTimeRemaining] = useState("")
    const [isLive, setIsLive] = useState(false)

    const calculateTimeRemaining = () => {
        const eventDate = new Date(event.date)
        const currentTime = new Date()
        const diff = eventDate - currentTime

        if (diff <= 0) {
            setIsLive(true)
            setTimeRemaining("The event is live now!")
        } else {
            const hours = Math.floor(diff / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diff % (1000 * 60)) / 1000)
            setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            calculateTimeRemaining()
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const joinEvent = () => {
        window.location.href = event.videoUrl
    }

    return (
        <div className="container mx-auto p-6 space-y-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={event.imageUrl} alt="Event" className="w-full h-72 object-cover" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
                    <p className="text-xl text-gray-700 mt-2">{event.description}</p>
                    <p className="text-lg text-gray-600 mt-4">Hosted by: {event.speaker}</p>

                    <div className="mt-6">
                        <p className="text-lg text-gray-600">
                            {isLive ? (
                                <span className="text-green-500">The event is live now!</span>
                            ) : (
                                <>
                                    <span className="font-semibold">Starts in: </span>
                                    <span className="text-red-500">{timeRemaining}</span>
                                </>
                            )}
                        </p>
                    </div>

                    <div className="mt-6">
                        {isLive ? (
                            <button
                                onClick={joinEvent}
                                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                Join Live Event
                            </button>
                        ) : (
                            <button
                                disabled
                                className="bg-gray-400 text-white py-3 px-6 rounded-lg cursor-not-allowed"
                            >
                                Waiting for the Event to Start
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveEventPage