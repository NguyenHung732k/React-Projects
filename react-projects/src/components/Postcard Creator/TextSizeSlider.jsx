import React from 'react'

const TextSizeSlider = ({ textSize, setTextSize }) => {
    return (
        <div className="mt-4">
            <label className="block mb-1">Text Size: {textSize}px</label>
            <input
                type="range"
                min="10"
                max="100"
                value={textSize}
                onChange={(event) => setTextSize(event.target.value)}
                className="w-full"
            />
        </div>
    )
}

export default TextSizeSlider