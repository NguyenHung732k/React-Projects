import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';

const RevealCounter = ({
    target,
    duration = 2000,
    delay = 0,
    easing = 'easeOutQuad',
    repeat = false,
    format = false,
    color = 'text-white',
    background = 'bg-gradient-to-r from-indigo-500 to-purple-600',
}) => {
    const [count, setCount] = useState(0)
    const counterRef = useRef(null)
    const [isInView, setIsInView] = useState(false)

    // Number formatting function
    const formatNumber = (number) => {
        if (format) {
            return new Intl.NumberFormat().format(number)
        }
        return number
    }

    // IntersectionObserver to trigger animation when the counter is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect() // Stop observing once the number is in view
                }
            },
            { threshold: 0.5 }
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => {
            if (counterRef.current) {
                observer.disconnect()
            }
        }
    }, [])

    useEffect(() => {
        if (isInView) {
            anime({
                targets: counterRef.current,
                innerHTML: [0, target],
                round: 1,
                duration: duration,
                easing: easing,
                delay: delay,
                loop: repeat,
                update: (anim) => {
                    setCount(formatNumber(anim.animations[0].currentValue))
                },
            });
        }
    }, [isInView, target, duration, delay, easing, repeat, format])

    return (
        <div
            ref={counterRef}
            className={`text-6xl md:text-7xl font-extrabold ${color} ${background} p-6 md:p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl text-center`}
        >
            {count}
        </div>
    )
}

export default RevealCounter