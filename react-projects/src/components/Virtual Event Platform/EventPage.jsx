import React, { useState } from 'react'
import Chat from './Chat'
import QnA from './QnA'

const EventPage = () => {
    return (
        <div className="flex flex-col lg:flex-row p-6 space-x-8">
            {/* Video Player */}
            <div className="flex-1 bg-black rounded-lg overflow-hidden">
                <video className="w-full h-[500px] object-cover" autoPlay muted>
                    {/* Streaming Content */}
                </video>
            </div>

            {/* Event Details */}
            <div className="flex-1 space-y-4 mt-8 lg:mt-0">
                <h1 className="text-3xl font-semibold text-gray-900">Event Title</h1>
                <p className="text-lg text-gray-600">Event Description or Agenda</p>

                {/* Chat */}
                <Chat />

                {/* Q&A Section */}
                <QnA />
            </div>
        </div>
    )
}

export default EventPage