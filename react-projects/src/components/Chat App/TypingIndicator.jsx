import React from 'react'

const TypingIndicator = () => {
    return (
        <div className="flex items-center space-x-2 animate-bounce text-gray-500 dark:text-gray-300">
            <div className="w-2 h-2 bg-gray-600 rounded-full" />
            <div className="w-2 h-2 bg-gray-600 rounded-full" />
            <div className="w-2 h-2 bg-gray-600 rounded-full" />
        </div>
    )
}

export default TypingIndicator