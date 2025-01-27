import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CampfirePage = () => {
    const [soundOn, setSoundOn] = useState(true)

    const toggleSound = () => {
        setSoundOn(!soundOn)
    }

    return (
        <div className="relative flex justify-center items-center h-screen bg-gradient-to-b from-blue-800 via-indigo-700 to-black">
            <div className="absolute flex justify-center items-center w-64 h-64 bg-gradient-to-b from-yellow-400 to-red-500 animate-flicker rounded-full shadow-lg"></div>

            <div className="absolute w-full h-full bg-[url('path_to_stars_image')] bg-cover bg-no-repeat opacity-40"></div>

            <div className="absolute bottom-5 right-5 space-x-4">
                <Link to="/collaborative">
                    <button className="bg-yellow-500 p-3 rounded-full text-white shadow-lg hover:bg-yellow-400">
                        <i className="fas fa-fire"></i>
                    </button>
                </Link>
                <Link to="/record">
                    <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-400">
                        <i className="fas fa-microphone"></i>
                    </button>
                </Link>
                <Link to="/library">
                    <button className="bg-gray-500 p-3 rounded-full text-white shadow-lg hover:bg-gray-400">
                        <i className="fas fa-book"></i>
                    </button>
                </Link>
            </div>

            <div className="absolute top-5 left-5 bg-gray-800 bg-opacity-60 p-3 rounded-full">
                <button className="text-white" onClick={toggleSound}>
                    <i className={`fas ${soundOn ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
                </button>
            </div>
        </div>
    )
}

export default CampfirePage