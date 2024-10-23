import React from 'react'

const ColorPicker = ({ color, setColor }) => {
    return (
        <div className="flex flex-col items-center mt-4">
            <label className="mb-1">Text Color</label>
            <input
                type="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
                className="border border-gray-300 rounded-lg p-1 cursor-pointer"
            />
        </div>
    )
}

export default ColorPicker