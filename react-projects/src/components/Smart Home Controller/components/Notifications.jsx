import React from 'react';

const Notifications = ({ notifications }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Recent Notifications</h2>
            {notifications.map((notification) => (
                <div key={notification.id} className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
                    <p>{notification.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Notifications