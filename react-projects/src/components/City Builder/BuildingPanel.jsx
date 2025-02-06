import React from 'react'

const BuildingPanel = ({ onSelectBuilding }) => {
    return (
        <div className="w-full bg-white p-6 shadow-lg rounded-lg flex flex-col space-y-4">
            <h2 className="text-xl font-bold text-center">Build Your City</h2>
            <div className="flex flex-col space-y-2">
                <button
                    className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                    onClick={() => onSelectBuilding('🏠')}
                >
                    🏠 Residential
                </button>
                <button
                    className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                    onClick={() => onSelectBuilding('🏢')}
                >
                    🏢 Commercial
                </button>
                <button
                    className="p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
                    onClick={() => onSelectBuilding('🏭')}
                >
                    🏭 Industrial
                </button>
            </div>
        </div>
    )
}

export default BuildingPanel