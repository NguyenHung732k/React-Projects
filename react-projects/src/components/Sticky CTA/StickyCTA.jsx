import React, { useState, useEffect } from 'react'

const StickyCTA = () => {
    const [show, setShow] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (!dismissed && currentScrollY > 150 && currentScrollY > lastScrollY) {
                setShow(true)
            } else if (currentScrollY < lastScrollY) {
                setShow(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY, dismissed])

    const handleDismiss = () => {
        setDismissed(true)
        setShow(false)
    }

    return (
        <div className="min-h-[200vh] bg-gray-50 p-8">
            <h1 className="text-3xl font-bold">Scroll down to see the CTA</h1>
            <div
                className={`
        fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50 
        transition-all duration-500 ease-in-out
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}
      `}
            >
                <div className="relative bg-white border border-gray-200 shadow-xl rounded-lg px-4 py-3 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 text-gray-800">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>
                        <span className="text-sm md:text-base font-medium">
                            Don't miss out on our limited-time offer. Grab it now!
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold rounded transition">
                            Learn More
                        </button>
                        <button
                            onClick={handleDismiss}
                            aria-label="Dismiss"
                            className="p-1 hover:bg-gray-100 rounded transition"
                        >
                            <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickyCTA