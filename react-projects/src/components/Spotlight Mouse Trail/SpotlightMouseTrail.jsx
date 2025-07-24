import React from 'react';
import Spotlight from './Spotlight'

const SpotlightMouseTrail = () => {
    return (
        <div className="relative w-screen h-screen bg-gray-950 overflow-hidden cursor-none">
            <Spotlight />

            <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-16">
                {SECTIONS.map(({ title, content }) => (
                    <Section key={title} title={title} content={content} />
                ))}
            </main>
        </div>
    );
}

const SECTIONS = [
    {
        title: 'Elegant Reveal',
        content: 'This section softly glows when the spotlight passes over.',
    },
    {
        title: 'Immersive Product Display',
        content: 'Ideal for showcasing features with focused attention.',
    },
    {
        title: 'Subtle Visual Magic',
        content: 'Uses blending and motion to draw user attention subtly.',
    },
]

function Section({ title, content }) {
    return (
        <div className="group relative p-8 rounded-xl bg-white/5 hover:bg-white/10 transition duration-500 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl">
            <h2 className="text-3xl font-semibold text-white group-hover:text-white/90 transition">
                {title}
            </h2>
            <p className="mt-3 text-white/60 group-hover:text-white/80 transition">{content}</p>
        </div>
    )
}

export default SpotlightMouseTrail