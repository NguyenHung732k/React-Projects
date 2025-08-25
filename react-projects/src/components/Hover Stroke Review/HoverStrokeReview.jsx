import React from "react";
import "./HoverStrokeReview.css"

const HoverStrokeReview = ({
    text = "Hello World",
    fontSize = 80,
    gradientFrom = "#00f6ff",
    gradientTo = "#ff00c8",
    strokeWidth = 2,
}) => {
    return (
        <div className="group relative w-full flex justify-center items-center py-12 bg-black overflow-hidden">
            <svg
                viewBox="0 0 1200 200"
                className="w-full max-w-6xl h-[200px]"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="strokeGradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor={gradientFrom} />
                        <stop offset="100%" stopColor={gradientTo} />
                    </linearGradient>
                </defs>

                {/* Stroke Outline (draws with animation) */}
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={fontSize}
                    className="stroke-outline"
                    style={{
                        stroke: `url(#strokeGradient)`,
                        strokeWidth: strokeWidth,
                    }}
                >
                    {text}
                </text>

                {/* Gradient Fill (fades in on hover) */}
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={fontSize}
                    className="fill-gradient group-hover:opacity-100"
                    style={{
                        fill: `url(#strokeGradient)`,
                    }}
                >
                    {text}
                </text>
            </svg>
        </div>
    )
}

export default HoverStrokeReview