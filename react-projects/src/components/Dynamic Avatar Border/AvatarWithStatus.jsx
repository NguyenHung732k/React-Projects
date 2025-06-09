import React from 'react'
import classNames from 'classnames'

const statusColors = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
    away: 'bg-yellow-400',
}

const statusLabels = {
    online: 'Online',
    offline: 'Offline',
    busy: 'Busy',
    away: 'Away',
}

const AvatarWithStatus = ({ src, alt, status = 'offline' }) => {
    const isOnline = status === 'online';

    return (
        <div className="relative group w-24 h-24 sm:w-28 sm:h-28">
            {/* Animated Border Layer */}
            <div
                className={classNames(
                    'absolute inset-0 rounded-full transition-all duration-500',
                    {
                        'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 animate-spin-slow': isOnline,
                        'bg-gray-200': !isOnline,
                    }
                )}
            >
                <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-full z-10" />
            </div>

            {/* Avatar Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden z-20">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-full"
                />
            </div>

            {/* Presence Dot + Tooltip */}
            <div className="absolute bottom-1 right-1 z-30">
                <div className="relative group">
                    <span
                        className={classNames(
                            'w-4 h-4 rounded-full border-2 border-white block transition-colors duration-300',
                            statusColors[status] || 'bg-gray-400'
                        )}
                        role="status"
                        aria-label={statusLabels[status]}
                    />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-40">
                        {statusLabels[status] || 'Unknown'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AvatarWithStatus