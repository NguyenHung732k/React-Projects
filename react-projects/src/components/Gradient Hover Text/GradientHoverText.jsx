import React from 'react';
import GradientText from './GradientText'

const GradientHoverText = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-8">
            <h1 className="text-5xl font-extrabold">
                <GradientText>
                    Hover over this text
                </GradientText>
            </h1>
        </div>
    )
}

export default GradientHoverText