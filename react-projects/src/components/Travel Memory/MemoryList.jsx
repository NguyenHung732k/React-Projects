import React from 'react'
import MemoryItem from './MemoryItem'

const MemoryList = ({ memories, deleteMemory, editMemory }) => {
    return (
        <div>
            {memories.map((memory, index) => (
                <MemoryItem
                    key={index}
                    index={index}
                    memory={memory}
                    deleteMemory={deleteMemory}
                    editMemory={editMemory}
                />
            ))}
        </div>
    )
}

export default MemoryList
