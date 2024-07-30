import React from 'react'

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Home from './Home'


const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-6">
                    <Home />
                </main>
            </div>
        </div>
    )
}

export default Dashboard