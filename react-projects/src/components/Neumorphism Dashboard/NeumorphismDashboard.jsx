import React from 'react'
import Widget from './Widget'

const NeumorphismDashboard = () => {
    return (
        <div className="min-h-screen transition-colors duration-500">
            <header className="p-6 flex justify-between items-center bg-white dark:bg-black shadow-md">
                <h1 className="text-2xl font-semibold text-gray-800">Neumorphism Dashboard</h1>
            </header>

            <main className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Widget title="Users" value="1500" />
                    <Widget title="Orders" value="230" />
                    <Widget title="Revenue" value="$12,000" />
                </div>
            </main>
        </div>
    )
}

export default NeumorphismDashboard