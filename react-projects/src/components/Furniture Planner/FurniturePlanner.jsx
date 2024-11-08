import React, { useState } from "react"
import Room from "./Room"
import FurnitureList from "./FurnitureList"
import SaveAndShare from "./SaveAndShare"

const FurniturePlanner = () => {
    const [furnitureInRoom, setFurnitureInRoom] = useState([])

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row gap-6 p-6">
            <FurnitureList setFurniture={setFurnitureInRoom} />
            <Room furniture={furnitureInRoom} />
            <SaveAndShare layoutData={furnitureInRoom} />
        </div>
    )
}

export default FurniturePlanner