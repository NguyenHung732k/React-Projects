import React, { useState, useEffect } from "react"

const LocationBasedSpecies = () => {
    const [location, setLocation] = useState(null)
    const [speciesList, setSpeciesList] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })

            // Simulate fetching species based on location
            setSpeciesList([
                { name: "Red Fox", image_url: "https://via.placeholder.com/50" },
                { name: "Blue Jay", image_url: "https://via.placeholder.com/50" },
            ])
        })
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Species Near You</h2>
            <div className="flex overflow-x-auto space-x-4 mt-4">
                {speciesList.map((species) => (
                    <div key={species.name} className="w-32 text-center">
                        <img
                            src={species.image_url}
                            alt={species.name}
                            className="w-full rounded-md shadow-md"
                        />
                        <p className="mt-2 text-gray-600">{species.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LocationBasedSpecies