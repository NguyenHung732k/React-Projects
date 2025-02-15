import React from 'react'

const Export = ({ onExport }) => {
    <div className="p-4 flex justify-center space-x-4">
        <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={() => onExport('png')}
        >
            Export as PNG
        </button>
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => onExport('pdf')}
        >
            Export as PDF
        </button>
    </div>
}

export default Export