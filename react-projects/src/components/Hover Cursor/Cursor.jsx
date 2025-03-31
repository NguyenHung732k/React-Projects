import React, { useEffect, useState } from 'react'

const Cursor = ({ cursorType }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const mouseMoveHandler = (event) => {
        setPosition({ x: event.clientX, y: event.clientY })
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div
            className={`cursor ${cursorType === 'button' ? 'cursor-button' : ''} 
                  ${cursorType === 'link' ? 'cursor-link' : ''} 
                  ${cursorType === 'ripple' ? 'cursor-ripple' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
    )
}

export default Cursor