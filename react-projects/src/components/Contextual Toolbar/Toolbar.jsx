import React from 'react';
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa'

const Toolbar = ({ position, onBold, onItalic, onUnderline }) => {
    if (!position) return null

    const style = {
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 1000,
    }

    return (
        <div
            className="bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex items-center space-x-2 transition-opacity duration-200 ease-in-out opacity-100"
            style={style}
        >
            <button
                onClick={onBold}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Bold (Ctrl+B)"
            >
                <FaBold className="text-xl text-gray-700" />
            </button>
            <button
                onClick={onItalic}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Italic (Ctrl+I)"
            >
                <FaItalic className="text-xl text-gray-700" />
            </button>
            <button
                onClick={onUnderline}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Underline (Ctrl+U)"
            >
                <FaUnderline className="text-xl text-gray-700" />
            </button>
        </div>
    )
}

export default Toolbar