import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="flex-1 p-6">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-4xl font-semibold">Welcome back, [User]!</h1>
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-500 rounded-full p-3 text-white">
                            <span className="font-semibold text-xl">500</span> Points
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
                            Start a Challenge
                        </button>
                    </div>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/challenges" className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:bg-blue-500 flex flex-col items-center text-decoration-none">
                        <span className="text-2xl font-semibold">Challenges</span>
                        <p className="mt-2 text-sm">Start a new workout challenge and earn rewards!</p>
                    </Link>
                    <Link to="/achievements" className="bg-green-600 text-white p-6 rounded-xl shadow-lg hover:bg-green-500 flex flex-col items-center text-decoration-none">
                        <span className="text-2xl font-semibold">Achievements</span>
                        <p className="mt-2 text-sm">Track your milestones and unlock rewards.</p>
                    </Link>
                    <Link to="/multiplayer" className="bg-yellow-600 text-white p-6 rounded-xl shadow-lg hover:bg-yellow-500 flex flex-col items-center text-decoration-none">
                        <span className="text-2xl font-semibold">Multiplayer</span>
                        <p className="mt-2 text-sm">Join weekly challenges with friends and compete!</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard