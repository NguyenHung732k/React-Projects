import React from "react"
import { motion } from "framer-motion"

const Message = ({ message }) => {
    const isUser = message.sender === "user"

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.3, bounce: 0.4 }}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`max-w-[60%] p-4 my-2 rounded-xl shadow-md ${isUser ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-600 text-black"}`}
            >
                {message.text}
            </div>
        </motion.div>
    )
}

export default Message