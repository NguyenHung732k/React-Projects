import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
import DancingCharacters from './DancingCharacters'

const DiscoBall = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0.5)

    const sound = new Howl({
        src: ['path_to_your_funky_music.mp3'], // Replace with your own music file
        loop: true,
        volume,
    })

    const handleClick = () => {
        setIsPlaying(!isPlaying)
        if (!isPlaying) {
            sound.play()
        } else {
            sound.stop()
        }
    }

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value
        setVolume(newVolume)
        sound.volume(newVolume)
    }

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-600 text-white">
            <motion.div
                className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-20"
                animate={{
                    opacity: isPlaying ? [0.1, 0.2, 0.1] : 0.1,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="relative w-48 h-48 rounded-full bg-gradient-to-tl from-yellow-400 via-red-500 to-purple-600 shadow-xl transform"
                animate={{
                    rotate: isPlaying ? 360 : 0,
                    backgroundColor: isPlaying ? `hsl(${Math.random() * 360}, 100%, 50%)` : 'gray',
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'linear',
                }}
                style={{
                    transformOrigin: 'center',
                }}
            />

            <button
                onClick={handleClick}
                className="mt-6 p-4 text-xl font-semibold text-white bg-black bg-opacity-70 rounded-lg hover:bg-opacity-90 transition-all"
            >
                {isPlaying ? 'Stop the Party' : 'Start the Party'}
            </button>

            <div className="mt-4 flex flex-col items-center">
                <label htmlFor="volume" className="text-sm">Volume: {Math.round(volume * 100)}%</label>
                <input
                    type="range"
                    id="volume"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-32 mt-2"
                />
            </div>

            <DancingCharacters isPlaying={isPlaying} />

            <motion.div
                className="absolute bottom-10 text-4xl font-bold text-center animate-pulse"
                animate={{
                    opacity: isPlaying ? 1 : 0,
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            >
                LET'S DANCE! 💃🕺
            </motion.div>
        </div>
    )
}

export default DiscoBall