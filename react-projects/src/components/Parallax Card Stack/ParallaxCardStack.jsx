import { useState, useEffect } from 'react'

const ParallaxCardStack = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const updateMousePosition = (event) => {
        const { clientX, clientY } = event
        setMousePosition({ x: clientX, y: clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition)
        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    return (
        <div className="relative w-full h-screen bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden">
            <div
                className="absolute inset-0 flex justify-center items-center"
                style={{
                    transform: `translate3d(${(mousePosition.x - window.innerWidth / 2) * 0.5}px, ${(mousePosition.y - window.innerHeight / 2) * 0.5}px, 0)`,
                }}
            >
                <div className="relative flex justify-center items-center space-x-4 sm:space-x-6">
                    {/* Stacked Cards */}
                    {[...Array(5).keys()].map((_, index) => (
                        <div
                            key={index}
                            className={`w-64 h-96 bg-white rounded-lg shadow-xl transition-all duration-500 transform ease-in-out
                hover:scale-105 hover:shadow-2xl cursor-pointer
                z-${5 - index}`}
                            style={{
                                transform: `translate3d(${(mousePosition.x - window.innerWidth / 2) * (0.15 * (index + 1))}px, ${(mousePosition.y - window.innerHeight / 2) * (0.15 * (index + 1))}px, 0)`,
                            }}
                        >
                            <div className="w-full h-full flex flex-col justify-between p-6">
                                <img
                                    src={`https://source.unsplash.com/random/500x300?sig=${index}`}
                                    alt={`Card ${index + 1}`}
                                    className="w-full h-2/3 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-2xl font-semibold text-gray-800">Card {index + 1}</h3>
                                <p className="text-gray-600 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ParallaxCardStack