import React from 'react'

const Sidebar = () => {
    return (
        <div className="w-16 bg-blue-600 text-white p-4 space-y-6 hidden md:block">
            <div className="cursor-pointer text-center">🧪</div>
            <div className="cursor-pointer text-center">📚</div>
            <div className="cursor-pointer text-center">📋</div>
        </div>
    )
}

export default Sidebar