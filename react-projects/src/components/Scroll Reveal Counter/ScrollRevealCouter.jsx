import React from 'react';
import RevealCounter from './RevealCounter'

const ScrollRevealCouter = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
                    Watch the Magic Happen!
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-4">
                    Scroll down to see how numbers come to life as you explore.
                </p>
            </div>

            {/* Scroll Reveal Counter */}
            <div className="w-full max-w-3xl">
                <RevealCounter
                    target={1200}
                    duration={3000}
                    easing="easeOutElastic"
                    format={true}
                    repeat={false}
                    color="text-white"
                    background="bg-gradient-to-r from-indigo-500 to-purple-600"
                />
            </div>

            <div className="mt-16 text-center">
                <p className="text-lg md:text-xl text-gray-700">
                    This is just one of the amazing animations you can implement.
                    Scroll down to learn more!
                </p>
            </div>
        </div>
    )
}

export default ScrollRevealCouter