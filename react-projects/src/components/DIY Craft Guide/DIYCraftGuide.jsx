import React, { useState } from 'react'
import CraftForm from './components/CraftForm'
import CraftCard from './components/CraftCard'
import CraftFilter from './components/CraftFilter'

const DIYCraftGuide = () => {
    const [crafts, setCrafts] = useState([])
    const [filter, setFilter] = useState('')
    const [savedCrafts, setSavedCrafts] = useState([])
    const [message, setMessage] = useState('')

    const addCraft = (newCraft) => {
        setCrafts([...crafts, newCraft])
        setMessage('Craft added successfully!')
        setTimeout(() => setMessage(''), 3000)
    }

    const saveCraft = (craft) => {
        setSavedCrafts([...savedCrafts, craft])
        setMessage('Craft saved to gallery!')
        setTimeout(() => setMessage(''), 3000)
    }

    const filteredCrafts = crafts.filter((craft) => {
        return !filter || craft.difficulty === filter
    })

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div className="max-w-7xl mx-auto p-6">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold tracking-tight">DIY Craft Guide</h1>
                    <p className="mt-4 text-xl">Create, share, and save your DIY craft ideas!</p>
                </header>

                {message && (
                    <div className="mb-6 p-4 bg-green-500 text-white rounded-lg shadow-md">
                        {message}
                    </div>
                )}

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <CraftForm addCraft={addCraft} />
                </div>

                <CraftFilter onFilterChange={setFilter} />

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCrafts.map((craft, index) => (
                        <CraftCard
                            key={index}
                            craft={craft}
                            isGallery={false}
                            saveCraft={saveCraft}
                        />
                    ))}
                </div>

                <section className="mt-16">
                    <h2 className="text-3xl font-semibold mb-6">My Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedCrafts.map((craft, index) => (
                            <CraftCard key={index} craft={craft} isGallery={true} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DIYCraftGuide