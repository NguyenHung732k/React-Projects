import React from 'react'

const Header = () => (
    <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Infographic Maker</h1>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100">
            Export
        </button>
    </div>
)

export default Header