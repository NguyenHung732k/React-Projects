import React from 'react'

const TextInput = ({ text, setText }) => {
    return (
        <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add your message..."
            className="mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}

export default TextInput