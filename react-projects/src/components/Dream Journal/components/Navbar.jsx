import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-indigo-600 p-4 text-white">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Dream Journal</h1>
                <div className="space-x-4">
                        <a href="/" className="text-white text-decoration-none hover:text-indigo-300">Home</a>
                        <a href="/share" className="text-white text-decoration-none hover:text-indigo-300">Share Dream</a>
                        <a href="/analytics" className="text-white text-decoration-none hover:text-indigo-300">Analytics</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar