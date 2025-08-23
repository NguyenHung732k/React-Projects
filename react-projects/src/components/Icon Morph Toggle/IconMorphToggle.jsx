import React, { useState } from "react";
import { motion } from "framer-motion"

const paths = {
    menu: "M3 6h18M3 12h18M3 18h18",
    close: "M6 6l12 12M6 18L18 6",
}

const IconMorphToggle = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="w-40 group p-4 rounded-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 
                 hover:shadow-lg active:scale-95 transition-all duration-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileTap={{ scale: 0.9 }}
            >
                <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 text-gray-800 dark:text-gray-100"
                    initial={false}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                    <motion.path
                        initial={false}
                        animate={{ d: isOpen ? paths.close : paths.menu }}
                        transition={{
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
            </motion.button>
        </div>
    )
}

export default IconMorphToggle