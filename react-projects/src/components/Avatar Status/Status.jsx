import React from 'react';
import clsx from 'clsx'

const Status = ({ imageUrl, status, alt = 'User avatar', showPulse = true }) => {
    const statusRingColors = {
        online: 'ring-green-400',
        away: 'ring-yellow-400',
    }

    const statusDotColors = {
        online: 'bg-green-500',
        away: 'bg-yellow-400',
    }

    return (
        <div className="relative group w-20 h-20">
            {/* Avatar Image */}
            <img
                src={imageUrl}
                alt={alt}
                className="w-full h-full object-cover rounded-full border-2 border-transparent group-hover:border-opacity-50 transition-all duration-300"
            />

            {/* Hover Glow Ring */}
            <div
                className={clsx(
                    'absolute inset-0 rounded-full pointer-events-none transition duration-500',
                    'ring-4 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-110',
                    statusRingColors[status],
                    'blur-sm shadow-md'
                )}
            />

            {/* Status Dot */}
            <div className="absolute bottom-0 right-0">
                <span
                    className={clsx(
                        'block w-4 h-4 rounded-full border-2 border-white',
                        statusDotColors[status],
                        showPulse && status === 'online' && 'animate-ping-slow'
                    )}
                />
            </div>
        </div>
    )
}

export default Status