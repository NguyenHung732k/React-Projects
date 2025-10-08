import React, { useRef, useEffect, useState } from "react";

const ScatterButton = () => {
    const canvasRef = useRef(null)
    const buttonRef = useRef(null)
    const [particles, setParticles] = useState([])

    const PARTICLE_COUNT = 40

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        const resizeCanvas = () => {
            if (!buttonRef.current) return
            canvas.width = buttonRef.current.offsetWidth
            canvas.height = buttonRef.current.offsetHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        let animationFrameId

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            setParticles((prevParticles) =>
                prevParticles
                    .map((p) => ({
                        ...p,
                        x: p.x + p.vx,
                        y: p.y + p.vy,
                        alpha: p.alpha - 0.015,
                    }))
                    .filter((p) => p.alpha > 0)
            )

            particles.forEach((p) => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.shadowColor = `rgba(${p.color}, ${p.alpha})`
                ctx.shadowBlur = 12
                ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(drawParticles)
        }

        drawParticles()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [particles])

    const createParticles = () => {
        if (!buttonRef.current) return
        const rect = buttonRef.current.getBoundingClientRect()
        const colors = [
            "255,255,255",
            "173,216,230", // LightBlue
            "135,206,250", // SkyBlue
            "0,191,255",   // DeepSkyBlue
            "186,85,211",  // MediumOrchid
        ]

        const newParticles = Array.from({ length: PARTICLE_COUNT }).map(() => {
            const angle = Math.random() * 2 * Math.PI
            const speed = Math.random() * 2 + 1
            return {
                x: rect.width / 2,
                y: rect.height / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: Math.random() * 2 + 1,
                alpha: 1,
                color: colors[Math.floor(Math.random() * colors.length)],
            }
        })

        setParticles(newParticles)
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div
                className="relative inline-block group"
                onMouseEnter={createParticles}
                onMouseLeave={() => setParticles([])}
            >
                <button
                    ref={buttonRef}
                    className="relative z-10 px-6 py-3 text-white font-semibold rounded-xl 
                   transition-all duration-300 ease-out
                   bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                   shadow-md hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label="Interactive button with hover effect"
                >
                    Hover Me !
                </button>

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-none z-0"
                />
            </div>
        </div>
    )
}

export default ScatterButton