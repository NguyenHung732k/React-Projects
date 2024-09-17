import React from 'react'
import NotificationItem from './NotificationItem'

const notifications = [
    { id: 1, type: 'Info', message: 'Your profile has been updated.' },
    { id: 2, type: 'Alert', message: 'Your subscription is about to expire.' },
    { id: 3, type: 'Alert', message: 'Your subscription is about to expire.' },
]

const NotificationHistory = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notification History</h2>
            <div className="max-h-96 overflow-y-auto space-y-2">
                {notifications.map(notification => (
                    <NotificationItem key={notification.id} notification={notification} />
                ))}
            </div>
        </div>
    )
}

export default NotificationHistory