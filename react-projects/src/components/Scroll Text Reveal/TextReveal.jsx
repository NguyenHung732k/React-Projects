import React from 'react'
import ScrollTextReveal from './ScrollTextReveal'

const TextReveal = () => {
    return (
        <div className="min-h-[200vh] bg-black">
            <ScrollTextReveal />
            {/* Additional content to allow scrolling */}
            <section className="h-screen flex items-center justify-center text-white text-xl">
                Keep scrolling for more content...
            </section>
        </div>
    )
}

export default TextReveal
