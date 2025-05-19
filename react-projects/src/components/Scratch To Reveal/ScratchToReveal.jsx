import React, { useRef, useEffect, useState } from "react"

const ScratchToReveal = () => {
    const canvasRef = useRef(null)
    const containerRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    const draw = (x, y) => {
        const ctx = canvasRef.current?.getContext("2d")
        if (!ctx) return

        ctx.globalCompositeOperation = "destination-out"
        ctx.beginPath()
        ctx.arc(x, y, 25, 0, Math.PI * 2, false)
        ctx.fill()
    }

    const handlePointerDown = (event) => {
        setIsDrawing(true)
        drawFromEvent(event)
    };

    const handlePointerMove = (event) => {
        if (!isDrawing) return
        drawFromEvent(event)
    }

    const handlePointerUp = () => {
        setIsDrawing(false)
    }

    const drawFromEvent = (event) => {
        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        draw(x, y)
    }

    const resetCanvas = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        ctx.globalCompositeOperation = "source-over"

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, "#6b7280")
        gradient.addColorStop(1, "#9ca3af")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current

        if (canvas && container) {
            canvas.width = container.clientWidth
            canvas.height = container.clientHeight
            resetCanvas()
        }
    }, [])

    return (
        <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 p-4">
            <div
                ref={containerRef}
                className="relative w-96 h-60 rounded-xl shadow-xl overflow-hidden bg-white"
            >
                {/* Hidden Prize */}
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-center z-0 p-4">
                    🎉 Congratulations! You've unlocked a reward!
                </div>

                {/* Canvas Layer */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-10 touch-none cursor-crosshair"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                />

            </div>
            {/* Reset Button */}
            <button
                onClick={resetCanvas}
                className="bg-white/90 hover:bg-white text-gray-800 font-semibold px-4 py-1.5 text-sm rounded-full shadow-md transition hover:scale-105"
            >
                🔁 Reset
            </button>
        </div>
    )
}

export default ScratchToReveal