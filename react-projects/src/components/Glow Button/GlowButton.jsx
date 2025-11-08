import React from 'react';
import './GlowButton.css'

const GlowButton = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <button
                className="relative group w-80 px-8 py-3 rounded-lg border border-transparent text-white bg-indigo-600 overflow-hidden shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
                aria-label="Glow Button"
            >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-300 to-indigo-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-out"></span>

                <span className="absolute inset-0 w-full h-full border-2 border-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:glow-ring transition-opacity duration-500 ease-out"></span>

                <span className="relative z-10 text-lg font-semibold">Hover Me</span>
            </button>
        </div>
    )
}

export default GlowButton