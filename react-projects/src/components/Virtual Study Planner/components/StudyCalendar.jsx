import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import { useStudy } from '../context/StudyContext'

const StudyCalendar = () => {
    const { sessions } = useStudy()

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Study Schedule</h1>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/4 bg-white shadow-lg rounded-lg p-4">
                    <Calendar className="w-full" />
                </div>
                <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-4 md:ml-4 mt-4 md:mt-0">
                    <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
                    <ul className="space-y-2">
                        {sessions.map((session, index) => (
                            <li key={index} className="bg-gray-100 p-2 rounded">
                                {session.title} - {session.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StudyCalendar