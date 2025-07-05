import React, { useState } from 'react';

const Group = ({ users }) => {
    const [hovered, setHovered] = useState(false)

    const maxAvatars = 4
    const visibleUsers = users.slice(0, maxAvatars)
    const overflowCount = users.length - maxAvatars

    return (
        <div className="relative">
            <div className="flex items-center -space-x-4">
                {visibleUsers.map((user, index) => (
                    <div key={index} className="relative z-10">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}

                {overflowCount > 0 && (
                    <div
                        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-semibold text-sm border-2 border-white shadow-md cursor-pointer transform transition-all duration-300 hover:scale-110"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        aria-label={`View ${overflowCount} more users`}
                    >
                        +{overflowCount}

                        {hovered && (
                            <div className="absolute top-full mt-2 p-2 bg-white rounded-lg shadow-lg w-max space-y-2 z-10 animate-fade-in">
                                {users.slice(maxAvatars).map((user, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span className="text-sm font-semibold">{user.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Group