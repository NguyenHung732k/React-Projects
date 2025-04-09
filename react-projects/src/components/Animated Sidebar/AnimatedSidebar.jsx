import React from "react"
import Sidebar from "./Sidebar"

const AnimatedSidebar = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="mt-2 text-3xl font-semibold text-gray-800">Dashboard</h1>
                <p className="mt-4 text-gray-600">
                    Welcome to your personalized dashboard! You can use the sidebar to navigate through the app.
                </p>
            </div>
        </div>
    );
}

export default AnimatedSidebar