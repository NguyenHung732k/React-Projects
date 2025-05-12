import React from 'react'
import ScrollHint from './ScrollHint'

const ScrollHintNudge = () => {
    return (
        <div className="relative">
            <ScrollHint scrollTargetId="section2" />

            <section className="h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Welcome</h1>
            </section>

            <section
                id="section2"
                className="h-screen bg-white flex items-center justify-center"
            >
                <h2 className="text-3xl text-gray-800">Next Section</h2>
            </section>
        </div>
    )
}

export default ScrollHintNudge