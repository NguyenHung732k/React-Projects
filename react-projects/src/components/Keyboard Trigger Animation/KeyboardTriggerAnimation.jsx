import React, { useEffect, useState } from 'react';

const KeyboardTriggerAnimation = () => {
    const [isActive, setIsActive] = useState(false)
    const [pressedKeys, setPressedKeys] = useState([])
    const [commandTriggered, setCommandTriggered] = useState('')

    // Define the global shortcuts you want to listen for
    const shortcuts = [
        { keys: ['Control', 'I'], action: 'Command Palette Opened' },
        { keys: ['Control', 'S'], action: 'Saved Successfully' },
        { keys: ['Control', 'D'], action: 'Dark Mode Activated' },
        { keys: ['Control', 'Q'], action: 'Quit Application' },
        // Add more shortcuts as needed
    ]

    useEffect(() => {
        // Keydown handler
        const handleKeyDown = (event) => {
            const { key, ctrlKey, altKey, shiftKey } = event
            const activeKeys = []

            if (ctrlKey) activeKeys.push('Control')
            if (altKey) activeKeys.push('Alt')
            if (shiftKey) activeKeys.push('Shift')
            activeKeys.push(key)

            // Check if the pressed keys match a defined shortcut
            shortcuts.forEach((shortcut) => {
                if (shortcut.keys.every((key) => activeKeys.includes(key))) {
                    setPressedKeys(shortcut.keys)
                    setIsActive(true)
                    setCommandTriggered(shortcut.action)

                    // Clear the feedback after a delay (1 second)
                    setTimeout(() => {
                        setIsActive(false)
                        setCommandTriggered('')
                    }, 1000)
                }
            })
        }

        // Keyup handler to reset the animation
        const handleKeyUp = () => {
            setIsActive(false)
        }

        // Add event listeners for keydown and keyup
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return (
        <div className="p-6 space-y-4">
            <div
                className={`relative p-6 rounded-xl border-2 border-gray-300 shadow-lg transform transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-400 to-indigo-600' : 'bg-white'
                    }`}
            >
                {/* Target Element (Pulse Effect) */}
                <div
                    className={`absolute inset-0 rounded-xl border-4 ${isActive ? 'border-yellow-400 animate-pulse' : 'border-transparent'
                        }`}
                ></div>

                {/* Content */}
                <div className="text-center space-y-4">
                    {/* Action Description */}
                    <h2 className="text-xl font-semibold text-white">
                        {commandTriggered && (
                            <span className="bg-black text-yellow-200 px-4 py-2 rounded-full">
                                {commandTriggered}
                            </span>
                        )}
                    </h2>

                    {/* Pressed Keys Display */}
                    <p className="text-lg text-gray-200">
                        {pressedKeys.length > 0 && `Pressed: ${pressedKeys.join(' + ')}`}
                    </p>
                </div>
            </div>

            {/* Tooltip/Info Box */}
            {isActive && (
                <div className="fixed bottom-10 right-10 p-4 bg-blue-600 text-white rounded-lg shadow-lg animate-fadeIn">
                    <p className="text-lg font-semibold">{commandTriggered}</p>
                </div>
            )}
        </div>
    )
}

export default KeyboardTriggerAnimation