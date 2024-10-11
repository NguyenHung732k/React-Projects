import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api'


const API_KEY = "AIzaSyCoFViOxwKIgzD4rBf2NJHDaob_BLaLKEQ"

const Map = ({ destinations }) => {
    const mapContainerStyle = {
        width: '100%',
        height: '800px',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }

    const center = { lat: 37.7749, lng: -122.4194 }
    const [directions, setDirections] = useState(null)

    const handleDirections = () => {
        if (destinations.length < 2) return

        const directionsService = new window.google.maps.DirectionsService()

        directionsService.route(
            {
                origin: destinations[0],
                destination: destinations[destinations.length - 1],
                waypoints: destinations.slice(1, -1).map(dest => ({ location: dest, stopover: true })),
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    console.error(`Error fetching directions: ${result}`)
                }
            }
        )
    }

    useEffect(() => {
        handleDirections()
    }, [destinations])

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map