import React, { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import FamilyTree from './FamilyTree'
import ExportButtons from './ExportButtons'
import Timeline from './Timeline'

function FamilyTreeBuilder() {
    const familyTreeRef = useRef()

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl">
                    <h1 className="text-4xl font-semibold text-center mb-8 text-blue-600">Interactive Family Tree Builder</h1>
                    <div ref={familyTreeRef}>
                        <FamilyTree />
                    </div>
                    <ExportButtons familyTreeRef={familyTreeRef} />
                    <Timeline />
                </div>
            </div>
        </DndProvider>
    )
}

export default FamilyTreeBuilder