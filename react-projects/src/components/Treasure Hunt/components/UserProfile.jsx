import React from "react"
import { useGameContext } from "../context/GameContext"

const UserProfile = () => {
    const { user } = useGameContext()

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
            <img
                src={user.avatar}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-center">{user.name}</h2>
            <p className="mt-2 text-gray-500 text-center">Completed Hunts: {user.completedHunts}</p>
            <p className="text-gray-500 text-center">Points: {user.points}</p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all w-full">
                Edit Profile
            </button>
        </div>
    )
}

export default UserProfile