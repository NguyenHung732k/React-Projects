import { useEffect } from 'react'

const ToastNotification = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 3000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    return (
        isVisible && (
            <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg">
                {message}
            </div>
        )
    )
}

export default ToastNotification