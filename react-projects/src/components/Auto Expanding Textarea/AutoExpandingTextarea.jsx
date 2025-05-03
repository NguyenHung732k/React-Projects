import React from "react"
import AutoExpanding from "./AutoExpanding"

const AutoExpandingTextarea = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Auto-Expanding Textarea
                </h1>
                <AutoExpanding maxLines={5} />
            </div>
        </div>
    )
}

export default AutoExpandingTextarea