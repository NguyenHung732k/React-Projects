import React from 'react'
import { GardenProvider } from './context/GardenContext'
import GardenLayout from './GardenLayout'
import PlantDetails from './PlantDetails'
import PlantCard from './PlantCard'


const plants = [
    { id: 1, name: 'Rose', description: 'Beautiful flowers', careInstructions: 'Water daily', image: 'https://example.com/rose.jpg' },
    { id: 2, name: 'Tulip', description: 'Spring blooms', careInstructions: 'Water twice a week', image: 'https://example.com/tulip.jpg' },
]


const VirtualGarden = () => {
    return (
        <GardenProvider>
            <header className="bg-green-600 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Virtual Garden Planner</h1>
            </header>
            <div className="w-screen h-screen mx-auto my-8 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold mb-4">Available Plants</h2>
                <div className="w-full flex justify-center items-start gap-8 p-4">
                    {plants.map(plant => (
                        <PlantCard key={plant.id} plant={plant} />
                    ))}
                </div>
                <PlantDetails />
                <GardenLayout />
            </div>
        </GardenProvider>
    )
}

export default VirtualGarden