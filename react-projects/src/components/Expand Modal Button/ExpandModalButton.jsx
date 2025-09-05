import React, { useState, useEffect } from 'react';
import clsx from 'clsx'

const ExpandModalButton = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showContent, setShowContent] = useState(false)

    const handleOpen = () => {
        setIsExpanded(true)
        setTimeout(() => setShowContent(true), 300)
    }

    const handleClose = () => {
        setShowContent(false)
        setTimeout(() => setIsExpanded(false), 300)
    }

    // Close modal on ESC key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isExpanded) {
                handleClose()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isExpanded])

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            {isExpanded && (
                <div
                    className={clsx(
                        'fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-20',
                        showContent ? 'opacity-100' : 'opacity-0'
                    )}
                    onClick={handleClose}
                />
            )}

            {/* Expanding Button / Modal */}
            <div
                className={clsx(
                    'fixed bg-white/80 text-gray-800 flex items-center justify-center shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-30',
                    isExpanded
                        ? 'top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl h-[80vh] rounded-3xl'
                        : 'w-44 h-14 rounded-xl hover:scale-105 hover:shadow-md cursor-pointer',
                    'backdrop-blur-lg border border-white/30'
                )}
                onClick={!isExpanded ? handleOpen : undefined}
            >
                {/* Modal Content */}
                {isExpanded ? (
                    <div
                        className={clsx(
                            'transition-all duration-300 text-center px-8 relative w-full',
                            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        )}
                    >
                        <h2 className="text-3xl font-semibold mb-4 mt-12">🌟 Beautiful Modal</h2>
                        <p className="text-gray-700 mb-6">
                            This modal grows from the button with smooth animations, modern styling, and a
                            glass-like background.
                        </p>

                        <button
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <span className="font-medium text-lg text-white">Open Modal</span>
                )}
            </div>
        </div>
    )
}

export default ExpandModalButton