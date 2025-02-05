import React from 'react'

const ClimateSetting = ({ onUpdateClimate, climate }) => {
    return (
        <div className="p-6 space-y-4 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-center">Adjust Virtual Climate</h3>

            <div>
                <label className="text-gray-700">Temperature (°C)</label>
                <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={climate.temperature}
                    className="w-full mt-2"
                    onChange={(event) => onUpdateClimate("temperature", event.target.value)}
                />
                <p className="text-center">{`Temperature: ${climate.temperature}°C`}</p>
            </div>

            <div>
                <label className="text-gray-700">Humidity (%)</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={climate.humidity}
                    className="w-full mt-2"
                    onChange={(event) => onUpdateClimate("humidity", event.target.value)}
                />
                <p className="text-center">{`Humidity: ${climate.humidity}%`}</p>
            </div>
        </div>
    )
}

export default ClimateSetting