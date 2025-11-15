import { useEffect, useState } from "react";

const StrokeButton = ({
    children = "Submit",
    loading,
    onClick,
    shape = "rect",
    className = "",
}) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (!loading) {
            setProgress(100)
            return
        }

        setProgress(0)
        let t = 0
        const int = setInterval(() => {
            t = (t + 1) % 100
            setProgress(t)
        }, 16)

        return () => clearInterval(int)
    }, [loading])

    const dash = 100
    const offset = dash - (progress / 100) * dash

    return (
        <button
            onClick={onClick}
            disabled={loading}
            className={`
        relative px-6 py-3 rounded-xl font-medium select-none
        transition-all duration-300 ease-out
        bg-white/10 text-white backdrop-blur-lg
        border border-white/25 shadow-sm
        hover:bg-white/20 hover:shadow-lg
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
        >
            {/* Button text (dimmed while loading) */}
            <span
                className={`transition-opacity duration-300 ${loading ? "opacity-40" : "opacity-100"
                    }`}
            >
                {children}
            </span>

            {/* SVG Stroke Overlay */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 40"
            >
                {shape === "rect" ? (
                    <rect
                        x="2"
                        y="2"
                        width="96"
                        height="36"
                        rx="10"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeDasharray={dash}
                        strokeDashoffset={offset}
                        className="transition-[stroke-dashoffset] duration-200 ease-linear"
                    />
                ) : (
                    <circle
                        cx="50"
                        cy="20"
                        r="18"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeDasharray={dash}
                        strokeDashoffset={offset}
                        className="transition-[stroke-dashoffset] duration-200 ease-linear"
                    />
                )}
            </svg>
        </button>
    )
}

export default StrokeButton