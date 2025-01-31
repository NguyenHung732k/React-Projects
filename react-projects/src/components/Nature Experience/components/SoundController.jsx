import React, { useState, useEffect, useRef } from "react"

import audio from '../sounds/nature-sounds-240504.mp3'

const SoundController = ({ sceneType, isUserInteracted }) => {
    const [isMuted, setIsMuted] = useState(false)
    const soundRef = useRef(null) // Create a reference to the sound object

    // Play the sound when the user interacts with the page
    useEffect(() => {
        if (isUserInteracted && soundRef.current) {
            soundRef.current.play()
            soundRef.current.loop = true
        }

        return () => {
            if (soundRef.current) {
                soundRef.current.pause()
            }
        }
    }, [sceneType, isUserInteracted]) // Play sound when the scene changes or user interacts

    const toggleMute = () => setIsMuted(!isMuted)

    return (
        <div className="absolute bottom-8 right-8 flex items-center text-white">
            <audio ref={soundRef} src={audio} muted={isMuted}></audio>
            <button className="p-2 rounded-lg bg-blue-500" onClick={toggleMute}>
                {isMuted ? "Unmute" : "Mute"}
            </button>
        </div>
    )
}

export default SoundController