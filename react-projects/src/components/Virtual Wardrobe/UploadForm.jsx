import React, { useState } from 'react'

const UploadForm = ({ onUpload }) => {
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (file && name && category) {
            onUpload({ name, category, file })
            setFile(null)
            setName('')
            setCategory('')
        }
    }

    return (
        <div className="border p-4 rounded shadow-lg mb-4">
            <h2 className="text-xl font-bold">Upload Your Outfit</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="file"
                    onChange={(event) => setFile(event.target.files[0])}
                    required
                    className="border p-2 my-2"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Outfit Name"
                    required
                    className="border p-2 my-2"
                />
                <input
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    placeholder="Category"
                    required
                    className="border p-2 my-2"
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Upload</button>
            </form>
        </div>
    )
}

export default UploadForm