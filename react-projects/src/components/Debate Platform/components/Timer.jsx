import React from 'react'

const Timer = ({ time, isActive }) => {
    return (
        <div className={`p-6 rounded-lg ${isActive ? 'bg-yellow-300' : 'bg-gray-200'} transition-all duration-500`}>
            <span className="text-2xl font-bold">{time}s</span>
        </div>
    )
}

export default Timer