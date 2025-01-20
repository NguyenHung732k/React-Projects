import React, { useState } from 'react'

const CraftForm = ({ addCraft }) => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [instructions, setInstructions] = useState('')
    const [difficulty, setDifficulty] = useState('easy')

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!image) {
            alert('Please select an image')
            return
        }

        const newCraft = {
            title,
            image,
            instructions,
            difficulty,
        }
        addCraft(newCraft)
        setTitle('')
        setImage(null)
        setImagePreview(null)
        setInstructions('')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-lg font-medium" htmlFor="title">Craft Title</label>
                <input
                    id="title"
                    className="w-full mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    placeholder="Craft Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>

            <div>
                <label className="block text-lg font-medium" htmlFor="image">Upload Image</label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="w-full mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    onChange={handleImageChange}
                    required
                />
                {imagePreview && (
                    <div className="mt-4">
                        <img src={imagePreview} alt="Preview" className="w-48 h-48 object-cover rounded-lg" />
                    </div>
                )}
            </div>

            <div>
                <label className="block text-lg font-medium" htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    className="w-full mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Craft Instructions"
                    value={instructions}
                    onChange={(event) => setInstructions(event.target.value)}
                    required
                ></textarea>
            </div>

            <div>
                <label className="block text-lg font-medium" htmlFor="difficulty">Difficulty Level</label>
                <select
                    id="difficulty"
                    className="w-full mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    value={difficulty}
                    onChange={(event) => setDifficulty(event.target.value)}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
            >
                Add Craft Idea
            </button>
        </form>
    )
}

export default CraftForm