import React, { useEffect, useRef } from 'react';

const SidePanel = ({ isOpen, onClose, children }) => {
    const panelRef = useRef(null)

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [onClose])

    useEffect(() => {
        if (isOpen) {
            const focusable = panelRef.current?.querySelector(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
            focusable?.focus()
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <>
            <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 backdrop-blur-md bg-black/30' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
                aria-hidden="true"
            />

            <div
                ref={panelRef}
                className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white rounded-l-2xl z-50 shadow-xl transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition focus:outline-none"
                        aria-label="Close panel"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="px-6 py-4 overflow-y-auto flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default SidePanel