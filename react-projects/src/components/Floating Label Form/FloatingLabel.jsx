import React, { useState } from "react"
import FloatingInput from "./FloatingInput"

const FloatingLabel = () => {
    const [email, setEmail] = useState("")
    const [touched, setTouched] = useState(false)
    const isValidEmail = /\S+@\S+\.\S+/.test(email)
    const showError = touched && !isValidEmail

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 p-6 text-gray-900 dark:text-white transition-colors duration-300">
            <form className="max-w-md mx-auto space-y-8 mt-16">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Stay Connected</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">We'll get back to you ASAP.</p>
                </div>

                <FloatingInput
                    id="email"
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    required
                    hasError={showError}
                    errorMessage={showError ? "Please enter a valid email." : ""}
                    success={!showError && touched}
                    darkMode={true}
                />

                <button
                    type="submit"
                    className="w-full mt-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-offset-gray-900"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default FloatingLabel