import React, { useState, useEffect } from "react"
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

const TimelapseMaker = () => {
    const [videoFile, setVideoFile] = useState(null)
    const [speed, setSpeed] = useState(1)
    const [outputVideo, setOutputVideo] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [progress, setProgress] = useState(0)
    const [ffmpeg, setFfmpeg] = useState(null)
    const [dragging, setDragging] = useState(false)

    useEffect(() => {
        const loadFFmpeg = async () => {
            const ffmpegInstance = new FFmpeg()
            await ffmpegInstance.load()
            setFfmpeg(ffmpegInstance)
        }

        loadFFmpeg()
    }, [])

    const handleVideoUpload = (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        const validTypes = ['video/mp4', 'video/webm', 'video/ogg']
        const maxSize = 100 * 1024 * 1024

        if (validTypes.includes(file.type) && file.size <= maxSize) {
            setVideoFile(file)
        } else {
            alert('Please upload a valid video file (MP4, WebM, OGG) under 100MB.')
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
        setDragging(true)
    }

    const handleDragLeave = () => {
        setDragging(false)
    }

    const handleDrop = (event) => {
        event.preventDefault()
        setDragging(false)
        handleVideoUpload(event)
    }

    const handleSpeedChange = (event) => {
        setSpeed(event.target.value)
    }

    const generateTimeLapse = async () => {
        if (!videoFile || !ffmpeg) return

        setIsProcessing(true)
        setProgress(0)

        const fileName = 'input-video.mp4'
        await ffmpeg.writeFile(fileName, await fetchFile(videoFile))

        await ffmpeg.exec([
            '-i', fileName,
            '-vf', `fps=24`,
            '-q:v', '2',
            'frame-%03d.jpg'
        ])

        const frameFiles = []
        for (let i = 1; ; i++) {
            try {
                const frameFile = await ffmpeg.readFile(`frame-${String(i).padStart(3, '0')}.jpg`)
                frameFiles.push(frameFile)
            } catch (error) {
                console.log(error)
                break
            }
        }

        for (let i = 0; i < frameFiles.length; i++) {
            await ffmpeg.writeFile(`frame-${i}.jpg`, frameFiles[i])
        }

        await ffmpeg.exec([
            '-framerate', '24',
            '-i', 'frame-%d.jpg',
            '-filter:v', `setpts=PTS/${speed}`,
            '-vcodec', 'libx264',
            '-pix_fmt', 'yuv420p',
            'output.mp4'
        ])

        const outputData = ffmpeg.readFile('output.mp4')

        const videoBlob = new Blob([outputData.buffer], { type: 'video/mp4' })
        const videoUrl = URL.createObjectURL(videoBlob)
        setOutputVideo(videoUrl)

        setIsProcessing(false)
    }

    const renderSpinner = () => {
        return (
            <div className="flex justify-center mt-4">
                <div className="animate-spin h-8 w-8 border-4 border-t-4 border-blue-500 rounded-full"></div>
            </div>
        )
    }

    return (
        <div className="App min-h-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Time-Lapse Video Maker</h1>

                <div
                    className={`p-6 border-4 border-dashed rounded-xl ${dragging ? 'border-blue-500' : 'border-gray-300'} transition-colors`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <label className="block text-lg font-medium text-gray-700 mb-2">Upload Video (MP4, WebM, OGG)</label>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                        id="videoInput"
                    />
                    <label htmlFor="videoInput" className="w-full h-24 bg-gray-200 text-center flex justify-center items-center cursor-pointer rounded-lg">
                        {dragging ? (
                            <p className="text-blue-500">Drop the video here...</p>
                        ) : (
                            <p className="text-gray-600">Drag & drop a video or click to select</p>
                        )}
                    </label>
                </div>

                <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Playback Speed</label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        step="0.1"
                        value={speed}
                        onChange={handleSpeedChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-center mt-2 text-gray-500">Speed: {speed}x</div>
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={generateTimeLapse}
                        disabled={isProcessing}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition duration-200"
                    >
                        {isProcessing ? 'Processing...' : 'Generate Time-Lapse'}
                    </button>
                </div>

                {isProcessing && (
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                        <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                )}

                {isProcessing && renderSpinner()}

                {outputVideo && (
                    <div className="mt-8 flex flex-col justify-center items-center">
                        <video
                            src={outputVideo}
                            controls
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                        <a
                            href={outputVideo}
                            download="timelapse-video.mp4"
                            className="mt-4 text-blue-600 hover:underline"
                        >
                            Download Video
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TimelapseMaker