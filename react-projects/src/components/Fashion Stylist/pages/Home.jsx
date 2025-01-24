import React, { useState } from "react"
import UploadImage from "../components/UploadImage"
import SeasonalOutfits from "../components/SeasonalOutfits"
import OutfitSuggestions from "../components/OutfitSuggestions"

const Home = () => {
    const [uploadedImage, setUploadedImage] = useState(null)
    const [virtualImage, setVirtualImage] = useState(null)

    const handleImageUpload = (imageUrl) => {
        setUploadedImage(imageUrl)
        setVirtualImage("path/to/mock-virtual-tryon-image.jpg")
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
                Virtual Fashion Stylist
            </h1>
            <p className="text-lg text-center text-gray-500 mb-6">
                Upload a photo to try on outfits, explore style trends, and shop directly from your favorite stores.
            </p>

            <UploadImage setUploadedImage={handleImageUpload} />

            {uploadedImage && (
                <div className="mt-6">
                    <p className="text-center text-xl text-gray-700">Your image uploaded successfully!</p>
                    <div className="mt-4">
                        <img src={uploadedImage} alt="Uploaded" className="max-w-xs mx-auto" />
                    </div>
                </div>
            )}

            {virtualImage && (
                <div className="mt-6">
                    <p className="text-center text-xl text-gray-700">Virtual Try-On:</p>
                    <div className="mt-4">
                        <img src={virtualImage} alt="Virtual Try-On" className="max-w-xs mx-auto" />
                    </div>
                </div>
            )}

            <OutfitSuggestions />
            <SeasonalOutfits />
        </div>
    )
}

export default Home