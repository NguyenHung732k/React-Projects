import React, { useState, useEffect } from 'react'
import './JokeBox.css'

const jokes = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "I used to play piano by ear, but now I use my hands."
]

const reactions = [
    'animate-clap',
    'animate-laugh',
    'animate-facepalm',
    'animate-rolling-laugh'
]

const JokeBox = () => {
    const [joke, setJoke] = useState("")
    const [reaction, setReaction] = useState("")

    useEffect(() => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
        setJoke(randomJoke)
    }, [])

    const getNewJoke = () => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)]

        setJoke(randomJoke)
        setReaction(randomReaction)
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-linear-to-r from-cyan-500 to-blue-500 p-8 rounded-xl shadow-xl max-w-md w-full space-y-6 text-center border border-slate-700 dark:border-slate-100">
                <h1 className="text-4xl font-extrabold text-clip">Joke Box</h1>
                <p className="text-lg font-semibold transition-opacity duration-700">{joke}</p>

                <div className={`mt-4 ${reaction} w-full flex justify-center`}>
                    <img
                        src={`https://static.vecteezy.com/system/resources/thumbnails/009/636/809/small/clapping-hand-gesture-3d-render-illustration-png.png`}
                        alt="Clapping"
                        className="w-16 h-16"
                    />
                </div>

                <button
                    className="bg-gradient-to-r text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gradient-to-l transition duration-300 ease-in-out"
                    onClick={getNewJoke}
                >
                    Get New Joke
                </button>
            </div>
        </div>
    )
}

export default JokeBox