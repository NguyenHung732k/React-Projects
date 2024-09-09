import React, { useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState('')

    const handleChange = (event) => {
        setMarkdown(event.target.value)
    }

    const getMarkdownText = () => {
        const rawMarkup = marked(markdown, { sanitize: true });
        return DOMPurify.sanitize(rawMarkup)
    }

    return (
        <div className="h-screen flex flex-col p-2 md:flex-row">
            <div className="p-6 md:w-1/2 bg-white shadow-lg rounded-lg mx-4 mt-6 mb-6">
                <h1 className="text-3xl font-semibold text-gray-700 mb-4">Markdown Editor</h1>
                <textarea
                    className="w-full h-4/5 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    value={markdown}
                    onChange={handleChange}
                    placeholder="Enter your markdown here..."
                />
            </div>
            <div className="p-6 md:w-1/2 bg-white shadow-lg rounded-lg mx-4 mt-6 mb-6 transition-opacity duration-500 ease-in-out">
                <h1 className="text-3xl font-semibold text-gray-700 mb-4">Preview</h1>
                <div
                    className="w-full h-4/5 p-4 border border-gray-300 rounded-md bg-gray-50 overflow-auto opacity-100 transition-opacity duration-500 ease-in-out"
                    dangerouslySetInnerHTML={{ __html: getMarkdownText() }}
                />
            </div>
        </div>
    )
}

export default MarkdownPreviewer