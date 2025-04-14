import React from 'react'
import html2canvas from 'html2canvas'

const ExportButton = ({ avatarRef }) => {
    const handleExport = () => {
        html2canvas(avatarRef.current).then((canvas) => {
            const image = canvas.toDataURL("image/png")
            const link = document.createElement('a')
            link.href = image
            link.download = 'avatar.png'
            link.click()
        })
    }

    return (
        <button
            onClick={handleExport}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 transition-colors"
        >
            Export Avatar
        </button>
    )
}

export default ExportButton