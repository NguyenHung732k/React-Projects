import React, { useState } from 'react'
import { useEvents } from './contexts/EventContext'
import { useNavigate } from 'react-router-dom'

const EventForm = ({ event }) => {

    const { addEvent, editEvent } = useEvents()
    const [title, setTitle] = useState(event ? event.title : '')
    const [description, setDescription] = useState(event ? event.description : '')
    const [date, setDate] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newEvent = {
            id: event ? event.id : Date.now(),
            title,
            date,
            description,
        }

        if (event) {
            editEvent(newEvent)
        } else {
            addEvent(newEvent)
        }

        navigate('/')
    }

    console.log(event)

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{event ? 'Edit Event' : 'Create Event'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows="4"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    {event ? 'Update Event' : 'Create Event'}
                </button>
            </form>
        </div>
    )
}

export default EventForm