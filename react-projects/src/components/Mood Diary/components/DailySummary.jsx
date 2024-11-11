import React from 'react'

const DailySummary = ({ date, mood, notes }) => {
    return (
        <div className="p-6 mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-indigo-600">Summary for {date}</h2>
            <div className="mt-4 flex items-center justify-center">
                <span className="text-4xl">{mood ? mood.emoji : '🤔'}</span>
                <span className="ml-2 text-xl">{mood ? mood.label : 'No mood selected'}</span>
            </div>
            <div className="mt-4">
                <textarea
                    className="w-full mt-2 p-4 border rounded-lg resize-none h-40 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="How did your day go? Write your thoughts here..."
                    value={notes}
                    readOnly
                />
            </div>
        </div>
    )
}

export default DailySummary