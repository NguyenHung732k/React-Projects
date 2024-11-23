import React from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <div className="w-16 h-16 border-4 border-t-4 border-indigo-600 border-solid rounded-full animate-spin"></div>
            <span className="ml-4 text-indigo-600">Loading...</span>
        </div>
    )
}

export default Spinner