import React, { useContext } from 'react'
import GardenContext from './context/GardenContext'

const Gardenlayout = () => {

  const { selectedPlant, garden, setGarden, setSelectedPlant } = useContext(GardenContext)


  const handleCellClick = (index) => {
    if (selectedPlant) {
      const newGarden = [...garden]
      newGarden[index] = selectedPlant
      setGarden(newGarden)
      setSelectedPlant(null)
    }
  }

  return (
    <div className="w-full md:w-2/3 p-4">
      <h2 className="text-xl font-bold mb-4">Garden Layout</h2>
      <div className="grid grid-cols-5 gap-2">
        {garden.map((plant, index) => (
          <div
            key={index}
            className={`relative border border-gray-300 p-4 rounded-md transition-transform transform ${plant ? 'bg-green-200' : 'bg-white'} hover:scale-105 cursor-pointer`}
            onClick={() => handleCellClick(index)}
          >
            {plant && <span>{plant.name}</span>}
            <div className="absolute bottom-0 left-0 p-2 bg-gray-700 text-white text-sm rounded-md opacity-0 hover:opacity-100 transition-opacity">
              {plant ? plant.name : 'Empty'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gardenlayout