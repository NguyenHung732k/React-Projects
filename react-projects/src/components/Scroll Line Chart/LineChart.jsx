import React, { useRef, useEffect, useState } from "react";

const LineChart = () => {
    const pathRef = useRef(null)
    const containerRef = useRef(null)
    const [draw, setDraw] = useState(false)
    const [hoverPoint, setHoverPoint] = useState(null)

    // Chart datapoints
    const points = [
        { x: 10, y: 150, value: 10 },
        { x: 80, y: 80, value: 22 },
        { x: 150, y: 120, value: 18 },
        { x: 220, y: 50, value: 30 },
        { x: 300, y: 100, value: 24 },
        { x: 380, y: 40, value: 35 },
    ]

    /* -------------------------------------------
     *  Scroll-trigger to start line-draw animation
     * ------------------------------------------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setDraw(true),
            { threshold: 0.35 }
        )

        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    /* -------------------------------------------
     *  Animate line draw when visible
     * ------------------------------------------- */
    useEffect(() => {
        if (!draw || !pathRef.current) return

        const path = pathRef.current
        const length = path.getTotalLength()

        path.style.strokeDasharray = length
        path.style.strokeDashoffset = length

        path.getBoundingClientRect() // Force reflow
        path.style.transition = "stroke-dashoffset 2.4s cubic-bezier(.4, 0, .2, 1)"
        path.style.strokeDashoffset = "0"
    }, [draw])

    return (
        <div ref={containerRef} className="w-full flex justify-center my-40 px-4">
            <div className="
        w-full max-w-3xl p-6 rounded-2xl
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur-xl border border-white/20 shadow-xl
        animate-fadeIn
      ">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Revenue Trend
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Scroll to watch the chart draw.
                    </p>
                </div>

                <div className="relative">
                    {/* Light grid background */}
                    <svg
                        viewBox="0 0 400 200"
                        className="absolute inset-0 w-full h-full text-gray-200 dark:text-gray-700"
                    >
                        {[...Array(6)].map((_, i) => (
                            <line
                                key={i}
                                x1="0"
                                x2="400"
                                y1={i * 40}
                                y2={i * 40}
                                stroke="currentColor"
                                className="opacity-40"
                                strokeWidth="0.7"
                            />
                        ))}
                    </svg>

                    {/* Main line chart */}
                    <svg viewBox="0 0 400 200" className="w-full relative z-10">
                        <path
                            ref={pathRef}
                            d="M10 150 L80 80 L150 120 L220 50 L300 100 L380 40"
                            className="stroke-blue-500 dark:stroke-blue-400"
                            strokeWidth="4"
                            fill="none"
                        />

                        {/* Data Points */}
                        {points.map((pt, i) => (
                            <circle
                                key={i}
                                cx={pt.x}
                                cy={pt.y}
                                r={8}
                                onMouseEnter={() => setHoverPoint(pt)}
                                onMouseLeave={() => setHoverPoint(null)}
                                className="
                  fill-white dark:fill-gray-900
                  stroke-blue-500 dark:stroke-blue-400 stroke-2
                  cursor-pointer transition-transform
                  hover:scale-110
                "
                            />
                        ))}
                    </svg>

                    {/* Tooltip */}
                    {hoverPoint && (
                        <div
                            className="
                absolute z-20 px-3 py-1 rounded-md text-sm font-medium
                bg-gray-900 text-white dark:bg-gray-800 shadow-lg
                pointer-events-none animate-tooltip
              "
                            style={{
                                top: hoverPoint.y - 10,
                                left: hoverPoint.x,
                                transform: "translate(-50%, -120%)",
                            }}
                        >
                            {hoverPoint.value}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LineChart