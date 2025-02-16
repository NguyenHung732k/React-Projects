import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
                className="h-2.5 rounded-full transition-all duration-500"
                style={{
                    width: `${progress}%`,
                    background: progress < 50 ? 'linear-gradient(to right, #f56565, #fbd38d)' : 'linear-gradient(to right, #48bb78, #68d391)',
                }}
            />
        </div>
    )
}

export default ProgressBar