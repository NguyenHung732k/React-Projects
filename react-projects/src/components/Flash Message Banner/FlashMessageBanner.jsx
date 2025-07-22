import { useState } from 'react';
import FlashMessage from './FlashMessage'

const FlashMessageBanner = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2"
                onClick={() => setShow(true)}
            >
                Show Flash Message
            </button>

            {show && (
                <FlashMessage
                    message="Login successful! Welcome back 🎉"
                    type="success"
                    duration={4000}
                    onClose={() => setShow(false)}
                />
            )}
        </div>
    )
}

export default FlashMessageBanner