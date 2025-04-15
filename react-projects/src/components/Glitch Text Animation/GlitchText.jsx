import React, { useState } from 'react'

const GlitchText = ({ text, speed = '1s', intensity = 0.2, fontSize = '3rem', hoverEffect = true }) => {
    const [hovering, setHovering] = useState(false)

    const glitchStyle = {
        animationDuration: speed,
        animationDelay: `${intensity}s`,
        fontSize: fontSize,
    }

    return (
        <h1
            className={`glitch ${hovering ? 'scale-110 rotate-1' : ''}`}
            data-text={text}
            style={glitchStyle}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            {text}
        </h1>
    )
}


export default GlitchText