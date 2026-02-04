import React, { useState, useEffect, useRef } from "react"
import WaveSurfer from "wavesurfer.js"

const MusicVisualizer = () => {
    const [audioFile, setAudioFile] = useState(null)
    const [waveSurferInstance, setWaveSurferInstance] = useState(null)
    const [waveColor, setWaveColor] = useState("#3490dc")
    const [progressColor, setProgressColor] = useState("#ff9f43")
    const waveformRef = useRef(null)

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor,
            progressColor,
            height: 200,
            barWidth: 2,
            barHeight: 1,
            barGap: 2,
            responsive: true,
        })

        setWaveSurferInstance(wavesurfer)

        return () => wavesurfer.destroy()
    }, [waveColor, progressColor])

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setAudioFile(URL.createObjectURL(file))
        }
    }

    useEffect(() => {
        if (audioFile && waveSurferInstance) {
            waveSurferInstance.load(audioFile)
        }
    }, [audioFile, waveSurferInstance])

    const togglePlayPause = () => {
        if (waveSurferInstance) {
            waveSurferInstance.playPause()
        }
    }

    const handleExportImage = () => {
        if (waveSurferInstance) {
            const dataURL = waveSurferInstance.exportImage()
            const link = document.createElement("a")
            link.href = dataURL
            link.download = "music-visualization.png"
            link.click()
        }
    }

    return (
        <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-8 space-y-6">
            <h1 className="text-3xl font-bold text-center">Music Visualizer</h1>

            <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="bg-gray-700 p-4 rounded-lg text-white cursor-pointer hover:bg-gray-600 transition duration-300"
            />

            <div
                ref={waveformRef}
                className="w-full max-w-3xl h-40 bg-gray-800 rounded-xl shadow-lg"
            ></div>

            <div className="flex items-center space-x-6">
                <button
                    onClick={togglePlayPause}
                    className="py-2 px-4 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition transform hover:scale-105"
                >
                    Play/Pause
                </button>

                <button
                    onClick={handleExportImage}
                    className="py-2 px-4 bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition transform hover:scale-105"
                >
                    Export Image
                </button>
            </div>

            <div className="flex items-center space-x-4 mt-6">
                <div>
                    <label className="block text-sm text-gray-400">Wave Color</label>
                    <input
                        type="color"
                        value={waveColor}
                        onChange={(event) => setWaveColor(event.target.value)}
                        className="w-12 h-12 border-2 border-gray-600 rounded-full cursor-pointer"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-400">Progress Color</label>
                    <input
                        type="color"
                        value={progressColor}
                        onChange={(event) => setProgressColor(event.target.value)}
                        className="w-12 h-12 border-2 border-gray-600 rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicVisualizer