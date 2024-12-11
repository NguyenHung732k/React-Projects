import React, { useState } from 'react'
import Calendar from 'react-calendar'

const EventSchedule = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-900">Event Schedule</h1>
            <div className="mt-6">
                <Calendar
                    onChange={setDate}
                    value={date}
                    className="rounded-lg border-gray-300 shadow-md"
                />
            </div>
        </div>
    )
}

export default EventSchedule