import React, { useState } from 'react'
import Starfield from './Starfield'
import ThemeToggle from './ThemeToggle'

const StarfieldBackground = () => {
    const [dayMode, setDayMode] = useState(false)

    return (
        <div className="relative h-screen overflow-hidden text-white font-sans">
            <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />

            <div className="absolute top-5 right-5 z-20 backdrop-blur-md bg-white/10 rounded-xl p-4 shadow-md border border-white/20">
                <div className="flex items-center space-x-3">
                    <span className="text-sm">{dayMode ? '☀️' : '🌙'}</span>
                    <ThemeToggle dayMode={dayMode} toggle={() => setDayMode(!dayMode)} />
                </div>
            </div>

            <div className="z-10 relative h-full flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold drop-shadow-md transition-all duration-500">
                    {dayMode ? 'Daydream Mode' : 'Starlit Sky'}
                </h1>
                <p className="mt-4 text-lg text-gray-200 max-w-xl">
                    {dayMode
                        ? 'Soft constellations under the morning glow.'
                        : 'Drift beneath a sky of dancing stars.'}
                </p>
            </div>
        </div>
    )
}

export default StarfieldBackground