import React, { useState, useRef, useEffect } from "react"
import { saveAs } from "file-saver"

const PostGenerator = () => {
    const [text, setText] = useState("")
    const [font, setFont] = useState("font-sans")
    const [bgColor, setBgColor] = useState("bg-blue-500")
    const [template, setTemplate] = useState("Instagram")

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        const canvasWidth = template === "Instagram" ? 1080 : template === "Twitter" ? 1200 : 1200
        const canvasHeight = template === "Instagram" ? 1080 : template === "Twitter" ? 675 : 630

        canvas.width = canvasWidth
        canvas.height = canvasHeight

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Set background color
        ctx.fillStyle = bgColor === "bg-blue-500" ? "#3b82f6" : "#ff6347"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Set text style
        ctx.font = `bold 50px ${font === "font-sans" ? "Arial" : font === "font-serif" ? "Georgia" : "Monospace"}`
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(text, canvas.width / 2, canvas.height / 2)
    }, [text, font, bgColor, template])

    const handleDownload = () => {
        const canvas = canvasRef.current
        canvas.toBlob((blob) => {
            saveAs(blob, "social_media_post.png")
        })
    }

    return (
        <div className="font-sans min-h-screen bg-gray-100">
            <div className="max-w-screen-xl mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Social Media Post Generator</h1>
                    <p className="text-lg text-gray-600">Create stunning posts for Instagram, Twitter, and Facebook with ease</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Text</label>
                            <input
                                type="text"
                                value={text}
                                onChange={(event) => setText(event.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg text-xl"
                                placeholder="Enter your text"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Font</label>
                            <select
                                value={font}
                                onChange={(event) => setFont(event.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            >
                                <option value="font-sans">Sans-serif</option>
                                <option value="font-serif">Serif</option>
                                <option value="font-mono">Monospace</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Background Color</label>
                            <input
                                type="color"
                                value={bgColor === "bg-blue-500" ? "#3b82f6" : "#ff6347"}
                                onChange={(event) => setBgColor(event.target.value === "#3b82f6" ? "bg-blue-500" : "bg-red-500")}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Template</label>
                            <div className="flex space-x-4">
                                {["Instagram", "Twitter", "Facebook"].map((platform) => (
                                    <button
                                        key={platform}
                                        onClick={() => setTemplate(platform)}
                                        className={`${template === platform
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-300 text-gray-700"
                                            } px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-500`}
                                    >
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleDownload}
                            className="w-full bg-green-600 text-white py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
                        >
                            Download as PNG
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <canvas ref={canvasRef} className="w-full border border-gray-300 rounded-lg"></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostGenerator