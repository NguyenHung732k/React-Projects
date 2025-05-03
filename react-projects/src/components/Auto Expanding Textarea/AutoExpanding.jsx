import React, { useState, useRef, useEffect } from "react"

const AutoExpanding = ({ maxLines = 5 }) => {
    const [text, setText] = useState("")
    const [height, setHeight] = useState("auto")
    const textareaRef = useRef(null)

    const handleInputChange = (event) => {
        const newText = event.target.value
        setText(newText)

        setHeight("auto")
        const scrollHeight = textareaRef.current.scrollHeight
        setHeight(scrollHeight)

        const lines = newText.split("\n").length
        if (lines > maxLines) {
            setText(newText.split("\n").slice(0, maxLines).join("\n"))
        }
    }

    useEffect(() => {
        if (textareaRef.current) {
            const scrollHeight = textareaRef.current.scrollHeight
            setHeight(scrollHeight)
        }
    }, [text])

    return (
        <div className="relative max-w-full">
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleInputChange}
                rows={1}
                className="w-full p-4 bg-white border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
                style={{
                    height: height,
                    maxHeight: `${maxLines * 40}px`,
                }}
                placeholder="Type something..."
            />
            <div className="absolute right-4 bottom-2 text-sm text-gray-500">
                {text.length} / {maxLines * 40} characters
            </div>
        </div>
    )
}

export default AutoExpanding