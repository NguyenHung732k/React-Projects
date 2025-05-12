import { useState } from 'react'
import { motion } from 'framer-motion'

const CheckboxGallery = () => {
    const [bounceChecked, setBounceChecked] = useState(false)
    const [fadeChecked, setFadeChecked] = useState(false)
    const [svgChecked, setSvgChecked] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-10">
                Custom Checkbox Gallery
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                {/* BOUNCE TICK */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center transition-all cursor-pointer group"
                    onClick={() => setBounceChecked(!bounceChecked)}
                >
                    <motion.div
                        className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center 
              ${bounceChecked ? 'bg-blue-500 border-blue-600' : 'bg-gray-100 border-gray-400'}`}
                        animate={bounceChecked ? { scale: [0.9, 1.1, 1] } : { scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    >
                        {bounceChecked && (
                            <motion.svg
                                viewBox="0 0 24 24"
                                className="w-7 h-7 text-white"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </motion.svg>
                        )}
                    </motion.div>
                    <span className="mt-4 text-base font-medium text-gray-700">Bounce Tick</span>
                </motion.div>

                {/* FADE FILL */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center transition-all cursor-pointer group"
                    onClick={() => setFadeChecked(!fadeChecked)}
                >
                    <motion.div
                        className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center 
              ${fadeChecked ? 'bg-green-500 border-green-600' : 'bg-gray-100 border-gray-400'}`}
                        initial={false}
                        animate={{ opacity: fadeChecked ? 1 : 0.5 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.svg
                            viewBox="0 0 24 24"
                            className="w-7 h-7 text-white"
                            initial={false}
                            animate={{ opacity: fadeChecked ? 1 : 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </motion.svg>
                    </motion.div>
                    <span className="mt-4 text-base font-medium text-gray-700">Fade Fill</span>
                </motion.div>

                {/* SVG DRAW */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center transition-all cursor-pointer group"
                    onClick={() => setSvgChecked(!svgChecked)}
                >
                    <motion.div
                        className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center 
              ${svgChecked ? 'bg-purple-500 border-purple-600' : 'bg-gray-100 border-gray-400'}`}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.svg
                            viewBox="0 0 24 24"
                            className="w-7 h-7 text-white"
                            initial={false}
                        >
                            <motion.path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: svgChecked ? 1 : 0,
                                    opacity: svgChecked ? 1 : 0,
                                }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.svg>
                    </motion.div>
                    <span className="mt-4 text-base font-medium text-gray-700">SVG Draw</span>
                </motion.div>

            </div>
        </div>
    )
}

export default CheckboxGallery