import React from "react";
import './PixelatedImage.css'

const PixelatedImage = ({ src = "https://placehold.co/600x400", alt = "Pixelated and Hoverable Image" }) => {
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
                {/* Image with pixelation class */}
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover pixelated"
                />

                {/* Optional dark overlay effect */}
                <div className="pixelated-overlay"></div>

                {/* Optional caption */}
                <div className="pixelated-caption">
                    <span>{alt}</span>
                </div>
            </div>
        </div>
    );
};

export default PixelatedImage;