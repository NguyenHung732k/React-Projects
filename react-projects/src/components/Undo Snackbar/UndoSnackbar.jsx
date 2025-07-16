import { useState } from 'react'
import Snackbar from './Snackbar'
import './UndoSnackbar.css'

const UndoSnackbar = () => {
    const [showSnackbar, setShowSnackbar] = useState(false)

    const handleDelete = () => {
        setShowSnackbar(true)
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
            <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
            >
                Delete Item
            </button>

            {showSnackbar && (
                <Snackbar
                    message="Item deleted"
                    duration={5000}
                    onUndo={() => {
                        console.log('Undo clicked')
                        setShowSnackbar(false)
                    }}
                    onFinish={() => {
                        console.log('Snackbar expired')
                        setShowSnackbar(false)
                    }}
                />
            )}
        </div>
    )
}

export default UndoSnackbar