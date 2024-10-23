import React from 'react'

const FontSelector = ({ selectedFont, setSelectedFont }) => {
    const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];

    return (
        <select
            value={selectedFont}
            onChange={(event) => setSelectedFont(event.target.value)}
            className="mt-4 p-2 border border-gray-300 rounded-lg"
        >
            {fonts.map((font) => (
                <option key={font} value={font}>{font}</option>
            ))}
        </select>
    )
}

export default FontSelector