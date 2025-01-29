import React from 'react'

const ProgressTracker = ({ progress }) => {
    return (
        <div className="mt-4">
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                            {progress}% Completed
                        </span>
                    </div>
                </div>
                <div className="flex mb-2">
                    <div className="relative w-full">
                        <div className="bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressTracker