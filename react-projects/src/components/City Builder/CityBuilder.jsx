import React, { useState } from 'react'
import CityMap from './CityMap'
import BuildingPanel from './BuildingPanel'
import ResourcePanel from './ResourcePanel'
import ExportImport from './ExportImport'

const CityBuilder = () => {
    const [selectedBuilding, setSelectedBuilding] = useState(null)
    const [budget, setBudget] = useState(10000)
    const [energy, setEnergy] = useState(1000)
    const [population, setPopulation] = useState(100)
    const [cityGrid, setCityGrid] = useState(Array(10).fill(Array(10).fill(null)))

    const handleSelectBuilding = (buildingType) => {
        setSelectedBuilding(buildingType)
    }

    const handlePlaceBuilding = (row, col, building) => {
        const updatedGrid = cityGrid.map((r, rowIndex) =>
            rowIndex === row
                ? r.map((cell, colIndex) => (colIndex === col ? building : cell))
                : r
        )
        setCityGrid(updatedGrid)

        if (building === 'Residential') {
            setPopulation(population + 10)
            setBudget(budget - 500)
        } else if (building === 'Commercial') {
            setBudget(budget + 1000)
            setEnergy(energy - 50)
        } else if (building === 'Industrial') {
            setEnergy(energy - 200)
            setBudget(budget + 2000)
        }
    }

    const handleExport = () => {
        const cityLayout = JSON.stringify(cityGrid)
        const blob = new Blob([cityLayout], { type: 'application/json' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'city-layout.json'
        link.click()
    }

    const handleImport = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                const importedLayout = JSON.parse(reader.result)
                setCityGrid(importedLayout)
            }
            reader.readAsText(file)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex gap-4">
                <div className="w-1/3 flex flex-col gap-2">
                    <BuildingPanel onSelectBuilding={handleSelectBuilding} />
                    <ExportImport onExport={handleExport} onImport={handleImport} />
                </div>
                <div className="w-2/3">
                    <CityMap
                        cityGrid={cityGrid}
                        onPlaceBuilding={handlePlaceBuilding}
                        selectedBuilding={selectedBuilding}
                    />
                </div>
                <div className="w-1/3 mt-4">
                    <ResourcePanel budget={budget} energy={energy} population={population} />
                </div>
            </div>
        </div>
    )
}

export default CityBuilder