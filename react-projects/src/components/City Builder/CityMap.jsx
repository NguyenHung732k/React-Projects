import React from 'react'

const CityMap = ({ cityGrid, onPlaceBuilding, selectedBuilding }) => {
    const handleCellClick = (row, col) => {
        if (selectedBuilding) {
            onPlaceBuilding(row, col, selectedBuilding)
        }
    }

    return (
        <div className="grid grid-cols-10 gap-1">
            {cityGrid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-20 h-20 border-2 ${cell ? 'bg-green-200' : 'bg-gray-100'} hover:bg-gray-300 cursor-pointer transition-all ease-in-out`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                    >
                        {cell && (
                            <div className="text-center text-xl">{cell}</div>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}

export default CityMap