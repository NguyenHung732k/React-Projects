import React, { useState } from "react"
import UploadMedia from "../components/UploadMedia"

const CreateMemory = ({ onCreateMemory }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [media, setMedia] = useState([])

    const handleMediaUpload = (files) => {
        setMedia(files)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const newMemory = {
            id: Date.now(),
            title,
            description,
            media,
        }
        onCreateMemory(newMemory)
        setTitle("")
        setDescription("")
        setMedia([])
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Create a New Memory</h2>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md mt-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-semibold">Description</label>
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md mt-2"
                        rows="4"
                        required
                    />
                </div>

                <UploadMedia onUpload={handleMediaUpload} />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg mt-6 w-full"
                >
                    Add Memory
                </button>
            </form>
        </div>
    )
}

export default CreateMemory