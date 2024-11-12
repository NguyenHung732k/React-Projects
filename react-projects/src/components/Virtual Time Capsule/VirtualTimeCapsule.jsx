import React, { useState } from 'react'
import CreateTimeCapsule from './CreateTimeCapsule'
import TimeCapsule from './TimeCapsule'

const VirtualTimeCapsule = () => {
    const [capsules, setCapsules] = useState([])
    const [isCreating, setIsCreating] = useState(false)

    const handleCreateCapsule = (newCapsule) => {
        setCapsules((prevCapsules) => [...prevCapsules, newCapsule])
        setIsCreating(false)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            <header className="w-full bg-blue-600 text-white p-4 shadow-lg text-center">
                <h1 className="text-3xl font-bold">Virtual Time Capsule</h1>
            </header>

            <main className="container mx-auto p-6">
                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setIsCreating(true)}
                        className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all"
                    >
                        Create New Capsule
                    </button>
                </div>

                {isCreating ? (
                    <CreateTimeCapsule onSubmit={handleCreateCapsule} />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capsules.map((capsule, index) => (
                            <TimeCapsule key={index} capsule={capsule} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}

export default VirtualTimeCapsule