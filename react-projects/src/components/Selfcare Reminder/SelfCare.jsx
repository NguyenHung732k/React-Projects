import React, { useState } from "react"
import Reminder from "./components/Reminder"
import MoodTracker from "./components/MoodTracker"
import Streaks from "./components/Streaks"
import ThemeSwitcher from "./components/ThemeSwitcher"

const SelfCare = () => {
    const [theme, setTheme] = useState("soothingBlue")

    return (
        <div className={`min-h-screen bg-${theme} flex flex-col items-center justify-start p-6 transition-all`}>
            <ThemeSwitcher setTheme={setTheme} />
            <h1 className="text-4xl font-semibold text-white mb-8">Self-Care Reminder App</h1>

            <div className="w-full max-w-4xl space-y-6">
                <Reminder />
                <MoodTracker />
                <Streaks />
            </div>
        </div>
    )
}

export default SelfCare