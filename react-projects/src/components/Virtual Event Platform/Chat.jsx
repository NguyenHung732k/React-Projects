import React, { useState } from 'react'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')

    const sendMessage = () => {
        setMessages([...messages, input])
        setInput('')
    }

    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg space-y-4">
            <div className="space-y-2 max-h-80 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className="text-sm">{msg}</div>
                ))}
            </div>
            <div className="flex space-x-2 mt-4">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    className="flex-1 p-2 rounded-lg bg-gray-700 text-white"
                />
                <button onClick={sendMessage} className="bg-blue-600 text-white p-2 rounded-lg">Send</button>
            </div>
        </div>
    )
}

export default Chat