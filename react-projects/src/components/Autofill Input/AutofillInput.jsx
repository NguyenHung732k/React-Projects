import React, { useState, useEffect } from "react";

const AutofillInput = () => {
    const [isAutofilled, setIsAutofilled] = useState(false)
    const [inputValue, setInputValue] = useState("")

    // Simulate autofill action
    const handleAutofill = () => {
        setInputValue("autofilled@example.com")
        setIsAutofilled(true)
    }

    useEffect(() => {
        if (isAutofilled) {
            const timeout = setTimeout(() => {
                setIsAutofilled(false)
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [isAutofilled])

    return (
        <div className="flex flex-col items-center space-y-6 mt-10">
            {/* Button to simulate autofill */}
            <button
                onClick={handleAutofill}
                className="w-80 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 focus:outline-none"
            >
                Simulate Autofill
            </button>

            <div className="relative">
                {/* Input field with autofill highlight */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    className={`w-80 p-4 border-2 rounded-md transition-all duration-300 ease-in-out 
            ${isAutofilled ? "bg-gradient-to-r from-blue-300 to-blue-100 transform scale-105 shadow-lg ring-2 ring-blue-400" : "bg-white"} 
            ${isAutofilled ? "opacity-100" : "opacity-80"} 
            focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter email"
                />

                {/* Autofill highlight overlay */}
                {isAutofilled && (
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-blue-200 opacity-50 animate-slide-in"
                        style={{ animationDuration: "0.5s", animationTimingFunction: "ease-out" }}
                    ></div>
                )}
            </div>
        </div>
    )
}

export default AutofillInput