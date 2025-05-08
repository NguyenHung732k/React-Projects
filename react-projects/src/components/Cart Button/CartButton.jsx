import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './CartButton.css'

const CartButton = () => {
    const [added, setAdded] = useState(false)
    const [animationState, setAnimationState] = useState(false)

    const handleClick = () => {
        setAnimationState(true)
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
            setAnimationState(false)
        }, 2000) // Feedback text stays for 2 seconds before resetting
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            {added && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-green-500 text-sm font-semibold">
                    <span className="animate-pulse">Added to Cart!</span>
                </div>
            )}

            <button
                onClick={handleClick}
                aria-label="Add to Cart"
                className={`transition-all duration-500 ease-in-out ${animationState
                        ? 'w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center fly-to-cart'
                        : 'w-auto px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-500 focus:outline-none'
                    } flex items-center justify-center relative overflow-hidden`}
            >
                {animationState ? (
                    <FaShoppingCart className="transition-transform transform scale-110" />
                ) : (
                    'Add to Cart'
                )}

                {/* Fly Animation */}
                {animationState && (
                    <div
                        className={`absolute top-0 left-0 w-full h-full bg-green-500 rounded-full fly-to-cart`}
                    ></div>
                )}
            </button>
        </div>
    )
}

export default CartButton