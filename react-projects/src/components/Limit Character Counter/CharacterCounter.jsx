import React, { useState } from 'react';

const CharacterCounter = ({ limit = 280, showDonut = true }) => {
    const [text, setText] = useState('')

    const percentage = Math.min((text.length / limit) * 100, 100)
    const isWarning = percentage >= 90
    const isLimitReached = text.length >= limit

    const handleChange = (event) => {
        if (event.target.value.length <= limit) {
            setText(event.target.value)
        }
    }

    const circleRadius = 24
    const circleCircumference = 2 * Math.PI * circleRadius
    const progress = (percentage / 100) * circleCircumference

    return (
        <div className="max-w-md mx-auto p-6">
            <textarea
                value={text}
                onChange={handleChange}
                className="w-full h-32 border-2 border-gray-300 rounded-lg p-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition duration-300 ease-in-out"
                placeholder={`Type something (max ${limit} characters)...`}
            />

            <div className="flex justify-between items-center mt-4">
                <span
                    className={`text-sm font-medium ${isWarning ? 'text-red-600' : 'text-gray-600'}`}
                >
                    {text.length} / {limit}
                </span>

                {showDonut && (
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 60 60">
                        <circle
                            className="text-gray-200"
                            strokeWidth="6"
                            stroke="currentColor"
                            fill="transparent"
                            r={circleRadius}
                            cx="30"
                            cy="30"
                        />
                        <circle
                            className={`${isWarning ? "text-red-600" : "text-indigo-500"} transition-all duration-500 ease-in-out`}
                            strokeWidth="6"
                            stroke="currentColor"
                            fill="transparent"
                            r={circleRadius}
                            cx="30"
                            cy="30"
                            strokeDasharray={circleCircumference}
                            strokeDashoffset={circleCircumference - progress}
                            strokeLinecap="round"
                        />
                    </svg>
                )}
            </div>

            <div className="mt-2">
                <p className={`text-xs ${isWarning ? 'text-red-500' : 'text-gray-500'}`}>
                    {isLimitReached ? 'Character limit reached!' : ''}
                </p>
            </div>
        </div>
    )
}

export default CharacterCounter