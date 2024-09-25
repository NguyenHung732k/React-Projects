import React, { useState } from 'react'
import moment from 'moment-timezone'

const TimezoneConverter = () => {
    const [time, setTime] = useState('')
    const [fromZone, setFromZone] = useState('UTC')
    const [toZone, setToZone] = useState('UTC')
    const [convertedTime, setConvertedTime] = useState('')
    const [error, setError] = useState('')

    const handleConvert = () => {
        setError('')
        if (!time) {
            setError('Please select a date and time.')
            return
        }
        const converted = moment.tz(time, fromZone).tz(toZone).format('YYYY-MM-DD HH:mm:ss');
        setConvertedTime(converted)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
            <div className="bg-white p-6 rounded-lg shadow-md w-2/6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Time Zone Converter</h1>

                <input
                    type="datetime-local"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    className="border p-2 mb-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <div className="flex justify-between mb-4">
                    <select
                        value={fromZone}
                        onChange={(event) => setFromZone(event.target.value)}
                        className="border p-2 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {moment.tz.names().map((zone) => (
                            <option key={zone} value={zone}>{zone}</option>
                        ))}
                    </select>
                    <span className="mx-2 text-gray-500">→</span>
                    <select
                        value={toZone}
                        onChange={(event) => setToZone(event.target.value)}
                        className="border p-2 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {moment.tz.names().map((zone) => (
                            <option key={zone} value={zone}>{zone}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleConvert}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 w-full"
                >
                    Convert
                </button>

                {error && <div className="mt-4 text-red-500">{error}</div>}
                {convertedTime && (
                    <div className="mt-4 text-lg text-gray-800">
                        Converted Time: <strong>{convertedTime}</strong>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TimezoneConverter