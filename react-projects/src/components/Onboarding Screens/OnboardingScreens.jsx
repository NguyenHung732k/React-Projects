import React, { useState, useEffect } from "react"
import Onboarding from "./Onboarding"

const OnboardingScreens = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <div className="min-h-screen">
            <header className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Onboarding</h1>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 bg-gray-400 dark:bg-gray-600 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </header>

            <Onboarding />
        </div>
    )
}

export default OnboardingScreens