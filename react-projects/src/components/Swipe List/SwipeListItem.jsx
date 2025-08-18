import { useState } from "react";

const SwipeListItem = ({ text, onDelete }) => {
    const [dragX, setDragX] = useState(0)
    const [startX, setStartX] = useState(null)
    const [isSwiping, setIsSwiping] = useState(false)

    const MAX_LEFT = -120
    const DELETE_THRESHOLD = -80

    const handleTouchStart = (event) => {
        setStartX(event.touches[0].clientX)
        setIsSwiping(true)
    }

    const handleTouchMove = (event) => {
        if (!isSwiping) return
        const currentX = event.touches[0].clientX
        const deltaX = currentX - startX
        if (deltaX < 0) {
            setDragX(Math.max(deltaX, MAX_LEFT))
        }
    }

    const handleTouchEnd = () => {
        if (dragX < DELETE_THRESHOLD) {
            setDragX(MAX_LEFT)
            setTimeout(onDelete, 200)
        } else {
            setDragX(0)
        }
        setIsSwiping(false)
    }

    return (
        <div className="relative overflow-hidden rounded-lg shadow-md mb-3">
            {/* Red Delete background */}
            <div className="absolute inset-0 bg-red-500 flex justify-end items-center pr-5">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
                </svg>
            </div>

            {/* Foreground swipable item */}
            <div
                className={`bg-white p-4 rounded-lg shadow-sm transition-transform duration-200 ease-out text-gray-800`}
                style={{ transform: `translateX(${dragX}px)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {text}
            </div>
        </div>
    )
}

export default SwipeListItem