import React, { useState, useEffect, useCallback } from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import SearchBar from "./SearchBar"
import Details from "./Details"
import axios from "axios"

const containerStyle = {
    width: "100%",
    height: "100%",
}

const InteractiveMap = () => {
    const [location, setLocation] = useState(null)
    const [weatherData, setWeatherData] = useState(null)
    const [events, setEvents] = useState([])
    const [touristSpots, setTouristSpots] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedMarker, setSelectedMarker] = useState(null)

    const googleMapsApiKey = "GOOGLE_MAPS_API_KEY"

    const fetchLocationData = async (lat, lon) => {
        setLoading(true)
        try {
            const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=WEATHER_API_KEY`)
            setWeatherData(weatherRes.data)

            const eventsRes = await axios.get(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=${lat}&location.longitude=${lon}&token=EVENTBRITE_API_KEY`)
            setEvents(eventsRes.data.events)

            const spotsRes = await axios.get(`https://api.tripadvisor.com/api/partner/2.0/location_search?lat=${lat}&lon=${lon}&key=TRIPADVISOR_API_KEY`)
            setTouristSpots(spotsRes.data.data)
        } catch (error) {
            console.error("Error fetching location data:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = async (query) => {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${query}&key=OPENCAGE_API_KEY`)
        if (response.data.results.length > 0) {
            const { lat, lng } = response.data.results[0].geometry
            setLocation({ lat, lng, name: response.data.results[0].formatted })
        }
    }

    const handleMapClick = useCallback((event) => {
        const { latLng } = event
        const lat = latLng.lat()
        const lng = latLng.lng()
        setLocation({ lat, lng, name: "Selected Location" })
        fetchLocationData(lat, lng)
    }, [])

    useEffect(() => {
        if (location) {
            fetchLocationData(location.lat, location.lng)
        }
    }, [location])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col md:flex-row">
                <div className="flex-none md:w-1/4 p-6 bg-white shadow-lg h-full">
                    <SearchBar onSearch={handleSearch} />
                    {loading ? (
                        <div className="flex justify-center items-center mt-6">
                            <div className="animate-spin border-t-4 border-blue-500 w-12 h-12 rounded-full"></div>
                        </div>
                    ) : (
                        location && (
                            <Details
                                location={location}
                                weather={weatherData}
                                events={events}
                                touristSpots={touristSpots}
                            />
                        )
                    )}
                </div>

                <div className="flex-grow md:w-3/4 h-screen">
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={location ? { lat: location.lat, lng: location.lng } : { lat: 51.505, lng: -0.09 }}
                            zoom={13}
                            onClick={handleMapClick}
                        >
                            {location && (
                                <Marker
                                    position={{ lat: location.lat, lng: location.lng }}
                                    onClick={() => setSelectedMarker(location)}
                                />
                            )}

                            {selectedMarker && (
                                <InfoWindow
                                    position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <div>
                                        <h3>{selectedMarker.name}</h3>
                                        <p>Click on the map to view more details.</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    )
}

export default InteractiveMap