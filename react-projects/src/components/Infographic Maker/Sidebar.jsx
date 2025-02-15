import React from 'react'

const Sidebar = ({ onSelectComponent }) => {
    return (
        <div className="w-80 p-4 bg-gray-100 h-full border-r flex flex-col space-y-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Components</h2>
            <button
                className="flex items-center p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 space-x-2"
                onClick={() => onSelectComponent('text')}
            >
                <span>Text Box</span>
            </button>
            <button
                className="flex items-center p-3 bg-green-500 text-white rounded-md hover:bg-green-600 space-x-2"
                onClick={() => onSelectComponent('chart')}
            >
                <span>Chart</span>
            </button>
        </div>
    )
}

export default Sidebar
