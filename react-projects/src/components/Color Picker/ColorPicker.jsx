import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import './ColorPicker.css'

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff')
    const [history, setHistory] = useState([])

    const handleColorChange = (event) => {
        const newColor = event.target.value
        setSelectedColor(newColor)
        // Add to history, if the color isn't already in the history
        if (!history.includes(newColor)) {
            setHistory([newColor, ...history].slice(0, 5)) // Limit history to 5 colors
        }
    }

    const handleHistoryClick = (color) => {
        setSelectedColor(color)
    }

    const handleClearHistory = () => {
        setHistory([])
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center space-y-6 p-6 bg-gray-50 rounded-xl shadow-lg max-w-sm mx-auto">
                {/* Color Picker */}
                <div className="flex flex-col items-center">
                    <label htmlFor="color-picker" className="text-xl font-semibold mb-2 text-gray-800">Choose a Color</label>
                    <input
                        id="color-picker"
                        type="color"
                        value={selectedColor}
                        onChange={handleColorChange}
                        className="color-picker-input"
                    />
                    <p className="mt-2 text-lg font-medium text-gray-700">{selectedColor}</p>
                </div>

                {/* History Section */}
                <div className="flex flex-col items-center w-full space-y-2">
                    <div className="flex items-center space-x-3">
                        <p className="text-lg font-semibold text-gray-800 m-0 p-0">History:</p>
                        {history.length > 0 && (
                            <button
                                onClick={handleClearHistory}
                                className="clear-history-button"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {history.map((color, index) => (
                            <Transition
                                key={color}
                                in={true}
                                timeout={300}
                                appear
                                classNames="fade"
                            >
                                <div
                                    onClick={() => handleHistoryClick(color)}
                                    className={`history-swatch ${color === selectedColor ? 'selected' : ''}`}
                                    style={{
                                        backgroundColor: color,
                                    }}
                                />
                            </Transition>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker