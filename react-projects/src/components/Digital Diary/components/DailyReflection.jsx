import React from 'react'

const DailyReflection = ({ setReflection }) => {
    return (
        <textarea
            onChange={(event) => setReflection(event.target.value)}
            className="w-full p-3 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your reflections..."
            rows="5"
        />
    )
}

export default DailyReflection