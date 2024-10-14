import React, { useEffect, useState } from 'react'
import Modal from './Modal'

const ModalResult = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape' && isOpen) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button
                className={isOpen ? "hidden" : "bg-blue-600 text-white px-6 py-3 z-10 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"}
                onClick={toggleModal}
            >
                Open Modal
            </button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                This is the modal content! You can place any content here, including forms, images, or more detailed information.
            </Modal>
        </div>
    )
}

export default ModalResult