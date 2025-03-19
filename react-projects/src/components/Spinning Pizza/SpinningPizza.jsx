import React, { useState } from 'react'
import Confetti from 'react-confetti'
import './SpinningPizza.css'

const SpinningPizza = () => {
    const [toppings, setToppings] = useState([])
    const [rotationSpeed, setRotationSpeed] = useState(5)
    const [isExploded, setIsExploded] = useState(false)

    const addTopping = () => {
        if (isExploded) return

        const newTopping = `Topping ${toppings.length + 1}`
        setToppings([...toppings, newTopping])
        setRotationSpeed(rotationSpeed + 2)

        if (rotationSpeed >= 30) {
            setIsExploded(true)
        }
    }

    const rotationStyle = {
        animation: `spin ${100 / rotationSpeed}s linear infinite`,
    }

    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500">
            {isExploded && <Confetti />}
            <div
                className={`relative w-72 h-72 bg-yellow-400 rounded-full flex items-center justify-center border-8 border-gray-600 ${isExploded ? 'animate-explode' : ''}`}
                style={rotationStyle}
            >
                <div className="absolute w-40 h-40 bg-red-600 rounded-full"></div>
                <div className="absolute w-36 h-36 bg-yellow-300 rounded-full"></div>

                {toppings.map((topping, index) => (
                    <div
                        key={index}
                        className="absolute w-8 h-8 bg-green-500 rounded-full flex justify-center items-center text-white text-xs font-bold"
                        style={{
                            transform: `rotate(${index * (360 / toppings.length)}deg) translateX(60px)`,
                        }}
                    >
                    </div>
                ))}
            </div>

            <button
                onClick={addTopping}
                className="mt-8 p-4 bg-blue-600 text-white rounded-lg text-xl font-bold hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                Add Topping
            </button>
        </div>
    )
}

export default SpinningPizza