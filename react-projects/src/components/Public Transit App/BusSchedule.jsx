import { useState, useEffect } from 'react'

const BusSchedule = ({ routeId }) => {
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        const fetchSchedule = async () => {
            // Simulate an API call for bus schedule
            const response = await fetch(`https://api.transit.com/bus/${routeId}/schedule`)
            const data = await response.json()
            setSchedule(data)
        }

        if (routeId) {
            fetchSchedule()
        }
    }, [routeId])

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Bus Schedule</h2>
            <ul className="space-y-4">
                {schedule.length === 0 ? (
                    <li className="text-gray-600">No data available for this route.</li>
                ) : (
                    schedule.map((item, index) => (
                        <li key={index} className="flex justify-between text-lg font-medium text-gray-800">
                            <span>{item.time}</span>
                            <span>{item.destination}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default BusSchedule