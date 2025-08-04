import React, { useState, useRef, useEffect } from 'react';

const ToggleGroup = ({
    options = [],
    onChange,
    initialIndex = 0,
    activeColor = 'bg-indigo-500',
    gradient = false,
    pillShadow = true,
    className = '',
}) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex)
    const [pillStyle, setPillStyle] = useState({})
    const containerRef = useRef(null)
    const btnRefs = useRef([])

    useEffect(() => {
        updatePillPosition(activeIndex)
        window.addEventListener('resize', () => updatePillPosition(activeIndex))
        return () => window.removeEventListener('resize', () => updatePillPosition(activeIndex))
    }, [activeIndex, options])

    const updatePillPosition = (index) => {
        const currentBtn = btnRefs.current[index]
        if (currentBtn && containerRef.current) {
            const { offsetLeft, offsetWidth } = currentBtn
            setPillStyle({
                transform: `translateX(${offsetLeft}px)`,
                width: `${offsetWidth}px`,
            })
        }
    }

    const handleClick = (index) => {
        setActiveIndex(index)
        onChange?.(options[index])
    }

    const handleKeyDown = (event) => {
        if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            event.preventDefault()
            const dir = event.key === 'ArrowRight' ? 1 : -1
            const nextIndex = (activeIndex + dir + options.length) % options.length
            setActiveIndex(nextIndex)
            onChange?.(options[nextIndex])
            btnRefs.current[nextIndex]?.focus()
        }
    }

    return (
        <div
            ref={containerRef}
            className={`relative inline-flex p-1 gap-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300 ${className}`}
            role="tablist"
            aria-label="Toggle options"
            onKeyDown={handleKeyDown}
        >
            {/* Animated Pill */}
            <span
                className={`
          absolute h-full rounded-full transition-all duration-300 ease-in-out
          ${gradient ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : activeColor}
          ${pillShadow ? 'shadow-md shadow-indigo-300/40' : ''}
        `}
                style={pillStyle}
                aria-hidden="true"
            />

            {/* Toggle Buttons */}
            {options.map((option, index) => (
                <button
                    key={option}
                    ref={(el) => (btnRefs.current[index] = el)}
                    onClick={() => handleClick(index)}
                    className={`
            relative z-10 flex-1 px-4 py-2 text-sm md:text-base font-medium rounded-full
            transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ring-offset-2
            ${activeIndex === index ? 'text-white' : 'text-gray-700 dark:text-gray-300'}
          `}
                    role="tab"
                    aria-selected={activeIndex === index}
                    tabIndex={activeIndex === index ? 0 : -1}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

export default ToggleGroup