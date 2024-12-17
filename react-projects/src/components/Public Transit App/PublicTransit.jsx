import React, { useState } from 'react'
import BusSchedule from './BusSchedule'
import LiveUpdates from './LiveUpdates'
import RoutePlanner from './RoutePlanner'

const PublicTransit = () => {
    const [selectedRoute, setSelectedRoute] = useState('')

    return (
        <div className="mx-auto p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Public Transit Tracker</h1>

            {/* Route Planner Component */}
            <RoutePlanner />

            <div className="mt-8 lg:grid lg:grid-cols-2 gap-8">
                {/* Select Route Input */}
                <div className="lg:col-span-1">
                    <div className="mb-4">
                        <label htmlFor="route" className="block text-lg font-medium">Select Route:</label>
                        <input
                            id="route"
                            type="text"
                            value={selectedRoute}
                            onChange={(event) => setSelectedRoute(event.target.value)}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter bus/train number"
                        />
                    </div>
                </div>

                {/* Display Bus Schedule and Live Updates */}
                <div className="lg:col-span-1 space-y-6">
                    <BusSchedule routeId={selectedRoute} />
                    <LiveUpdates routeId={selectedRoute} />
                </div>
            </div>
        </div>
    )
}

export default PublicTransit