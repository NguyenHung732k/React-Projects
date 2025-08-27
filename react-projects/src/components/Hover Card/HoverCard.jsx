import React from 'react';

const HoverCard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="w-80 h-96 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:-translate-y-4 hover:rotate-3">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Interactive Hover Card</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Hover over this card to see a smooth animation with a subtle lift and tilt effect. The button below invites you to learn more.
                        </p>
                    </div>
                    <div>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full py-3 mt-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverCard