import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FaFilePdf,
    FaFileImage,
    FaFileAudio,
    FaFileVideo
} from 'react-icons/fa'

const files = [
    { id: 1, name: 'Report.pdf', type: 'PDF', icon: <FaFilePdf className="text-red-500 text-xl" /> },
    { id: 2, name: 'Photo.png', type: 'Image', icon: <FaFileImage className="text-blue-400 text-xl" /> },
    { id: 3, name: 'Sound.mp3', type: 'Audio', icon: <FaFileAudio className="text-green-500 text-xl" /> },
    { id: 4, name: 'Movie.mp4', type: 'Video', icon: <FaFileVideo className="text-purple-500 text-xl" /> }
]

const FolderViewer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleFolder = () => setIsOpen(!isOpen)

    const radius = 150
    const angleStep = 30

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-100">
                {/* Folder */}
                <motion.div
                    onClick={toggleFolder}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ rotate: -10 }}
                    className="cursor-pointer z-20"
                >
                    <div className="bg-yellow-300 w-20 h-16 rounded-lg shadow-lg flex items-center justify-center text-4xl">
                        📁
                    </div>
                </motion.div>

                {/* Files */}
                <AnimatePresence>
                    {isOpen &&
                        files.map((file, index) => {
                            const angle = -angleStep * (files.length - 1) / 2 + index * angleStep
                            const rad = (angle * Math.PI) / 180
                            const x = radius * Math.cos(rad)
                            const y = radius * Math.sin(rad)

                            return (
                                <motion.div
                                    key={file.id}
                                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                                    animate={{ x, y, opacity: 1, scale: 1 }}
                                    exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 120 }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                                >
                                    <div className="w-16 h-16 bg-white rounded-xl border shadow-md flex items-center justify-center relative group hover:scale-110 transition-transform duration-300">
                                        {file.icon}
                                        <div className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {file.name}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default FolderViewer