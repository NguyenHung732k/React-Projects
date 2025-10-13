import React from 'react';
import PixelImage from './PixelImage'
import './PixelHoverImage.css'

const PixelHoverImage = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-10">
            <PixelImage
                src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Futuristic city skyline"
                grayscale={true}
                width="w-80"
                height="h-80"
                transitionDuration={400}
                rounded={true}
            />
        </div>
    )
}

export default PixelHoverImage