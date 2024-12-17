import { useState, useEffect } from 'react';

const LiveUpdates = ({ routeId }) => {
    const [updates, setUpdates] = useState([])

    useEffect(() => {
        const fetchLiveUpdates = async () => {
            // Simulate an API call for live updates
            const response = await fetch(`https://api.transit.com/bus/${routeId}/live`)
            const data = await response.json()
            setUpdates(data)
        }

        if (routeId) {
            fetchLiveUpdates()
        }
    }, [routeId])

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Live Updates</h2>
            <ul className="space-y-4">
                {updates.length === 0 ? (
                    <li className="text-gray-600">No live updates available for this route.</li>
                ) : (
                    updates.map((update, index) => (
                        <li key={index} className="flex justify-between text-lg font-medium">
                            <span>{update.time}</span>
                            <span className={`text-${update.status === 'On Time' ? 'green' : 'red'}-500`}>
                                {update.status}
                            </span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default LiveUpdates