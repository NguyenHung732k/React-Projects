import React, { useState } from 'react'

const CardEditor = () => {
    // Initial state for the card content
    const [cardContent, setCardContent] = useState({
        title: '',
        image: '',
        stats: { attack: 0, defense: 0 },
        textComponents: [],
        imageComponents: [],
        statComponents: []
    })

    const addTextComponent = () => {
        const newText = prompt('Enter text to add to the card:')
        if (newText) {
            setCardContent({
                ...cardContent,
                textComponents: [...cardContent.textComponents, newText]
            })
        }
    }

    const addImageComponent = () => {
        const newImageUrl = prompt('Enter image URL:')
        if (newImageUrl) {
            setCardContent({
                ...cardContent,
                imageComponents: [...cardContent.imageComponents, newImageUrl]
            })
        }
    }

    const addStatComponent = () => {
        const statType = prompt('Enter stat type (e.g., attack, defense):')
        const statValue = prompt('Enter stat value:')
        if (statType && statValue) {
            setCardContent({
                ...cardContent,
                statComponents: [
                    ...cardContent.statComponents,
                    { type: statType, value: parseInt(statValue, 10) }
                ]
            })
        }
    }

    return (
        <div className="flex">
            <div className="w-1/4 p-4 bg-gray-800 text-white rounded-l-lg">
                <h3 className="text-lg font-semibold mb-4">Card Components</h3>
                <div className="space-y-4">
                    <div
                        className="cursor-pointer bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={addTextComponent}
                    >
                        Add Text
                    </div>
                    <div
                        className="cursor-pointer bg-green-500 p-2 rounded-lg hover:bg-green-600 transition"
                        onClick={addImageComponent}
                    >
                        Add Image
                    </div>
                    <div
                        className="cursor-pointer bg-purple-500 p-2 rounded-lg hover:bg-purple-600 transition"
                        onClick={addStatComponent}
                    >
                        Add Stats
                    </div>
                </div>
            </div>

            <div className="w-3/4 p-4 bg-white border border-gray-300 rounded-r-lg shadow-lg relative">
                <h2 className="text-center text-xl font-semibold mb-4">Card Preview</h2>

                <div className="text-center text-xl font-bold">{cardContent.title}</div>

                {cardContent.textComponents.map((text, index) => (
                    <div key={index} className="text-center mt-2 text-lg">
                        {text}
                    </div>
                ))}

                {cardContent.imageComponents.map((imageUrl, index) => (
                    <div key={index} className="mt-2 text-center">
                        <img src={imageUrl} alt={`Card Image ${index}`} className="w-24 h-24 mx-auto" />
                    </div>
                ))}

                {cardContent.statComponents.map((stat, index) => (
                    <div key={index} className="text-center mt-2">
                        {stat.type}: {stat.value}
                    </div>
                ))}

                <div className="mt-4">
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        placeholder="Card Title"
                        value={cardContent.title}
                        onChange={(event) => setCardContent({ ...cardContent, title: event.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardEditor