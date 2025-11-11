import React, { useState } from "react";

const HoverRotate = () => {
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    // Handle cursor movement to calculate rotation
    const handleMouseMove = (event) => {
        const card = event.currentTarget
        const rect = card.getBoundingClientRect()

        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const midX = rect.width / 2
        const midY = rect.height / 2

        const rotateY = ((x - midX) / midX) * 10 // tilt left/right
        const rotateX = ((midY - y) / midY) * 10 // tilt up/down

        setRotateX(rotateX)
        setRotateY(rotateY)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
            <div
                className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl"
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Card Inner Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl">
                    {/* Subtle light overlay */}
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none rounded-2xl" />
                </div>

                {/* Product Image */}
                <img
                    src="https://images.unsplash.com/photo-1616627981220-60b6e63a5b3b?auto=format&fit=crop&w=600&q=80"
                    alt="Product showcase"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-90 rounded-2xl"
                />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white p-6">
                    <h3 className="text-2xl font-bold mb-1 tracking-wide">Aurora Headphones</h3>
                    <p className="text-sm text-gray-200 mb-4">
                        Immersive sound. Modern design. Engineered for comfort.
                    </p>
                    <button className="w-fit px-4 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HoverRotate