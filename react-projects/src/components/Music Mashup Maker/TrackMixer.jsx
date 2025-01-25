import React, { useState } from 'react'

const TrackMixer = ({ files, onVolumeChange }) => {
    return (
        <div className="space-y-4 mt-6">
            {files.map((file, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        onChange={(event) => onVolumeChange(index, event.target.value)}
                        className="w-full"
                    />
                    <span className="text-gray-700">{`Track ${index + 1} Volume`}</span>
                </div>
            ))}
        </div>
    )
}

export default TrackMixer