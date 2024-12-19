import React, { useState } from "react"

const ImageUpload = () => {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        // Simulate an API call for image recognition
        setTimeout(() => {
            setResult({ name: "Red Fox", image_url: "https://via.placeholder.com/150" })
            setLoading(false)
        }, 2000)
    }

    return (
        <div className="text-center p-6">
            <input
                type="file"
                onChange={handleImageChange}
                className="bg-gray-100 border rounded-md p-2 w-full text-center"
            />
            <button
                onClick={handleSubmit}
                className="mt-4 bg-green-500 text-white p-3 rounded-full"
            >
                {loading ? "Identifying..." : "Identify"}
            </button>

            {loading && (
                <div className="mt-4 text-gray-600">Processing your image...</div>
            )}

            {result && !loading && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold">{result.name}</h3>
                    <img
                        src={result.image_url}
                        alt={result.name}
                        className="w-40 mx-auto rounded-md shadow-md"
                    />
                    <p className="mt-4">Learn more about {result.name}</p>
                </div>
            )}
        </div>
    )
}

export default ImageUpload