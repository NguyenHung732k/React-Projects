import React from 'react'

const Preferences = ({ preferences, setPreferences }) => {
    const categories = ['technology', 'sports', 'business', 'health', 'entertainment'];

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold">Select Your Preferences:</h2>
            <div className="flex justify-center space-x-4 mt-2">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg text-white ${preferences === category ? 'bg-blue-500' : 'bg-gray-400'}`}
                        onClick={() => setPreferences(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Preferences