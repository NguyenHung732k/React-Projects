import React, { useState } from 'react'
import axios from 'axios'

const Fly = ({ setLat, setLon }) => {

    // Public default key
    const API_KEY = "pk.eyJ1IjoibWFwYm94dGVzdGFjY291bnQxMjMiLCJhIjoiY2x5b2FvMWJiMGV3dDJpcHdsanNxZGcyciJ9.Swb5Y0kt5vlNwlb6SDQIYg"

    const [city, setCity] = useState("London")

    const getCoordinate = () => {
        axios
            .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${API_KEY}`)
            .then((res) => {
                setLon(res.data.features[0].geometry.coordinates[0])
                setLat(res.data.features[0].geometry.coordinates[1])
            })
    }

    return (
        <div className="w-80 h-40 p-4 z-10 top-4 inset-x-1/2 -translate-x-1/2 flex flex-col fixed justify-center items-center gap-2 rounded-lg bg-slate-600/45 backdrop-blur-xl">
            <h4>Enter a city name</h4>
            <input
                name="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                type="text"
                onChange={(event) => {setCity(event.target.value)}}
            />
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => getCoordinate()}>
                Go
            </button>
        </div>
    )
}

export default Fly