import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

const ScrollHeader = ({
    animation = 'slide',
    threshold = 50,
    children,
    className = '',
}) => {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > threshold) {
                setShow(false)
            } else {
                setShow(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY, threshold])

    const baseStyles = 'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-md bg-white/70 shadow-md';
    const animations = {
        slide: show ? 'translate-y-0' : '-translate-y-full',
        fade: show ? 'opacity-100' : 'opacity-0 pointer-events-none',
    }

    return (
        <header
            className={clsx(
                baseStyles,
                animation === 'fade' ? animations.fade : animations.slide,
                className
            )}
        >
            {children}
        </header>
    )
}

export default ScrollHeader