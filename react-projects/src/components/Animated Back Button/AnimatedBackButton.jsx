import React from "react";

const AnimatedBackButton = ({ label = "Back" }) => {
    return (
        <button
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 ease-out"
            aria-label={label}
        >
            <span
                className="absolute -left-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out"
                aria-hidden="true"
            >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
            </span>

            <span className="pl-0 group-hover:pl-4 transition-all duration-300 ease-out">
                {label}
            </span>
        </button>
    )
}

export default AnimatedBackButton