import React, { useState } from "react";
import "./DepthShiftCard.css"

const DepthShiftCard = ({ 
    imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", 
    title = "Mountain Escape", 
    description = "A serene landscape that comes to life with subtle motion.", 
    speed = 15
}) => {
    const [offset, setOffset] = useState({ x: 50, y: 50 })

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setOffset({ x, y })
    }

    const handleMouseLeave = () => {
        setOffset({ x: 50, y: 50 })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="card relative group w-80 h-96 overflow-hidden rounded-2xl shadow-xl bg-gray-900/5 border border-gray-200 hover:shadow-2xl transition-all duration-500 ease-out"
            >
                <div
                    className="card-image absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out will-change-transform group-hover:scale-105"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                />

                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-5 text-white z-10">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-cyan-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-200 opacity-90 leading-snug">
                        {description}
                    </p>
                </div>

                <div className="accent-border absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/40 transition-all duration-500"></div>
            </div>
        </div>
    )
}

export default DepthShiftCard