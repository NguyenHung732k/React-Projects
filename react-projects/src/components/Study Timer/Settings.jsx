import React, { useState } from 'react'

const Settings = ({ onSaveSettings }) => {
    const [studyTime, setStudyTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)

    const handleSave = () => {
        onSaveSettings(studyTime, breakTime)
    }

    return (
        <div className="settings-container bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold text-primary mb-6">Timer Settings</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium">Study Time (minutes)</label>
                <input
                    type="text"
                    value={studyTime}
                    onChange={(event) => setStudyTime(Number(event.target.value))}
                    className="mt-2 p-3 border border-gray-300 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium">Break Time (minutes)</label>
                <input
                    type="text"
                    value={breakTime}
                    onChange={(event) => setBreakTime(Number(event.target.value))}
                    className="mt-2 p-3 border border-gray-300 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
            </div>
            <button
                onClick={handleSave}
                className="bg-accent text-white p-3 rounded-lg w-full shadow-md hover:bg-yellow-600 transition-all duration-300"
            >
                Save Settings
            </button>
        </div>
    )
}

export default Settings