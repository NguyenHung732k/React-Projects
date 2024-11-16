import React from "react"

const Details = ({ location, weather, events, touristSpots }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">{location.name}</h2>

            {weather && (
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="font-semibold text-xl text-blue-600">Weather</h3>
                    <p className="text-lg">Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                    <p className="text-sm text-gray-600">{weather.weather[0].description}</p>
                </div>
            )}

            {events.length > 0 && (
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="font-semibold text-xl text-blue-600">Nearby Events</h3>
                    <ul>
                        {events.map((event) => (
                            <li key={event.id} className="text-lg text-gray-800">{event.name.text}</li>
                        ))}
                    </ul>
                </div>
            )}

            {touristSpots.length > 0 && (
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="font-semibold text-xl text-blue-600">Tourist Spots</h3>
                    <ul>
                        {touristSpots.map((spot) => (
                            <li key={spot.location_id} className="text-lg text-gray-800">{spot.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Details