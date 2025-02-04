import React from 'react'

const WeeklyChallenges = () => {
    const challenges = [
        { text: 'Switch to a plant-based meal for one day this week.' },
        { text: 'Walk or bike instead of driving for at least 2 days.' },
        { text: 'Reduce your electricity consumption by 10% this week.' },
    ]

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">Weekly Challenges</h2>
            <div className="space-y-4">
                {challenges.map((challenge, index) => (
                    <div key={index} className="flex justify-between items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md hover:bg-green-50 transition">
                        <p className="text-lg text-gray-700">{challenge.text}</p>
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg">Mark as Done</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeeklyChallenges