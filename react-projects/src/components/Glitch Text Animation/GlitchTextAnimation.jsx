import React from 'react'
import './GlitchTextAnimation.css'
import GlitchText from './GlitchText'

const GlitchTextAnimation = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 min-h-screen bg-gray-900">
            {/* Glitch Text Example 1 */}
            <GlitchText text="Glitch Effect!" speed="2s" intensity={0.1} fontSize="4rem" />

            {/* Glitch Text Example 2 */}
            <GlitchText text="Interactive Title" speed="1.5s" intensity={0.3} fontSize="2.5rem" hoverEffect={true} />
        </div>
    )
}

export default GlitchTextAnimation