import React, { useState } from 'react'
import './GooeyButton.css'

const GooeyButton = () => {
    const [blur, setBlur] = useState(10)
    const [radius, setRadius] = useState(50)
    const [useSvg, setUseSvg] = useState(true)
    const [copied, setCopied] = useState(false)

    const downloadCode = () => {
        const code = `
import React from 'react';
import './gooey.css';

const GooeyButton = () => (
  <div className="${useSvg ? 'gooey-container' : 'css-gooey'}">
    <button className="gooey-btn">Click Me</button>
  </div>
);

export default GooeyButton;
    `
        const blob = new Blob([code], { type: 'text/javascript' })
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = 'GooeyButton.jsx'
        a.click()
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center p-6 font-sans">
            <h1 className="text-4xl font-bold mb-8 text-center">🧪 Gooey Button Lab</h1>

            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10">

                {/* Control Panel */}
                <div className="space-y-6">
                    <div>
                        <label className="text-sm text-gray-300">Gooey Blur: {blur}px</label>
                        <input
                            type="range"
                            min="1"
                            max="30"
                            value={blur}
                            onChange={(event) => setBlur(event.target.value)}
                            className="w-full accent-blue-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-300">Button Radius: {radius}%</label>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={radius}
                            onChange={(event) => setRadius(event.target.value)}
                            className="w-full accent-purple-500"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <label className="text-sm text-gray-300">Use SVG Filter</label>
                        <input
                            type="checkbox"
                            checked={useSvg}
                            onChange={() => setUseSvg(!useSvg)}
                            className="form-checkbox text-blue-500"
                        />
                    </div>
                    <button
                        onClick={downloadCode}
                        className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform shadow-lg"
                    >
                        ⬇️ Download Button Code
                    </button>
                    {copied && (
                        <div className="text-green-400 text-sm mt-2 animate-pulse">Code downloaded!</div>
                    )}
                </div>

                {/* Live Preview */}
                <div className="flex items-center justify-center">
                    <div
                        className={`p-12 rounded-3xl transition-all duration-300 ${useSvg ? 'gooey-container' : 'css-gooey'
                            }`}
                        style={{
                            filter: !useSvg ? `blur(${blur}px)` : undefined
                        }}
                    >
                        <button
                            className="gooey-btn hover:scale-110 transition-transform duration-300"
                            style={{
                                borderRadius: `${radius}%`
                            }}
                        >
                            Click Me
                        </button>
                    </div>
                </div>
            </div>

            <footer className="text-gray-500 text-xs mt-10 text-center">
                Made with 💧 Gooey Filters & Tailwind CSS
            </footer>
        </div>
    )
}

export default GooeyButton