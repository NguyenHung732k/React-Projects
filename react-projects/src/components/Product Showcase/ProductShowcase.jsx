import React, { useState, useEffect } from 'react'

const ProductShowcase = () => {
    const [scrollSpeed, setScrollSpeed] = useState(2)
    const [autoScroll, setAutoScroll] = useState(true)

    // Control the auto-scrolling behavior
    useEffect(() => {
        if (autoScroll) {
            const interval = setInterval(() => {
                window.scrollBy(0, scrollSpeed)
            }, 30)
            return () => clearInterval(interval)
        }
    }, [autoScroll, scrollSpeed])

    return (
        <div className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
            {/* Scroll container */}
            <div className="snap-y snap-mandatory overflow-auto h-full">
                <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-8">
                    <div className="text-center text-white max-w-lg mx-auto">
                        <h2 className="text-4xl font-extrabold leading-tight">Product 1</h2>
                        <p className="text-xl mt-4 mb-6">This is the first amazing product in our collection.</p>
                        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 p-8">
                    <div className="text-center text-white max-w-lg mx-auto">
                        <h2 className="text-4xl font-extrabold leading-tight">Product 2</h2>
                        <p className="text-xl mt-4 mb-6">Our second product is here to blow your mind!</p>
                        <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-green-100 focus:outline-none">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="snap-start h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-red-600 p-8">
                    <div className="text-center text-white max-w-lg mx-auto">
                        <h2 className="text-4xl font-extrabold leading-tight">Product 3</h2>
                        <p className="text-xl mt-4 mb-6">Limited edition - don't miss out on this one!</p>
                        <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="absolute bottom-10 right-10 flex flex-col space-y-4">
                <button
                    className="bg-white text-blue-600 font-bold p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
                    onClick={() => alert('Added to Cart')}
                >
                    <i className="fas fa-cart-plus"></i>
                </button>

                {/* Scroll Control */}
                <div className="bg-white rounded-full shadow-lg">
                    <button
                        onClick={() => setAutoScroll(!autoScroll)}
                        className="text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none"
                    >
                        {autoScroll ? 'Stop Auto Scroll' : 'Start Auto Scroll'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductShowcase