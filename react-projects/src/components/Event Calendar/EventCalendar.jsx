import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


const EventCalendar = () => {

    const [date, setDate] = useState(null)
    const [eventTitle, setEventTitle] = useState("")
    const [event, setEvent] = useState([])


    const handleClick = (date) => {
        setDate(date)
    }

    const handleCreateEvent = () => {
        if (date && eventTitle) {
            const newEvent = {
                id: new Date().getTime(),
                date: date,
                title: eventTitle,
            }

            setEvent([...event, newEvent])
            setDate(null)
            setEventTitle("")
            setDate(newEvent.date)
        }
    }

    console.log(event)

    const handleEdit = (eventId, newName) => {
        const selected = event.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                }
            }
            return event
        })
        setEvent(selected)
    }

    const handleDelete = (eventId) => {
        const selected = event.filter((event) => event.id !== eventId)
        setEvent(selected)
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-16">
            <div className="">
                <h1>Event Calendar</h1>
            </div>

            <div className="flex justify-center items-center gap-20">
                <div className="">
                    <Calendar
                        className="rounded-lg shadow overflow-hidden"
                        onChange={handleClick}
                        value={date} />
                </div>
                {date && (
                    <div className="w-80 flex flex-col justify-content items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <h1 className="mb-2 text-2xl font-bold text-gray-900">Create Event</h1>
                        <h2 className="mb-2 text-2xl font-bold text-gray-900">Date: {date.getDate()} / {date.getMonth()} / {date.getFullYear()}</h2>
                        <input
                            type="text"
                            value={eventTitle}
                            onChange={(event) => setEventTitle(event.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Event Name"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleCreateEvent}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Create
                        </button>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center gap-4">
                {event.map((event) => (
                    <div
                        key={event.id}
                        className="flex flex-col justify-center items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow"
                    >
                        <h1 className="mb-2 text-2xl font-bold text-gray-900">{event.title}</h1>
                        <h2 className="mb-2 text-2xl font-bold text-gray-900">Date: {event.date.getDate()} / {event.date.getMonth()} / {event.date.getFullYear()}</h2>
                        <div>
                            <button
                                onClick={() => handleEdit(event.id, prompt("ENTER NEW TITLE"))}
                                type="button"
                                className="w-32 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(event.id)}
                                type="button"
                                className="w-32 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default EventCalendar