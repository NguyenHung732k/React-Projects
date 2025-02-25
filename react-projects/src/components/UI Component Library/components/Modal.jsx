import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'unset' // Restore scrolling when modal is closed
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            className={`${isOpen ? "opacity-1" : "opacity-0"} fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-1 transition-opacity duration-300 ease-in-out`}
        >
            <div className="bg-white p-6 rounded-lg w-96 transform transition-all duration-300 animate-modal-in">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    x
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal