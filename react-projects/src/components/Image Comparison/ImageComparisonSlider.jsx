import React, { useState, useRef } from 'react'
import './ImageComparisonSlider.css'

const ImageComparisonSlider = ({ beforeImage, afterImage, label }) => {
    const [sliderPosition, setSliderPosition] = useState(50)
    const sliderRef = useRef(null)
    const isDragging = useRef(false)

    const handleMouseDown = (event) => {
        event.preventDefault()
        isDragging.current = true

        const sliderWidth = sliderRef.current.offsetWidth
        const startX = event.clientX || event.touches[0].clientX

        const handleDragMove = (moveEvent) => {
            if (!isDragging.current) return

            // Get the current cursor position relative to the container
            const moveX = moveEvent.clientX || moveEvent.touches[0].clientX
            const containerOffset = sliderRef.current.getBoundingClientRect().left
            const diff = moveX - containerOffset; // Calculate the distance moved from the left of the container

            // Calculate the new slider position as a percentage
            const newPosition = Math.min(
                Math.max(0, (diff / sliderWidth) * 100), // Ensure the position stays between 0% and 100%
                100
            )

            setSliderPosition(newPosition)
        }

        const stopDrag = () => {
            isDragging.current = false
            document.removeEventListener('mousemove', handleDragMove)
            document.removeEventListener('touchmove', handleDragMove)
            document.removeEventListener('mouseup', stopDrag)
            document.removeEventListener('touchend', stopDrag)
        }

        document.addEventListener('mousemove', handleDragMove)
        document.addEventListener('touchmove', handleDragMove)
        document.addEventListener('mouseup', stopDrag)
        document.addEventListener('touchend', stopDrag)
    }

    return (
        <div className="relative w-full h-64 md:h-96">
            {label && (
                <div className="absolute top-2 left-2 text-white font-bold text-xl z-10">
                    {label}
                </div>
            )}

            <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
                <img
                    src={beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover"
                />
            </div>

            <img
                src={afterImage}
                alt="After"
                className="w-full h-full object-cover"
            />

            <div
                ref={sliderRef}
                className="absolute top-0 left-0 w-full h-full cursor-pointer"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                <div
                    className="absolute top-0 left-0 bg-blue-500 w-2 h-full transition-all duration-200 ease-out"
                    style={{ left: `${sliderPosition}%` }}
                ></div>
            </div>
        </div>
    )
}

export default ImageComparisonSlider