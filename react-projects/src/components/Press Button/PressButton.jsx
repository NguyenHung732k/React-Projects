import React, { useState } from "react";
import './PressButton.css'

const PressButton = ({
    label = "Press Me",
    sound = null,
    color = "blue",
}) => {
    const [isPressed, setIsPressed] = useState(false)
    const [justReleased, setJustReleased] = useState(false)

    const handlePressDown = () => {
        setIsPressed(true);
        if (sound) {
            const audio = new Audio(sound)
            audio.currentTime = 0
            audio.play().catch(() => { })
        }
    }

    const handlePressUp = () => {
        setIsPressed(false)
        setJustReleased(true)
        setTimeout(() => setJustReleased(false), 220)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <button
                onMouseDown={handlePressDown}
                onMouseUp={handlePressUp}
                onMouseLeave={handlePressUp}
                onTouchStart={handlePressDown}
                onTouchEnd={handlePressUp}
                className={`
        relative overflow-hidden isolate
        w-80 px-6 py-3 rounded-xl font-semibold text-white select-none
        bg-gradient-to-b from-${color}-500 to-${color}-700
        hover:from-${color}-400 hover:to-${color}-600
        shadow-[0_6px_16px_rgba(0,0,0,0.25)]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]
        transition-all duration-150
        ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${isPressed ? "scale-95 shadow-inner" : "scale-100"}
        ${justReleased ? "animate-pulse-soft" : ""}
      `}
            >
                {/* Light reflection overlay */}
                <span
                    className={`absolute inset-0 bg-white/15 rounded-xl transition-opacity duration-200 ${isPressed ? "opacity-30" : "opacity-0"
                        }`}
                ></span>

                {/* Button label */}
                <span className="relative z-10 drop-shadow-sm">{label}</span>

                {/* Soft top light gradient for realism */}
                <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl pointer-events-none"></span>
            </button>
        </div>
    )
}

export default PressButton