import React from "react";
import clsx from "clsx"
import "./OrbitButton.css"

const OrbitButton = ({
    children,
    icon = "✨",
    orbitRadius = 36,
    iconSize = "text-2xl",
    className = ""
}) => {
    return (
        <button
            className={clsx(
                "w-80 h-20 group relative inline-flex items-center justify-center",
                "px-6 py-3 rounded-full font-semibold text-white",
                "bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-md",
                "hover:shadow-lg active:scale-95",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300",
                "transition-all duration-300 ease-in-out",
                className
            )}
        >
            {/* Button Text */}
            <span className="relative z-10">{children}</span>

            {/* Orbiting Icon */}
            <span
                className={clsx(
                    "absolute left-1/2 top-1/2 w-6 h-6 -ml-3 -mt-3",
                    "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100",
                    "transition-opacity transition-transform duration-300 ease-out",
                    "pointer-events-none group-hover:orbit-icon"
                )}
                style={{
                    transformOrigin: `0 ${orbitRadius}px`,
                }}
            >
                <span className={clsx("block", iconSize)}>{icon}</span>
            </span>
        </button>
    )
}

export default OrbitButton