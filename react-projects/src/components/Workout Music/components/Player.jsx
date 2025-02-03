import React, { useState } from "react"

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlayPause = () => setIsPlaying(!isPlaying)

    return (
        <div className="bg-gradient-to-r from-primary to-secondary p-6 fixed bottom-0 left-0 right-0 shadow-lg">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="./assets/images/album.jpg" alt="Song" className="w-12 h-12 object-cover rounded-full" />
                    <div>
                        <p className="text-white font-semibold">Song Title</p>
                        <p className="text-gray-200 text-sm">Artist Name</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button onClick={togglePlayPause} className="text-white text-2xl">
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                    <button className="text-white text-2xl">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Player