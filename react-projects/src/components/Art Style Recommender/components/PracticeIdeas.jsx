import React from 'react'

const PracticeIdeas = ({ style }) => {
    const getPracticeIdeas = (style) => {
        switch (style) {
            case "Surrealism":
                return "Create an artwork that merges dream-like elements with reality.";
            case "Cubism":
                return "Try breaking down a simple object into geometric shapes.";
            case "Impressionism":
                return "Experiment with painting using small, visible brush strokes.";
            default:
                return "Explore more art styles and get inspired!";
        }
    }

    return (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Practice Idea:</h3>
            <p className="text-lg text-gray-700 mt-4">{getPracticeIdeas(style)}</p>
        </div>
    )
}

export default PracticeIdeas