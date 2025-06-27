import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const DraggableReveal = () => {
    const [revealed, setRevealed] = useState(false)
    const x = useMotionValue(0)
    const threshold = 150 // Drag threshold to trigger the reveal action
    const containerRef = useRef(null)

    // Interpolation for progress fill and background blur
    const progress = useTransform(x, [0, threshold], [0, 400])
    const blur = useTransform(x, [0, threshold], ["10px", "0px"])

    const handleDragEnd = (_, info) => {
        if (info.offset.x > threshold) {
            animate(x, threshold, { type: "spring", stiffness: 300 })
            setRevealed(true)
        } else {
            animate(x, 0, { type: "spring", stiffness: 300 })
            setRevealed(false)
        }
    }

    // Auto-reset after unlock for the next interaction
    useEffect(() => {
        if (revealed) {
            setTimeout(() => {
                animate(x, 0, { type: "spring", stiffness: 300 })
                setRevealed(false)
            }, 3000) // Reset after 3 seconds
        }
    }, [revealed])

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md mx-auto p-6">
                <div
                    ref={containerRef}
                    className="relative w-full h-20 bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Progress bar animation */}
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-indigo-600 opacity-40 z-0 rounded-xl"
                        style={{ width: progress }}
                    />

                    {/* Hidden content displayed when revealed */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        {revealed ? (
                            <div className="flex flex-col items-center space-y-2 text-green-600">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                </svg>
                                <p className="font-semibold text-lg">Unlocked!</p>
                            </div>
                        ) : (
                            <p className="text-gray-700 font-medium">Slide to Unlock</p>
                        )}
                    </div>

                    {/* Blur effect while dragging */}
                    {!revealed && (
                        <motion.div
                            className="absolute inset-0 z-10 pointer-events-none"
                            style={{ backdropFilter: blur }}
                        />
                    )}

                    {/* Draggable handle */}
                    {!revealed && (
                        <motion.div
                            drag="x"
                            dragConstraints={containerRef}
                            dragElastic={0.2}
                            style={{ x }}
                            onDragEnd={handleDragEnd}
                            className="absolute top-1/2 left-2 -translate-y-1/2 w-18 h-18 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg z-20 flex items-center justify-center text-white font-bold text-lg cursor-pointer"
                        >
                            👉
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DraggableReveal