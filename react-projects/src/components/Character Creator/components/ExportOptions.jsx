import React from 'react'

const ExportOptions = ({ character }) => {
    const exportCharacter = () => {
        console.log(character)
        // Implement image or 3D export later
    }

    return (
        <div className="w-full mt-6 text-center">
            <button
                onClick={exportCharacter}
                className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-500 transition-all duration-300"
            >
                Export Character
            </button>
        </div>
    )
}

export default ExportOptions