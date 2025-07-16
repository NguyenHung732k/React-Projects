import { useEffect, useRef, useState } from 'react';

const Snackbar = ({
    message = "Item deleted",
    duration = 5000,
    onUndo,
    onFinish,
}) => {
    const [visible, setVisible] = useState(true)
    const [hovered, setHovered] = useState(false)
    const [progress, setProgress] = useState(100)
    const startTimeRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        let start = performance.now()
        startTimeRef.current = start

        const update = (now) => {
            if (hovered) {
                startTimeRef.current = now - ((100 - progress) / 100) * duration
                animationRef.current = requestAnimationFrame(update)
                return
            }

            const elapsed = now - startTimeRef.current
            const percent = 100 - (elapsed / duration) * 100

            if (percent <= 0) {
                setProgress(0)
                setVisible(false)
                onFinish?.()
            } else {
                setProgress(percent)
                animationRef.current = requestAnimationFrame(update)
            }
        }

        animationRef.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(animationRef.current)
    }, [hovered, duration])

    if (!visible) return null

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="undo-snackbar fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md z-50"
        >
            <div className="flex justify-between items-center text-sm sm:text-base text-gray-900">
                <span>{message}</span>
                <button
                    onClick={() => {
                        setVisible(false)
                        onUndo?.()
                    }}
                    className="ml-4 px-3 py-1 text-blue-600 hover:text-blue-800 font-semibold rounded hover:bg-blue-100 transition-colors"
                >
                    Undo
                </button>
            </div>

            <div className="mt-3 h-1 w-full bg-gray-300 rounded overflow-hidden">
                <div
                    className="h-full bg-blue-500 transition-[width] duration-100 linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}

export default Snackbar