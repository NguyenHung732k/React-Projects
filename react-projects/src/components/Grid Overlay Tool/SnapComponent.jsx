import React, { useState } from 'react'

const SnapComponent = ({ gridSize }) => {
    const [position, setPosition] = useState({ x: 500, y: 50 })

    const handleDrag = (event) => {
        const snappedX = Math.round(event.clientX / gridSize) * gridSize
        const snappedY = Math.round(event.clientY / gridSize) * gridSize
        setPosition({ x: snappedX, y: snappedY })
    }

    const handleMouseDown = (event) => {
        event.preventDefault()
        const onMouseMove = (event) => handleDrag(event)
        const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup', onMouseUp)
        }
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp)
    }

    return (
        <div
            className="absolute w-32 h-32 bg-green-600 text-white font-bold flex items-center justify-center rounded-lg transition-transform duration-200 shadow-lg hover:shadow-2xl cursor-grab active:cursor-grabbing select-none"
            style={{ left: position.x, top: position.y }}
            onMouseDown={(event) => handleMouseDown(event)}
        >
            Snap
        </div>
    )
}

export default SnapComponent