import React, { useState, useRef } from "react"

const ImagePreview = ({ trigger, imageUrl, label }) => {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const previewRef = useRef()

    const handleMouseMove = (event) => {
        const offsetX = 20
        const offsetY = 20
        const previewEl = previewRef.current

        let x = event.clientX + offsetX
        let y = event.clientY + offsetY

        // Prevent overflow
        if (previewEl) {
            const { offsetWidth, offsetHeight } = previewEl
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            if (x + offsetWidth > windowWidth) {
                x = event.clientX - offsetX - offsetWidth
            }
            if (y + offsetHeight > windowHeight) {
                y = event.clientY - offsetY - offsetHeight
            }
        }

        setPosition({ x, y })
    }

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={handleMouseMove}
        >
            <span className="cursor-pointer inline-flex items-center gap-1 text-indigo-600 hover:underline font-medium">
                {trigger}
                {label && (
                    <span className="text-sm text-gray-500 italic">({label})</span>
                )}
            </span>

            {visible && (
                <div
                    ref={previewRef}
                    className="fixed z-50 pointer-events-none transition-all duration-200 ease-out transform"
                    style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                    }}
                >
                    <div className="w-48 h-48 rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white/60 backdrop-blur-lg transform transition-all duration-300 scale-100 opacity-100">
                        <img
                            src={imageUrl}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
        </span>
    )
}

export default ImagePreview