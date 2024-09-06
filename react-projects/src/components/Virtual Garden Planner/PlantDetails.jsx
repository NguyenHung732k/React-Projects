import React, { useContext } from 'react'
import GardenContext from './context/GardenContext'

import notFound from '../../assets/img-not-available.jpg'

const PlantDetails = () => {

  const { selectedPlant, setSelectedPlant } = useContext(GardenContext)

  if (!selectedPlant) {
    return <div className="p-4">Select a plant to see details</div>
  }


  return (
    <div className="w-2/6 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{selectedPlant.name}</h2>
      <img src={selectedPlant.image ? selectedPlant.image : notFound} alt={selectedPlant.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <p className="text-gray-700 mb-4">{selectedPlant.careInstructions}</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => setSelectedPlant(null)}
      >
        Clear Selection
      </button>
    </div>
  )
}

export default PlantDetails