import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRegLaughBeam } from 'react-icons/fa'

const Post = ({ headline, detail }) => {
    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => setExpanded(!expanded)

    return (
        <motion.div
            className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden mb-6 cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={toggleExpand}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{headline}</h2>
                {!expanded && (
                    <motion.div
                        className="text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="line-clamp-2">{detail}</p>
                    </motion.div>
                )}

                {expanded && (
                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-gray-100 p-6 rounded-xl border-t-4 border-pink-400">
                            <div className="text-lg text-gray-800 mb-4">{detail}</div>
                            <motion.div
                                className="flex justify-center text-gray-500 mt-4"
                                animate={{ rotate: 360 }}
                                transition={{ loop: Infinity, duration: 2 }}
                            >
                                <FaRegLaughBeam className="text-6xl animate-bounce" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default Post