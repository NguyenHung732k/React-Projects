import { useEffect, useRef, useState } from 'react';

const CountdownCircle = ({
    duration = 10,
    size = 96,
    strokeWidth = 6,
    autoStart = true,
    onComplete,
    onCancel,
    showControls = true,
}) => {
    const [progress, setProgress] = useState(0)
    const [isRunning, setIsRunning] = useState(autoStart)
    const intervalRef = useRef(null)
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    useEffect(() => {
        if (isRunning) {
            const startTime = Date.now() - (progress / 100) * duration * 1000
            intervalRef.current = setInterval(() => {
                const elapsed = (Date.now() - startTime) / 1000
                const newProgress = Math.min((elapsed / duration) * 100, 100)
                setProgress(newProgress)
                if (newProgress >= 100) {
                    clearInterval(intervalRef.current)
                    onComplete?.()
                }
            }, 50)
        }

        return () => clearInterval(intervalRef.current)
    }, [isRunning])

    const togglePause = () => setIsRunning((prev) => !prev)
    const cancel = () => {
        clearInterval(intervalRef.current)
        setProgress(0)
        setIsRunning(false)
        onCancel?.()
    };

    const strokeDashoffset = circumference * (1 - progress / 100)
    const remaining = Math.max(0, Math.ceil(duration - (progress / 100) * duration))

    return (
        <div className="flex flex-col items-center space-y-3">
            <div className="relative">
                <svg width={size} height={size} className="rotate-[-90deg]">
                    <circle
                        className="text-gray-200"
                        strokeWidth={strokeWidth}
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                    <circle
                        className="text-blue-500 transition-all duration-100 ease-linear"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                </svg>

                <div
                    className="absolute inset-0 flex items-center justify-center text-center text-blue-700 font-semibold text-lg"
                    role="timer"
                    aria-live="polite"
                >
                    {remaining}s
                </div>
            </div>

            {showControls && (
                <div className="flex space-x-2">
                    <button
                        onClick={togglePause}
                        className="group bg-white border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label={isRunning ? 'Pause' : 'Resume'}
                    >
                        {isRunning ? (
                            <svg className="h-5 w-5 text-gray-700 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
                            </svg>
                        ) : (
                            <svg className="h-5 w-5 text-gray-700 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={cancel}
                        className="group bg-white border border-red-300 p-2 rounded-full hover:bg-red-100 transition"
                        aria-label="Cancel"
                    >
                        <svg className="h-5 w-5 text-red-500 group-hover:text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}

export default CountdownCircle