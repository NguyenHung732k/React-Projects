import React, { useState } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(12)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSymbols, setIncludeSymbols] = useState(true)
    const [password, setPassword] = useState('')
    const [copySuccess, setCopySuccess] = useState('')

    const generatePassword = () => {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const numbers = '0123456789'
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?'

        let characters = lowerCase + upperCase
        if (includeNumbers) characters += numbers
        if (includeSymbols) characters += symbols

        let result = ''
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            result += characters[randomIndex]
        }
        setPassword(result)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => setCopySuccess('Copied to clipboard!'))
            .catch(() => setCopySuccess('Failed to copy!'))
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">Password Generator</h1>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="length" className="text-lg">Password Length:</label>
                    <input
                        id="length"
                        type="number"
                        value={length}
                        onChange={(event) => setLength(Math.max(Number(event.target.value), 1))}
                        className="border border-gray-300 p-2 rounded-md w-16 text-center"
                        min="1"
                    />
                </div>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-lg">Include Numbers</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-lg">Include Symbols</span>
                    </label>
                </div>
                <button
                    onClick={generatePassword}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Generate Password
                </button>
                {password && (
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-300">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Generated Password</h2>
                            <button
                                onClick={copyToClipboard}
                                className="text-blue-500 hover:underline"
                            >
                                Copy
                            </button>
                        </div>
                        <p className="mt-2 text-lg font-mono text-gray-800">{password}</p>
                        {copySuccess && (
                            <p className="mt-2 text-green-500">{copySuccess}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PasswordGenerator