import React from "react"
import "./NeonText.css"

const NeonText = ({
    text = "LIVE",
    isActive = true,
    color = "red",
    size = "text-4xl",
    className = "",
    onClick
}) => {
    const colorClass = `neon-${color}`

    return (
        <span
            onClick={onClick}
            className={`neon ${colorClass} flicker ${isActive ? "pulse-active" : ""} ${size} ${className} cursor-default hover:scale-105 focus:scale-105 outline-none`}
            tabIndex={onClick ? 0 : undefined}
        >
            {text}
        </span>
    )
}

export default NeonText