import React from "react"
import TypingEffect from "./TypingEffect"

const Typing = () => {
    const sentences = [
        "Welcome to our innovative website!"
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8">
            <TypingEffect
                sentences={sentences}
                speed={120} // Typing speed
                delay={1500} // Delay between sentences
                backspaceSpeed={80} // Speed for backspacing effect
            />
            <div className="mt-8 text-lg">
                <p>Engage with our interactive typing effect! Try it yourself.</p>
            </div>
        </div>
    )
}

export default Typing