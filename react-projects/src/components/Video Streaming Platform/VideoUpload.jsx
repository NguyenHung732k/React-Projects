import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

function VideoUpload({ onUpload }) {
    const [videoFile, setVideoFile] = useState(null)
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!videoFile || !title || !category) return;
        setLoading(true)

        const videoData = { title, category, videoFile }
        await onUpload(videoData)

        setLoading(false)
    }

    return (
        <div className="max-w-xl mx-auto p-8 border border-gray-200 rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-6 text-center">Upload a Video</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Category (e.g., Tutorial)"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="w-full p-4 mb-6 border border-gray-300 rounded-lg bg-gray-50"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 ${loading && 'opacity-50 cursor-not-allowed'}`}
                >
                    {loading ? <LoadingSpinner /> : 'Upload Video'}
                </button>
            </form>
        </div>
    )
}

export default VideoUpload