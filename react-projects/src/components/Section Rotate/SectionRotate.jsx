import React from 'react';
import RotatingSection from './RotatingSection'
import ScrollIndicator from './ScrollIndicator'
import './SectionRotate.css'

const SectionRotate = () => {
    return (
        <div className="relative min-h-screen bg-background font-sans p-8 flex flex-col items-center space-y-16">
            {/* Scroll Indicator */}
            <ScrollIndicator />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-bold text-primary mb-8">Cinematic Scroll Effect</h1>
                <p className="text-xl text-gray-700 mb-12">Scroll down to discover stunning visual effects.</p>
            </div>

            {/* Rotating Sections */}
            <RotatingSection className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl" tiltDirection="rotate-x">
                <h2 className="text-4xl font-semibold text-center text-primary">Welcome to the Cinematic Effect</h2>
                <p className="mt-4 text-lg text-center text-gray-600">This section tilts as you scroll. Experience the magic of smooth animations as you go.</p>
            </RotatingSection>

            <RotatingSection className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl" tiltDirection="rotate-y">
                <h2 className="text-4xl font-semibold text-center text-secondary">Another Rotating Section</h2>
                <p className="mt-4 text-lg text-center text-gray-600">Here’s another section that rotates along the Y-axis as you scroll down.</p>
            </RotatingSection>

            <RotatingSection className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl" tiltDirection="rotate-x">
                <h2 className="text-4xl font-semibold text-center text-primary">The Last Section</h2>
                <p className="mt-4 text-lg text-center text-gray-600">This one will rotate in a different direction, enhancing the experience.</p>
            </RotatingSection>

            {/* Spacer to create scrollable content */}
            <div className="h-96"></div>
        </div>
    )
}

export default SectionRotate