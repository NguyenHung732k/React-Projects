import React, { useState, useEffect } from 'react';
import './FloatingHelpBubble.css'

const FloatingHelpBubble = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [hasVisited, setHasVisited] = useState(false)

    useEffect(() => {
        const visited = localStorage.getItem('hasVisited')
        if (!visited) {
            setHasVisited(false)
            localStorage.setItem('hasVisited', 'true')
        } else {
            setHasVisited(true)
        }
    }, [])

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="relative">
            <div
                onClick={toggleVisibility}
                className={`help-bubble ${!hasVisited ? 'pulse' : ''}`}
                aria-label="Help"
            >
                <span className="text-3xl font-semibold">?</span>
            </div>

            {isVisible && (
                <div className="help-tooltip" aria-live="polite">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">Need Help?</h3>
                        <button
                            onClick={toggleVisibility}
                            className="close-btn"
                            aria-label="Close Help Panel"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-600 text-sm">
                        This is some contextual help information to guide you. You can customize it further to match the specific context of your app. If you need additional assistance, feel free to reach out!
                    </p>
                </div>
            )}
        </div>
    )
}

export default FloatingHelpBubble