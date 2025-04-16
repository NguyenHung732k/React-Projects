import React, { useState, useEffect } from "react"

const CustomCursor = () => {
    const [cursorStyle, setCursorStyle] = useState("default")
    const [trail, setTrail] = useState(false)
    const [radius, setRadius] = useState(30)
    const [delay, setDelay] = useState(50)

    useEffect(() => {
        const cursor = document.querySelector("#cursor")
        const cursorTrail = document.querySelector("#cursorTrail")

        const updateCursor = (event) => {
            const { clientX, clientY } = event

            if (cursor) {
                cursor.style.top = `${clientY - cursor.offsetHeight / 2}px`
                cursor.style.left = `${clientX - cursor.offsetWidth / 2}px`
            }

            if (trail && cursorTrail) {
                cursorTrail.style.top = `${clientY - cursorTrail.offsetHeight / 2}px`
                cursorTrail.style.left = `${clientX - cursorTrail.offsetWidth / 2}px`
                cursorTrail.style.transition = `all ${delay}ms ease-in-out`
            }
        }

        document.addEventListener("mousemove", updateCursor)
        return () => document.removeEventListener("mousemove", updateCursor)
    }, [trail, delay])

    const toggleCursorStyle = (style) => {
        setCursorStyle(style)
        setTrail(style === "trail")
    }

    return (
        <div className="relative z-50 w-full h-screen bg-gray-100 overflow-hidden">
            {/* Cursor Element */}
            <div
                id="cursor"
                className={`absolute rounded-full bg-black transition-all duration-300 ${cursorStyle === "blob" ? "w-20 h-20" : "w-10 h-10"
                    }`}
            />
            {trail && (
                <div
                    id="cursorTrail"
                    className={`absolute rounded-full bg-black opacity-50 transition-all duration-300 w-10 h-10`}
                    style={{ borderRadius: `${radius}%` }}
                />
            )}

            {/* Settings Panel */}
            <div className="absolute top-4 left-4 z-50 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col gap-4 max-w-xs">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-gray-700">Cursor Styles</h3>
                    <div className="flex justify-between gap-2">
                        {["default", "trail", "magnet", "blob"].map((style) => (
                            <button
                                key={style}
                                onClick={() => toggleCursorStyle(style)}
                                className={`p-2 px-2.5 w-1/3 rounded-lg font-medium transition-colors duration-300 ${cursorStyle === style
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            >
                                <span>{style.charAt(0).toUpperCase() + style.slice(1)}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Trail Settings */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-gray-700">Adjust Trail</h3>
                    <div>
                        <label htmlFor="radius" className="text-sm text-gray-600">Radius:</label>
                        <input
                            id="radius"
                            type="range"
                            min="10"
                            max="50"
                            value={radius}
                            onChange={(event) => setRadius(event.target.value)}
                            className="w-full mt-1"
                        />
                        <span className="text-sm text-gray-500">{radius}%</span>
                    </div>

                    <div>
                        <label htmlFor="delay" className="text-sm text-gray-600">Delay:</label>
                        <input
                            id="delay"
                            type="range"
                            min="10"
                            max="200"
                            value={delay}
                            onChange={(event) => setDelay(event.target.value)}
                            className="w-full mt-1"
                        />
                        <span className="text-sm text-gray-500">{delay}ms</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomCursor