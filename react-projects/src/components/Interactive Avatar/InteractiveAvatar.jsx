import React, { useState, useEffect } from 'react';

const InteractiveAvatar = () => {
    const [name, setName] = useState('')
    const [initials, setInitials] = useState('')
    const [bgColor, setBgColor] = useState()
    const [pulse, setPulse] = useState(false)

    const getInitials = (name) => {
        const nameArr = name.split(' ')
        const firstInitial = nameArr[0]?.charAt(0).toUpperCase()
        const lastInitial = nameArr[1]?.charAt(0).toUpperCase()
        return `${firstInitial || ''}${lastInitial || ''}`
    }

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    useEffect(() => {
        if (name) {
            setInitials(getInitials(name))
            setBgColor(generateRandomColor())
            setPulse(true)
            setTimeout(() => setPulse(false), 500)
        } else {
            setInitials('')
            setBgColor(generateRandomColor())
        }
    }, [name])

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

            <div className="flex flex-col items-center w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create Your Avatar</h2>

                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-5 py-3 mb-6 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md placeholder-gray-500 transition-all duration-300"
                />

                <button
                    onClick={() => setBgColor(generateRandomColor())}
                    className="w-full py-3 mb-6 bg-blue-500 text-white text-lg rounded-lg focus:outline-none hover:bg-blue-400 shadow-lg transition-all duration-200"
                >
                    Change Background Color
                </button>

                <div
                    className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-3xl ${pulse ? 'animate-pulse' : ''}`}
                    style={{ backgroundColor: bgColor }}
                >
                    {initials}
                </div>

                {name && !initials && (
                    <p className="text-gray-500 mt-4">Please enter a full name to generate initials.</p>
                )}
            </div>
        </div>
    )
}

export default InteractiveAvatar;