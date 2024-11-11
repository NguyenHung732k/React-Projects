import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const MoodCalendar = ({ selectedDate, onDateChange, moodData }) => {

    const getMoodColor = (date) => {
        const mood = moodData[date]
        if (!mood) return 'bg-gray-300'
        switch (mood.mood.label) {
            case 'Happy': return 'bg-green-400'
            case 'Sad': return 'bg-blue-400'
            case 'Angry': return 'bg-red-400'
            case 'Calm': return 'bg-purple-400'
            case 'Confused': return 'bg-yellow-400'
            case 'Tired': return 'bg-pink-400'
            default: return 'bg-gray-300'
        }
    }

    const moodIndicator = (date) => {
        return (
            <div
                className={`w-4 h-4 rounded-full ${getMoodColor(date)}`}
                style={{ margin: 'auto', position: 'relative', top: '8px' }}
            />
        )
    }

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <Calendar
                onChange={onDateChange}
                value={selectedDate}
                tileContent={({ date, view }) => {
                    return view === 'month' ? moodIndicator(date) : null
                }}
                className="react-calendar dark:text-white"
            />
        </div>
    )
}

export default MoodCalendar