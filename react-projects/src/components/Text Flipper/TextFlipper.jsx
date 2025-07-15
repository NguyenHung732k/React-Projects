import { useState } from 'react';
import './TextFlipper.css'


const TextFlipper = ({ text = `This is a long piece of text that demonstrates a 3D flip animation.
    When you click 'Read More', the preview text flips vertically to reveal the full content.`, previewLength = 100 }) => {
    const [expanded, setExpanded] = useState(false)

    const previewText = text.slice(0, previewLength)

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

            <div className="relative w-full max-w-md mx-auto">
                <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-xl p-6 transition-all duration-700">
                    <div className="perspective">
                        <div className={`flip-card ${expanded ? 'flipped' : ''}`}>
                            <div className="flip-card-front">
                                <p className="text-gray-800 text-base font-normal">
                                    {previewText}
                                    <span
                                        className={`ellipsis inline-block transition-all duration-300 ${expanded ? 'fade-out scale-0' : 'scale-100'
                                            }`}
                                    >
                                        ...
                                    </span>
                                </p>
                            </div>

                            <div className="flip-card-back">
                                <p className="text-gray-800 text-base font-normal">
                                    {text}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-4 flex items-center text-blue-600 font-semibold hover:underline transition duration-300"
                        aria-expanded={expanded}
                    >
                        {expanded ? (
                            <>
                                Show Less
                                <svg className="ml-2 w-2 h-2 text-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                                </svg>
                            </>
                        ) : (
                            <>
                                Read More
                                <svg className="ml-2 w-2 h-2 text-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TextFlipper