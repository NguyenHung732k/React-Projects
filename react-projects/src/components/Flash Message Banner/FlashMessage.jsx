import { useEffect, useState } from 'react';

const ICONS = {
    success: <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>,
    error: <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>,
    info: <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>,
    warning: <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>,
}

const COLORS = {
    success: 'bg-green-50 border-green-500',
    error: 'bg-red-50 border-red-500',
    info: 'bg-blue-50 border-blue-500',
    warning: 'bg-yellow-50 border-yellow-500',
}

const FlashMessage = ({ message, type = 'info', duration = 4000, onClose }) => {
    const [visible, setVisible] = useState(false)
    const [progress, setProgress] = useState(100)

    useEffect(() => {
        setVisible(true)
        const interval = 100
        const steps = duration / interval
        let count = 0

        const timer = setInterval(() => {
            count++
            setProgress(100 - (count / steps) * 100)
            if (count >= steps) {
                clearInterval(timer)
                handleClose()
            }
        }, interval)

        return () => clearInterval(timer)
    }, [duration])

    const handleClose = () => {
        setVisible(false)
        setTimeout(() => onClose?.(), 300)
    }

    return (
        <div
            role="alert"
            aria-live="assertive"
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                }`}
        >
            <div
                className={`relative flex items-start w-[90vw] max-w-md px-4 py-3 border-l-4 shadow-lg rounded-md ${COLORS[type]}`}
            >
                <div className="mr-3 mt-1">{ICONS[type]}</div>
                <div className="flex-1 text-sm text-gray-800">{message}</div>
                <button
                    onClick={handleClose}
                    className="ml-4 mt-0.5 p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1"
                    aria-label="Dismiss notification"
                >
                    <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>

                <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full rounded-b overflow-hidden">
                    <div
                        className="h-1 transition-all duration-100"
                        style={{
                            width: `${progress}%`,
                            backgroundColor:
                                type === 'success'
                                    ? '#16a34a'
                                    : type === 'error'
                                        ? '#dc2626'
                                        : type === 'info'
                                            ? '#2563eb'
                                            : '#ca8a04',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FlashMessage