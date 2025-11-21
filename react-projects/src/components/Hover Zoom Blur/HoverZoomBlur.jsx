import React from "react";

const HoverZoomBlur = ({
        src,
        alt,
        title,
        description,
}) => {
    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 ease-out hover:scale-105">

            {/* Image */}
            <img
                src={src}
                alt={alt}
                className="
          w-full h-full object-cover 
          transition-all duration-500 ease-out 
          group-hover:scale-110 group-hover:blur-sm
        "
            />

            {/* Dark Gradient Overlay */}
            <div
                className="
          absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
            />

            {/* Title Overlay */}
            {title && (
                <div className="absolute inset-x-0 bottom-4 text-white px-6 py-3 text-xl font-bold opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 ease-in-out">
                    {title}
                </div>
            )}

            {/* Description Overlay */}
            {description && (
                <div className="absolute inset-x-0 bottom-12 text-white px-6 py-2 text-sm opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 ease-in-out">
                    {description}
                </div>
            )}

            {/* Zoom Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path
                        fillRule="evenodd"
                        d="M9 3a6 6 0 1111.707 4.293A6 6 0 019 3zm0 2a4 4 0 101.9 7.476L3 13l1.524-7.976A4 4 0 009 5zm11 9l-4-4a7.962 7.962 0 01-2.07 1.075A8 8 0 1120 14z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    )
}

export default HoverZoomBlur