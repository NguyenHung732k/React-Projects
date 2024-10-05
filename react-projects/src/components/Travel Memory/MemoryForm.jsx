import React, { useState } from 'react'

const MemoryForm = ({ addMemory }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    addMemory({ title, description, image })
    setTitle('')
    setDescription('')
    setImage('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Add a Memory</h2>
      <input
        type="text"
        placeholder="Memory Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="border p-2 w-full mb-4 rounded"
        required
      />
      <textarea
        placeholder="Memory Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="border p-2 w-full mb-4 rounded"
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        className="border p-2 w-full mb-4 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Memory</button>
    </form>
  )
}

export default MemoryForm