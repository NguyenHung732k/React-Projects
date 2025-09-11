import React from 'react';

const SplitButton = ({ text = "Hover Me", onClick }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800">
            <button
                onClick={onClick}
                className="w-60 group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 focus:outline-none"
            >
                {text.split('').map((char, index) => (
                    <span
                        key={index}
                        className="inline-block transition-all duration-300 ease-out transform group-hover:tracking-wider group-hover:scale-110 group-hover:text-yellow-300"
                        style={{ transitionDelay: `${index * 40}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
                <span className="absolute inset-0 rounded-lg ring-0 group-hover:ring-2 group-hover:ring-yellow-400 transition-all duration-300 pointer-events-none"></span>
            </button>
        </div>
    )
}

export default SplitButton