import React, { useState, useEffect } from 'react'

const ChallengeDetail = ({ match }) => {
    const [progress, setProgress] = useState(0)
    const [completed, setCompleted] = useState(false)
    const challengeId = match.params.id

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(progress + 1)
            } else {
                clearInterval(timer)
                setCompleted(true)
            }
        }, 100)
        return () => clearInterval(timer)
    }, [progress])

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-6">Challenge {challengeId} Details</h1>
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                <p className="text-xl">Complete the challenge and earn points!</p>
                <div className="mt-6">
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                Progress
                            </span>
                        </div>
                        <div className="flex mb-2">
                            <div className="w-full bg-teal-200 rounded-full">
                                <div
                                    className="bg-teal-500 text-xs font-medium leading-none py-1 text-center text-white"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    {completed ? (
                        <button className="mt-6 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
                            Challenge Complete! +100 Points
                        </button>
                    ) : (
                        <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
                            Start Challenge
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChallengeDetail