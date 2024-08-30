import React, { useState, useEffect } from 'react'

const PasswordManager = () => {
    const [passwords, setPasswords] = useState([])
    const [newPassword, setNewPassword] = useState('')
    const [website, setWebsite] = useState('')

    useEffect(() => {
        const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || []
        if (savedPasswords) { 
            setPasswords(savedPasswords)
        }
    }, [])

    const handleAddPassword = () => {
        if (website && newPassword) {
            const updatedPasswords = [...passwords, { website, password: newPassword }]
            setPasswords(updatedPasswords)
            localStorage.setItem('passwords', JSON.stringify(updatedPasswords))
            setWebsite('')
            setNewPassword('')
        }
    }

    const handleDeletePassword = (index) => {
        const updatedPasswords = passwords.filter((_, i) => i !== index)
        setPasswords(updatedPasswords)
        localStorage.setItem('passwords', JSON.stringify(updatedPasswords))
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Password Manager</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Website</label>
                    <input
                        type="text"
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    onClick={handleAddPassword}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                    Add Password
                </button>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Stored Passwords</h3>
                    {passwords.length === 0 ? (
                        <p className="text-gray-500 mt-2">No passwords stored.</p>
                    ) : (
                        <ul className="mt-2 p-0">
                            {passwords.map((item, index) => (
                                <li key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
                                    <span>{item.website}</span>
                                    <button
                                        onClick={() => handleDeletePassword(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PasswordManager