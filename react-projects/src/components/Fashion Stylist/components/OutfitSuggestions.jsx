import React, { useState } from "react"

const items = [
    { id: 1, type: "Top", src: "path/to/top1.jpg" },
    { id: 2, type: "Bottom", src: "path/to/bottom1.jpg" },
    { id: 3, type: "Shoes", src: "path/to/shoes1.jpg" },
]

const OutfitSuggestions = () => {
    const [selectedItems, setSelectedItems] = useState([])

    const toggleSelection = (item) => {
        setSelectedItems((prev) => {
            if (prev.includes(item)) {
                return prev.filter((i) => i !== item)
            } else {
                return [...prev, item]
            }
        })
    }

    return (
        <div className="my-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Mix-and-Match Your Outfit</h2>

            <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => toggleSelection(item)}
                        className={`cursor-pointer border p-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg ${selectedItems.includes(item) ? "bg-indigo-100 border-indigo-500" : "bg-white"
                            }`}
                    >
                        <img src={item.src} alt={item.type} className="w-96 h-64 object-cover rounded-lg mb-4" />
                        <p className="text-center text-gray-600">{item.type}</p>
                    </div>
                ))}
            </div>

            {selectedItems.length > 0 && (
                <div className="mt-6 text-center text-xl text-indigo-700">
                    <p>You've selected {selectedItems.length} items!</p>
                </div>
            )}
        </div>
    )
}

export default OutfitSuggestions