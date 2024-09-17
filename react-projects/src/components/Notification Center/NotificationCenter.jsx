import React from 'react'
import NotificationPreferences from './NotificationPreferences'
import NotificationHistory from './NotificationHistory'

const NotificationCenter = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Notification Center</h1>
            <NotificationPreferences />
            <NotificationHistory />
        </div>
    )
}

export default NotificationCenter