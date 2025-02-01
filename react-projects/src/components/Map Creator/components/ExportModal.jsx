import React from 'react'

const ExportModal = ({ setIsExportModalOpen, canvasRef }) => {
    const handleExportPNG = () => {
        const dataURL = canvasRef.current.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = dataURL
        link.download = 'map.png'
        link.click()
    };

    const handleExportSVG = () => {
        const svgContent = '<svg width="600" height="400"></svg>'
        const link = document.createElement('a')
        link.href = 'data:image/svg+xml,' + encodeURIComponent(svgContent)
        link.download = 'map.svg'
        link.click()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl mb-4">Export Options</h2>
                <button
                    onClick={handleExportPNG}
                    className="w-full py-2 bg-blue-600 text-white rounded mb-3"
                >
                    Export as PNG
                </button>
                <button
                    onClick={handleExportSVG}
                    className="w-full py-2 bg-green-600 text-white rounded mb-3"
                >
                    Export as SVG
                </button>
                <button
                    onClick={() => setIsExportModalOpen(false)}
                    className="w-full py-2 bg-gray-400 text-white rounded mt-3"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default ExportModal