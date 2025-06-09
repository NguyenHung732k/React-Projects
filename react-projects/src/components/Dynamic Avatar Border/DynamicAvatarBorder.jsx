import React, { useState } from 'react'
import AvatarWithStatus from './AvatarWithStatus'

const DynamicAvatarBorder = () => {
    const [status, setStatus] = useState('online')

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 gap-6 p-6">
            <AvatarWithStatus
                src="https://i.pravatar.cc/150?img=47"
                alt="Jane Doe"
                status={status}
            />

            {/* Status Controls */}
            <div className="flex gap-3 flex-wrap justify-center">
                {['online', 'offline', 'busy', 'away'].map((s) => (
                    <button
                        key={s}
                        onClick={() => setStatus(s)}
                        className={(
                            'px-4 py-2 rounded text-white text-sm transition',
                            {
                                online: 'bg-green-500 hover:bg-green-600',
                                offline: 'bg-gray-500 hover:bg-gray-600',
                                busy: 'bg-red-500 hover:bg-red-600',
                                away: 'bg-yellow-500 hover:bg-yellow-600 text-black',
                            }[s]
                        )}
                    >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DynamicAvatarBorder