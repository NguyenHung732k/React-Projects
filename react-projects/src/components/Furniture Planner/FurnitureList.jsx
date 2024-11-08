import React from "react"

const FurnitureList = ({ setFurniture }) => {
    const furnitureItems = [
        { id: 1, name: "Sofa", image: "/path/to/sofa.png" },
        { id: 2, name: "Table", image: "/path/to/table.png" },
        { id: 3, name: "Chair", image: "/path/to/chair.png" },
    ]

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData("furniture", JSON.stringify(item))
    }

    return (
        <div className="w-full sm:w-80 lg:w-1/4 p-4 bg-white rounded-lg shadow-xl flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Available Furniture</h3>
            <div className="space-y-6">
                {furnitureItems.map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={(event) => handleDragStart(event, item)}
                        className="cursor-pointer flex items-center gap-4 p-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-100 hover:scale-105"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md shadow-sm"
                        />
                        <span className="text-gray-600 font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FurnitureList