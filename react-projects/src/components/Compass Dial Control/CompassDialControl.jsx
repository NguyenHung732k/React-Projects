import React, { useRef, useState } from "react"

const SNAP_ANGLE = 45

const CompassDialControl = () => {
    const dialRef = useRef(null)
    const [angle, setAngle] = useState(0)
    const isDragging = useRef(false)

    // Calculate center of dial
    const getCenter = () => {
        const rect = dialRef.current.getBoundingClientRect()
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        }
    }

    // Convert cursor to angle
    const calculateAngle = (x, y) => {
        const center = getCenter()
        const dx = x - center.x
        const dy = y - center.y
        const radians = Math.atan2(dy, dx)
        const degrees = radians * (180 / Math.PI) + 90
        return (degrees + 360) % 360
    }

    // Drag move handler
    const handlePointerMove = (event) => {
        if (!isDragging.current) return
        const x = event.clientX ?? event.touches?.[0]?.clientX
        const y = event.clientY ?? event.touches?.[0]?.clientY
        const newAngle = calculateAngle(x, y)
        const snapped = Math.round(newAngle / SNAP_ANGLE) * SNAP_ANGLE
        setAngle(snapped)
    }

    const handlePointerDown = (event) => {
        isDragging.current = true
        document.addEventListener("pointermove", handlePointerMove)
        document.addEventListener("pointerup", handlePointerUp)
    }

    const handlePointerUp = () => {
        isDragging.current = false
        document.removeEventListener("pointermove", handlePointerMove)
        document.removeEventListener("pointerup", handlePointerUp)
    }

    const cardinalPoints = [
        { label: "N", angle: 0 },
        { label: "E", angle: 90 },
        { label: "S", angle: 180 },
        { label: "W", angle: 270 },
    ]

    const ticks = Array.from({ length: 24 }, (_, i) => i * 15)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 text-gray-800">
            <div className="relative w-72 h-72">
                {/* Compass Dial */}
                <div
                    ref={dialRef}
                    onPointerDown={handlePointerDown}
                    className="w-full h-full rounded-full border-[6px] border-blue-500 shadow-xl bg-white cursor-grab active:scale-105 transition-transform duration-200 ease-in-out"
                    style={{ transform: `rotate(${angle}deg)` }}
                >
                    {/* Cardinal Directions */}
                    {cardinalPoints.map(({ label, angle }) => (
                        <div
                            key={label}
                            className="absolute left-1/2 top-1/2 text-lg font-bold text-blue-700 select-none"
                            style={{
                                transform: `rotate(${angle}deg) translateY(-110px) rotate(-${angle}deg)`,
                            }}
                        >
                            {label}
                        </div>
                    ))}

                    {/* Tick Marks */}
                    {ticks.map((tickAngle, index) => (
                        <div
                            key={index}
                            className="absolute left-1/2 top-1/2 w-[2px] h-4 bg-gray-500 opacity-60"
                            style={{
                                transform: `rotate(${tickAngle}deg) translateY(-118px)`,
                            }}
                        />
                    ))}

                    {/* Needle */}
                    <div className="absolute left-1/2 top-1/2 w-1 h-28 bg-red-600 origin-bottom rounded-full shadow-md -translate-x-1/2 -translate-y-full transition-transform duration-300 ease-out" />
                </div>

                {/* Angle Label */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-5 text-xl font-semibold text-gray-700">
                    {angle}°
                </div>
            </div>
        </div>
    )
}

export default CompassDialControl