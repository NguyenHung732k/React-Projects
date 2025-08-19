import React, { useRef, useState, useEffect } from "react";

const ImageZoomLens = ({
    src,
    zoom = 2,
    lensShape = "circle",
    lensSize = 120,
    showZoomPane = true,
}) => {
    const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)
    const containerRef = useRef(null)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 768)
        }
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    const handleMouseMove = (event) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = event.clientX - left
        const y = event.clientY - top

        setLensPosition({
            x: Math.max(Math.min(x, width), 0),
            y: Math.max(Math.min(y, height), 0),
        })
    }

    const lensStyle = {
        width: `${lensSize}px`,
        height: `${lensSize}px`,
        left: `${lensPosition.x - lensSize / 2}px`,
        top: `${lensPosition.y - lensSize / 2}px`,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${zoom * 100}%`,
        backgroundPosition: `-${lensPosition.x * zoom - lensSize / 2}px -${lensPosition.y * zoom - lensSize / 2}px`,
        transition: "background-position 0.1s ease-out",
    }

    const zoomPaneStyle = {
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${zoom * 100}%`,
        backgroundPosition: `-${lensPosition.x * zoom}px -${lensPosition.y * zoom}px`,
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={isDesktop ? handleMouseMove : undefined}
            onMouseEnter={() => isDesktop && setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative w-full max-w-xl mx-auto group cursor-crosshair select-none"
        >
            <img
                src={src}
                alt="Zoom Target"
                className="w-full h-auto rounded-md shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {isDesktop && isHovering && (
                <>
                    {/* Zoom Lens */}
                    <div
                        className={`absolute pointer-events-none border-2 border-white ${lensShape === "circle" ? "rounded-full" : "rounded-md"
                            } shadow-xl ring-1 ring-black/10`}
                        style={lensStyle}
                    />

                    {/* Optional Zoom Preview Pane */}
                    {showZoomPane && (
                        <div
                            className="absolute top-2 right-2 w-40 h-40 border rounded-md shadow-lg bg-white overflow-hidden hidden lg:block"
                            style={zoomPaneStyle}
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default ImageZoomLens