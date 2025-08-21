import React from 'react';
import RippleClickEffect from './RippleClickEffect'
import './RippleClick.css'


const RippleClick = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white space-y-8 p-6">

            {/* Title */}
            <h1 className="text-3xl font-bold">🎯 Custom Ripple Effect</h1>

            {/* Circle + Gradient */}
            <div className="relative w-72 h-72 bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <RippleClickEffect
                    shape="circle"
                    fill="gradient"
                    size={160}
                    speed={800}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                    Circle Ripple (Gradient)
                </div>
            </div>

            {/* Star + Image Fill */}
            <div className="relative w-72 h-72 bg-black rounded-xl shadow-xl overflow-hidden">
                <RippleClickEffect
                    shape="star"
                    fill="image"
                    imageUrl="/ripple-texture.jpg"
                    size={180}
                    speed={1000}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                    Star Ripple (Image)
                </div>
            </div>

            {/* Custom Heart + Solid Color */}
            <div className="relative w-72 h-72 bg-white rounded-xl shadow-xl overflow-hidden">
                <RippleClickEffect
                    shape="custom"
                    customShape="M50,15 C35,-5 0,20 50,80 C100,20 65,-5 50,15 Z"
                    fill="#f43f5e"
                    size={150}
                    speed={900}
                />
                <div className="absolute inset-0 flex items-center justify-center text-black text-lg font-semibold">
                    Custom Heart (Color)
                </div>
            </div>

        </div>
    )
}

export default RippleClick