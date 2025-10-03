import React from "react";
import PropTypes from "prop-types"
import "./GlowCard.css"

const GlowCard = ({ children, glowColor = "#00ffff", animationSpeed = "2s" }) => {
    const glowStyle = {
        "--glow-color": glowColor,
        "--glow-speed": animationSpeed,
    }

    return (
        <div
            style={glowStyle}
            className="glow-card group relative w-full max-w-sm h-56 p-6 
                 bg-white/5 text-white rounded-2xl 
                 backdrop-blur-lg border border-white/10 
                 shadow-xl overflow-hidden 
                 transition-transform duration-300 ease-in-out 
                 hover:scale-[1.025] focus-within:scale-[1.025]"
            tabIndex="0"
            role="button"
        >
            <span className="glow-sweep pointer-events-none"></span>

            <div className="relative z-10">{children}</div>
        </div>
    )
}


export default GlowCard