import React from 'react'

const Card = ({ title, content, className }) => (
    <div className={`border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 ${className}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{content}</p>
    </div>
)

export default Card