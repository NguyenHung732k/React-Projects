import React from 'react'

const CharacterDisplay = ({ character }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Character Details</h2>
                <p><strong>Name:</strong> {character.name || 'N/A'}</p>
                <p><strong>Class:</strong> {character.class || 'N/A'}</p>
                <p><strong>Level:</strong> {character.level || 'N/A'}</p>
                <p><strong>Health:</strong> {character.health || 'N/A'}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
                <p><strong>Experience:</strong> {character.experience || '0'}</p>
                <p><strong>Alignment:</strong> {character.alignment || 'N/A'}</p>
                <p><strong>Background:</strong> {character.background || 'N/A'}</p>
                <p><strong>Skills:</strong> {character.skills.length > 0 ? character.skills.join(', ') : 'None'}</p>
            </div>
        </div>
    )
}

export default CharacterDisplay