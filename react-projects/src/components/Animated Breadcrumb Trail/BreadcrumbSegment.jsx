import React from "react";
import { motion } from "framer-motion"

const BreadcrumbSegment = ({ label, isActive, onClick, delay, isFirst }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.4, ease: "easeOut" }}
        >
            <button
                onClick={onClick}
                className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 focus:outline-none
          ${isActive
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-[1.05]"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.03]"
                    }`}
            >
                {!isFirst && (
                    <span
                        className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-blue-400"
                            }`}
                    />
                )}
                <span className="whitespace-nowrap text-sm font-medium">
                    {label}
                </span>
            </button>
        </motion.div>
    )
}

export default BreadcrumbSegment