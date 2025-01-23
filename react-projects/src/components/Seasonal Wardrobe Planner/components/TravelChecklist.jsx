import React from 'react'

const TravelChecklist = ({ clothes, selectedItems, setSelectedItems }) => {
    const handleToggle = (item) => {
        setSelectedItems(prevState =>
            prevState.includes(item)
                ? prevState.filter(i => i !== item)
                : [...prevState, item]
        )
    }

    const progress = (selectedItems.length / clothes.length) * 100

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-4">
            <h3 className="text-2xl font-semibold">Pack for Travel</h3>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <ul className="space-y-2 mt-4">
                {clothes.map(item => (
                    <li key={item.id} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectedItems.includes(item)}
                            onChange={() => handleToggle(item)}
                            className="mr-2"
                        />
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TravelChecklist