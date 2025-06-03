import React, { useState } from 'react'

const ShortcutButton = ({ children, shortcut, onClick, ariaLabel }) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="relative inline-block">
            <button
                onClick={onClick}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                onFocus={() => setVisible(true)}
                onBlur={() => setVisible(false)}
                aria-label={ariaLabel || shortcut}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white
                   hover:bg-blue-700 focus:outline-none 
                   focus:ring-2 focus:ring-blue-400 
                   transition duration-150 ease-in-out"
            >
                {children}
            </button>

            {/* Tooltip */}
            <div
                className={`absolute top-0 right-0 translate-x-3 -translate-y-3 
                    text-xs font-medium text-white 
                    bg-white/10 dark:bg-white/10 backdrop-blur-md 
                    shadow-xl rounded-md px-2 py-1
                    opacity-0 scale-95 transition-all duration-200 
                    ease-out pointer-events-none z-30
                    ${visible ? 'opacity-100 scale-100' : ''}`}
            >
                {shortcut}

                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 right-2 w-2 h-2 bg-white/10 dark:bg-white/10 rotate-45 shadow-sm backdrop-blur-md" />
            </div>
        </div>
    )
}

export default ShortcutButton