import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LostAstronaut from './LostAstronaut'
import HomeButton from './HomeButton'
import MiniGame from './MiniGame'

const NotFoundPage = () => {
    return (
        <BrowserRouter>
            <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center overflow-hidden">
                {/* Starry background */}
                <div className="absolute inset-0 bg-stars animate-twinkle z-0"></div>

                <div className="z-10 max-w-md w-full p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-xl text-center">
                    <h1 className="text-6xl font-bold text-indigo-400 mb-2">404</h1>
                    <p className="text-lg text-gray-300 mb-6">Lost in the void. Page not found.</p>
                    <LostAstronaut />
                    <HomeButton />
                    <MiniGame />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default NotFoundPage