import React from "react"
import DreamEntry from "./DreamEntry"

const DreamList = ({ dreams }) => {
    return (
        <div className="space-y-6">
            {dreams.length > 0 ? (
                dreams.map((dream, index) => (
                    <DreamEntry key={index} dream={dream} />
                ))
            ) : (
                <p className="text-gray-600">No dreams logged yet.</p>
            )}
        </div>
    )
}

export default DreamList