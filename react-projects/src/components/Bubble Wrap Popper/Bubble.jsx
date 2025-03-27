import React, { useState } from 'react'
import { randomBubbleEffect } from './utils/randomEffects'

const Bubble = ({ onPop, size, color }) => {
    const [popped, setPopped] = useState(false)

    const handlePop = () => {
        setPopped(true)
        onPop()
        randomBubbleEffect()
    }

    const bubbleSize = `${size}px`
    const bubbleColor = color || 'bg-blue-500'

    if (popped) {
        return null
    }

    return (
        <div
            className={`rounded-full cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-125 ${bubbleColor}`}
            style={{ width: bubbleSize, height: bubbleSize }}
            onClick={handlePop}
        ></div>
    )
}

export default Bubble