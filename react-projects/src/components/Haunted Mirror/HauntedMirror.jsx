import React, { useState, useEffect } from "react"
import "./HauntedMirror.css"

const HauntedMirror = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [reflectionStyle, setReflectionStyle] = useState("normal")
    const [playWhisper, setPlayWhisper] = useState(false)

    const spookyBehaviors = ["waving", "tongue", "monster", "flyingPotato"]
    const spookyImages = ["👻", "💀", "😱", "🕸️", "🎃"]
    const [behavior, setBehavior] = useState("")
    const [spookyImage, setSpookyImage] = useState("")

    const handleMouseMove = (event) => {
        setMousePos({
            x: event.clientX,
            y: event.clientY,
        })

        if (Math.random() < 0.01) {
            setBehavior(spookyBehaviors[Math.floor(Math.random() * spookyBehaviors.length)])
        }

        if (!playWhisper) {
            setPlayWhisper(true);
            setTimeout(() => setPlayWhisper(false), 3000)
        }
    }

    const handleClick = () => {
        const randomReflection = Math.random() < 0.5 ? "normal" : "monster"
        setReflectionStyle(randomReflection)
        setSpookyImage(spookyImages[Math.floor(Math.random() * spookyImages.length)])
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div
            className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden"
            onClick={handleClick}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-700 border-8 border-gray-500 rounded-xl shadow-lg glow-mirror">
                <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-opacity-40 border-4 rounded-xl shadow-xl ${reflectionStyle === "monster" ? "bg-red-600" : "bg-white"
                        }`}
                >
                    <div
                        className={`w-full h-full flex items-center justify-center text-4xl ${behavior === "waving" ? "animate-wave" : ""
                            } ${behavior === "tongue" ? "animate-tongue" : ""} ${behavior === "monster" ? "text-6xl text-green-600" : ""
                            }`}
                    >
                        {reflectionStyle === "monster" ? (
                            <span>👹</span>
                        ) : (
                            <span>{spookyImage}</span>
                        )}
                    </div>
                </div>
            </div>

            {playWhisper && (
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            )}
        </div>
    )
}

export default HauntedMirror