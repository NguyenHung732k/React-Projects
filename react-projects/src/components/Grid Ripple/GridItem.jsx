import React, { useState } from 'react';


const GridItem = ({ onClick, children, rippleColor = 'rgba(255, 255, 255, 0.6)', highlightColor = 'bg-blue-300' }) => {
    const [ripples, setRipples] = useState([])

    const handleClick = (event) => {
        const gridItem = event.target.getBoundingClientRect()
        const clickX = event.clientX - gridItem.left
        const clickY = event.clientY - gridItem.top

        const newRipple = {
            x: clickX,
            y: clickY,
            size: Math.max(gridItem.width, gridItem.height),
        }

        setRipples((prev) => [...prev, newRipple])

        event.target.classList.add(highlightColor)
        setTimeout(() => {
            event.target.classList.remove(highlightColor)
        }, 200)
    }

    return (
        <div
            className="relative w-full h-full flex justify-center items-center bg-gray-300 rounded-lg cursor-pointer overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={handleClick}
            role="button"
            aria-label="Grid item"
        >
            {children}
            {ripples.map((ripple, index) => (
                <div
                    key={index}
                    className="ripple"
                    style={{
                        left: ripple.x - ripple.size / 2 + 'px',
                        top: ripple.y - ripple.size / 2 + 'px',
                        width: ripple.size + 'px',
                        height: ripple.size + 'px',
                        background: rippleColor,
                    }}
                />
            ))}
        </div>
    )
}

export default GridItem