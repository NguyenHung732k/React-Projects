import React from "react"
import NeonText from "./NeonText"

const NeonTextFlicker = () => {
    const handleClick = () => {
        alert("You clicked the neon!")
    }

    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center gap-8 p-6 text-center">
            <NeonText text="LIVE" color="red" isActive={true} size="text-5xl" />
            <NeonText text="ONLINE" color="green" isActive={true} size="text-3xl" />
            <NeonText text="OFFLINE" color="blue" isActive={false} size="text-2xl" />
            <NeonText text="CLICK ME" color="purple" isActive={true} onClick={handleClick} />
        </div>
    )
}

export default NeonTextFlicker