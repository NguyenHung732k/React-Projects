import React from 'react'

const ShareGratitude = () => {
    return (
        <div className="max-w-5xl mx-auto mb-6">
            <div className="p-6 bg-white shadow-lg rounded-xl">
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Share Your Gratitude</h3>
                <p className="text-center text-gray-600">
                    Share your gratitude moments with friends and inspire others to reflect on their blessings.
                </p>
                <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-3 rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-700 transition duration-300">
                    Share Now
                </button>
            </div>
        </div>
    )
}

export default ShareGratitude