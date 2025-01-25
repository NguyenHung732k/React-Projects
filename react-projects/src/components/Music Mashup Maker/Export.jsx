import React from 'react'

const Export = ({ audioBlob }) => {
    const handleExport = () => {
        const url = URL.createObjectURL(audioBlob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'mashup.mp3'
        a.click()
    };

    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={handleExport}
                className="bg-green-500 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-green-600 transition duration-300"
            >
                Export Mashup
            </button>
        </div>
    )
}

export default Export