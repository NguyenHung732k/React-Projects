import React, { useState } from "react";
import Dashboard from "./Dashboard"

const SmartHome = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
                <Dashboard />
            </div>
        </div>
    )
}

export default SmartHome