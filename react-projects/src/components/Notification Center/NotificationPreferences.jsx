import React, { useState } from 'react'

const NotificationPreferences = () => {
    const [email, setEmail] = useState(true)
    const [sms, setSms] = useState(false)

    return (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notification Preferences</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="email-notifications"
                        checked={email}
                        onChange={() => setEmail(!email)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="email-notifications" className="ml-3 text-gray-700">
                        Email Notifications
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="sms-notifications"
                        checked={sms}
                        onChange={() => setSms(!sms)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="sms-notifications" className="ml-3 text-gray-700">
                        SMS Notifications
                    </label>
                </div>
            </div>
        </div>
    )
}

export default NotificationPreferences