import React, { useState, useRef, useEffect } from 'react'

const AudioPlayer = ({ file, index, isPlaying, onTogglePlayPause }) => {
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const handlePlayPause = () => {
        onTogglePlayPause(index)
    }

    return (
        <div className="flex items-center justify-center bg-white p-6 rounded-xl shadow-md mt-6 space-x-4">
            <audio ref={audioRef} src={URL.createObjectURL(file)} />
            <button
                onClick={handlePlayPause}
                className={`bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform`}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <span className="text-gray-600">{`Track ${index + 1}`}</span>
        </div>
    )
}

export default AudioPlayer