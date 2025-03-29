import React, { useState } from "react"
import './TimeTravelPhone.css'

const timePeriods = [
    // { era: "Ancient Times", style: "scroll", animation: "scroll-animation" },
    // { era: "1970s", style: "rotary", animation: "rotary-animation" },
    { era: "Futuristic", style: "hologram", animation: "hologram-animation" },
    { era: "Alternate Universe", style: "glitch", animation: "glitch-animation" },
]

const TimeTravelPhone = () => {
    const [era, setEra] = useState(timePeriods[0])
    const [isLoading, setIsLoading] = useState(false)

    const handleCall = () => {
        setIsLoading(true)
        setTimeout(() => {
            const randomEra = timePeriods[Math.floor(Math.random() * timePeriods.length)]
            setEra(randomEra)
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-900 to-black">
            <div className={`w-full flex flex-col justify-between items-center gap-4 phone-container ${era.animation} transition-all duration-1000`}>
                <div className="screen flex flex-col justify-between items-center gap-4">
                    <h1 className="text-white text-3xl font-semibold">{era.era}</h1>
                    {isLoading && <div className="text-yellow-300 text-lg mt-2">Time Traveling...</div>}
                </div>
                <div className={`phone ${era.style} transition-all duration-500`}></div>
                <button
                    className="call-button hover:scale-105 transition-transform duration-200"
                    onClick={handleCall}
                >
                    Make a Call
                </button>
            </div>
        </div>
    )
}

export default TimeTravelPhone