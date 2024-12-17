import { useState } from 'react'

const RoutePlanner = () => {
    const [start, setStart] = useState('')
    const [destination, setDestination] = useState('')
    const [route, setRoute] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        // Simulate route planning API call
        const response = await fetch(`https://api.transit.com/planRoute?start=${start}&destination=${destination}`)
        const data = await response.json()
        setRoute(data)
        setIsLoading(false)
    }

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Plan Your Route</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg">Start Location:</label>
                    <input
                        type="text"
                        value={start}
                        onChange={(event) => setStart(event.target.value)}
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter start location"
                    />
                </div>
                <div>
                    <label className="block text-lg">Destination:</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(event) => setDestination(event.target.value)}
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter destination"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                >
                    {isLoading ? 'Loading...' : 'Find Route'}
                </button>
            </form>

            {route && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-blue-600">Route:</h3>
                    <ul className="space-y-2">
                        {route.steps.map((step, index) => (
                            <li key={index} className="text-gray-700">{step}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default RoutePlanner