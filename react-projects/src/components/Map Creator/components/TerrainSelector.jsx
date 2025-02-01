import React from 'react'

const terrainOptions = [
    { name: 'Forest', color: '#228B22' },
    { name: 'Mountain', color: '#8B4513' },
    { name: 'River', color: '#1E90FF' },
    { name: 'Desert', color: '#F4A300' },
]

const TerrainSelector = ({ setSelectedTerrain }) => {
    return (
        <div className="mb-6">
            <div className="text-lg mb-4">Select Terrain</div>
            {terrainOptions.map((terrain) => (
                <button
                    key={terrain.name}
                    onClick={() => setSelectedTerrain(terrain)}
                    className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-white mb-2"
                >
                    {terrain.name}
                </button>
            ))}
        </div>
    )
}
export default TerrainSelector