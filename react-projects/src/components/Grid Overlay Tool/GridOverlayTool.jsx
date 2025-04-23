import React, { useState } from 'react'
import GridOverlay from './GridOverlay'
import GridSettingsPanel from './GridSettingsPanel'
import SnapComponent from './SnapComponent'

const GridOverlayTool = () => {
    const [showGrid, setShowGrid] = useState(true)
    const [settings, setSettings] = useState({
        columns: 12,
        rows: 8,
        gutter: 8,
    })

    return (
        <div className="relative min-h-screen bg-gray-100">
            <button
                onClick={() => setShowGrid(!showGrid)}
                className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md transition-all duration-300"
            >
                {showGrid ? 'Hide Grid' : 'Show Grid'}
            </button>

            <GridSettingsPanel settings={settings} setSettings={setSettings} />
            <GridOverlay {...settings} visible={showGrid} />
            <SnapComponent gridSize={50} />
        </div>
    )
}

export default GridOverlayTool