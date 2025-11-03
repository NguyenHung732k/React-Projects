import React from "react";
import "./ButtonBorderWipe.css"

const ButtonBorderWipe = ({
    label = "Click Me",
    isRounded = false,
    color = "pink",
}) => {
    return (
        <div className="flex flex-col gap-8 justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                ✨ Button Border Wipe Demo
            </h1>
            <button
                className={`relative inline-flex items-center justify-center overflow-hidden 
        w-80 px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-solid 
        transition-all duration-300 ease-in-out group 
        ${isRounded ? "rounded-full" : "rounded-md"}
        hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-${color}-300`}
            >
                {/* Subtle gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-30"></span>

                {/* Button Text */}
                <span className="relative z-10">{label}</span>

                {/* Animated Border */}
                <div
                    className={`button-border-animate absolute inset-0 border-2 border-solid border-transparent rounded-[inherit] group-hover:border-${color}-500`}
                ></div>
            </button>
        </div>
    )
}

export default ButtonBorderWipe