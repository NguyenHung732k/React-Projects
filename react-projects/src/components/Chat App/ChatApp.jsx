import React, { useState } from "react"
import Chat from "./Chat"

const ChatApp = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isTyping, setIsTyping] = useState(false)

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
    const handleTyping = () => setIsTyping(true)

    return (
        <div className={`${isDarkMode ? "dark" : ""} h-screen bg-gray-50 transition-colors`}>
            <div className="flex justify-between items-center p-6 bg-gray-800 dark:bg-gray-900 text-white shadow-md">
                <h1 className="text-2xl font-semibold">Chat App</h1>
                <button
                    onClick={toggleDarkMode}
                    className="bg-gray-700 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-gray-600"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            <Chat isTyping={isTyping} handleTyping={handleTyping} />
        </div>
    )
}

export default ChatApp