import React from 'react'

const GenerateButton = ({ onGenerate }) => (
    <button
        onClick={onGenerate}
        className="my-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
    >
        Generate Problem
    </button>
)

export default GenerateButton