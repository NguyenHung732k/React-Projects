import React from 'react'

import Progress from './Progress'

const ProgressTracker = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-gray-900 font-bold text-4xl">
                Progress Tracker
            </h1>
            <Progress />
        </div>
    )
}

export default ProgressTracker