import React, { useState, useEffect } from "react"

const Notification = ({ notifications }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPanelVisible, setIsPanelVisible] = useState(true)
    const [currentNotification, setCurrentNotification] = useState("")

    useEffect(() => {
        if (notifications.length > 0) {
            setCurrentNotification(notifications[notifications.length - 1])
            setIsModalOpen(true)
            setIsPanelVisible(true)
        }
    }, [notifications])

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentNotification("")
    }

    const closePanel = () => {
        setIsPanelVisible(false)
    }

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-xl font-semibold text-gray-700">New Notification</h3>
                        <p className="text-gray-800 mt-2">{currentNotification}</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isPanelVisible && (
                <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl max-w-sm space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-xl m-0">Recent Notifications</h3>
                        <button
                            className="text-red-500 hover:text-red-700 ml-2"
                            onClick={closePanel}
                        >
                            <span className="text-lg font-bold">x</span>
                        </button>
                    </div>

                    <ul className="space-y-2">
                        {notifications.map((notif, index) => (
                            <li
                                key={index}
                                className="text-gray-700 bg-blue-100 p-2 rounded-md hover:bg-blue-200 transition-all"
                            >
                                {notif}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Notification