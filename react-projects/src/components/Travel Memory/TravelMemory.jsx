import React, { useEffect, useState } from 'react'
import Header from './Header'
import MemoryForm from './MemoryForm'
import MemoryList from './MemoryList'


const TravelMemory = () => {
    const [memories, setMemories] = useState(() => {
        const savedMemories = localStorage.getItem('memories')
        return savedMemories ? JSON.parse(savedMemories) : []
    })

    useEffect(() => {
        localStorage.setItem('memories', JSON.stringify(memories))
    }, [memories])

    const addMemory = (memory) => {
        setMemories((prevMemories) => [...prevMemories, memory])
    }

    const deleteMemory = (index) => {
        setMemories((prevMemories) => prevMemories.filter((_, i) => i !== index))
    }

    const editMemory = (index, updatedMemory) => {
        setMemories((prevMemories) =>
            prevMemories.map((memory, i) => (i === index ? updatedMemory : memory))
        )
    }

    return (
        <div className="min-h-screen bg-gray-200">
            <Header />
            <main className="max-w-3xl mx-auto p-4">
                <MemoryForm addMemory={addMemory} />
                <MemoryList memories={memories} deleteMemory={deleteMemory} editMemory={editMemory} />
            </main>
        </div>
    )
}

export default TravelMemory