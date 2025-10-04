import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import FlipCounter from './FlipCounter'

const ScrollTriggerCounter = ({ value = 1984 }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 })
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        if (inView) setAnimate(true)
    }, [inView])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center">
            <header className="mt-20 mb-40 text-center">
                <h1 className="text-5xl font-bold">📊 Real-Time Stats</h1>
                <p className="mt-4 text-gray-400">Scroll down to see the magic</p>
            </header>
            <div
                ref={ref}
                className="translate-y-10 transition-all duration-1000 ease-out"
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(40px)',
                }}
            >
                <FlipCounter value={value} animate={animate} />
            </div>

            <div className="h-[100vh]"></div>
        </div>
    )
}

export default ScrollTriggerCounter