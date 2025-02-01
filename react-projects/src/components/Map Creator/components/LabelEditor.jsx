import React, { useState } from 'react'

const LabelEditor = ({ addLabel }) => {
    const [labelText, setLabelText] = useState('')

    const handleAddLabel = (event) => {
        event.preventDefault()
        if (labelText.trim()) {
            addLabel(labelText, { x: 100, y: 100 }) // For simplicity, adding at fixed coordinates
            setLabelText('')
        }
    }

    return (
        <div className="mb-6">
            <form onSubmit={handleAddLabel}>
                <input
                    type="text"
                    value={labelText}
                    onChange={(event) => setLabelText(event.target.value)}
                    placeholder="Enter label"
                    className="p-2 w-full border rounded mb-3"
                />
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">
                    Add Label
                </button>
            </form>
        </div>
    )
}

export default LabelEditor