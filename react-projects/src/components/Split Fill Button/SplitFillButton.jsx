import React from "react";

const SplitFillButton = ({ children = "Get Started" }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <button
                className="
        relative overflow-hidden
        w-80 px-10 py-3
        font-semibold text-lg
        text-indigo-600 border-2 border-indigo-600
        rounded-full
        group
        transition-all duration-300
        hover:shadow-xl hover:scale-[1.04]
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
      "
            >
                {/* Left gradient fill */}
                <span
                    className="
          absolute left-0 top-0 h-full w-1/2
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
          transform -translate-x-full
          group-hover:translate-x-0
          transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
        "
                ></span>

                {/* Right gradient fill */}
                <span
                    className="
          absolute right-0 top-0 h-full w-1/2
          bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-500
          transform translate-x-full
          group-hover:translate-x-0
          transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
        "
                ></span>

                {/* Optional shimmer sweep */}
                <span
                    className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          translate-x-[-100%]
          group-hover:translate-x-[100%]
          transition-transform duration-1000 ease-in-out
          pointer-events-none
        "
                ></span>

                {/* Text Layer */}
                <span
                    className="
          relative z-10 transition-colors duration-500
          group-hover:text-white
        "
                >
                    {children}
                </span>
            </button>
        </div>
    )
}

export default SplitFillButton