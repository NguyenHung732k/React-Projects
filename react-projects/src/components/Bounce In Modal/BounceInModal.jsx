import React, { useState, useEffect, useRef } from 'react';
import './BounceInModal.css'

const BounceModal = ({ isOpen, onClose, bounceIntensity = 0.6 }) => {
    const [isVisible, setIsVisible] = useState(isOpen)
    const closeButtonRef = useRef(null)

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => {
            onClose()
            closeButtonRef.current?.focus()
        }, 300)
    }

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
        }
    }, [isOpen])

    return (
        isVisible && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
                onClick={handleClose}
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <div
                    className={`bg-white rounded-xl p-8 w-96 max-w-lg animate-bounce-in transform transition-all ease-in-out shadow-lg`}
                    style={{
                        animationDuration: `${bounceIntensity}s`,
                    }}
                    onClick={(event) => event.stopPropagation()} // Prevent closing modal if modal content is clicked
                >
                    <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Welcome to the Modal!</h2>
                    <p className="text-lg mb-6 text-gray-600 text-center">
                        This modal has an interactive bounce effect! You can adjust the intensity for different experiences.
                    </p>
                    <div className="flex justify-center">
                        <button
                            ref={closeButtonRef}
                            onClick={handleClose}
                            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}

const BounceInModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 text-white w-80 py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition-all"
            >
                Open Modal
            </button>

            <BounceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bounceIntensity={0.6}
            />
        </div>
    )
}

export default BounceInModal