import React, { useState } from "react"
import Message from "./Message"
import TypingIndicator from "./TypingIndicator"

const Chat = ({ isTyping, handleTyping }) => {
    const [messages, setMessages] = useState([
        { sender: "user", text: "Hello!" },
        { sender: "bot", text: "Hi, how can I assist you today?" },
    ])
    const [newMessage, setNewMessage] = useState("")

    const sendMessage = (event) => {
        event.preventDefault()
        if (newMessage.trim()) {
            const userMessage = {
                sender: "user",
                text: newMessage,
            }
            setMessages([...messages, userMessage])
            setNewMessage("")
            handleTyping()
        }
    }

    return (
        <div className="h-fit p-6 bg-gray-100 dark:bg-gray-800 rounded-t-2xl shadow-lg overflow-y-auto">
            <div className="space-y-4">
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </div>

            {isTyping &&
                <div className="h-fit p-6 bg-gray-100 dark:bg-gray-800 rounded-t-2xl shadow-lg overflow-y-auto">
                    <TypingIndicator />
                </div>
            }

            <form onSubmit={sendMessage} className="h-[67vh] mt-4 flex items-end">
                <input
                    name="message"
                    type="text"
                    value={newMessage}
                    onChange={(event) => setNewMessage(event.target.value)}
                    placeholder="Type a message..."
                    className="w-full p-4 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="hidden"></button>
            </form>
        </div>
    )
}


export default Chat