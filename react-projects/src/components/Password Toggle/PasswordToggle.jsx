import React from 'react';
import PasswordToggleUnit from './PasswordToggleUnit'
import './PasswordToggle.css'

const PasswordToggle = () => {
    return (
        <div className="container">
            <div className="form-wrapper">
                <h2>Welcome Back</h2>
                <p className="text-center text-sm text-gray-500">Sign in to continue</p>

                <div className="space-y-6">
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col space-y-3">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <PasswordToggleUnit />
                    </div>

                    <button
                        className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    >
                        Sign In
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PasswordToggle