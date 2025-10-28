import { useState, useRef } from "react";
import "./RippleButton.css"

const RippleButton = ({
    color = "from-blue-500 to-blue-700",
    textColor = "text-white",
}) => {
    const [ripples, setRipples] = useState([])
    const buttonRef = useRef(null)

    const handleClick = (event) => {
        const rect = buttonRef.current.getBoundingClientRect()
        const size = rect.width * 1.5
        const x = event.clientX - rect.left - size / 2
        const y = event.clientY - rect.top - size / 2

        const newRipple = {
            id: Date.now(),
            x,
            y,
            size,
        }

        setRipples((prev) => [...prev, newRipple])

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
        }, 800)
    }

    return (
        <div className="h-screen flex items-center justify-center bg-slate-100">
            <div className="flex flex-col gap-6">

                <button
                    ref={buttonRef}
                    onClick={handleClick}
                    className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold ${textColor}
                  bg-gradient-to-br ${color}
                  shadow-lg transition-all duration-200 ease-out
                  active:scale-[0.96] active:shadow-inner 
                  hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300`}
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-30 transition-opacity rounded-xl" />

                    <span className="absolute inset-0 pointer-events-none">
                        {ripples.map((ripple) => (
                            <span
                                key={ripple.id}
                                className="absolute rounded-full bg-white/30 ripple-animation"
                                style={{
                                    left: ripple.x,
                                    top: ripple.y,
                                    width: ripple.size,
                                    height: ripple.size,
                                }}
                            />
                        ))}
                    </span>

                    {/* Button label */}
                    <span className="relative z-10">Confirm ✅</span>
                </button>
            </div>
        </div>
    )
}

export default RippleButton