import React from 'react'

const Modal = ({element, onClose }) => {

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl text-black font-bold dark:text-white">{element.name}</h2>
                    <button
                        className="text-xl font-bold text-black dark:text-white"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                <div className="mb-4">
                    <div className="text-xl text-black dark:text-white">Symbol: {element.symbol}</div>
                    <div className="text-black dark:text-white dark:text-white">Atomic Number: {element.number}</div>
                    <div className="text-black dark:text-white">Atomic Weight: {element.atomicWeight}</div>
                    <div className="text-black dark:text-white">Category: {element.type}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal