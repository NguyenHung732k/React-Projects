import React from 'react'

const SharePlaylist = ({ playlist }) => {
    const generateShareLink = () => {
        return `https://moodify.com/share?playlist=${encodeURIComponent(
            JSON.stringify(playlist)
        )}`
    }

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold">Share Your Playlist</h2>
            <div className="bg-white rounded-lg p-4 shadow-lg mt-4">
                <p className="text-gray-600">Here's the link to share:</p>
                <div className="flex items-center space-x-2 mt-2">
                    <input
                        type="text"
                        value={generateShareLink()}
                        readOnly
                        className="p-2 border rounded-lg flex-1"
                    />
                    <button
                        onClick={() => navigator.clipboard.writeText(generateShareLink())}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                    >
                        Copy Link
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SharePlaylist