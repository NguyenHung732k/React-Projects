import React, { useState } from "react"

const MAX_WAVES = 5

const VolumeControl = () => {
    const [volume, setVolume] = useState(0.5) // Range: 0 to 1
    const [isMuted, setIsMuted] = useState(false)

    // Calculate wave scale by volume and wave index for decay effect
    const getWaveScale = (index) => {
        if (isMuted) return 0
        const base = volume * 1.2
        const decay = 1 - index * 0.18
        return Math.max(0.3, base * decay)
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    const muteClasses = isMuted
        ? "text-red-500 animate-pulse"
        : "text-indigo-500 hover:text-indigo-400"

    return (
        <div
            className="flex flex-col items-center bg-gray-900 p-8 rounded-2xl w-72 shadow-lg select-none"
            role="region"
            aria-label="Volume control"
        >
            {/* Slider + Volume % */}
            <div className="flex items-center w-full mb-6 space-x-4">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={(event) => {
                        setVolume(parseFloat(event.target.value));
                        if (isMuted) setIsMuted(false);
                    }}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={isMuted ? 0 : Math.round(volume * 100)}
                    aria-label="Volume slider"
                    className="flex-grow h-4 rounded-full cursor-pointer bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600 appearance-none hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    style={{
                        backgroundSize: `${(isMuted ? 0 : volume) * 100}% 100%`,
                    }}
                />
                <span
                    className={`w-14 text-right font-mono text-sm select-none ${isMuted ? "text-red-400" : "text-indigo-400"
                        }`}
                >
                    {isMuted ? "Muted" : `${Math.round(volume * 100)}%`}
                </span>
            </div>

            {/* Sound Waves */}
            <div
                className="relative flex justify-center items-center space-x-3 w-full h-20"
                aria-hidden="true"
            >
                {[...Array(MAX_WAVES)].map((_, i) => {
                    const scale = getWaveScale(i);
                    const opacity = 0.6 - i * 0.12;
                    return (
                        <span
                            key={i}
                            className="block rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.7)]"
                            style={{
                                width: `${18 + i * 14}px`,
                                height: `${18 + i * 14}px`,
                                opacity,
                                transform: `scale(${scale})`,
                                transition:
                                    "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease-in-out",
                                boxShadow: `0 0 ${8 + i * 6}px rgba(99, 102, 241, ${opacity})`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Mute Button */}
            <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute volume" : "Mute volume"}
                className={`mt-8 p-3 rounded-full border-2 border-indigo-500
          focus:outline-none focus:ring-4 focus:ring-indigo-600
          transition-colors duration-300 flex justify-center items-center
          ${muteClasses}`}
                type="button"
            >
                {isMuted ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5v14l7-7-7-7zM18 9l3 3m0 0l-3 3m3-3H9"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5v14l7-7-7-7z"
                        />
                    </svg>
                )}
            </button>
        </div>
    )
}

export default VolumeControl