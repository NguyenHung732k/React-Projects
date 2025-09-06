import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring'

const AnimatedList = () => {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')

    const transitions = useTransition(items, {
        from: { opacity: 0, transform: 'translateX(-50%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'scale(0.8)', position: 'absolute' },
        config: { tension: 200, friction: 20 },
    })

    const addItem = () => {
        if (inputValue.trim()) {
            setItems((prevItems) => [...prevItems, inputValue])
            setInputValue('')
        }
    }

    const removeItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index))
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 py-10">
            <div className="w-full sm:w-96 bg-white shadow-xl rounded-3xl p-8 space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Animated List</h2>

                {/* Input and Add Item Button */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-full">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition duration-300"
                            placeholder="Add a new item"
                        />
                    </div>
                    <button
                        onClick={addItem}
                        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    >
                        Add Item
                    </button>
                </div>

                {/* List of items with transitions */}
                <div className="space-y-4">
                    {transitions((style, item, t, index) => (
                        <animated.div
                            key={item}
                            style={style}
                            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
                        >
                            <span className="text-gray-800">{item}</span>
                            <button
                                onClick={() => removeItem(index)}
                                className="w-10 h-5 flex items-center justify-center text-red-500 hover:text-red-700 focus:outline-none transition duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M576 192C576 156.7 547.3 128 512 128L205.3 128C188.3 128 172 134.7 160 146.7L9.4 297.4C3.4 303.4 0 311.5 0 320C0 328.5 3.4 336.6 9.4 342.6L160 493.3C172 505.3 188.3 512 205.3 512L512 512C547.3 512 576 483.3 576 448L576 192zM284.1 252.1C293.5 242.7 308.7 242.7 318 252.1L351.9 286L385.8 252.1C395.2 242.7 410.4 242.7 419.7 252.1C429 261.5 429.1 276.7 419.7 286L385.8 319.9L419.7 353.8C429.1 363.2 429.1 378.4 419.7 387.7C410.3 397 395.1 397.1 385.8 387.7L351.9 353.8L318 387.7C308.6 397.1 293.4 397.1 284.1 387.7C274.8 378.3 274.7 363.1 284.1 353.8L318 319.9L284.1 286C274.7 276.6 274.7 261.4 284.1 252.1z" />
                                </svg>
                            </button>
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnimatedList