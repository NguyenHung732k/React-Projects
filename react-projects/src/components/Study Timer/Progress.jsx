import React from 'react'

const Progress = ({ focusPercentage }) => {
    return (
        <div className="progress-container bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Focus vs. Distraction</h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                    className="bg-gradient-to-r from-green-400 to-yellow-500 h-4 rounded-full"
                    style={{ width: `${focusPercentage}%` }}
                ></div>
            </div>
        </div>
    )
}

export default Progress