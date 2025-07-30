import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

const Counter = ({ targetValue, format = true, decimalPlaces = 0, label, bgColor = 'bg-blue-500', textColor = 'text-white', triggerOnScroll = true }) => {
    const [startCount, setStartCount] = useState(false)

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const { number } = useSpring({
        from: { number: 0 },
        to: { number: targetValue },
        reset: startCount,
        config: { tension: 200, friction: 30 },
        onRest: () => setStartCount(false),
    })

    useEffect(() => {
        if (inView && triggerOnScroll) {
            setStartCount(true)
        }
    }, [inView, triggerOnScroll])

    const formatNumber = (num) => {
        if (format) {
            return num
                .toFixed(decimalPlaces)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        return num
    }

    return (
        <div
            ref={ref}
            className={`rounded-xl shadow-lg ${bgColor} ${textColor} p-8 md:p-8 w-full max-w-md text-center transition-transform duration-300 transform hover:scale-105`}
        >
            {label && <div className="text-xl font-semibold mb-2">{label}</div>}
            <animated.div className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {number.to(n => formatNumber(n))}
            </animated.div>
        </div>
    )
}

export default Counter