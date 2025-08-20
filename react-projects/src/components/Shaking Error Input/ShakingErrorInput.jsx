import React, { useState } from 'react';
import './ShakingErrorInput.css'

const ShakingErrorInput = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const [shake, setShake] = useState(false)

    const validate = () => {
        if (value.trim() === '') {
            setError(true)
            setShake(true)
            setTimeout(() => setShake(false), 400)
        } else {
            setError(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-md mx-auto px-4">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Your Email
                </label>

                <div className="relative">
                    <input
                        id="name"
                        type="text"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onBlur={validate}
                        placeholder="Enter your email"
                        className={`
            w-full pl-4 pr-10 py-3 text-sm rounded-md border focus:outline-none focus:ring-2
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-300'}
            ${shake ? 'animate-shake' : ''}
          `}
                    />
                    {error && (
                        <svg className="h-5 w-5 text-red-500 absolute right-3 top-3.5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 200C333.3 200 344 210.7 344 224L344 336C344 349.3 333.3 360 320 360C306.7 360 296 349.3 296 336L296 224C296 210.7 306.7 200 320 200zM293.3 416C292.7 406.1 297.6 396.7 306.1 391.5C314.6 386.4 325.3 386.4 333.8 391.5C342.3 396.7 347.2 406.1 346.6 416C347.2 425.9 342.3 435.3 333.8 440.5C325.3 445.6 314.6 445.6 306.1 440.5C297.6 435.3 292.7 425.9 293.3 416z" />
                        </svg>
                    )}
                </div>

                {error && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        Please enter a valid email.
                    </p>
                )}
            </div>
        </div>
    )
}

export default ShakingErrorInput