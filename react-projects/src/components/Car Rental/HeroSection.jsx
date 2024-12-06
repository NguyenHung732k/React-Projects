import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative bg-primary text-white h-60 flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10">
                <h1 className="text-4xl font-bold">Find Your Perfect Ride</h1>
                <p className="text-lg mt-2">Browse and book a car for your next trip</p>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Search cars..."
                        className="p-3 rounded-l-lg w-96 text-gray-800"
                    />
                    <button className="bg-success text-white p-3 rounded-r-lg">Search</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection