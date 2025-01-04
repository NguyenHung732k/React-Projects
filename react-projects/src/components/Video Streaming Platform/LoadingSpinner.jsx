import React from 'react'

function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center">
            <svg
                className="animate-spin h-12 w-12 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                />
            </svg>
        </div>
    )
}

export default LoadingSpinner