import React, { useState, useEffect } from "react"
import { getWeather } from "../utils/weather"

const SeasonalOutfits = () => {
    const [weather, setWeather] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const weatherData = getWeather("New York")
        setWeather(weatherData)
        setLoading(false)
    }, [])

    if (loading) return <div className="text-center text-xl text-gray-600">Loading weather...</div>

    return (
        <div className="mt-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Seasonal Style Recommendations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weather === "Snow" && (
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-700">Winter Essentials</h3>
                        <p className="text-gray-700">Coats, scarves, boots, and more!</p>
                        <img src="path/to/winter-coat.jpg" alt="Winter Coat" className="mt-4" />
                    </div>
                )}
                {weather === "Clear" && (
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-yellow-700">Spring / Summer Vibes</h3>
                        <p className="text-gray-700">Light jackets, sunglasses, and casual wear.</p>
                        <img src="path/to/spring-outfit.jpg" alt="Spring Outfit" className="mt-4" />
                    </div>
                )}
                {weather === "Rain" && (
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-700">Rainy Day Looks</h3>
                        <p className="text-gray-700">Waterproof jackets, boots, and umbrellas.</p>
                        <img src="path/to/raincoat.jpg" alt="Raincoat" className="mt-4" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SeasonalOutfits