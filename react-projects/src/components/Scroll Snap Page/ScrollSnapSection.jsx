import React from 'react'

const ScrollSnapSection = ({ sections }) => (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {sections.map((SectionComponent, idx) => (
            <div
                key={idx}
                className="snap-start h-screen flex items-center justify-center"
            >
                <SectionComponent />
            </div>
        ))}
    </div>
)

export default ScrollSnapSection