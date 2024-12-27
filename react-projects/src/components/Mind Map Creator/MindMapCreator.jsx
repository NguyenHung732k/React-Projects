import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import MindMap from './MindMap'
import Toolbar from './Toolbar'


const MindMapCreator = () => {
    const [nodes, setNodes] = useState([
        { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
    ])

    const handleAddNode = (newNode) => {
        setNodes((prevNodes) => [
            ...prevNodes,
            { id: `${prevNodes.length + 1}`, data: { label: newNode.label }, position: { x: 250, y: 250 } },
        ])
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex h-screen">
                <Toolbar onAddNode={handleAddNode} />
                <div className="flex-1 p-6 space-y-4">
                    <div
                        id="mind-map-container"
                        className="h-full border-2 border-gray-300 rounded-lg bg-white shadow-md overflow-hidden"
                    >
                        <MindMap nodes={nodes} setNodes={setNodes} />
                    </div>
                </div>
            </div>
        </DndProvider>
    )
}

export default MindMapCreator