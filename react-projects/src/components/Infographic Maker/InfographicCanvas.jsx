import React, { useState, useEffect } from 'react'
import ReactFlow, { addEdge, useNodesState, useEdgesState, useReactFlow } from 'reactflow'
import 'reactflow/dist/style.css'
import { Chart } from 'react-chartjs-2'

const initialEdges = []

const InfographicCanvas = ({ selectedComponent }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    const { setViewport } = useReactFlow()

    const [editingText, setEditingText] = useState(null)
    const [newText, setNewText] = useState('')

    useEffect(() => {
        if (selectedComponent) {
            const newNode = {
                id: `${nodes.length + 1}`,
                type: selectedComponent === 'text' ? 'default' : 'output',
                data: {
                    label: selectedComponent === 'text' ? 'Click to Edit' : 'Chart',
                    isEditable: selectedComponent === 'text',
                    chartData: selectedComponent === 'chart' ? {
                        labels: ['January', 'February', 'March'],
                        datasets: [{
                            label: 'Dataset 1',
                            data: [65, 59, 80],
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        }],
                    } : null,
                },
                position: { x: Math.random() * 300, y: Math.random() * 300 },
            }
            setNodes((nds) => [...nds, newNode])
        }
    }, [selectedComponent])

    const handleTextChange = (id, newText) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === id) {
                    node.data.label = newText
                }
                return node
            })
        )
        setEditingText(null)
    }

    const handleChartDataChange = (id, newData) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === id) {
                    node.data.chartData = newData
                }
                return node
            })
        )
    }
    

    const handleTextClick = (id, currentText) => {
        setEditingText(id)
        setNewText(currentText)
    }

    return (
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={(params) => setEdges((eds) => addEdge(params, eds))}
                snapToGrid={true}
                fitView
                onInit={(reactFlowInstance) => {
                    setViewport({ x: 0, y: 0, zoom: 1 })
                }}
            >
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className={`react-flow__node ${node.type === 'default' ? 'bg-blue-100' : 'bg-green-100'} p-4 cursor-pointer`}
                        onClick={(event) => {
                            if (node.data.isEditable && editingText !== node.id) {
                                handleTextClick(node.id, node.data.label)
                            }
                        }}
                        style={{ position: 'absolute', top: `${node.position.y}px`, left: `${node.position.x}px` }}
                    >
                        {node.type === 'default' ? (
                            editingText === node.id ? (
                                <input
                                    autoFocus
                                    value={newText}
                                    onChange={(event) => setNewText(event.target.value)}
                                    onBlur={() => handleTextChange(node.id, newText)}
                                    className="border p-2 rounded w-full"
                                />
                            ) : (
                                <span>{node.data.label}</span>
                            )
                        ) : (
                            <div className="w-full h-64">
                                {node.data.chartData ? (
                                    <Chart
                                        type="bar"
                                        data={node.data.chartData}
                                        options={{ responsive: true }}
                                    />
                                ) : (
                                    <span>No chart data available</span>
                                )}
                                <button
                                    onClick={() => handleChartDataChange(node.id, {
                                        labels: ['January', 'February', 'March'],
                                        datasets: [{
                                            label: 'Dataset 2',
                                            data: [80, 60, 100],
                                            borderColor: 'rgb(255, 99, 132)',
                                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                        }],
                                    })}
                                    className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                                >
                                    Update Chart Data
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </ReactFlow>
        </div>
    )
}

export default InfographicCanvas