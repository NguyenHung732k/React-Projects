import React, { useEffect, useState } from 'react'
import MoodSelector from './components/MoodSelector'
import MoodCalendar from './components/MoodCalendar'
import DailySummary from './components/DailySummary'
import dayjs from 'dayjs'

const MoodDiary = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [mood, setMood] = useState(null)
    const [notes, setNotes] = useState('')
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [moodData, setMoodData] = useState({})

    useEffect(() => {
        const savedMoodData = JSON.parse(localStorage.getItem('moodData'))
        if (savedMoodData) setMoodData(savedMoodData)

    }, [])

    useEffect(() => {
        if (Object.keys(moodData).length > 0) {
            localStorage.setItem('moodData', JSON.stringify(moodData))
        }
    }, [moodData])


    const handleMoodSelect = (selectedMood) => {
        const dateFormatted = dayjs(selectedDate).format('MMMM D, YYYY')
        const updatedMoodData = { ...moodData, [dateFormatted]: { mood: selectedMood, notes } }
        setMoodData(updatedMoodData)
        setMood(selectedMood)
    };

    const handleDateChange = (date) => {
        setSelectedDate(date)
        const dateFormatted = dayjs(date).format('MMMM D, YYYY')
        const savedMood = moodData[dateFormatted]
        if (savedMood) {
            setMood(savedMood.mood)
            setNotes(savedMood.notes)
        } else {
            setMood(null)
            setNotes('')
        }
    }

    const handleNoteChange = (event) => {
        setNotes(event.target.value)
    }

    const dateFormatted = dayjs(selectedDate).format('MMMM D, YYYY')

    return (
        <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}>
            <div className="max-w-3xl mx-auto p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-semibold text-center text-indigo-600">Mood Diary</h1>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300 focus:outline-none"
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <MoodSelector onSelectMood={handleMoodSelect} selectedMood={mood} />

                    <textarea
                        className="w-full mt-4 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white resize-none"
                        placeholder="How are you feeling today?"
                        value={notes}
                        onChange={handleNoteChange}
                        rows={4}
                    />

                    <MoodCalendar
                        selectedDate={selectedDate}
                        onDateChange={handleDateChange}
                        moodData={moodData}
                    />

                    <DailySummary date={dateFormatted} mood={mood} notes={notes} />
                </div>
            </div>
        </div>
    )
}

export default MoodDiary