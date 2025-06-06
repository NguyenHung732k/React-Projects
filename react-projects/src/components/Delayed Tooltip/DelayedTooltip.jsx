import React from 'react'
import Tooltip from './Tooltip'
import './DelayedTooltip.css'

const DelayedTooltip = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Tooltip text="Settings Tooltip" direction="bottom">
                <button className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Hover or Focus Me
                </button>
            </Tooltip>
        </div>
    )
}

export default DelayedTooltip