import React, { useState, useRef } from 'react'
import './HoverImagePreview.css'

const HoverImagePreview = ({ text, imageUrl, delay = 150 }) => {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const timeoutRef = useRef(null)

    const previewWidth = 160
    const previewHeight = 120
    const margin = 20

    const handleMouseEnter = () => {
        timeoutRef.current = setTimeout(() => setVisible(true), delay)
    }

    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current)
        setVisible(false)
    }

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event

        const x = clientX + previewWidth + margin > window.innerWidth ? clientX - previewWidth - margin : clientX + margin

        const y = clientY + previewHeight + margin > window.innerHeight ? clientY - previewHeight - margin : clientY + margin

        setPosition({ x, y })
    }

    return (
        <span
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <span className="cursor-pointer underline decoration-dotted text-blue-600 dark:text-blue-400">
                {text}
            </span>

            {visible && (
                <div
                    className="hover-preview-container"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="Preview"
                        className="hover-preview-image"
                    />
                </div>
            )}
        </span>
    )
}

export default HoverImagePreview