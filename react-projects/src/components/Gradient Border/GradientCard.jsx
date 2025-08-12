import React from "react";

const GradientCard = () => {
    return (
        <div className="card group">
            <div className="gradient-border" />

            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                Gradient Border Card
            </h3>
            <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                This card has an animated gradient border with a subtle hover effect!
            </p>

            <button className="button">
                Learn More
                <span className="gradient-background"></span>
            </button>
        </div>
    )
}

export default GradientCard