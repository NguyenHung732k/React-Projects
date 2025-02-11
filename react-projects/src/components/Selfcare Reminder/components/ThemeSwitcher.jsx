import React from "react"

const ThemeSwitcher = ({ setTheme }) => {
    return (
        <div className="flex justify-center mb-8 space-x-4">
            <button
                onClick={() => setTheme("soothingBlue")}
                className="bg-blue-500 text-white p-4 rounded-xl font-semibold hover:bg-blue-600 transition-all">
                Blue Theme
            </button>
            <button
                onClick={() => setTheme("calmGreen")}
                className="bg-green-500 text-white p-4 rounded-xl font-semibold hover:bg-green-600 transition-all">
                Green Theme
            </button>
            <button
                onClick={() => setTheme("softYellow")}
                className="bg-yellow-500 text-white p-4 rounded-xl font-semibold hover:bg-yellow-600 transition-all">
                Yellow Theme
            </button>
        </div>
    )
}

export default ThemeSwitcher