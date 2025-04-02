import React, { useState, useEffect } from 'react'
import ImageGallery from './ImageGallery'

const ScrollGallery = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <div>
            <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Scroll-Activated Image Gallery</h1>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-full dark:bg-gray-400 dark:text-black"
                >
                    Toggle Dark Mode
                </button>
            </div>
            <ImageGallery />
        </div>
    )
}

export default ScrollGallery