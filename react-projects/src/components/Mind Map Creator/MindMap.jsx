import React, { useState, useCallback } from 'react'
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'reactflow'
import { useDrop } from 'react-dnd'
import 'reactflow/dist/style.css'

const MindMap = ({ nodes, setNodes }) => {
    const [edges, setEdges] = useState([])
    const [editingNodeId, setEditingNodeId] = useState(null)
    const [newLabel, setNewLabel] = useState('')

    const handleEdgeUpdate = useCallback(
        (oldEdge, newConnection) => setEdges((eds) => eds.map((e) => (e.id === oldEdge.id ? newConnection : e))),
        [setEdges]
    )

    const handleNodeDragStop = useCallback(
        (event, node) => {
            setNodes((nds) =>
                nds.map((n) => (n.id === node.id ? { ...n, position: node.position } : n))
            )
        },
        [setNodes]
    )

    const [, drop] = useDrop(() => ({
        accept: 'node',
        drop: (item) => {
            setNodes((nds) => [
                ...nds,
                { id: `${nds.length + 1}`, data: { label: item.label }, position: { x: 250, y: 250 } },
            ])
        },
    }))

    const handleLabelChange = (event) => {
        setNewLabel(event.target.value)
    }
    const handleLabelSubmit = (nodeId) => {
        setNodes((nds) =>
            nds.map((n) =>
                n.id === nodeId ? { ...n, data: { ...n.data, label: newLabel } } : n
            )
        )
        setEditingNodeId(null)
        setNewLabel('')
    }

    const handleNodeClick = (event, node) => {
        setEditingNodeId(node.id)
        setNewLabel(node.data.label)
    }

    return (
        <div ref={drop} className="relative w-full h-full border-2 border-gray-300 rounded-lg bg-white shadow-md overflow-hidden">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodeDragStop={handleNodeDragStop}
                onConnect={(params) => setEdges((eds) => addEdge(params, eds))}
                onEdgeUpdate={handleEdgeUpdate}
                onNodeClick={handleNodeClick}
                fitView
            >
                <MiniMap />
                <Controls />
                <Background color="#f0f0f0" gap={16} />
            </ReactFlow>

            {editingNodeId && (
                <div
                    className="absolute p-4 bg-white border border-gray-300 rounded shadow-md"
                    style={{ top: '10px', right: '10px', zIndex: 10 }}
                >
                    <input
                        type="text"
                        value={newLabel}
                        onChange={handleLabelChange}
                        onBlur={() => handleLabelSubmit(editingNodeId)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') handleLabelSubmit(editingNodeId)
                        }}
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Edit label"
                    />
                </div>
            )}
        </div>
    )
}

export default MindMap