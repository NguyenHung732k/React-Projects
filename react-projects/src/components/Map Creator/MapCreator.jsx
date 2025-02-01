import React, { useState, useRef, useEffect } from 'react'
import LabelEditor from './components/LabelEditor'
import ExportModal from './components/ExportModal'
import Sidebar from './components/Sidebar'

const MapCreator = () => {
    const canvasRef = useRef(null)
    const [selectedTerrain, setSelectedTerrain] = useState(null)
    const [labels, setLabels] = useState([])
    const [isExportModalOpen, setIsExportModalOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    // Handle canvas click to add terrain
    const handleCanvasClick = (event) => {
        if (selectedTerrain) {
            const rect = canvasRef.current.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            // Add terrain to the canvas at click location
            const ctx = canvasRef.current.getContext('2d')
            ctx.beginPath()
            ctx.arc(x, y, 30, 0, Math.PI * 2)
            ctx.fillStyle = selectedTerrain.color
            ctx.fill()
        }
    }

    // Handle label addition
    const addLabel = (labelText, coordinates) => {
        setLabels([...labels, { text: labelText, coordinates }])
    }

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div className={darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}>

            <div className="p-4 bg-gray-700 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Fantasy Map Creator</h1>
                <button
                    onClick={toggleDarkMode}
                    className="p-2 bg-gray-600 rounded-md text-white"
                >
                    Toggle Dark Mode
                </button>
            </div>

            <div className="flex">
                <Sidebar
                    setSelectedTerrain={setSelectedTerrain}
                    setIsExportModalOpen={setIsExportModalOpen}
                />

                <div className="flex-1 p-6">
                    <div className="relative border rounded bg-white shadow-lg overflow-hidden mb-6">
                        <canvas
                            ref={canvasRef}
                            onClick={handleCanvasClick}
                            width="600"
                            height="400"
                            className="w-full h-full"
                        />
                    </div>

                    <LabelEditor addLabel={addLabel} />

                    {isExportModalOpen && <ExportModal setIsExportModalOpen={setIsExportModalOpen} canvasRef={canvasRef} />}
                </div>
            </div>
        </div>
    )
}

export default MapCreator