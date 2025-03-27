import React, { useState, useEffect } from 'react'
import Bubble from './Bubble'
import { randomBubbleEffect } from './utils/randomEffects'

const BubbleWrapPopper = () => {
    const [popCount, setPopCount] = useState(0)
    const [speed, setSpeed] = useState(1000)
    const [volume, setVolume] = useState(0.5)
    const [bubbleSize, setBubbleSize] = useState(50)
    const [bubbleColor, setBubbleColor] = useState('bg-blue-500')

    useEffect(() => {
        const interval = setInterval(() => {
            setSpeed((prevSpeed) => Math.max(200, prevSpeed - 100))
            setVolume((prevVolume) => Math.min(1, prevVolume + 0.1))
            setBubbleSize((prevSize) => Math.min(80, prevSize + 5))
            setBubbleColor(getRandomColor())
        }, 2000)

        return () => clearInterval(interval)
    }, [popCount])

    const getRandomColor = () => {
        const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-red-500']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const handleBubblePop = () => {
        setPopCount(popCount + 1)
    }

    const bubbles = Array.from({ length: 10 }).map((_, index) => (
        <Bubble
            key={index}
            onPop={handleBubblePop}
            size={bubbleSize}
            color={bubbleColor}
        />
    ))

    return (
        <div className="h-screen flex flex-wrap justify-center gap-4 p-4 bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen">
            <div className="relative w-full h-full flex items-center justify-center flex-col sm:flex-row">
                <div className="absolute top-0 left-0 right-0">
                    <h1 className="text-white text-4xl font-bold text-center mb-4">Bubble Wrap Popper</h1>
                    <p className="text-white text-lg text-center mb-8">
                        Pop as many bubbles as you can. Get ready for chaos!
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:w-3/4 md:w-1/2">{bubbles}</div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                <div className="text-lg">Bubbles Popped: {popCount}</div>
                <div className="h-2 w-64 bg-gray-300 rounded-full overflow-hidden mt-2">
                    <div
                        className="bg-white h-full"
                        style={{ width: `${Math.min(100, (popCount / 100) * 100)}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default BubbleWrapPopper