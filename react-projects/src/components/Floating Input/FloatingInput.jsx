import React from 'react';
import Input from './Input'

const FloatingInput = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-xl font-semibold text-gray-800">Login</h1>

                <Input id="email" label="Email Address" type="email" />
                <Input id="password" label="Password" type="password" />

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default FloatingInput
