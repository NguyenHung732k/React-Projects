import React from 'react'

const Loader = () => {
    return (
        <div className="loader mt-8 flex justify-center">
            <div className="animate-spin h-8 w-8 border-4 border-t-4 border-blue-500 rounded-full mx-auto"></div>
        </div>
    )
}

export default Loader