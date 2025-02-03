import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-primary to-secondary min-h-screen text-white">
            <div className="text-center">
                <h2 className="text-4xl font-semibold mb-8">Get Your Workout Playlist</h2>
                <Link to="/activity" className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 text-decoration-none">
                    Start Workout
                </Link>
            </div>
        </div>
    )
}

export default Home