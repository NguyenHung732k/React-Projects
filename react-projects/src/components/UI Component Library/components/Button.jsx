import React from 'react'
import './Components.css'

const Button = ({ children, className, onClick, variant = 'primary', isLoading = false }) => {
    const buttonClasses = `
      ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black'} 
      px-4 py-2 rounded-md focus:outline-none transition-all duration-200 
      ${isLoading ? 'cursor-not-allowed opacity-60' : 'hover:opacity-80'}
      ${className}
    `

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <div className="spinner"></div>
            ) : (
                children
            )}
        </button>
    )
}

export default Button