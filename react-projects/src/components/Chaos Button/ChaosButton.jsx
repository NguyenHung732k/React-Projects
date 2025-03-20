import React, { useState, useEffect } from "react"
import "./ChaosButton.css"

const ChaosButton = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [isChasing, setIsChasing] = useState(true)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [timer, setTimer] = useState(5)
    const [buttonStyle, setButtonStyle] = useState("bg-safe")

    const randomPosition = () => {
        return {
            x: Math.floor(Math.random() * (window.innerWidth - 100)),
            y: Math.floor(Math.random() * (window.innerHeight - 100)),
        }
    }

    const handleClick = () => {
        if (isChasing) {
            setPosition(randomPosition())
            setButtonStyle("bg-chaotic")
        } else {
            setIsClicked(true)
        }
    }

    useEffect(() => {
        let countdown
        if (isChasing && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
        } else if (timer === 0) {
            setIsChasing(false)
            setButtonStyle("bg-safe")
        }
        return () => clearInterval(countdown)
    }, [isChasing, timer])

    useEffect(() => {
        if (isClicked) {
            const confetti = document.createElement('div')
            confetti.innerHTML = '🎉🎉🎉'
            confetti.className = 'absolute text-6xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce'
            document.body.appendChild(confetti)
            setTimeout(() => {
                confetti.remove()
            }, 3000)
        }
    }, [isClicked])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div
                className={`absolute p-4 font-bold rounded-lg cursor-pointer transition-all duration-500 ${buttonStyle} ${isChasing ? 'chaotic' : 'transition-safe'}`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) rotate(${Math.random() * 360}deg)`,
                }}
                onClick={handleClick}
            >
                {isChasing ? `Catch Me! (${timer}s)` : "You Got Me!"}
            </div>
        </div>
    )
}

export default ChaosButton