import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import clsx from 'clsx'

const tabs = ['Home', 'Profile', 'Settings']

const content = {
    Home: 'Welcome to the Home tab!',
    Profile: 'This is your Profile.',
    Settings: 'Adjust your preferences in Settings.',
}

const TabSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const tabRefs = useRef([])

    // Swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setActiveIndex((prev) => Math.min(prev + 1, tabs.length - 1)),
        onSwipedRight: () => setActiveIndex((prev) => Math.max(prev - 1, 0)),
        trackMouse: true,
    })

    // Keyboard navigation
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            setActiveIndex((prev) => (prev + 1) % tabs.length);
        } else if (event.key === 'ArrowLeft') {
            setActiveIndex((prev) => (prev - 1 + tabs.length) % tabs.length)
        }
    }

    // Focus active tab
    useEffect(() => {
        tabRefs.current[activeIndex]?.focus()
    }, [activeIndex])

    return (
        <div className="w-full max-w-lg mx-auto mt-12 p-6 bg-white shadow-2xl rounded-2xl">
            {/* Tabs */}
            <div className="relative flex bg-gray-100 rounded-full overflow-hidden">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        ref={(el) => (tabRefs.current[index] = el)}
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={handleKeyDown}
                        className={clsx(
                            'flex-1 py-3 px-4 text-sm md:text-base font-semibold text-center transition-all duration-300 outline-none',
                            'focus-visible:ring-2 focus-visible:ring-blue-500 focus:z-10',
                            activeIndex === index
                                ? 'text-white bg-blue-600 shadow-lg'
                                : 'text-gray-600 hover:bg-gray-200'
                        )}
                        tabIndex={0}
                    >
                        {tab}
                    </button>
                ))}

                {/* Animated Indicator */}
                <div
                    className="absolute bottom-0 h-1.5 rounded-full bg-blue-500 transition-all duration-300"
                    style={{
                        width: `${100 / tabs.length}%`,
                        left: `${(100 / tabs.length) * activeIndex}%`,
                    }}
                />
            </div>

            {/* Swipeable Content Area */}
            <div
                {...swipeHandlers}
                className="mt-6 relative h-36 sm:h-40 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-inner"
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                        width: `${tabs.length * 100}%`,
                    }}
                >
                    {tabs.map((tab, index) => (
                        <div
                            key={tab}
                            className="w-full flex-shrink-0 flex items-center justify-center text-center px-4"
                        >
                            {/* Add slide + fade transition */}
                            <div
                                className={clsx(
                                    'transform transition-all duration-500 ease-in-out',
                                    activeIndex === index
                                        ? 'opacity-100 translate-x-0' // Content fades and slides in
                                        : 'opacity-0 translate-x-4'   // Inactive content slides out
                                )}
                            >
                                <p className="text-lg font-medium text-gray-700">{content[tab]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TabSlider