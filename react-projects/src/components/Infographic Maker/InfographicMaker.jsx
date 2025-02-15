import React, { useState } from 'react'
import { ReactFlowProvider } from 'reactflow'
import Sidebar from './Sidebar'
import InfographicCanvas from './InfographicCanvas'
import Header from './Header'
import Export from './Export'

const InfographicMaker = () => {
    const [selectedComponent, setSelectedComponent] = useState(null)

    const handleSelectComponent = (type) => {
        setSelectedComponent(type)
    }

    const handleExport = (type) => {
        console.log(`Exporting as ${type}...`)
        // Add export logic here for PNG, PDF (can use jsPDF, html2pdf, or reactflow export functions)
    }

    return (
        <ReactFlowProvider>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar onSelectComponent={handleSelectComponent} />
                    <div className="flex-1 flex flex-col">
                        <InfographicCanvas selectedComponent={selectedComponent} />
                        <Export onExport={handleExport} />
                    </div>
                </div>
            </div>
        </ReactFlowProvider>
    )
}

export default InfographicMaker