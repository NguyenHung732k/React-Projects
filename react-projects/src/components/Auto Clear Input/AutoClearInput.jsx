import { useState } from "react";

const AutoClearInput = () => {
    const [value, setValue] = useState("")

    // Handle input change
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClear = () => {
        setValue("");
        document.getElementById("inputField").focus()
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
                <input
                    id="inputField"
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search or Type something..."
                    className="px-4 py-3 border border-gray-300 rounded-lg w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                />

                {value && (
                    <button
                        onClick={handleClear}
                        className="mt-2 text-2xl text-gray-500 transition-opacity duration-300 ease-in-out hover:text-red-500"
                        style={{
                            opacity: value ? 1 : 0,
                            transition: "opacity 0.3s ease-in-out",
                        }}
                    >
                        ❌
                    </button>
                )}
            </div>
        </div>
    )
}

export default AutoClearInput