import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Challenges = () => {
    const [challenges, setChallenges] = useState([])

    useEffect(() => {
        setChallenges([
            { id: 1, name: '10 Push-ups Challenge', description: 'Complete 10 push-ups.', points: 100 },
            { id: 2, name: '30 Minute Run Challenge', description: 'Run for 30 minutes.', points: 200 },
            { id: 3, name: '100 Squats Challenge', description: 'Complete 100 squats.', points: 150 },
        ])
    }, [])

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-6">Workout Challenges</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.map((challenge) => (
                    <div key={challenge.id} className="bg-gray-100 p-6 rounded-xl shadow-lg hover:bg-gray-200">
                        <h2 className="text-2xl font-semibold">{challenge.name}</h2>
                        <p>{challenge.description}</p>
                        <p className="mt-2 text-sm text-gray-500">Earn {challenge.points} points!</p>
                        <Link
                            to={`/challenges/${challenge.id}`}
                            className="mt-4 inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                        >
                            Start Challenge
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Challenges