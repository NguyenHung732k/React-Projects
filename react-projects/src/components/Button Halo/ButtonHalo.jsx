import { useState } from "react";

const ButtonHalo = ({ children = 'Explore' }) => {
    const [pos, setPos] = useState({ x: 0.5, y: 0.5 })

    const handleMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height
        setPos({ x, y })
    }

    return (
        <div className="h-screen w-full flex items-center justify-center bg-neutral-950">

            <button
                onMouseMove={handleMove}
                className="
        group relative w-80 px-7 py-3.5 rounded-xl font-semibold tracking-wide
        bg-neutral-900 text-white
        overflow-hidden
        shadow-lg shadow-black/40
        hover:shadow-indigo-500/25
        transition-all duration-300
        hover:-translate-y-[2px]
        select-none
      "
                style={{
                    perspective: "1000px",
                }}
            >

                {/* Cursor-follow halo (primary aura) */}
                <span
                    className="
          absolute inset-0 rounded-xl pointer-events-none
          transition-all duration-[600ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          opacity-0 group-hover:opacity-70
          blur-[30px]
        "
                    style={{
                        background: `radial-gradient(
            400px circle at ${pos.x * 100}% ${pos.y * 100}%,
            rgba(124, 58, 237, 0.33),
            rgba(168, 85, 247, 0.18),
            transparent 70%
          )`,
                    }}
                />

                {/* Secondary ripple bloom (slow, deep glow) */}
                <span
                    className="
          absolute inset-0 rounded-xl pointer-events-none
          bg-gradient-to-r from-indigo-400/30 via-purple-400/25 to-fuchsia-400/30
          blur-[40px]
          opacity-0 scale-75
          transition-all duration-[950ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:opacity-50 group-hover:scale-[1.55]
        "
                />

                {/* Soft directional shine sweep */}
                <span
                    className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-r from-white/0 via-white/10 to-white/0
          blur-xl
          opacity-0 translate-x-[-120%]
          transition-all duration-[650ms]
          ease-out
          group-hover:opacity-20 group-hover:translate-x-[120%]
        "
                />

                {/* High-frequency micro-shine pulse */}
                <span
                    className="
          absolute inset-0 rounded-xl pointer-events-none
          bg-white/5 blur-2xl
          opacity-0 group-hover:opacity-10
          transition-opacity duration-[900ms] ease-out
        "
                />

                {/* Label */}
                <span className="relative z-10">{children}</span>
            </button>
        </div>
    )
}

export default ButtonHalo