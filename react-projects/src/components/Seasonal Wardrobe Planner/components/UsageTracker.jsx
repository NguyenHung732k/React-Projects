import React, { useState } from 'react'

const UsageTracker = ({ clothes }) => {
    const [usageCount, setUsageCount] = useState({})

    const handleWear = (itemId) => {
        setUsageCount(prevState => ({
            ...prevState,
            [itemId]: (prevState[itemId] || 0) + 1
        }))
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-4">
            <h3 className="text-2xl font-semibold">Clothing Usage</h3>
            <div className="space-y-4">
                {clothes.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                            <span className="ml-4">{item.name}</span>
                        </div>
                        <button
                            onClick={() => handleWear(item.id)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            Worn {usageCount[item.id] || 0} times
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsageTracker