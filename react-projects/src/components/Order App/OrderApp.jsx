import React, { useState } from 'react'

const toppingsList = [
    'Pineapple',
    'Gummy Bears',
    'Pickles',
    'Chocolate Chips',
    'Marshmallows',
    'Hot Sauce',
    'Anchovies',
    'Banana Slices',
    'Fried Chicken',
    'Cotton Candy',
]

const OrderApp = () => {
    const [selectedToppings, setSelectedToppings] = useState([])
    const [orderMessage, setOrderMessage] = useState("")

    const handleToppingClick = (topping) => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter(t => t !== topping))
        } else {
            setSelectedToppings([...selectedToppings, topping])
        }
    }

    const handleOrder = () => {
        if (selectedToppings.length > 0) {
            setOrderMessage(
                `Your pizza with ${selectedToppings.join(', ')} is on its way! This pizza may cause confusion, but we'll make it anyway! 🍕`
            )
        } else {
            setOrderMessage("You didn't select any toppings! This is a pizza emergency!")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center justify-center p-5">
            <h1 className="text-5xl font-extrabold text-white mb-8 animate__animated animate__fadeIn">Pizza Ordering Simulator 🍕</h1>

            <div className="space-y-6 max-w-md w-full">
                <h2 className="text-3xl text-white font-semibold">Pick Your Toppings:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {toppingsList.map((topping, index) => (
                        <button
                            key={index}
                            className={`p-3 rounded-xl font-semibold transition-transform transform ${selectedToppings.includes(topping)
                                    ? 'bg-green-400 text-white scale-105'
                                    : 'bg-white text-gray-800 hover:bg-green-200'
                                } hover:scale-105 shadow-lg duration-300`}
                            onClick={() => handleToppingClick(topping)}
                        >
                            {topping}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <button
                    onClick={handleOrder}
                    className="px-8 py-4 bg-yellow-500 text-white text-xl font-bold rounded-full shadow-2xl hover:bg-yellow-400 transform transition-all duration-300"
                >
                    Order Your Pizza!
                </button>
            </div>

            {orderMessage && (
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-xl text-center text-xl font-semibold text-red-600 animate__animated animate__fadeIn">
                    {orderMessage}
                </div>
            )}
        </div>
    )
}

export default OrderApp