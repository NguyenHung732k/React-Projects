import React from 'react'
import WavyText from './WavyText'
import './WavyTextAnimation.css'

const WavyTextAnimation = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <WavyText
                text="Hover Over Me!"
                waveSpeed="0.8s"
                waveHeight="0.6em"
                autoWave={false} // Initially set to false
                className="text-4xl md:text-6xl"
            />
        </div>
    )
}

export default WavyTextAnimation