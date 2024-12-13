import React from 'react'
import { motion } from 'framer-motion'
import VideoPlayer from './VideoPlayer'
import CommentSection from './CommentSection'

function VideoCard({ video, onDelete }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-xl"
        >
            <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{video.category}</p>
            <div className="mb-4">
                <VideoPlayer videoSrc={video.videoSrc} />
            </div>
            <div className="flex justify-between items-center">
                <CommentSection videoId={video.id} />
                <button
                    onClick={() => onDelete(video.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200"
                >
                    Delete
                </button>
            </div>
        </motion.div>
    )
}

export default VideoCard