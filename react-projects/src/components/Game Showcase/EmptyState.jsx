import React from 'react'

const EmptyState = ({ message }) => {
    return (
        <div className="text-center mt-10">
            <p className="text-xl text-gray-500">{message}</p>
        </div>
    )
}

export default EmptyState