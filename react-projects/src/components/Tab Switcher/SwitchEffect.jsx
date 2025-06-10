import React, { useState, useRef, useEffect } from "react"

const SwitchEffect = ({
    tabs = ["Home", "Profile", "Settings", "About"],
    onChange = () => { },
    initialIndex = 0,
}) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex)
    const [ripple, setRipple] = useState({ x: 0, show: false })
    const rippleTimeout = useRef(null)

    const handleTabClick = (index, event) => {
        if (index === activeIndex) return

        const rect = event.currentTarget.getBoundingClientRect()
        const rippleX = rect.left + rect.width / 2

        // Trigger ripple effect
        setRipple({ x: rippleX, show: true })

        // Animate ripple then set tab
        clearTimeout(rippleTimeout.current)
        rippleTimeout.current = setTimeout(() => {
            setActiveIndex(index)
            setRipple((prev) => ({ ...prev, show: false }))
            onChange(index)
        }, 50) // match ripple transition
    }

    useEffect(() => {
        return () => clearTimeout(rippleTimeout.current)
    }, [])

    return (
        <div className="w-full max-w-md mx-auto px-4 mt-10">
            <div
                className="relative bg-gray-100 dark:bg-gray-800 rounded-full flex p-1 shadow-inner overflow-hidden"
                role="tablist"
            >
                {/* Ripple effect */}
                {ripple.show && (
                    <span
                        className="absolute top-1/2 w-1 h-1 bg-blue-400 opacity-30 blur-xl rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 scale-[30] transition-transform duration-300"
                        style={{ left: ripple.x }}
                    />
                )}

                {/* Sliding indicator */}
                <div
                    className="absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-full shadow-md transition-all duration-300 z-0"
                    style={{
                        width: `calc((100% - 0.5rem) / ${tabs.length})`,
                        left: `calc(${(100 / tabs.length) * activeIndex}% + 0.125rem)`,
                    }}
                />

                {/* Tabs */}
                {tabs.map((label, index) => (
                    <button
                        key={label}
                        onClick={(e) => handleTabClick(index, e)}
                        role="tab"
                        aria-selected={activeIndex === index}
                        className={`relative z-10 flex-1 text-center text-sm font-medium px-2 py-2 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-blue-300 ${activeIndex === index
                                ? "text-blue-600 dark:text-blue-400 font-semibold"
                                : "text-gray-500 dark:text-gray-300"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SwitchEffect;