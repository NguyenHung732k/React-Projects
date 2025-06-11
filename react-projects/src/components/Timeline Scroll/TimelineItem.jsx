import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const TimelineItem = ({ item, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

    const isLeft = index % 2 === 0

    const animationVariants = {
        hidden: { opacity: 0, x: isLeft ? -80 : 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    }

    return (
        <div
            ref={ref}
            className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""
                } group`}
        >
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 z-20">
                <div className="relative w-full h-full flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 animate-ping opacity-75" />
                    <span className="relative w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 shadow-md" />
                </div>
            </div>

            {/* Content */}
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                className="relative w-full md:w-1/2 p-6 my-6 rounded-lg backdrop-blur-md bg-white/80 dark:bg-slate-800/60 shadow-xl border border-gray-200 dark:border-slate-600 z-10"
            >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{item.date}</p>
            </motion.div>
        </div>
    )
}

export default TimelineItem