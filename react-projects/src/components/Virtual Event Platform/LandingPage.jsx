import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <section className="text-center py-20 space-y-8">
                <h1 className="text-5xl font-extrabold">Host and Attend Live Events</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-400">
                    Join engaging virtual events, host webinars, interact with audiences in real time, and more.
                </p>
                <div className="flex justify-center gap-8">
                    <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg text-decoration-none">
                        Host an Event
                    </Link>
                    <Link to="/schedule" className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-lg text-decoration-none">
                        Browse Events
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default LandingPage