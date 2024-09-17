import React from 'react'

const NotificationItem = ({ notification }) => {
    const typeColors = {
        Info: 'bg-blue-100 text-blue-800',
        Alert: 'bg-red-100 text-red-800',
        Success: 'bg-green-100 text-green-800',
    }

    return (
        <div className={`p-4 rounded-lg ${typeColors[notification.type]} border border-gray-200`}>
            <p className="font-semibold">{notification.type}</p>
            <p>{notification.message}</p>
        </div>
    )
}

export default NotificationItem