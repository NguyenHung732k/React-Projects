import React from 'react';

const ImageOverlay = ({
    imageSrc,
    altText = 'Preview Image',
    title = 'View Project',
    onClick = () => { },
}) => {
    return (
        <div
            tabIndex={0}
            role="button"
            onClick={onClick}
            className="relative group w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            {/* Image */}
            <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-in-out bg-black/40 backdrop-blur-sm">
                {/* CSS Pattern Overlay via before */}
                <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] before:bg-[length:20px_20px]" />

                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-base md:text-lg font-medium bg-black/50 px-4 py-2 rounded-full shadow-sm">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ImageOverlay