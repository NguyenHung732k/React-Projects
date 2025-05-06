import React, { useState, useRef } from 'react'

const RippleButton = ({
    children,
    color = 'rgba(255, 255, 255, 0.6)',
    duration = 600,
    size = 40,
    variant = 'filled',
    className = 'p-4',
    ...props
}) => {
    const [ripples, setRipples] = useState([])
    const buttonRef = useRef(null)

    const handleClick = (event) => {
        const button = buttonRef.current
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = event.clientX - rect.left - size / 2
        const y = event.clientY - rect.top - size / 2

        const newRipple = {
            x,
            y,
            size,
            key: Date.now(),
        }
        setRipples((prevRipples) => [...prevRipples, newRipple])

        setTimeout(() => {
            setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.key !== newRipple.key))
        }, duration)
    }

    const baseButtonClasses = 'relative inline-flex items-center justify-center font-semibold rounded-md focus:outline-none transition-all duration-200'

    let buttonClasses = ''

    switch (variant) {
        case 'outlined':
            buttonClasses = 'border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-blue-700'
            break
        case 'ghost':
            buttonClasses = 'text-blue-500 bg-transparent hover:bg-blue-100 hover:text-blue-700'
            break
        case 'filled':
        default:
            buttonClasses = 'bg-blue-500 text-white hover:bg-blue-600'
            break
    }

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            className={`${baseButtonClasses} ${buttonClasses} ${className}`}
            {...props}
        >
            {children}

            {ripples.map((ripple) => (
                <span
                    key={ripple.key}
                    className="absolute rounded-full opacity-50 pointer-events-none"
                    style={{
                        top: ripple.y,
                        left: ripple.x,
                        width: ripple.size,
                        height: ripple.size,
                        animation: `ripple ${duration}ms linear`,
                        backgroundColor: color,
                    }}
                />
            ))}

            <style>
                {`
          @keyframes ripple {
            from {
              transform: scale(0);
              opacity: 0.5;
            }
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
            </style>
        </button>
    )
}

export default RippleButton