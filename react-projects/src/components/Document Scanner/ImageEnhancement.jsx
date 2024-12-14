import React from 'react';

const ImageEnhancement = ({ onAdjust }) => {
    const handleAdjustment = (event) => {
        const { name, value } = event.target
        onAdjust({ [name]: value })
    }

    return (
        <div className="mt-6">
            <label className="block text-sm mb-2">Brightness</label>
            <input
                type="range"
                name="brightness"
                min="0"
                max="2"
                step="0.1"
                defaultValue="1"
                onChange={handleAdjustment}
                className="w-full"
            />
            <label className="block text-sm mb-2 mt-4">Contrast</label>
            <input
                type="range"
                name="contrast"
                min="0"
                max="2"
                step="0.1"
                defaultValue="1"
                onChange={handleAdjustment}
                className="w-full"
            />
        </div>
    )
}

export default ImageEnhancement