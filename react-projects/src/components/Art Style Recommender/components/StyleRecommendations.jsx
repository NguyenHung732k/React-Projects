import React from 'react'

const StyleRecommendations = ({ style }) => {
    if (!style) return null

    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
                Recommended Art Style: {style}
            </h2>
            <p className="mt-4 text-gray-600 text-center">
                Explore practice exercises and tutorials for {style} art style.
            </p>
        </div>
    )
}

export default StyleRecommendations