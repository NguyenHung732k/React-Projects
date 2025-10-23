import React from "react";
import "./ScanButton.css"

const ScanButton = ({ text = "Initiate Scan" }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900">
            <button
                className="
        relative group overflow-hidden
        w-80 px-10 py-3
        bg-gray-900 text-cyan-300
        rounded-lg font-semibold tracking-wider uppercase
        shadow-[0_0_15px_rgba(0,255,255,0.15)]
        transition-all duration-300
        hover:shadow-[0_0_25px_rgba(0,255,255,0.45)]
        focus:outline-none focus:ring-2 focus:ring-cyan-400/70
        active:scale-[0.98]
      "
            >
                {/* Text */}
                <span className="relative z-10 transition-all duration-300 group-hover:text-cyan-100">
                    {text}
                </span>

                {/* Scanning Line (controlled by CSS animation) */}
                <span
                    className="
          scan-line
          absolute top-0 left-0 w-full h-full
          bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent
          opacity-0 group-hover:opacity-100
        "
                />

                {/* Neon Edge Glow */}
                <span
                    className="
          absolute inset-0 rounded-lg
          ring-1 ring-cyan-500/30
          group-hover:ring-cyan-400/60
          transition-all duration-500
        "
                />

                {/* Subtle Inner Glow */}
                <span
                    className="
          absolute inset-0
          bg-cyan-500/5 group-hover:bg-cyan-500/10
          blur-md transition-all duration-500
        "
                />

                {/* Bottom Reflection */}
                <span
                    className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          w-[70%] h-[20%]
          bg-cyan-500/20 blur-2xl rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
        "
                />
            </button>
        </div>
    )
}

export default ScanButton