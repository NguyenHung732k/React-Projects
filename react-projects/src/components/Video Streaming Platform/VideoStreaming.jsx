import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import VideoUpload from './VideoUpload'
import VideoSearch from './VideoSearch'
import VideoCard from './VideoCard'

function VideoStreaming() {
    const [videos, setVideos] = useState([])
    const [filteredVideos, setFilteredVideos] = useState([])

    const handleUpload = (videoData) => {
        const newVideo = {
            id: Date.now(),
            ...videoData,
            videoSrc: URL.createObjectURL(videoData.videoFile),
        }
        setVideos([...videos, newVideo])
        setFilteredVideos([...filteredVideos, newVideo])

        toast.success('Video uploaded successfully!', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    const handleDelete = (id) => {
        setVideos(videos.filter((video) => video.id !== id));
        setFilteredVideos(filteredVideos.filter((video) => video.id !== id));

        toast.error('Video deleted successfully!', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-screen-xl mx-auto">
                <VideoSearch videos={videos} onSearch={setFilteredVideos} />
                <VideoUpload onUpload={handleUpload} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredVideos.map((video) => (
                        <VideoCard key={video.id} video={video} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default VideoStreaming