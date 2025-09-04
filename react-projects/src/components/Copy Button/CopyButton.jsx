import React, { useState } from 'react';
import './CopyButton.css'

const CopyButton = ({ textToCopy = 'https://example.com' }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="relative inline-block">
                {/* Tooltip */}
                {copied && (
                    <div className="copy-tooltip absolute -top-12 left-1/2 -translate-x-1/2">
                        ✅ Copied!
                    </div>
                )}

                {/* Button */}
                <button
                    onClick={handleCopy}
                    aria-label="Copy to clipboard"
                    className={`
          px-5 py-2 rounded-md font-medium text-white transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300
          ${copied
                            ? 'bg-green-600 shadow-lg shadow-green-400/50 scale-105'
                            : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'}
        `}
                >
                    Copy
                </button>
            </div>
        </div>
    )
}

export default CopyButton