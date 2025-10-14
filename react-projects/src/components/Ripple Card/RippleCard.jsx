import React, { useState } from 'react';
import './RippleCard.css'

const RippleCard = () => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="relative w-80 h-52 mx-auto group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Ripple Glow Underlay */}
            <div
                className={`ripple ${hovered ? 'ripple-active' : ''}`}
            ></div>

            {/* Card Container */}
            <div
                className={`card ${hovered ? 'card-hovered' : ''}`}
            >
                {/* Card Content */}
                <h2 className="text-white text-2xl font-semibold mb-2">Interactive Card</h2>
                <p className="text-white/80 text-sm">
                    Hover to lift with ripple effect and glow.
                </p>
            </div>
        </div>
    )
}

export default RippleCard