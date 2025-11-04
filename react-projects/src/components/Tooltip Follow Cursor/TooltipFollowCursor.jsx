import React, { useState, useRef, useEffect } from "react";

const TooltipFollowCursor = ({ children, content }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)
    const tooltipRef = useRef(null)

    const OFFSET = { x: 14, y: 18 }

    useEffect(() => {
        let rafId;

        const moveHandler = (event) => {
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
                if (!tooltipRef.current) return

                const { innerWidth, innerHeight } = window
                const rect = tooltipRef.current.getBoundingClientRect()

                let x = event.clientX + OFFSET.x
                let y = event.clientY + OFFSET.y

                if (x + rect.width > innerWidth - 8) {
                    x = event.clientX - rect.width - OFFSET.x
                }
                if (y + rect.height > innerHeight - 8) {
                    y = event.clientY - rect.height - OFFSET.y
                }

                setPosition((prev) => ({
                    x: prev.x + (x - prev.x) * 0.2,
                    y: prev.y + (y - prev.y) * 0.2,
                }))
            })
        }

        window.addEventListener("mousemove", moveHandler)
        return () => {
            cancelAnimationFrame(rafId)
            window.removeEventListener("mousemove", moveHandler)
        }
    }, [])

    return (
        <div className="h-screen flex flex-col gap-12 items-center justify-center 
                    bg-gradient-to-br from-slate-50 to-slate-100 
                    dark:from-gray-900 dark:to-gray-800 text-center p-8">

            <div
                className="relative inline-block"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <b>Sales Growth</b>

                <div
                    ref={tooltipRef}
                    className={`fixed z-50 pointer-events-none transform-gpu
          transition-all duration-200 ease-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          bg-white/90 dark:bg-gray-900/90
          backdrop-blur-sm border border-gray-200 dark:border-gray-700
          text-gray-900 dark:text-gray-100 text-sm font-medium
          px-3 py-2 rounded-md shadow-lg max-w-xs
        `}
                    style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        transformOrigin: "top left",
                    }}
                >
                    <span> <div>
                        📊 <b>Sales Growth</b>
                        <div className="text-xs text-gray-400">+12.5% this month</div>
                    </div></span>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold 
                           rounded-lg shadow-md hover:bg-blue-700 
                           active:scale-95 transition-all">
                    Hover over me
                </button>
            </div>
            <div
                className="relative inline-block"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <div
                    ref={tooltipRef}
                    className={`fixed z-50 pointer-events-none transform-gpu
          transition-all duration-200 ease-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          bg-white/90 dark:bg-gray-900/90
          backdrop-blur-sm border border-gray-200 dark:border-gray-700
          text-gray-900 dark:text-gray-100 text-sm font-medium
          px-3 py-2 rounded-md shadow-lg max-w-xs
        `}
                    style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        transformOrigin: "top left",
                    }}
                ><span>  📊"Hover me too! Dynamic, glassy tooltip ✨"</span>
                </div>
                <div className="w-48 h-32 bg-emerald-500/80 rounded-lg flex items-center justify-center text-white font-semibold">
                    Chart Area
                </div>
            </div>
        </div>
    )
}

export default TooltipFollowCursor