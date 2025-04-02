import React, { useState } from 'react'
import Lottie from 'react-lottie'
import { saveAs } from 'file-saver'

const LottieLoader = () => {
    const [animationData, setAnimationData] = useState(null)
    const [color, setColor] = useState('#ffffff')
    const [speed, setSpeed] = useState(1)
    const [looping, setLooping] = useState(true)
    const [isUploading, setIsUploading] = useState(false)
    const [error, setError] = useState(null)

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            setIsUploading(true)
            const reader = new FileReader()

            reader.onload = (event) => {
                try {
                    const json = JSON.parse(event.target.result)
                    setAnimationData(json)
                    setError(null)
                } catch (error) {
                    setError('Invalid Lottie JSON file')
                }
                setIsUploading(false)
            }
            reader.readAsText(file)
        }
    }

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    const handleSpeedChange = (event) => {
        setSpeed(parseFloat(event.target.value))
    }

    const handleLoopToggle = () => {
        setLooping(!looping)
    }

    const exportAnimation = () => {
        const updatedAnimation = { ...animationData }
        updatedAnimation.layers = updatedAnimation.layers.map((layer) => {
            if (layer.shapes) {
                layer.shapes = layer.shapes.map((shape) => {
                    if (shape.it) {
                        shape.it = shape.it.map((item) => {
                            if (item.ty === 'fl' && item.c) {
                                item.c.k = [
                                    parseInt(color.slice(1, 3), 16) / 255,
                                    parseInt(color.slice(3, 5), 16) / 255,
                                    parseInt(color.slice(5, 7), 16) / 255,
                                    1,
                                ]
                            }
                            return item
                        })
                    }
                    return shape
                })
            }
            return layer
        })
        const updatedBlob = new Blob([JSON.stringify(updatedAnimation)], { type: 'application/json' })
        saveAs(updatedBlob, 'updated_animation.json')
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg space-y-6">
                <h2 className="text-3xl font-semibold text-center text-blue-600">Customize Your Lottie Animation</h2>

                <div className="flex flex-col items-center">
                    <label className="mb-3 text-lg text-gray-600">Upload Lottie JSON file</label>
                    <input
                        type="file"
                        accept="application/json"
                        onChange={handleFileUpload}
                        className="file:mr-4 file:px-6 file:py-3 file:border-2 file:border-gray-300 file:rounded-lg file:bg-blue-500 file:text-white file:hover:bg-blue-600"
                    />
                    {isUploading && <p className="mt-2 text-gray-500">Uploading...</p>}
                    {error && <p className="mt-2 text-red-500">{error}</p>}
                </div>

                {animationData && (
                    <div className="flex justify-center">
                        <Lottie
                            options={{
                                animationData: animationData,
                                loop: looping,
                                autoplay: true,
                                speed: speed,
                            }}
                            height={300}
                            width={300}
                        />
                    </div>
                )}

                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <label className="text-lg text-gray-700">Choose Color</label>
                        <input
                            type="color"
                            value={color}
                            onChange={handleColorChange}
                            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="text-lg text-gray-700">Speed</label>
                        <input
                            type="range"
                            min="0.1"
                            max="3"
                            step="0.1"
                            value={speed}
                            onChange={handleSpeedChange}
                            className="w-full"
                        />
                        <span className="text-sm text-gray-600">{speed.toFixed(1)}x</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="text-lg text-gray-700">Loop</label>
                        <input
                            type="checkbox"
                            checked={looping}
                            onChange={handleLoopToggle}
                            className="w-6 h-6 text-blue-500 border-gray-300 rounded"
                        />
                    </div>
                </div>

                {animationData && (
                    <div className="text-center">
                        <button
                            onClick={exportAnimation}
                            className="mt-6 px-6 py-3 text-white bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-lg hover:scale-105 transition-all"
                        >
                            Export Updated Animation
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LottieLoader