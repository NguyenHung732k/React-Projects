import React, { useState } from 'react'
import PhotoUpload from './PhotoUpload'

const Page = ({ page, pages, setPages }) => {
    const [text, setText] = useState(page.text)
    const [backgroundColor, setBackgroundColor] = useState(page.backgroundColor || '#ffffff')
    const [font, setFont] = useState(page.font || 'sans-serif')

    const updatePageContent = (updatedImages) => {
        const updatedPages = pages.map(p => (
            p.id === page.id ? { ...p, images: updatedImages, text, backgroundColor, font } : p
        ))
        setPages(updatedPages)
    }

    return (
        <div className="border border-gray-300 rounded-lg p-4 w-96 shadow-md transition-transform hover:scale-105" style={{ backgroundColor, fontFamily: font }}>
            <h2 className="font-semibold mb-2">Page {page.id}</h2>
            <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Add your text here..."
                className="border border-gray-300 p-2 mb-2 w-full h-20"
            />
            <PhotoUpload updatePageContent={updatePageContent} />
            <div className="mt-2 mb-2">
                <label className="block mb-1">Background Color:</label>
                <input type="color" value={backgroundColor} onChange={(event) => setBackgroundColor(event.target.value)} />
            </div>
            <div className="mb-2">
                <label className="block mb-1">Font:</label>
                <select value={font} onChange={(event) => setFont(event.target.value)} className="border border-gray-300 p-1">
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
            </div>
            <div className="flex flex-wrap mt-2">
                {page.images.map((img, index) => (
                    <img key={index} src={img} alt="scrapbook" className="h-20 w-20 object-cover m-1 rounded" />
                ))}
            </div>
        </div>
    )
}

export default Page