import React from 'react'

const EntryList = ({ entries }) => {
    return (
        <div className="mt-6">
            {entries.map((entry, index) => (
                <div key={index} className="border rounded-lg shadow-lg p-4 mb-4 bg-white">
                    <img src={entry.photo} alt="Diary" className="mb-2 w-full h-auto rounded-md" />
                    <p className="font-semibold text-lg">Mood: {entry.mood}</p>
                    <p>{entry.reflection}</p>
                </div>
            ))}
        </div>
    )
}

export default EntryList