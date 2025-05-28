import React, { useRef, useState, useEffect } from 'react'

const Slide = ({
    onConfirm,
    width = 320,
    height = 56,
    label = 'Slide to confirm',
    confirmedLabel = 'Confirmed!',
    resetAfter = 0, // seconds to auto-reset (0 = no reset)
    icon = '→',
    confirmedIcon = '✓',
}) => {
    const sliderRef = useRef(null)
    const [dragging, setDragging] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    const [offsetX, setOffsetX] = useState(0)

    const maxOffset = width - height

    useEffect(() => {
        let timer
        if (confirmed && resetAfter > 0) {
            timer = setTimeout(() => {
                setConfirmed(false)
                setOffsetX(0)
            }, resetAfter * 1000)
        }
        return () => clearTimeout(timer)
    }, [confirmed, resetAfter])

    const handleStart = (clientX) => {
        if (confirmed) return
        setDragging(true)
    }

    const handleMove = (clientX) => {
        if (!dragging || confirmed) return
        const container = sliderRef.current
        const rect = container.getBoundingClientRect()
        const newOffsetX = clientX - rect.left - height / 2
        setOffsetX(Math.max(0, Math.min(newOffsetX, maxOffset)))
    }

    const handleEnd = () => {
        setDragging(false)
        if (offsetX >= maxOffset - 10) {
            setOffsetX(maxOffset)
            setConfirmed(true)
            onConfirm?.()
        } else {
            setOffsetX(0)
        }
    }

    return (
        <div
            ref={sliderRef}
            style={{ width: `${width}px`, height: `${height}px` }}
            className="relative rounded-full bg-gradient-to-r from-gray-200 to-gray-300 shadow-inner overflow-hidden select-none touch-none"
            onMouseMove={(event) => dragging && handleMove(event.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchMove={(event) => dragging && handleMove(event.touches[0].clientX)}
            onTouchEnd={handleEnd}
        >
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm font-medium transition-opacity duration-200 pointer-events-none">
                {confirmed ? confirmedLabel : label}
            </div>

            {/* Confirmed overlay */}
            <div
                className={`absolute inset-0 bg-green-500 text-white flex items-center justify-center text-sm font-semibold rounded-full transition-opacity duration-300 ${confirmed ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {confirmedIcon} {confirmedLabel}
            </div>

            {/* Slider Button */}
            <div
                onMouseDown={(event) => handleStart(event.clientX)}
                onTouchStart={(event) => handleStart(event.touches[0].clientX)}
                style={{
                    transform: `translateX(${offsetX}px)`,
                    width: `${height}px`,
                    height: `${height}px`,
                }}
                className={`absolute top-0 left-0 rounded-full bg-white shadow-lg flex items-center justify-center text-xl text-gray-700 cursor-pointer transition-transform duration-200 active:scale-95 ${confirmed ? 'bg-green-600 text-white' : ''
                    }`}
            >
                {confirmed ? confirmedIcon : icon}
            </div>
        </div>
    )
}

export default Slide