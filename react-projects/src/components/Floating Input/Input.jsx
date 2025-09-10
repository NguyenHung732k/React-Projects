import React from 'react';

const Input = ({ id, label, type = 'text', autoComplete = 'off' }) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                id={id}
                autoComplete={autoComplete}
                placeholder=" "
                className="
          peer w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white 
          border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          transition-all duration-200 ease-in-out
        "
            />
            <label
                htmlFor={id}
                className="
          absolute left-4 top-2 text-sm text-gray-500 
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 
          transition-all duration-200 ease-in-out pointer-events-none
        "
            >
                {label}
            </label>
        </div>
    )
}

export default Input