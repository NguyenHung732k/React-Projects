import React, { useState } from "react"
import PlantCard from "./PlantCard"
import PlantCare from "./PlantCare"
import Notification from "./Notification"
import ClimateSetting from "./ClimateSetting"

const Greenhouse = () => {
    const [plants, setPlants] = useState([
        { id: 1, name: "Rose", health: "Healthy", imageUrl: "/rose.jpg" },
        { id: 2, name: "Tulip", health: "Needs Watering", imageUrl: "/tulip.jpg" },
    ])
    const [climate, setClimate] = useState({ temperature: 22, humidity: 50 })
    const [notifications, setNotifications] = useState([])

    const handleWater = (id) => {
        const updatedPlants = plants.map((plant) =>
            plant.id === id ? { ...plant, health: "Healthy" } : plant
        )
        setPlants(updatedPlants)
        setNotifications([...notifications, `Watered ${id === 1 ? 'Rose' : 'Tulip'}`])
    }

    const handleFertilize = (id) => {
        const updatedPlants = plants.map((plant) =>
            plant.id === id ? { ...plant, health: "Fertilized" } : plant
        )
        setPlants(updatedPlants)
        setNotifications([...notifications, `Fertilized ${id === 1 ? 'Rose' : 'Tulip'}`])
    }

    const updateClimate = (key, value) => {
        setClimate({ ...climate, [key]: value })
    }

    return (
        <div className="min-h-screen bg-green-100">
            <header className="text-center py-6 bg-green-600 text-white text-3xl font-bold">
                Virtual Greenhouse
            </header>

            <div className="p-6 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants.map((plant) => (
                        <PlantCard key={plant.id} plant={plant} onWater={handleWater} onFertilize={handleFertilize} />
                    ))}
                </div>

                <PlantCare onWater={handleWater} onFertilize={handleFertilize} />

                <ClimateSetting climate={climate} onUpdateClimate={updateClimate} />

                <Notification notifications={notifications} />
            </div>
        </div>
    )
}

export default Greenhouse