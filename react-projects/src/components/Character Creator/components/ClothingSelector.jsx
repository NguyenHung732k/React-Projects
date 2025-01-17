import React from 'react'

const ClothingSelector = ({ selectedClothing, setSelectedClothing }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Clothing</h2>
            <div className="grid grid-cols-2 gap-6">
                {['casual', 'formal'].map((style) => (
                    <button
                        key={style}
                        onClick={() => setSelectedClothing(style)}
                        className={`p-6 rounded-lg transition-all duration-300 ${selectedClothing === style ? 'bg-green-500 text-white scale-105' : 'bg-gray-300 hover:bg-green-300'
                            }`}
                    >
                        {style.charAt(0).toUpperCase() + style.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ClothingSelector