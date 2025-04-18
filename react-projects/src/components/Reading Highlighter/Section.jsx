import React from "react"

const Section = ({ id, title, content, isActive }) => {
    return (
        <div
            id={`section-${id}`}
            className={`relative p-8 mb-8 transition-all duration-500 ease-in-out ${isActive ? "border-l-4 border-blue-500 bg-blue-50" : "border-l-4 border-transparent"}`}
        >
            <h2
                className={`text-3xl font-semibold transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-800"}`}
            >
                {title}
            </h2>
            <p className="mt-4 text-lg text-gray-700">{content}</p>
        </div>
    )
}

export default Section