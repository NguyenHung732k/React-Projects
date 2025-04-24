import React, { useState } from 'react'
import clsx from 'clsx'

const CORNER_POSITIONS = {
    'top-left': 'top-0 left-0 origin-top-left',
    'top-right': 'top-0 right-0 origin-top-right',
    'bottom-left': 'bottom-0 left-0 origin-bottom-left',
    'bottom-right': 'bottom-0 right-0 origin-bottom-right',
}

const PageCurlCard = ({
    children,
    corner = 'top-right',
    intensity = 30,
    clickToCurl = false,
    className = '',
}) => {
    const [isActive, setIsActive] = useState(false)
    const triggerScale = clickToCurl ? (isActive ? 'scale-[1.4]' : 'scale-100') : 'group-hover:scale-[1.4]'

    return (
        <div
            className={clsx(
                'relative group rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01]',
                className
            )}
            onClick={() => clickToCurl && setIsActive(!isActive)}
        >
            {/* Content */}
            <div className="relative z-10">{children}</div>

            {/* Curl Effect */}
            <div
                className={clsx(
                    'absolute pointer-events-none transition-transform duration-500 ease-out blur-[0.5px]',
                    'rounded-bl-[100%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24',
                    'bg-gradient-to-br from-white/90 to-gray-300 dark:from-gray-700 dark:to-gray-900 shadow-lg',
                    triggerScale,
                    CORNER_POSITIONS[corner]
                )}
                style={{
                    clipPath: `polygon(0% 100%, 100% 100%, 100% ${100 - intensity}%)`,
                }}
            >
                {/* Simulate backside fold */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-300/60 to-transparent dark:from-gray-700/70 rounded-bl-[100%]" />
            </div>
        </div>
    )
}

export default PageCurlCard