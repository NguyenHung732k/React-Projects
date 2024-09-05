import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const CalendarView = ({ activities }) => {
    const [date, setDate] = useState(new Date())

    const filteredActivities = activities.filter(activity =>
        new Date(activity.date).toDateString() === date.toDateString()
    )

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Calendar View</h2>
            <div className="mb-4">
                <DatePicker
                    onChange={setDate}
                    value={date}
                    className="w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                {filteredActivities.length === 0 ? (
                    <p className="text-gray-500">No activities on this date.</p>
                ) : (
                    <ul className="space-y-4">
                        {filteredActivities.map((activity, index) => (
                            <li key={index} className="border border-gray-300 p-4 rounded-md shadow-sm">
                                <h3 className="text-lg font-semibold">{activity.destination}</h3>
                                <p>{activity.activity}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default CalendarView