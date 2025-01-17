import React from 'react'

const AccessorySelector = ({ selectedAccessories, setSelectedAccessories }) => {
    const toggleAccessory = (accessory) => {
        setSelectedAccessories(prev =>
            prev.includes(accessory)
                ? prev.filter(item => item !== accessory)
                : [...prev, accessory]
        )
    }

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Accessories</h2>
            <div className="flex space-x-6 justify-center">
                {['glasses', 'hat'].map((accessory) => (
                    <button
                        key={accessory}
                        onClick={() => toggleAccessory(accessory)}
                        className={`p-4 w-32 text-center rounded-lg transition-all duration-300 ${selectedAccessories.includes(accessory)
                                ? 'bg-purple-500 text-white scale-105'
                                : 'bg-gray-300 hover:bg-purple-300'
                            }`}
                    >
                        {accessory.charAt(0).toUpperCase() + accessory.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default AccessorySelector