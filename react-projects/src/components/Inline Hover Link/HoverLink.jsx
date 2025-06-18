import React from 'react'

const HoverLink = ({ href, children, className = '' }) => {
    return (
        <a
            href={href}
            className={`group inline-flex items-center relative font-medium text-blue-600 text-decoration-none dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${className}`}
        >
            <span className="relative overflow-hidden">
                <span className="relative z-10">{children}</span>

                <span
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-current
                     transform scale-x-0 origin-center
                     transition-transform duration-300 ease-out
                     group-hover:scale-x-100"
                ></span>
            </span>

            <svg
                className="w-4 h-4 ml-1 opacity-0 scale-75 -translate-x-1
                   transition-all duration-300 ease-out
                   group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </a>
    )
}

export default HoverLink