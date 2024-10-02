import React, { useState, useEffect } from 'react'
import MoodTracker from './components/MoodTracker'
import PhotoUpload from './components/PhotoUpload'
import DailyReflection from './components/DailyReflection'
import EntryList from './components/EntryList'
import MoodChart from './components/MoodChart'

const DigitalDiary = () => {
    const [mood, setMood] = useState('')
    const [photo, setPhoto] = useState('')
    const [reflection, setReflection] = useState('')
    const [entries, setEntries] = useState([])

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || []
        setEntries(storedEntries)
    }, [])

    const handleSaveEntry = () => {
        if (mood && photo && reflection) {
            const newEntry = { mood, photo, reflection }
            const updatedEntries = [...entries, newEntry]
            setEntries(updatedEntries)
            localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries))
            setMood('')
            setPhoto('')
            setReflection('')
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Digital Diary</h1>
                <MoodTracker setMood={setMood} />
                <PhotoUpload setPhoto={setPhoto} photo={photo} />
                <DailyReflection setReflection={setReflection} />
                <button
                    onClick={handleSaveEntry}
                    className="mt-4 w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Save Entry
                </button>
                <MoodChart entries={entries} />
                <EntryList entries={entries} />
            </div>
        </div>
    )
}

export default DigitalDiary