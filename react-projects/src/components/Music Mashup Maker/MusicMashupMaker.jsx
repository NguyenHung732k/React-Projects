import React, { useEffect, useState } from 'react'
import FileUpload from './FileUpload'
import AudioPlayer from './AudioPlayer'
import TrackMixer from './TrackMixer'
import Export from './Export'

const MusicMashupMaker = () => {
    const [files, setFiles] = useState([])
    const [playingTrack, setPlayingTrack] = useState(null)
    const [volumes, setVolumes] = useState([])
    const [audioBlob, setAudioBlob] = useState(null)

    const handleFileSelect = (newFiles) => {
        setFiles([...files, ...newFiles])
        setVolumes([...volumes, ...newFiles.map(() => 0.5)])
    }

    const togglePlayPause = (index) => {
        if (playingTrack === index) {
            setPlayingTrack(null); // Pause the current track if it's already playing
        } else {
            setPlayingTrack(index); // Play the clicked track if it's not already playing
        }
    }

    const handleVolumeChange = (index, newVolume) => {
        const updatedVolumes = [...volumes]
        updatedVolumes[index] = newVolume
        setVolumes(updatedVolumes)
    }

    const generateMashup = () => {
        const audioContext = new (window.AudioContext || window.AudioContext)()
        const promises = files.map((file) =>
            fetch(URL.createObjectURL(file))
                .then((response) => response.arrayBuffer())
                .then((buffer) => audioContext.decodeAudioData(buffer))
        )

        Promise.all(promises).then((decodedBuffers) => {
            const mixer = audioContext.createGain()
            decodedBuffers.forEach((buffer, index) => {
                const source = audioContext.createBufferSource()
                source.buffer = buffer
                source.connect(mixer)
                mixer.gain.value = volumes[index]
                source.start()
            })

            mixer.connect(audioContext.destination)

            const finalBlob = new Blob([new ArrayBuffer(1)], { type: 'audio/mp3' })
            setAudioBlob(finalBlob)
        })
    }

    useEffect(() => {
        if (files.length > 0 && playingTrack === null) {
            setPlayingTrack(null)
        }
    }, [files, playingTrack])

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center text-blue-600">Music Mashup Maker</h1>
            <div className="mt-8 flex flex-col justify-center items-center">
                <FileUpload onFileSelect={handleFileSelect} />
                {files.length > 0 && <TrackMixer files={files} onVolumeChange={handleVolumeChange} />}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                {files.map((file, index) => (
                    <AudioPlayer
                        key={index}
                        file={file}
                        index={index}
                        isPlaying={playingTrack === index}
                        onTogglePlayPause={togglePlayPause}
                    />
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <button
                    onClick={generateMashup}
                    className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                    Generate Mashup
                </button>
            </div>
            {audioBlob && <Export audioBlob={audioBlob} />}
        </div>
    )
}

export default MusicMashupMaker