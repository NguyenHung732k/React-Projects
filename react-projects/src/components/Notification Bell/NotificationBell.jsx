import { useEffect, useState } from "react"
import Notification from "./Notification"
import "./NotificationBell.css"


const NotificationBell = () => {
    const [hasNotification, setHasNotification] = useState(false)

    // Simulate receiving a notification
    useEffect(() => {
        const timer = setTimeout(() => setHasNotification(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <Notification hasNotification={hasNotification} />
        </div>
    )
}

export default NotificationBell