import React from 'react'

const BodyTypeSelector = ({ selectedBody, setSelectedBody }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Body Type</h2>
            <div className="flex space-x-6 justify-center">
                {['default', 'muscular', 'slim'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedBody(type)}
                        className={`w-24 py-4 rounded-lg text-center transition-all duration-300 ${selectedBody === type ? 'bg-blue-500 text-white scale-105' : 'bg-gray-200 hover:bg-blue-300'
                            }`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BodyTypeSelector