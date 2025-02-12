import React, { useState } from "react"
import ImageUpload from "./components/ImageUpload"
import StyleRecommendations from "./components/StyleRecommendations"
import PracticeIdeas from "./components/PracticeIdeas"
import Resources from "./components/Resources"
import Loader from "./components/Loader"
import { analyzeImage } from "./api/artAnalysis"

const ArtStyleRecommender = () => {
    const [style, setStyle] = useState(null)
    const [isUploading, setIsUploading] = useState(false)

    const handleImageUpload = async (imageFile) => {
        setIsUploading(true)
        const detectedStyle = await analyzeImage(imageFile)
        setStyle(detectedStyle)
        setIsUploading(false)
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Art Style Recommender
            </h1>

            <div className="max-w-4xl mx-auto">
                <ImageUpload onImageUpload={handleImageUpload} isUploading={isUploading} />

                {isUploading && <Loader />}

                {style && (
                    <>
                        <StyleRecommendations style={style} />
                        <PracticeIdeas style={style} />
                        <Resources style={style} />
                    </>
                )}
            </div>
        </div>
    )
}

export default ArtStyleRecommender