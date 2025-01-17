import React from 'react'

const CharacterProfile = ({ bodyType, clothing, accessories }) => {
    return (
        <div className="text-center p-6 bg-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Character Profile</h2>
            <p className="text-lg text-gray-700 mb-2"><strong>Body Type:</strong> {bodyType}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Clothing:</strong> {clothing}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Accessories:</strong> {accessories.length ? accessories.join(', ') : 'None'}</p>
        </div>
    )
}

export default CharacterProfile