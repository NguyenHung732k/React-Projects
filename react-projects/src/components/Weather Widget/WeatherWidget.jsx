import React, { useState, useEffect } from "react"
import axios from "axios"
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaWind } from "react-icons/fa"
import './WeatherWidget.css'

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)
    const [background, setBackground] = useState("")
    const [animation, setAnimation] = useState("")


    const fetchWeather = async (location = "London") => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
            )
            setWeather(response.data)
            updateWeatherEffect(response.data.weather[0].main)
        } catch (err) {
            setError("Failed to fetch weather data.")
        }
    }

    const updateWeatherEffect = (weatherCondition) => {
        switch (weatherCondition) {
            case "Clear":
                setBackground("bg-gradient-to-t from-yellow-400 to-yellow-600")
                setAnimation("sunshine");
                break;
            case "Rain":
                setBackground("bg-gradient-to-t from-blue-500 to-indigo-600")
                setAnimation("rain");
                break;
            case "Snow":
                setBackground("bg-gradient-to-t from-gray-200 to-blue-300")
                setAnimation("snow");
                break;
            case "Clouds":
                setBackground("bg-gradient-to-t from-gray-300 to-gray-500")
                setAnimation("clouds")
                break;
            default:
                setBackground("bg-blue-200")
                setAnimation("default")
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    if (error) {
        return <div className="text-red-500">{error}</div>
    }

    if (!weather) {
        return <div>Loading...</div>
    }

    const { main, weather: weatherData, wind } = weather
    const temperature = main.temp
    const weatherCondition = weatherData[0].main

    return (
        <div className="App min-h-screen bg-gray-100 flex justify-center items-center">
            <div
                className={`relative w-full sm:w-[350px] md:w-[450px] h-[400px] rounded-3xl shadow-xl overflow-hidden ${background} transition-all duration-500`}
            >
                <div className={`absolute inset-0 ${animation === "sunshine" ? "sunshine" : animation === "rain" ? "rain" : animation === "snow" ? "snow" : ""}`}></div>
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="relative flex flex-col justify-center items-center h-full p-6 space-y-4 text-white">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-semibold">
                        {temperature}°C
                    </div>
                    <div className="text-xl sm:text-2xl capitalize">{weatherData[0].description}</div>

                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {weatherCondition === "Clear" && <FaSun className="text-yellow-500 text-6xl sm:text-7xl animate-pulse" />}
                        {weatherCondition === "Clouds" && <FaCloud className="text-gray-300 text-6xl sm:text-7xl" />}
                        {weatherCondition === "Rain" && <FaCloudRain className="text-blue-300 text-6xl sm:text-7xl animate-rain" />}
                        {weatherCondition === "Snow" && <FaSnowflake className="text-white text-6xl sm:text-7xl animate-snow" />}
                        {weatherCondition !== "Clear" && weatherCondition !== "Clouds" && weatherCondition !== "Rain" && weatherCondition !== "Snow" && (
                            <FaWind className="text-green-500 text-6xl sm:text-7xl animate-pulse" />
                        )}
                    </div>

                    <div className="text-xl sm:text-2xl mt-2">{`Wind Speed: ${wind.speed} m/s`}</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget