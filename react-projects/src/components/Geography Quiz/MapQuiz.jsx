import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const MapQuiz = ({ setScore, score, endQuiz }) => {
    const [targetCountry, setTargetCountry] = useState('Germany')
    const [currentCountry, setCurrentCountry] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const countries = ['Germany', 'France', 'Brazil', 'Japan', 'India']

    useEffect(() => {
        if (currentCountry === targetCountry) {
            setCorrectAnswer(true)
            setScore(prev => prev + 1)
            setCurrentCountry('')
            setTargetCountry(countries[Math.floor(Math.random() * countries.length)])
        }
    }, [currentCountry, targetCountry, setScore])

    useEffect(() => {
        if (score >= 10) {
            endQuiz()
        }
    }, [score, endQuiz])

    const handleDrop = (event) => {
        event.preventDefault()
        const country = event.dataTransfer.getData("country")
        setCurrentCountry(country)
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    return (
        <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-3xl font-semibold mb-6">
                Find the country: <span className="text-yellow-300">{targetCountry}</span>
            </h2>

            <MapContainer center={[51.505, -0.09]} zoom={2} style={{ width: '80%', height: '400px' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {countries.map((country, index) => (
                    <Marker
                        key={index}
                        position={[Math.random() * 180 - 90, Math.random() * 360 - 180]}
                        icon={new L.Icon({ iconUrl: '/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })}
                    >
                        <Popup>{country}</Popup>
                    </Marker>
                ))}
            </MapContainer>

            <div
                className="border-dashed border-4 border-yellow-500 w-full p-6 my-4 rounded-lg flex justify-center items-center"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <h3 className="text-2xl font-semibold">Drag the Country Here</h3>
            </div>

            <div className="flex gap-4 mt-6 justify-center">
                {countries.map((country, index) => (
                    <CountryCard key={index} country={country} />
                ))}
            </div>

            {correctAnswer && (
                <div className="mt-4 text-center text-lg text-green-500 font-semibold animate-pulse">
                    Correct! Well Done!
                </div>
            )}
        </div>
    )
}

// Basic draggable country card
const CountryCard = ({ country }) => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData("country", country)
    }

    return (
        <div
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer text-lg shadow-lg transform hover:scale-105 transition-all"
            draggable
            onDragStart={handleDragStart}
        >
            {country}
        </div>
    )
}

export default MapQuiz