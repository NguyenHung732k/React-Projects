import React from "react"
import { Link } from "react-router-dom"

const activities = [
    { name: "Running", icon: "🏃‍♂️" },
    { name: "Cycling", icon: "🚴‍♂️" },
    { name: "Yoga", icon: "🧘‍♀️" },
    { name: "Weightlifting", icon: "🏋️‍♂️" },
    { name: "Weightlifting", icon: "🏋️‍♂️" },
]

const ActivitySelection = () => {
    return (
        <div className="bg-primary min-h-screen text-white flex flex-col justify-center items-center p-6">
            <h2 className="text-3xl font-bold mb-8">Choose Your Activity</h2>
            <div className="grid grid-cols-2 gap-6 mb-8">
                {activities.map((activity, index) => (
                    <Link
                        key={index}
                        to={`/playlists/${activity.name}`}
                        className="bg-white text-primary p-6 rounded-lg shadow-lg hover:bg-gray-200 flex items-center justify-center text-decoration-none"
                    >
                        <div className="text-4xl">{activity.icon}</div>
                        <p className="text-lg font-semibold mt-2">{activity.name}</p>
                    </Link>
                ))}
            </div>
            <Link
                to="/"
                className="flex justify-center items-center gap-2 text-white hover:text-secondary font-bold text-lg transition duration-300 text-decoration-none"
            >
                <svg className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
                Back to Home
            </Link>
        </div>
    )
}

export default ActivitySelection