import React from 'react'

const ThemeToggle = ({ dayMode, toggle }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={dayMode} onChange={toggle} className="sr-only peer" />
            <div className="w-14 h-8 bg-gray-600 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-yellow-400 transition-all"></div>
            <span className="absolute left-1 top-1 w-6 h-6 bg-white border border-gray-300 rounded-full peer-checked:translate-x-full transition-transform"></span>
        </label>
    )
}

export default ThemeToggle