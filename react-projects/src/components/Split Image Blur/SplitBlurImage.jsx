import React, { useRef } from "react";

const SplitBlurImagePro = ({
    src,
    alt,
    title,
    height = "420px",
    intensity = 6, // 3D tilt strength
}) => {
    const ref = useRef(null)

    const handleMouseMove = (event) => {
        if (window.innerWidth < 768) return // Disable tilt on small screens

        const rect = ref.current.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5

        ref.current.style.setProperty("--x", x)
        ref.current.style.setProperty("--y", y)
    }

    const resetTilt = () => {
        ref.current.style.setProperty("--x", 0)
        ref.current.style.setProperty("--y", 0)
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="
        relative w-full overflow-hidden rounded-2xl cursor-pointer 
        group transition-all duration-700 ease-out
        [perspective:1200px]
        bg-neutral-900
      "
            style={{ height }}
        >
            {/* Glow Highlight */}
            <div
                className="
          absolute inset-0 rounded-2xl opacity-0 
          group-hover:opacity-25 
          bg-gradient-to-br from-white/20 to-transparent
          transition-all duration-700 pointer-events-none
        "
            />

            {/* Tilt Wrapper */}
            <div
                className="
          absolute inset-0 transition-transform duration-700 ease-out
          will-change-transform
        "
                style={{
                    transform: `
            rotateX(calc(var(--y) * -${intensity}deg)) 
            rotateY(calc(var(--x) * ${intensity}deg))
            scale(1.04)
          `,
                }}
            >
                {/* BASE Layer */}
                <img
                    src={src}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* PARALLAX Layers */}
                <img
                    src={src}
                    alt={alt}
                    className="
            absolute inset-0 w-full h-full object-cover 
            opacity-70 blur-sm transition-all duration-700
            group-hover:translate-x-3 group-hover:-translate-y-1
          "
                />

                <img
                    src={src}
                    alt={alt}
                    className="
            absolute inset-0 w-full h-full object-cover 
            opacity-40 blur-lg transition-all duration-700
            group-hover:-translate-x-4 group-hover:translate-y-2
          "
                />

                <img
                    src={src}
                    alt={alt}
                    className="
            absolute inset-0 w-full h-full object-cover 
            opacity-25 blur-xl transition-all duration-700
            group-hover:translate-x-2 group-hover:translate-y-3
          "
                />
            </div>

            {/* Optional Title */}
            {title && (
                <div
                    className="
            absolute bottom-0 left-0 right-0 p-5 
            opacity-0 translate-y-6
            bg-black/30 backdrop-blur-md text-white
            transition-all duration-700
            group-hover:opacity-100 group-hover:translate-y-0
          "
                >
                    <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
                </div>
            )}

            {/* Border Shine */}
            <div
                className="
          absolute inset-0 rounded-2xl border border-white/5 
          group-hover:border-white/20 
          transition-all duration-700
          pointer-events-none
        "
            />
        </div>
    )
}

export default SplitBlurImagePro