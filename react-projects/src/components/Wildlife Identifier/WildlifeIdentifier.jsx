import React from "react"
import ImageUpload from "./ImageUpload"
import LocationBasedSpecies from "./LocationBasedSpecies"

const WildlifeIdentifier = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-green-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="font-bold text-lg">Wildlife Identifier</h1>
                    <button className="bg-orange-500 py-2 px-4 rounded-full text-white">
                        Submit Sighting
                    </button>
                </div>
            </header>

            {/* Main content */}
            <main className="container mx-auto p-6 space-y-8">
                {/* Image Upload */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700">Identify a Species</h2>
                    <div className="mt-4">
                        <ImageUpload />
                    </div>
                </div>

                {/* Location-based Species */}
                <LocationBasedSpecies />

                {/* Featured Educational Tips */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Did You Know?</h2>
                    <p className="text-gray-600 mt-2">Learn about the conservation efforts for local wildlife.</p>
                </div>
            </main>
        </div>
    )
}

export default WildlifeIdentifier