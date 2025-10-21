import React from 'react';

const VerticalSlideButton = ({ children = "Hover Me", onClick }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <button
                onClick={() => alert('Button Clicked!')}
                className="
        relative group inline-flex items-center justify-center
        w-80 px-6 py-3 rounded-lg border border-white/20
        text-white font-semibold overflow-hidden
        backdrop-blur-md bg-white/10 dark:bg-white/5
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        shadow-md hover:shadow-lg active:scale-95
      "
            >
                {/* Background Fill Layer */}
                <span
                    className="
          absolute inset-0 bg-blue-600 dark:bg-blue-500
          transform translate-y-full group-hover:translate-y-0
          transition-transform duration-500 ease-in-out z-0
        "
                />

                <span
                    className="
          relative z-10 transition-colors duration-300
          group-hover:text-white text-white
        "
                >
                    Click Me
                </span>
            </button>
        </div>
    )
}

export default VerticalSlideButton