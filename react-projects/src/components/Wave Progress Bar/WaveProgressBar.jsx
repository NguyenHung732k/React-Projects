import React, { useState } from "react";
import "./WaveProgressBar.css"

const WaveProgressBar = ({ waveFrequency = 3 }) => {
    const [progress, setProgress] = useState(40)


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Wave Progress Bar
            </h1>

            <div className="w-full max-w-xl mb-6">

                <div className="relative w-full max-w-xl h-16 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-full shadow-lg overflow-hidden">

                    <svg className="absolute inset-0 w-full h-full">
                        <defs>
                            <mask id="waveMask">
                                <rect width="100%" height="100%" fill="white" />

                                <path
                                    className="wave-path"
                                    style={{ "--wave-frequency": `${waveFrequency * 10}px` }}
                                    d="M0,30 
                 Q30,50 60,30 
                 T120,30 
                 T180,30 
                 T240,30 
                 T300,30 
                 T360,30"
                                    fill="black"
                                />
                            </mask>
                        </defs>

                        <rect
                            width={`${progress}%`}
                            height="100%"
                            fill="white"
                            mask="url(#waveMask)"
                        />
                    </svg>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg md:text-xl">
                        {progress}%
                    </div>
                </div>
            </div>

            <button
                onClick={() => setProgress((p) => Math.min(100, p + 10))}
                className="w-80 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg text-lg font-semibold 
          hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
                Increment Progress
            </button>
        </div>
    )
}

export default WaveProgressBar