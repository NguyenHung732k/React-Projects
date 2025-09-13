import React from 'react';
import Status from './Status'

const AvatarStatus = () => {
    return (
        <div className="flex gap-10 p-10 bg-gray-100 min-h-screen items-center justify-center">
            <Status
                imageUrl="https://randomuser.me/api/portraits/men/75.jpg"
                status="online"
                alt="John Doe"
            />
            <Status
                imageUrl="https://randomuser.me/api/portraits/women/45.jpg"
                status="away"
                alt="Jane Smith"
                showPulse={false}
            />
        </div>
    )
}

export default AvatarStatus