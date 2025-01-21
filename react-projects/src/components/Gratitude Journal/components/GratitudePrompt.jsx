import React, { useState } from 'react'
import GratitudeCard from './GratitudeCard'

const GratitudePrompt = () => {
    const [entry, setEntry] = useState('')
    const [mood, setMood] = useState('Happy')
    const [gratitudes, setGratitudes] = useState([])

    const getCurrentDate = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date().toLocaleDateString('en-US', options)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (entry.trim()) {
            const currentDate = getCurrentDate()
            setGratitudes([{ entry, mood, date: currentDate }, ...gratitudes])
            setEntry('')
        }
    }

    return (
        <div className="max-w-5xl mx-auto mb-6">
            <div className="p-6 bg-white shadow-lg rounded-xl w-full mx-auto mb-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">What are you grateful for today?</h2>
                <textarea
                    value={entry}
                    onChange={(event) => setEntry(event.target.value)}
                    placeholder="Write about your gratitude..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out mb-4"
                    rows="6"
                ></textarea>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">How do you feel today?</h3>
                    <select
                        value={mood}
                        onChange={(event) => setMood(event.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out"
                    >
                        <option value="Happy">Happy</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Sad">Sad</option>
                        <option value="Angry">Angry</option>
                        <option value="Calm">Calm</option>
                    </select>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300"
                >
                    Save Gratitude
                </button>
            </div>

            {gratitudes.map((gratitude, index) => (
                <GratitudeCard key={index} entry={gratitude.entry} mood={gratitude.mood} date={gratitude.date} />
            ))}
        </div>
    )
}

export default GratitudePrompt