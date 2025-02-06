import React from 'react'

const ExportImport = ({ onExport, onImport }) => {
    return (
        <div className="flex flex-col space-y-4">
            <button
                className="p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all"
                onClick={onExport}
            >
                Export City
            </button>
            <div>
                <label className="text-white">Import City Layout:</label>
                <input
                    type="file"
                    accept=".json"
                    className="mt-2 p-2 border rounded-lg"
                    onChange={onImport}
                />
            </div>
        </div>
    )
}

export default ExportImport