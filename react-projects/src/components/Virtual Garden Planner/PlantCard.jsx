import React, { useContext } from 'react'
import GardenContext from './context/GardenContext'

import notFoundImg from '../../assets/img-not-available.jpg'

const PlantCard = ({ plant }) => {

  const { setSelectedPlant } = useContext(GardenContext)


  return (
    <div
      className="w-1/6 border rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors mb-4"
      onClick={() => setSelectedPlant(plant)}
    >
      <img src={plant.image ? plant.image : notFoundImg} alt={plant.name} className="w-full h-32 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{plant.name}</h3>
      <p className="text-gray-600">{plant.description}</p>
    </div>
  )
}

export default PlantCard