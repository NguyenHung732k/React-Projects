import React, { useRef, useState } from 'react'

const Magnifier = ({
    src,
    zoom = 2.5,
    lensSize = 150,
    showPreviewPanel = true,
    previewSize = 300,
}) => {
    const containerRef = useRef(null)
    const [lens, setLens] = useState({ x: 0, y: 0, visible: false })

    const handleMouseMove = (event) => {
        const { top, left, width, height } = containerRef.current.getBoundingClientRect()
        const x = event.clientX - left
        const y = event.clientY - top

        const clampedX = Math.max(0, Math.min(x, width))
        const clampedY = Math.max(0, Math.min(y, height))

        setLens({ x: clampedX, y: clampedY, visible: true })
    }

    const handleMouseLeave = () => {
        setLens((prev) => ({ ...prev, visible: false }))
    }

    const getBgPosition = (axis, dimension) => {
        const percent = (lens[axis] / dimension) * 100
        return `${percent}%`
    }

    return (
        <div className="flex flex-col lg:flex-row items-start gap-6 max-w-6xl mx-auto p-6 bg-white shadow-sm rounded-md">
            {/* Main Image Container */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-lg rounded-md overflow-hidden cursor-none"
            >
                <img
                    src={src}
                    alt="Zoomable"
                    className="w-full h-auto object-cover rounded-md shadow-md"
                />

                {/* Zoom Lens */}
                {lens.visible && (
                    <div
                        className="absolute pointer-events-none rounded-full border border-white shadow-lg transition-transform duration-150 ease-out"
                        style={{
                            width: lensSize,
                            height: lensSize,
                            top: lens.y - lensSize / 2,
                            left: lens.x - lensSize / 2,
                            backgroundImage: `url(${src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: `${zoom * 100}%`,
                            backgroundPosition: `${getBgPosition('x', containerRef.current.offsetWidth)} ${getBgPosition('y', containerRef.current.offsetHeight)}`,
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                            backdropFilter: 'blur(3px)',
                            transition: 'all 0.15s ease-in-out',
                        }}
                    />
                )}
            </div>

            {/* Optional Zoom Preview Panel */}
            {showPreviewPanel && lens.visible && (
                <div
                    className="hidden lg:block rounded-md border border-gray-200 shadow-lg"
                    style={{
                        width: previewSize,
                        height: previewSize,
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${zoom * 100}%`,
                        backgroundPosition: `${getBgPosition('x', containerRef.current.offsetWidth)} ${getBgPosition('y', containerRef.current.offsetHeight)}`,
                    }}
                />
            )}
        </div>
    )
}

export default Magnifier