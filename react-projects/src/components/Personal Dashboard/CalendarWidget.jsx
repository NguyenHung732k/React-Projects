import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CalendarWidget = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Calendar</h3>
            <Calendar
                onChange={setDate}
                value={date}
            />
        </div>
    )
}

export default CalendarWidget