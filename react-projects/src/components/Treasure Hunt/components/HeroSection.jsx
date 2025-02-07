import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/treasure-bg.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-8">
                <h1 className="text-5xl font-extrabold mb-4">Embark on the Ultimate Treasure Hunt</h1>
                <p className="text-lg mb-6">Solve riddles, explore locations, and unlock epic rewards!</p>
                <Link to="/clue">
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-xl hover:bg-yellow-600 transition-all">
                        Start the Hunt
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection