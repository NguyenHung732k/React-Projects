import React from 'react'
import Checklist from '../components/Checklist'
import Budget from '../components/Budget'
import Vendors from '../components/Vendors'

function Home() {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-teal-500 mb-6">Welcome to Your Wedding Planner</h1>
            <div className="space-y-12">
                <Checklist />
                <Budget />
                <Vendors />
            </div>
        </div>
    )
}

export default Home