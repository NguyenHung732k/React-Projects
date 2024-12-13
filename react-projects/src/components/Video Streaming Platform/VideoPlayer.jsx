import React, { useRef, useState } from 'react'

function VideoPlayer({ videoSrc }) {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(1)

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value)
        videoRef.current.volume = volume
    }

    return (
        <div className="relative">
            <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-auto rounded-lg"
                controls
                poster="https://via.placeholder.com/500x300.png?text=Video+Thumbnail"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center rounded-b-lg">
                <button
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <div className="flex items-center space-x-4">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24"
                    />
                    <span>{Math.round(volume * 100)}%</span>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer