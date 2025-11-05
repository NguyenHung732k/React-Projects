import React, { useRef, useState } from "react";

const HoverDepthCard = () => {
    const cardRef = useRef(null)
    const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 })

    const handleMouseMove = (event) => {
        const card = cardRef.current
        const rect = card.getBoundingClientRect()

        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * 10
        const rotateY = ((x - centerX) / centerX) * 10

        // 3D rotation
        card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
    `

        // Shine movement
        setShine({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 0.4,
        })
    }

    const handleMouseLeave = () => {
        const card = cardRef.current
        card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `
        setShine({ x: 50, y: 50, opacity: 0 });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="
          relative
          w-80 h-[28rem]
          rounded-3xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_12px_40px_rgba(0,0,0,0.4)]
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          cursor-pointer overflow-hidden
        "
                style={{
                    transformStyle: "preserve-3d",
                    transform: "perspective(1000px)",
                }}
            >
                {/* Shine Layer */}
                <div
                    className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.opacity}), transparent 70%)`,
                    }}
                ></div>

                {/* Inner Glow Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-[inset_0_0_25px_rgba(255,255,255,0.05)] pointer-events-none" />

                {/* Card Content */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 text-white drop-shadow-lg">
                            Premium Product
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Discover immersive 3D interactivity with this depth-responsive showcase card built using React & Tailwind CSS.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-8 px-6 py-2.5 bg-indigo-600/80 backdrop-blur-sm text-white font-medium rounded-lg shadow-md hover:bg-indigo-700/90 hover:shadow-lg transition-all duration-200">
                            Explore Now
                        </button>
                    </div>
                </div>

                {/* Bottom Glow Accent */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-indigo-600/30 to-transparent pointer-events-none" />
            </div>
        </div>
    )
}

export default HoverDepthCard