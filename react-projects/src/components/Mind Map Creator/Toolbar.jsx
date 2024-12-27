import React from 'react'
import { FaPlus, FaLightbulb, FaStickyNote } from 'react-icons/fa'
import { exportToImage, exportToPDF } from './utils/exportUtils'


const Toolbar = ({ onAddNode }) => {
    const handleAddNode = () => {
        const newNode = {
            label: 'New Node',
        }
        onAddNode(newNode)
    }

    return (
        <div className="flex flex-col items-center p-6 text-white w-64">
            <h2 className="text-xl font-bold mb-4">Mind Map Builder</h2>

            <button
                className="flex items-center justify-center p-4 bg-blue-700 rounded-full shadow-lg text-white hover:bg-blue-600 transition transform hover:scale-105"
                onClick={handleAddNode}
            >
                <FaPlus className="mr-2" /> Add Node
            </button>

            <div className="flex flex-col justify-center items-center gap-4 mt-12">
                <button
                    onClick={() => exportToImage('mind-map-container')}
                    className="p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition transform hover:scale-105"
                >
                    Export as Image
                </button>
                <button
                    onClick={() => exportToPDF('mind-map-container')}
                    className="p-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition transform hover:scale-105"
                >
                    Export as PDF
                </button>
            </div>
        </div>
    )
}

export default Toolbar