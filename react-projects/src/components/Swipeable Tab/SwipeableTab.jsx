import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, animate } from "framer-motion"
import "./SwipeableTab.css"

const tabs = ["Home", "Profile", "Settings", "About"]

const SwipeableTab = () => {
    const containerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const x = useMotionValue(0)

    const handleSnap = () => {
        const container = containerRef.current
        if (!container) return

        const tabWidth = container.offsetWidth
        const scrollX = x.get()
        const index = Math.round(scrollX / tabWidth)
        const clampedIndex = Math.max(0, Math.min(tabs.length - 1, index))

        animate(x, clampedIndex * tabWidth, {
            type: "spring",
            stiffness: 300,
            damping: 25,
            onUpdate: (latest) => {
                container.scrollLeft = latest
            },
        })

        setActiveIndex(clampedIndex)
    }

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let isDragging = false
        let startX = 0
        let scrollStart = 0

        const onPointerDown = (event) => {
            isDragging = true
            startX = event.clientX
            scrollStart = container.scrollLeft
        }

        const onPointerMove = (event) => {
            if (!isDragging) return
            const delta = startX - event.clientX
            container.scrollLeft = scrollStart + delta
            x.set(container.scrollLeft)
        }

        const onPointerUp = () => {
            if (isDragging) handleSnap()
            isDragging = false
        }

        container.addEventListener("pointerdown", onPointerDown)
        container.addEventListener("pointermove", onPointerMove)
        container.addEventListener("pointerup", onPointerUp)
        container.addEventListener("pointerleave", onPointerUp)

        return () => {
            container.removeEventListener("pointerdown", onPointerDown)
            container.removeEventListener("pointermove", onPointerMove)
            container.removeEventListener("pointerup", onPointerUp)
            container.removeEventListener("pointerleave", onPointerUp)
        }
    }, [])

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <div className="relative border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <motion.div
                    className="absolute bottom-0 h-1 bg-blue-600 rounded-full transition-all"
                    style={{
                        width: `${100 / tabs.length}%`,
                        left: `${(100 / tabs.length) * activeIndex}%`,
                    }}
                />

                <div
                    ref={containerRef}
                    className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory touch-pan-x"
                >
                    {tabs.map((tab, index) => (
                        <div
                            key={tab}
                            className={`w-full flex-shrink-0 snap-center text-center py-4 transition-colors duration-300 cursor-pointer ${index === activeIndex
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-500 hover:text-blue-500"
                                }`}
                            style={{ minWidth: "100%" }}
                            onClick={() => {
                                const container = containerRef.current
                                if (container) {
                                    animate(x, index * container.offsetWidth, {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                        onUpdate: (latest) => {
                                            container.scrollLeft = latest;
                                        },
                                    })
                                }
                                setActiveIndex(index)
                            }}
                        >
                            <span className="text-base">{tab}</span>
                        </div>
                    ))}
                </div>
            </div>

            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 bg-white rounded-xl border border-gray-100 shadow-md"
            >
                <p className="text-sm text-gray-600">
                    You're viewing the <strong>{tabs[activeIndex]}</strong> tab content.
                </p>
            </motion.div>
        </div>
    )
}

export default SwipeableTab