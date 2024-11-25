import React, { useState } from 'react'

const SendCard = ({ cardData }) => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSendEmail = (event) => {
        console.log('Sending card to', email, message, cardData)
    }


    return (
        <div className="p-4 bg-white shadow-lg rounded-lg space-y-4">
            <h2 className="text-lg font-semibold text-darkBlue">Send Your Card</h2>
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Recipient's Email"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />

            <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Your message (optional)"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
            <button
                onClick={handleSendEmail}
                className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-darkBlue transition"
            >
                Send Card
            </button>
        </div>
    )
}

export default SendCard