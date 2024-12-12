import React from 'react'

const Header = ({ balance }) => {
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Stock Trading Game</div>
            <div className="flex items-center space-x-6">
                <span className="text-lg">Balance: ${balance}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Header