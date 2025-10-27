import React from "react";

const HoverBounceText = ({ text = "Playful Header ✨" }) => {
    const letters = text.split("")

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-4">

            <h1
                className="group relative flex justify-center flex-wrap 
                 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight 
                 text-transparent bg-clip-text bg-gradient-to-r 
                 from-pink-500 via-purple-500 to-indigo-500 
                 cursor-pointer select-none transition-colors duration-700"
            >
                {letters.map((char, index) => (
                    <span
                        key={index}
                        className={`
            inline-block transition-all duration-500 
            ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
            group-hover:-translate-y-3 group-hover:scale-110 
            group-hover:text-shadow-glow
          `}
                        style={{
                            transitionDelay: `${index * 70}ms`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}

                {/* Decorative underline accent */}
                <span
                    className="absolute -bottom-3 left-0 w-0 h-1.5 
                   bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 
                   rounded-full transition-all duration-700 ease-out 
                   group-hover:w-full"
                />
            </h1>
            <p className="mt-6 text-gray-400 text-lg font-light">
                Hover to see each letter bounce with style!
            </p>
        </div>
    )
}

export default HoverBounceText