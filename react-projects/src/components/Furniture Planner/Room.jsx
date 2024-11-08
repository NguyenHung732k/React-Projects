import React, { useState, useRef, useEffect } from "react"

const Room = ({ furniture }) => {
    const [furnitureInRoom, setFurnitureInRoom] = useState(furniture)
    const [roomDimensions, setRoomDimensions] = useState({ width: 500, height: 400 })
    const [error, setError] = useState(false);

    const roomRef = useRef(null)

    const [roomRect, setRoomRect] = useState(null)

    useEffect(() => {
        if (roomRef.current) {
            setRoomRect(roomRef.current.getBoundingClientRect())
        }
    }, [roomDimensions])

    const handleDrop = (event) => {
        event.preventDefault()
        const item = JSON.parse(event.dataTransfer.getData("furniture"))

        if (roomRect) {
            const mouseX = event.clientX - roomRect.left
            const mouseY = event.clientY - roomRect.top

            if (
                mouseX >= 0 &&
                mouseX <= roomRect.width &&
                mouseY >= 0 &&
                mouseY <= roomRect.height
            ) {
                const newItem = { ...item, x: mouseX, y: mouseY }
                setFurnitureInRoom((prev) => [...prev, newItem])
            } else {
                setError(true)
            }
        }
    }


    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleDimensionChange = (event) => {
        const { name, value } = event.target

        if (value > 0 && !isNaN(value)) {
            setRoomDimensions((prevDimensions) => ({
                ...prevDimensions,
                [name]: parseInt(value),
            }))
        }
    }

    const handleFurnitureDrag = (event, itemIndex) => {

        if (roomRect) {
            const mouseX = event.clientX - roomRect.left
            const mouseY = event.clientY - roomRect.top

            if (
                mouseX >= 0 &&
                mouseX <= roomRect.width &&
                mouseY >= 0 &&
                mouseY <= roomRect.height
            ) {
                setFurnitureInRoom((prevItems) => {
                    const updatedItems = [...prevItems]
                    updatedItems[itemIndex] = { ...updatedItems[itemIndex], x: mouseX, y: mouseY }
                    return updatedItems
                })
            } else {
                setError(true)
            }
        }
    }


    const handleMouseDown = (event, index) => {
        const moveHandler = (moveEvent) => {
            handleFurnitureDrag(moveEvent, index)
        }

        const stopMoveHandler = () => {
            document.removeEventListener("mousemove", moveHandler)
            document.removeEventListener("mouseup", stopMoveHandler)
        }

        document.addEventListener("mousemove", moveHandler)
        document.addEventListener("mouseup", stopMoveHandler)
    }

    return (
        <div>
            <div className="mb-4">
                <label className="text-gray-700 mr-2">Room Width:</label>
                <input
                    type="number"
                    name="width"
                    value={roomDimensions.width}
                    onChange={handleDimensionChange}
                    min="100"
                    className="border border-gray-400 p-2 rounded-lg"
                />
                <label className="text-gray-700 ml-4 mr-2">Room Height:</label>
                <input
                    type="number"
                    name="height"
                    value={roomDimensions.height}
                    onChange={handleDimensionChange}
                    min="100"
                    className="border border-gray-400 p-2 rounded-lg"
                />
            </div>
            {error && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm p-2 rounded">
                    Item cannot be placed outside the room!
                </div>
            )}
            <div
                className="room-container relative bg-gradient-to-r from-indigo-100 to-gray-300 border-dashed border-4 border-gray-400 shadow-lg rounded-lg"
                ref={roomRef}
                style={{ width: `${roomDimensions.width}px`, height: `${roomDimensions.height}px` }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <div className="absolute inset-0 p-4 flex justify-center items-center">
                    <h3 className="text-lg font-bold text-gray-800 z-10">Drag Furniture Here</h3>
                </div>

                {furnitureInRoom.map((item, index) => (
                    <div
                        key={index}
                        className="absolute cursor-pointer transition-all duration-300"
                        style={{
                            left: `${item.x - 50}px`,
                            top: `${item.y - 50}px`,
                        }}
                        onMouseDown={(event) => handleMouseDown(event, index)}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg shadow-lg"
                            style={{
                                transform: `rotate(${item.rotation || 0}deg)`,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Room