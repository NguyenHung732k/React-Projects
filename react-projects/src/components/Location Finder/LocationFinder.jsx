import React, { useEffect, useRef, useState } from 'react'
import Map from "react-map-gl"

import Fly from './Fly'

const LocationFinder = () => {

    const API_KEY = "pk.eyJ1IjoibWFwYm94dGVzdGFjY291bnQxMjMiLCJhIjoiY2x5b2FvMWJiMGV3dDJpcHdsanNxZGcyciJ9.Swb5Y0kt5vlNwlb6SDQIYg"


    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)


    const [view, setView] = useState({
        lattitude: lat,
        longitude: lon,
        zoom: 12,
        bearing: 0,
        pitch: 0,
    })

    const mapRef = useRef()

    useEffect(() => {
        setView({
            latitude: lat,
            longitude: lon,
            zoom: 12,
            transitionInterpolator: mapRef.current?.flyTo({ center: [lon, lat], duration: 2000 }),
        })
    }, [lat, lon])

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-4">
            <Fly setLat={setLat} setLon={setLon} />
            <Map
                className="flex flex-col justify-center items-center z-0"
                ref={mapRef}
                mapboxAccessToken={API_KEY}
                initialViewState={view}
                mapStyle="mapbox://styles/mapbox/light-v9"
                onViewportChange={(viewport) => setView(viewport)}
            >
            </Map>
        </div>
    );
}

export default LocationFinder