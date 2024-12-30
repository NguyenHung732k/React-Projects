import React from "react"

const LyricsDisplay = ({ lyrics }) => {
    if (!lyrics) return null

    return (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lyrics</h2>
            <div className="text-gray-600 text-lg whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
                {lyrics}
            </div>
        </div>
    )
}

export default LyricsDisplay