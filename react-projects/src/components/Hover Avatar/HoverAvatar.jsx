import React from "react";

const HoverAvatar = ({ avatarUrl = "https://randomuser.me/api/portraits/men/1.jpg" }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className="group relative w-32 h-32 overflow-hidden rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
                {/* Avatar Image */}
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full transition-all duration-300 ease-in-out group-hover:ring-8 group-hover:ring-indigo-500"
                />

                {/* Background Overlay with Animation */}
                <div
                    className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-in-out group-hover:scale-110 group-hover:blur-md"
                />
            </div>
        </div>
    )
}

export default HoverAvatar