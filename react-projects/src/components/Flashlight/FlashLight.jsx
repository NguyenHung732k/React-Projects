import React, { useState } from 'react'

const Flashlight = () => {
    const [color1, setColor1] = useState('#ffffff')
    const [color2, setColor2] = useState('#0000ff')
    const [isOn, setIsOn] = useState(false)
    const [glowEffect, setGlowEffect] = useState(20)

    const toggleFlashlight = () => {
        setIsOn((prev) => !prev)
    }

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-900 transition-all ${isOn ? 'bg-black' : 'bg-gray-900'}`}>
            <div
                className={`w-80 h-80 rounded-full transition-all duration-500 ${isOn
                    ? `bg-gradient-to-r from-[${color1}] via-[#ff8c00] to-[${color2}]`
                    : 'bg-transparent'
                    } shadow-2xl`}
                style={{
                    boxShadow: `0 0 ${glowEffect}px ${glowEffect / 2}px ${color1}, 0 0 ${glowEffect * 2}px ${glowEffect}px ${color2}`,
                    filter: `blur(${glowEffect / 3}px)`,
                    transition: 'box-shadow 0.3s ease-in-out, filter 0.3s ease-in-out',
                }}
            >

            </div>

            <div className="mt-8 space-y-6 text-center">
                <button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsOn(!isOn)}
                >
                    {isOn ? 'Turn Off Flashlight' : 'Turn On Flashlight'}
                </button>

                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="color1" className="text-white text-lg">
                            Choose Light Color 1:
                        </label>
                        <input
                            id="color1"
                            type="color"
                            value={color1}
                            onChange={(event) => setColor1(event.target.value)}
                            className="border-2 border-gray-300 rounded-full p-1 w-12 h-12"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="color2" className="text-white text-lg">
                            Choose Light Color 2:
                        </label>
                        <input
                            id="color2"
                            type="color"
                            value={color2}
                            onChange={(event) => setColor2(event.target.value)}
                            className="border-2 border-gray-300 rounded-full p-1 w-12 h-12"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="glow" className="text-white text-lg">
                        Adjust Glow Effect:
                    </label>
                    <input
                        id="glow"
                        type="range"
                        min="10"
                        max="50"
                        value={glowEffect}
                        onChange={(event) => setGlowEffect(event.target.value)}
                        className="w-64 bg-gray-700 rounded-full accent-yellow-400"
                    />
                </div>
            </div>
        </div>
    )
}

export default Flashlight