import React from 'react'
import ImageComparisonSlider from './ImageComparisonSlider'

const ImageComparison = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-8">
                Interactive Image Comparison Slider
            </h1>

            <div className="container mx-auto px-4">
                <ImageComparisonSlider
                    beforeImage="https://via.placeholder.com/800x400/0000FF/808080?text=Before"
                    afterImage="https://via.placeholder.com/800x400/00FF00/808080?text=After"
                    label="Before and After Comparison"
                />
            </div>
        </div>
    )
}

export default ImageComparison