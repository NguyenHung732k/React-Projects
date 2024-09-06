import React, { createContext, useState } from 'react'

const GardenContext = createContext()

export const GardenProvider = ({ children }) => {
    const [garden, setGarden] = useState(Array(25).fill(null))
    const [selectedPlant, setSelectedPlant] = useState(null)

    return (
        <GardenContext.Provider value={{ garden, setGarden, selectedPlant, setSelectedPlant }}>
            {children}
        </GardenContext.Provider>
    )
}

export default GardenContext