import React, { useState, useEffect, useRef } from 'react'
import { FaPlus, FaTimes, FaCamera, FaImage, FaVideo } from 'react-icons/fa'

const actions = [
    { icon: <FaCamera />, label: 'Camera' },
    { icon: <FaImage />, label: 'Gallery' },
    { icon: <FaVideo />, label: 'Video' },
];

const radius = 120 // distance from center
const angleIncrement = 30 // spread in degrees between buttons

const FABMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Click-away to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
            <div ref={menuRef} className="fixed bottom-6 right-6 z-50">
                {/* Action Buttons */}
                <div className="relative">
                    {actions.map((action, index) => {
                        const angle = (angleIncrement * index - (angleIncrement * actions.length) / 2) * (Math.PI / 180)
                        const x = open ? Math.cos(angle) * -radius : 0
                        const y = open ? Math.sin(angle) * radius : 0

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-300 ease-out"
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                    opacity: open ? 1 : 0,
                                }}
                            >
                                <div className="flex items-center space-x-2">
                                    {/* Tooltip */}
                                    <span className="bg-white/20 dark:bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded shadow-md">
                                        {action.label}
                                    </span>
                                    {/* Icon Button */}
                                    <button
                                        className="bg-white dark:bg-gray-800 text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full shadow-xl transition"
                                    >
                                        {action.icon}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Main FAB */}
                <button
                    onClick={() => setOpen(!open)}
                    className="mt-4 bg-gradient-to-tr from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white p-4 rounded-full shadow-2xl transition-transform duration-300"
                >
                    <div className={`transform transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
                        {open ? <FaTimes /> : <FaPlus />}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FABMenu